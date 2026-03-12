<?php

namespace Database\Seeders;

use App\Models\Banner;
use Illuminate\Database\Seeder;

class BannerSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'judul' => 'Syiar Ramadhan di Jantung Kota Kapuas',
                'subjudul' => 'Dari ifthar jamaah, qiyamullail, hingga layanan zakat, seluruh agenda utama Ramadhan terpusat di Masjid Agung Al-Mukarram Amanah.',
                'gambar' => 'banner/banner-panorama.png',
                'tautan' => '/program-masjid',
                'urutan' => 1,
                'is_active' => true,
                'buka_tab_baru' => false,
                'mulai_tayang' => '2026-03-01',
                'selesai_tayang' => '2026-04-15',
            ],
            [
                'judul' => 'Majelis Ilmu Sepanjang Pekan',
                'subjudul' => 'Lihat jadwal kajian subuh, ba\'da maghrib, dan kelas tematik yang disusun untuk jamaah dewasa hingga remaja.',
                'gambar' => 'banner/banner-kajian.jpg',
                'tautan' => '/jadwal-pengajian',
                'urutan' => 2,
                'is_active' => true,
                'buka_tab_baru' => false,
                'mulai_tayang' => '2026-03-01',
                'selesai_tayang' => null,
            ],
            [
                'judul' => 'ZISWAF yang Tertib dan Transparan',
                'subjudul' => 'Salurkan zakat, infak, dan sedekah melalui kanal resmi masjid dengan alur yang cepat dan pelaporan yang jelas.',
                'gambar' => 'banner/banner-zis.png',
                'tautan' => '/zis',
                'urutan' => 3,
                'is_active' => true,
                'buka_tab_baru' => false,
                'mulai_tayang' => '2026-03-01',
                'selesai_tayang' => null,
            ],
            [
                'judul' => 'Pengurus yang Mudah Dikenali',
                'subjudul' => 'Kenali struktur kepengurusan dan bidang pelayanan masjid agar koordinasi jamaah menjadi lebih mudah.',
                'gambar' => 'banner/banner-pengurus.png',
                'tautan' => '/struktur-organisasi',
                'urutan' => 4,
                'is_active' => true,
                'buka_tab_baru' => false,
                'mulai_tayang' => '2026-03-01',
                'selesai_tayang' => null,
            ],
            [
                'judul' => 'Aspirasi Jamaah Selalu Terbuka',
                'subjudul' => 'Sampaikan pertanyaan, saran, atau pengaduan untuk membantu kami menjaga layanan dan fasilitas tetap baik.',
                'gambar' => 'banner/banner-aspirasi.png',
                'tautan' => '/kontak',
                'urutan' => 5,
                'is_active' => true,
                'buka_tab_baru' => false,
                'mulai_tayang' => '2026-03-01',
                'selesai_tayang' => null,
            ],
        ];

        foreach ($items as $item) {
            Banner::updateOrCreate(
                ['judul' => $item['judul']],
                $item,
            );
        }
    }
}
