<?php

namespace Database\Seeders;

use App\Models\HeroSetting;
use Illuminate\Database\Seeder;

class HeroSettingSeeder extends Seeder
{
    public function run(): void
    {
        $heroSetting = HeroSetting::query()->first();

        if ($heroSetting) {
            // Jika sudah ada data, HANYA update quick_access_items jika masih null
            if ($heroSetting->quick_access_items === null) {
                $heroSetting->update([
                    'quick_access_items' => $this->getDefaultQuickAccessItems(),
                ]);
                $this->command->info('✅ Quick Access Items ditambahkan ke Hero Setting existing');
            } else {
                $this->command->warn('⚠️  Quick Access Items sudah ada, skip update');
            }
        } else {
            // Jika belum ada, buat baru dengan data lengkap
            HeroSetting::create([
                'hero_media_type' => 'video',
                'hero_video' => 'hero/vidio.mp4',
                'hero_image' => null,
                'quick_access_items' => $this->getDefaultQuickAccessItems(),
            ]);
            $this->command->info('✅ Hero Setting baru dibuat dengan Quick Access Items');
        }
    }

    private function getDefaultQuickAccessItems(): array
    {
        return [
            [
                'title' => 'Alquran',
                'subtitle' => 'Digital',
                'href' => '/alquran-digital',
                'icon' => 'book',
                'color' => '#10b981',
                'badge_type' => 'check',
                'description' => 'Baca Al-Qur\'an dengan terjemahan dan tafsir lengkap',
            ],
            [
                'title' => 'Hitung',
                'subtitle' => 'Waris',
                'href' => '/kalkulator-waris',
                'icon' => 'calculator',
                'color' => '#f59e0b',
                'badge_type' => 'new',
                'description' => 'Kalkulator pembagian warisan menurut syariat Islam',
            ],
            [
                'title' => 'Media',
                'subtitle' => 'Sosial',
                'href' => '/media-sosial',
                'icon' => 'users',
                'color' => '#3b82f6',
                'badge_type' => 'external',
                'description' => 'Ikuti kami di berbagai platform media sosial',
            ],
        ];
    }
}
