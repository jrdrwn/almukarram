<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\JadwalJumat;
use App\Models\JadwalPengajian;
use App\Models\Opini;
use App\Models\Pengumuman;
use App\Models\Vidio;
use Illuminate\Support\Carbon;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(): Response
    {
        $today = Carbon::today();

        return Inertia::render('home', [
            'agendaTerdekat' => fn () => Pengumuman::query()
                ->where('tanggal_mulai', '>=', $today)
                ->orderBy('tanggal_mulai')
                ->first(['judul', 'tanggal_mulai']),

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
                ->orderByRaw("FIELD(hari, 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Ahad')")
                ->take(4)
                ->get(['id', 'hari', 'tanggal', 'waktu', 'judul', 'pemateri', 'tipe']),
        ]);
    }
}
