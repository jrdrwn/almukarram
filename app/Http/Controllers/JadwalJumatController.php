<?php

namespace App\Http\Controllers;

use App\Models\JadwalJumat;
use Illuminate\Support\Carbon;
use Inertia\Inertia;
use Inertia\Response;

class JadwalJumatController extends Controller
{
    public function __invoke(): Response
    {
        $today = Carbon::today();

        return Inertia::render('jadwal-jumat', [
            'jadwalMingguIni' => fn () => JadwalJumat::query()
                ->where('tanggal', '>=', $today)
                ->orderBy('tanggal')
                ->first(['tanggal', 'waktu', 'khatib', 'imam', 'muadzin', 'bilal']),
            'jadwalSelanjutnya' => fn () => JadwalJumat::query()
                ->where('tanggal', '>', $today)
                ->orderBy('tanggal')
                ->take(3)
                ->get(['tanggal', 'waktu', 'khatib', 'imam', 'muadzin', 'bilal']),
        ]);
    }
}
