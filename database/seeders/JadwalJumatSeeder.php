<?php

namespace Database\Seeders;

use App\Models\JadwalJumat;
use Illuminate\Database\Seeder;

class JadwalJumatSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            ['tanggal' => '2026-03-13', 'waktu' => '11:45 WIB', 'khatib' => 'Ust. H. Ahmad Zainuddin, Lc',    'imam' => 'Ustadz M. Syukri, M.Pd',  'muadzin' => "Ust. Akhmad Rifa'i",   'bilal' => 'H. Rahmat Hidayat'],
            ['tanggal' => '2026-03-20', 'waktu' => '11:45 WIB', 'khatib' => 'KH. Muhammad Yusuf, S.Ag',       'imam' => 'H. Rahmat Hidayat',        'muadzin' => "Ust. Akhmad Rifa'i",   'bilal' => 'Abdul Rahman'],
            ['tanggal' => '2026-03-27', 'waktu' => '11:45 WIB', 'khatib' => 'Habib Ali Zainal Abidin',        'imam' => 'Ustadz M. Syukri, M.Pd',  'muadzin' => 'H. Rahmat Hidayat',    'bilal' => "Ust. Akhmad Rifa'i"],
            ['tanggal' => '2026-04-03', 'waktu' => '11:45 WIB', 'khatib' => 'Ust. H. Hamidhan, S.Ag., MA',   'imam' => 'H. Rahmat Hidayat',        'muadzin' => 'Abdul Rahman',         'bilal' => 'Ustadz M. Syukri, M.Pd'],
        ];

        foreach ($items as $item) {
            JadwalJumat::create(array_merge($item, ['user_id' => 1]));
        }
    }
}
