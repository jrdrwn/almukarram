<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            KategoriBeritaSeeder::class,
            BeritaSeeder::class,
            OpiniSeeder::class,
            PengumumanSeeder::class,
            VidioSeeder::class,
            AlbumSeeder::class,
            BuletinSeeder::class,
            DokumenSeeder::class,
            JadwalJumatSeeder::class,
            JadwalPengajianSeeder::class,
            KotakMasukSeeder::class,
        ]);
    }
}
