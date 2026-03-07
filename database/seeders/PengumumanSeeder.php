<?php

namespace Database\Seeders;

use App\Models\Pengumuman;
use Illuminate\Database\Seeder;

class PengumumanSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'judul'          => 'Jadwal Imsakiyah Ramadhan 1447 H',
                'isi'            => '<p>Berikut jadwal imsakiyah Ramadhan 1447 H untuk wilayah Kapuas dan sekitarnya. Mohon untuk memperhatikan waktu imsak dan berbuka puasa sesuai jadwal yang telah ditetapkan.</p>',
                'tanggal_mulai'  => '2026-03-01',
                'tanggal_selesai'=> '2026-03-31',
            ],
            [
                'judul'          => 'Pendaftaran I\'tikaf Ramadhan 1447 H',
                'isi'            => '<p>Masjid Agung Al-Mukarram membuka pendaftaran i\'tikaf pada 10 malam terakhir Ramadhan 1447 H. Pendaftaran dibuka mulai 1 Maret 2026.</p>',
                'tanggal_mulai'  => '2026-03-01',
                'tanggal_selesai'=> '2026-03-20',
            ],
            [
                'judul'          => 'Panitia Zakat Fitrah Masjid Agung Al-Mukarram 1447 H',
                'isi'            => '<p>Masjid Agung Al-Mukarram menerima zakat fitrah mulai 1 Ramadhan hingga sebelum shalat Idul Fitri. Hubungi panitia di kantor sekretariat masjid.</p>',
                'tanggal_mulai'  => '2026-03-01',
                'tanggal_selesai'=> '2026-03-30',
            ],
        ];

        foreach ($items as $item) {
            Pengumuman::create(array_merge($item, ['user_id' => 1]));
        }
    }
}
