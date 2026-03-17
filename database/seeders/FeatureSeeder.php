<?php

namespace Database\Seeders;

use App\Models\Feature;
use Illuminate\Database\Seeder;

class FeatureSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'title' => 'Ibadah',
                'description' => 'Fungsi utama Masjid adalah terlaksananya ibadah Shalat berjamaah 5 waktu. Ibadah lain terlaksana dengan dikoordinir oleh bidang berwenang.',
                'icon' => '📖',
                                'href' => '/program-masjid',
                'urutan' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Pendidikan',
                'description' => "Masjid juga menyelenggarakan aspek pendidikan. Dari belajar membaca Al-Qur'an untuk anak-anak hingga kajian-kajian Islam untuk masyarakat umum.",
                'icon' => '🎓',
                                'href' => '/program-pendidikan',
                'urutan' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'Keuangan',
                'description' => 'Zakat, infaq dan shadaqah dikelola oleh profesional berbasis digital dengan asas transparansi.',
                'icon' => '💰',
                                'href' => '/zis',
                'urutan' => 3,
                'is_active' => true,
            ],
            [
                'title' => 'Event',
                'description' => 'Setiap event/kegiatan terselenggara dengan perencanaan yang matang dan koordinasi yang baik.',
                'icon' => '📅',
                                'href' => '/jadwal-pengajian',
                'urutan' => 4,
                'is_active' => true,
            ],
            [
                'title' => 'Konsultasi (Ibadah/Hukum)',
                'description' => 'Layanan tanya jawab dan bimbingan terkait masalah ibadah, hukum Islam, serta problematika kehidupan.',
                'icon' => '💬',
                                'href' => '/layanan-konsultasi',
                'urutan' => 5,
                'is_active' => true,
            ],
            [
                'title' => 'Pengaduan Jamaah',
                'description' => 'Layanan aduan dan aspirasi bagi jamaah untuk perbaikan kualitas layanan dan fasilitas masjid.',
                'icon' => '📣',
                                'href' => '/kontak',
                'urutan' => 6,
                'is_active' => true,
            ],
        ];

        foreach ($items as $item) {
            Feature::updateOrCreate(
                ['title' => $item['title']],
                $item,
            );
        }
    }
}
