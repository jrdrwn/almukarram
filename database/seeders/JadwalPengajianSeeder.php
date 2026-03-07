<?php

namespace Database\Seeders;

use App\Models\JadwalPengajian;
use Illuminate\Database\Seeder;

class JadwalPengajianSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            ['hari' => 'Senin',  'tanggal' => '2026-03-16', 'waktu' => "Ba'da Maghrib",   'judul' => 'Kajian Fiqih Ibadah Praktis',       'pemateri' => 'Ust. M. Abdullah, M.Ag',       'tipe' => 'Umum',             'status' => 'Akan Datang'],
            ['hari' => 'Rabu',   'tanggal' => '2026-03-18', 'waktu' => "Ba'da Subuh",     'judul' => "Tafsir Al-Qur'an (Jalalain)",        'pemateri' => 'KH. Hasan Basri',              'tipe' => 'Umum',             'status' => 'Akan Datang'],
            ['hari' => 'Kamis',  'tanggal' => '2026-03-19', 'waktu' => '16:00 - Selesai', 'judul' => 'Kajian Kemuslimahan & Sirah',        'pemateri' => 'Ustadzah Hj. Fatimah',         'tipe' => 'Khusus Muslimah',  'status' => 'Akan Datang'],
            ['hari' => 'Ahad',   'tanggal' => '2026-03-22', 'waktu' => "Ba'da Subuh",     'judul' => 'Kajian Tematik & Tanya Jawab',       'pemateri' => 'Berbagai Pemateri (Terjadwal)','tipe' => 'Umum',             'status' => 'Akan Datang'],
            ['hari' => 'Senin',  'tanggal' => '2026-03-09', 'waktu' => "Ba'da Maghrib",   'judul' => 'Kajian Fiqih Ibadah Praktis',        'pemateri' => 'Ust. M. Abdullah, M.Ag',       'tipe' => 'Umum',             'status' => 'Selesai'],
            ['hari' => 'Rabu',   'tanggal' => '2026-03-11', 'waktu' => "Ba'da Subuh",     'judul' => "Tafsir Al-Qur'an (Jalalain)",        'pemateri' => 'KH. Hasan Basri',              'tipe' => 'Umum',             'status' => 'Selesai'],
        ];

        foreach ($items as $item) {
            JadwalPengajian::create(array_merge($item, ['user_id' => 1]));
        }
    }
}
