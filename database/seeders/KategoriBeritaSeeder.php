<?php

namespace Database\Seeders;

use App\Models\KategoriBerita;
use Illuminate\Database\Seeder;

class KategoriBeritaSeeder extends Seeder
{
    public function run(): void
    {
        $kategoris = [
            ['nama' => 'Kegiatan',    'slug' => 'kegiatan'],
            ['nama' => 'Pengumuman',  'slug' => 'pengumuman'],
            ['nama' => 'Kajian',      'slug' => 'kajian'],
            ['nama' => 'Sosial',      'slug' => 'sosial'],
            ['nama' => 'Ramadhan',    'slug' => 'ramadhan'],
            ['nama' => 'Idul Fitri',  'slug' => 'idul-fitri'],
            ['nama' => 'Idul Adha',   'slug' => 'idul-adha'],
        ];

        foreach ($kategoris as $kat) {
            KategoriBerita::create($kat);
        }
    }
}
