<?php

namespace Database\Seeders;

use App\Models\KontakSitus;
use Illuminate\Database\Seeder;

class KontakSitusSeeder extends Seeder
{
    public function run(): void
    {
        KontakSitus::updateOrCreate([], [
            'address' => 'Jl. Tambun Bungai, Komplek Islamic Center',
            'phone' => '(0513) 24246',
            'whatsapp' => '081348521955',
            'email' => 'masjid.almukarram132@gmail.com',
            'operational_hours' => [
                ['key' => 'Senin – Jumat', 'value' => '08.00 – 16.00 WIB'],
                ['key' => 'Sabtu', 'value' => '08.00 – 12.00 WIB'],
            ],
            'instagram' => 'https://www.instagram.com/masjidagung.almukarram_amanah/',
            'facebook' => 'https://www.facebook.com/profile.php?id=61576298510239',
            'youtube' => 'https://www.youtube.com/@MasjidAgung-AlMukarramAmanah',
            'location' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.9!2d114.3866271!3d-3.0059342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de46f027f225e35:0x3634ee7d00a14f59!2sMasjid+Agung+Al+Mukarram+Amanah!5e0!3m2!1sid!2sid!4v1740000000000!5m2!1sid!2sid',
        ]);
    }
}
