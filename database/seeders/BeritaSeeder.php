<?php

namespace Database\Seeders;

use App\Models\Berita;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BeritaSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'kategori_id' => 1,
                'judul'       => "Buka Bersama Puasa Sunah Nisfu Sya'ban Ratusan Jamaah Al-Mukarram",
                'ringkasan'   => "Ratusan jamaah Masjid Agung Al-Mukarram menghadiri acara buka puasa bersama dalam rangka memperingati malam Nisfu Sya'ban 1447 H.",
                'isi'         => "<p>Ratusan jamaah Masjid Agung Al-Mukarram menghadiri acara buka puasa bersama dalam rangka memperingati malam Nisfu Sya'ban 1447 H. Kegiatan ini diisi dengan tausiyah, doa bersama, dan makan bersama.</p><p>Acara dimulai setelah shalat Ashar dan berlangsung meriah hingga larut malam.</p>",
                'gambar'      => 'sampel-image.jpg',
                'views'       => 320,
                'published_at' => '2026-02-28 17:00:00',
            ],
            [
                'kategori_id' => 3,
                'judul'       => "Kajian Rutin Malam Selasa Bersama Majelis Taklim Al-Mukarram",
                'ringkasan'   => 'Kajian rutin mingguan Majelis Taklim Al-Mukarram kembali digelar dengan antusiasme jamaah yang tinggi.',
                'isi'         => '<p>Kajian rutin mingguan Majelis Taklim Al-Mukarram kembali digelar setiap Malam Selasa setelah shalat Isya. Pemateri kali ini adalah KH. Hasan Basri yang membawakan tema Keutamaan Menuntut Ilmu.</p>',
                'gambar'      => 'sampel-image.jpg',
                'views'       => 180,
                'published_at' => '2026-02-25 20:00:00',
            ],
            [
                'kategori_id' => 3,
                'judul'       => "Khutbah Jumat: Membangun Generasi Qur'ani di Era Digital",
                'ringkasan'   => "Khutbah Jumat pekan ini mengangkat tema membangun generasi yang mencintai Al-Qur'an di tengah derasnya arus digitalisasi.",
                'isi'         => "<p>Khatib Jumat pekan ini, Ust. H. Ahmad Zainuddin, Lc., menyampaikan khutbah bertema <em>Membangun Generasi Qur'ani di Era Digital</em>. Beliau mengajak para jamaah untuk memperbanyak tilawah dan memperkenalkan Al-Qur'an kepada generasi muda sejak dini.</p>",
                'gambar'      => 'sampel-image.jpg',
                'views'       => 210,
                'published_at' => '2026-02-21 12:00:00',
            ],
            [
                'kategori_id' => 4,
                'judul'       => 'Kerja Bakti Akbar Masjid Agung Al-Mukarram Sambut Ramadhan 1447 H',
                'ringkasan'   => 'Pengurus dan jamaah bersama warga sekitar bergotong-royong membersihkan seluruh area masjid menyambut bulan suci Ramadhan.',
                'isi'         => '<p>Dalam rangka menyambut bulan suci Ramadhan 1447 H, pengurus Masjid Agung Al-Mukarram menggelar kegiatan Kerja Bakti Akbar. Seluruh area masjid dibersihkan mulai dari lantai, karpet, kamar mandi, hingga halaman luar.</p>',
                'gambar'      => 'sampel-image.jpg',
                'views'       => 145,
                'published_at' => '2026-02-15 08:00:00',
            ],
            [
                'kategori_id' => 1,
                'judul'       => 'Silaturahmi Ulama Se-Kalimantan Tengah di Masjid Agung Al-Mukarram',
                'ringkasan'   => 'Masjid Agung Al-Mukarram menjadi tuan rumah pertemuan tahunan para ulama se-Kalimantan Tengah.',
                'isi'         => '<p>Masjid Agung Al-Mukarram menjadi tuan rumah pertemuan tahunan para ulama dan tokoh agama se-Kalimantan Tengah. Pertemuan membahas agenda dakwah dan kemajuan ukhuwah islamiyah di wilayah Kalimantan Tengah.</p>',
                'gambar'      => 'sampel-image.jpg',
                'views'       => 275,
                'published_at' => '2026-01-10 09:00:00',
            ],
        ];

        foreach ($items as $item) {
            Berita::create(array_merge($item, [
                'slug'    => Str::slug($item['judul']),
                'user_id' => 2,
            ]));
        }
    }
}
