<?php

namespace Database\Seeders;

use App\Models\Dokumen;
use Illuminate\Database\Seeder;

class DokumenSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            ['judul' => 'Laporan Keuangan Masjid Tahun 2025',           'jenis' => 'PDF',   'kategori' => 'Keuangan',        'tahun' => '2025', 'file_url' => 'dokumen/laporan-keuangan-2025.pdf'],
            ['judul' => 'Anggaran Dasar & Anggaran Rumah Tangga',       'jenis' => 'PDF',   'kategori' => 'Organisasi',      'tahun' => '2024', 'file_url' => 'dokumen/ad-art.pdf'],
            ['judul' => 'Program Kerja Pengurus 2025-2030',             'jenis' => 'PDF',   'kategori' => 'Program Kerja',   'tahun' => '2025', 'file_url' => 'dokumen/proker-2025-2030.pdf'],
            ['judul' => 'Formulir Pendaftaran Kajian Rutin',            'jenis' => 'Word',  'kategori' => 'Formulir',        'tahun' => '2026', 'file_url' => 'dokumen/form-kajian-rutin.docx'],
            ['judul' => 'Jadwal Imam & Muadzin Ramadhan 1447 H',        'jenis' => 'PDF',   'kategori' => 'Jadwal',          'tahun' => '2026', 'file_url' => 'dokumen/jadwal-imam-ramadhan-1447.pdf'],
            ['judul' => 'Laporan Panitia Qurban Idul Adha 1446 H',     'jenis' => 'PDF',   'kategori' => 'Laporan',         'tahun' => '2025', 'file_url' => 'dokumen/laporan-qurban-1446.pdf'],
        ];

        foreach ($items as $item) {
            Dokumen::create(array_merge($item, ['user_id' => 1]));
        }
    }
}
