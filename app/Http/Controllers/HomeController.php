<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Berita;
use App\Models\HeroSetting;
use App\Models\JadwalJumat;
use App\Models\JadwalPengajian;
use App\Models\JadwalSholat;
use App\Models\Opini;
use App\Models\Pengumuman;
use App\Models\Pengurus;
use App\Models\Vidio;
use Illuminate\Support\Carbon;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(\App\Models\KontakSitus $siteContact): Response
    {
        $today = Carbon::today();

        return Inertia::render('home', [
            'siteContact' => $siteContact,
            'heroSetting' => fn () => HeroSetting::query()->first([
                'hero_media_type',
                'hero_image',
                'hero_video',
                'quick_access_items',
            ]),
            'agendaTerdekat' => fn () => $this->resolveRandomAgenda($today),
            'ketuaUmum' => function () {
                $ketua = Pengurus::query()
                    ->where('is_active', true)
                    ->where('kelompok', 'pimpinan_inti')
                    ->where(function ($q) {
                        $q->where('jabatan', 'like', '%Ketua Umum%')
                          ->orWhere('peran', 'ketua_umum');
                    })
                    ->first(['nama', 'jabatan', 'foto']);

                if (!$ketua) {
                    return null;
                }

                return [
                    'nama' => $ketua->nama,
                    'jabatan' => $ketua->jabatan,
                    'fotoUrl' => $ketua->foto ? '/storage/' . $ketua->foto : null,
                ];
            },
            'featuredPengurus' => fn () => Pengurus::query()
                ->where('is_active', true)
                ->where('kelompok', 'pimpinan_inti')
                ->orderBy('urutan')
                ->take(3)
                ->get(['nama', 'jabatan', 'foto'])
                ->map(fn ($p) => [
                    'nama' => $p->nama,
                    'jabatan' => $p->jabatan,
                    'fotoUrl' => $p->foto ? '/storage/' . $p->foto : null,
                ]),

            'banners' => fn () => Banner::query()
                ->published($today)
                ->orderBy('urutan')
                ->orderByDesc('created_at')
                ->get([
                    'id',
                    'judul',
                    'subjudul',
                    'gambar',
                    'tautan',
                    'buka_tab_baru',
                ]),

            'beritaUtama' => fn () => Berita::query()
                ->where('status', 'published')
                ->with('user:id,name', 'kategori:id,nama')
                ->orderByDesc('published_at')
                ->first(['id', 'slug', 'judul', 'ringkasan', 'gambar', 'views', 'published_at', 'user_id', 'kategori_id']),

            'beritaTerbaru' => fn () => Berita::query()
                ->where('status', 'published')
                ->with('kategori:id,nama')
                ->orderByDesc('published_at')
                ->skip(1)
                ->take(3)
                ->get(['id', 'slug', 'judul', 'gambar', 'published_at', 'kategori_id']),

            'videos' => fn () => Vidio::query()
                ->where('status', 'published')
                ->with('kategori:id,nama')
                ->orderByDesc('published_at')
                ->take(6)
                ->get(['id', 'judul', 'youtube_id', 'kategori_id']),

            'opiniTerbaru' => fn () => Opini::query()
                ->where('status', 'published')
                ->with('user:id,name', 'kategori:id,nama')
                ->orderByDesc('published_at')
                ->take(3)
                ->get(['id', 'slug', 'judul', 'ringkasan', 'waktu_baca', 'published_at', 'user_id', 'kategori_id']),

            'jadwalJumat' => fn () => JadwalJumat::query()
                ->where('tanggal', '>=', $today)
                ->orderBy('tanggal')
                ->first(['tanggal', 'waktu', 'khatib', 'imam', 'muadzin', 'bilal']),

            'jadwalPengajian' => fn () => JadwalPengajian::query()
                ->whereIn('status', ['Akan Datang', 'Berlangsung'])
                ->orderByRaw(
                    "CASE hari
                        WHEN 'Senin' THEN 1
                        WHEN 'Selasa' THEN 2
                        WHEN 'Rabu' THEN 3
                        WHEN 'Kamis' THEN 4
                        WHEN 'Jumat' THEN 5
                        WHEN 'Sabtu' THEN 6
                        WHEN 'Ahad' THEN 7
                        ELSE 8
                    END"
                )
                ->take(4)
                ->get(['id', 'hari', 'tanggal', 'waktu', 'judul', 'pemateri', 'tipe']),
        ]);
    }

    /**
     * Build one random agenda source shown in the hero section on page entry.
     */
    protected function resolveRandomAgenda(Carbon $today): ?array
    {
        $candidates = [];

        $pengumuman = Pengumuman::query()
            ->whereDate('tanggal_mulai', '>=', $today)
            ->orderBy('tanggal_mulai')
            ->first(['judul', 'tanggal_mulai']);

        if ($pengumuman) {
            $candidates[] = [
                'judul' => $pengumuman->judul,
                'tanggal_mulai' => optional($pengumuman->tanggal_mulai)?->toDateString(),
                'sumber' => 'pengumuman',
            ];
        }

        $jadwalJumat = JadwalJumat::query()
            ->whereDate('tanggal', '>=', $today)
            ->orderBy('tanggal')
            ->first(['tanggal', 'khatib']);

        if ($jadwalJumat) {
            $candidates[] = [
                'judul' => $jadwalJumat->khatib
                    ? 'Jadwal Jumat - Khatib: ' . $jadwalJumat->khatib
                    : 'Jadwal Salat Jumat',
                'tanggal_mulai' => optional($jadwalJumat->tanggal)?->toDateString(),
                'sumber' => 'jumat',
            ];
        }

        $jadwalSholat = JadwalSholat::query()
            ->whereDate('tanggal', '>=', $today)
            ->orderBy('tanggal')
            ->first(['tanggal']);

        if ($jadwalSholat) {
            $candidates[] = [
                'judul' => 'Jadwal Salat Harian',
                'tanggal_mulai' => optional($jadwalSholat->tanggal)?->toDateString(),
                'sumber' => 'sholat',
            ];
        }

        $jadwalPengajian = JadwalPengajian::query()
            ->whereIn('status', ['Akan Datang', 'Berlangsung'])
            ->whereDate('tanggal', '>=', $today)
            ->orderBy('tanggal')
            ->first(['judul', 'tanggal']);

        if ($jadwalPengajian) {
            $candidates[] = [
                'judul' => $jadwalPengajian->judul,
                'tanggal_mulai' => optional($jadwalPengajian->tanggal)?->toDateString(),
                'sumber' => 'pengajian',
            ];
        }

        if (empty($candidates)) {
            return null;
        }

        return $candidates[array_rand($candidates)];
    }
}
