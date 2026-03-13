<?php

namespace Database\Seeders;

use App\Models\Banner;
use Illuminate\Database\Seeder;

class BannerSeeder extends Seeder
{
    public function run(): void
    {
        // Normalize legacy ratio values
        Banner::where('ratio', '9:16')->update(['ratio' => '16:9']);
        Banner::where('ratio', '3:5')->update(['ratio' => '5:3']);

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
                'ratio' => '4:1',
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
                'ratio' => '4:5',
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
                'ratio' => '16:9',
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
                'ratio' => '5:3',
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
                'ratio' => '4:1',
            ],
            [
                'judul' => 'Kajian Dhuha & Tahajud',
                'subjudul' => 'Ikuti kajian pagi dan malam yang dibawakan oleh penceramah tamu dan ustadz setempat.',
                'gambar' => 'banner/banner-kajian-dhuha.png',
                'tautan' => '/kajian',
                'urutan' => 6,
                'is_active' => true,
                'buka_tab_baru' => false,
                'mulai_tayang' => '2026-03-05',
                'selesai_tayang' => null,
                'ratio' => '4:5',
            ],
            [
                'judul' => 'Video Dokumentasi Kegiatan',
                'subjudul' => 'Tonton rekaman kegiatan masjid dan acara dakwah terbaru di kanal resmi kami.',
                'gambar' => 'banner/banner-video.png',
                'tautan' => '/video',
                'urutan' => 7,
                'is_active' => true,
                'buka_tab_baru' => false,
                'mulai_tayang' => '2026-03-10',
                'selesai_tayang' => null,
                'ratio' => '16:9',
            ],
            [
                'judul' => 'Infografis Program Bulanan',
                'subjudul' => 'Cek agenda dan program masjid bulan ini dalam format infografis yang mudah dibaca.',
                'gambar' => 'banner/banner-infografis.png',
                'tautan' => '/program-bulanan',
                'urutan' => 8,
                'is_active' => true,
                'buka_tab_baru' => false,
                'mulai_tayang' => '2026-03-10',
                'selesai_tayang' => null,
                'ratio' => '5:3',
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
