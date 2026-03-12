<?php

namespace App\Http\Controllers;

use App\Models\Pengurus;
use Inertia\Inertia;
use Inertia\Response;

class StrukturOrganisasiController extends Controller
{
    public function __invoke(): Response
    {
        $all = Pengurus::where('is_active', true)
            ->orderBy('urutan')
            ->get();

        $mapAnggota = fn (Pengurus $p): array => [
            'nama'    => $p->nama,
            'jabatan' => $p->jabatan,
            'fotoUrl' => $p->foto
                ? '/storage/' . $p->foto
                : null,
        ];

        // ── Pimpinan Inti ────────────────────────────────────────────────────
        $pimpinanInti = $all->where('kelompok', 'pimpinan_inti');

        // ── Bidang-Bidang ────────────────────────────────────────────────────
        $bidangData = [];

        foreach (['riayah', 'idarah', 'imarah'] as $b) {
            $group = $all->where('kelompok', "bidang_{$b}");

            if ($group->isEmpty()) {
                continue;
            }

            $ketuaBidang  = $group->firstWhere('peran', 'ketua_bidang');
            $sekretBidang = $group->firstWhere('peran', 'sekretaris_bidang');
            $anggota      = $group->where('peran', 'anggota')->values();

            $bidangData[] = [
                'nama'         => match ($b) {
                    'riayah' => 'Bidang Riayah',
                    'idarah' => 'Bidang Idarah',
                    'imarah' => 'Bidang Imarah',
                },
                'warnaKonteks' => $b,
                'ketua'        => $ketuaBidang  ? $mapAnggota($ketuaBidang)  : null,
                'sekret'       => $sekretBidang ? $mapAnggota($sekretBidang) : null,
                'anggota'      => $anggota->map($mapAnggota)->all(),
            ];
        }

        // ── Sekretariat ──────────────────────────────────────────────────────
        $sekretariatGroup = $all->where('kelompok', 'sekretariat');
        $kepala           = $sekretariatGroup->firstWhere('peran', 'kepala_sekretariat');
        $anggotaSekret    = $sekretariatGroup->where('peran', 'anggota')->values();

        return Inertia::render('struktur-organisasi', [
            'pimpinanInti' => [
                'pimpinanTop' => $pimpinanInti
                    ->where('peran', 'ketua_umum')
                    ->values()
                    ->map($mapAnggota)
                    ->all(),

                'ketua' => $pimpinanInti
                    ->where('peran', 'ketua')
                    ->values()
                    ->map($mapAnggota)
                    ->all(),

                'sekbend' => $pimpinanInti
                    ->whereIn('peran', ['sekretaris_umum', 'sekretaris', 'bendahara'])
                    ->values()
                    ->map($mapAnggota)
                    ->all(),
            ],

            'bidang'       => $bidangData,

            'sekretariat'  => [
                'kepala'  => $kepala ? $mapAnggota($kepala) : null,
                'anggota' => $anggotaSekret->map($mapAnggota)->all(),
            ],
        ]);
    }
}
