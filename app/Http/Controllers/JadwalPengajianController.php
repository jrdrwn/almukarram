<?php

namespace App\Http\Controllers;

use App\Models\JadwalPengajian;
use Inertia\Inertia;
use Inertia\Response;

class JadwalPengajianController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('jadwal-pengajian', [
            'jadwalPengajian' => fn () => JadwalPengajian::query()
                ->orderByRaw("FIELD(status, 'Akan Datang', 'Berlangsung', 'Selesai')")
                ->orderByDesc('tanggal')
                ->get(['id', 'hari', 'tanggal', 'waktu', 'judul', 'pemateri', 'tipe', 'status'])
                ->map(fn ($j) => [
                    'day' => $j->hari,
                    'date' => $j->tanggal?->translatedFormat('d F Y'),
                    'time' => $j->waktu,
                    'title' => $j->judul,
                    'speaker' => $j->pemateri,
                    'type' => $j->tipe,
                    'status' => $j->status,
                ]),
        ]);
    }
}
