<?php

namespace Database\Seeders;

use App\Models\Kategori;
use Illuminate\Database\Seeder;

class KategoriBeritaSeeder extends Seeder
{
    public function run(): void
    {
        $kategoris = [
            // Berita
            ['nama' => 'Kegiatan',    'slug' => 'kegiatan',    'type' => 'berita'],
            ['nama' => 'Pengumuman',  'slug' => 'pengumuman',  'type' => 'berita'],
            ['nama' => 'Kajian',      'slug' => 'kajian',      'type' => 'berita'],
            ['nama' => 'Sosial',      'slug' => 'sosial',      'type' => 'berita'],
            ['nama' => 'Ramadhan',    'slug' => 'ramadhan',    'type' => 'berita'],
            ['nama' => 'Idul Fitri',  'slug' => 'idul-fitri',  'type' => 'berita'],
            ['nama' => 'Idul Adha',   'slug' => 'idul-adha',   'type' => 'berita'],
            // Vidio
            ['nama' => 'Ceramah',     'slug' => 'ceramah',     'type' => 'vidio'],
            ['nama' => 'Kajian',      'slug' => 'kajian-vidio','type' => 'vidio'],
            ['nama' => 'Dokumentasi', 'slug' => 'dokumentasi', 'type' => 'vidio'],
            // Album
            ['nama' => 'Kegiatan',    'slug' => 'kegiatan-album', 'type' => 'album'],
            ['nama' => 'Ramadhan',    'slug' => 'ramadhan-album', 'type' => 'album'],
            // Buletin
            ['nama' => 'Jumat',       'slug' => 'jumat',       'type' => 'buletin'],
            ['nama' => 'Bulanan',     'slug' => 'bulanan',     'type' => 'buletin'],
            // Opini
            ['nama' => 'Dakwah',      'slug' => 'dakwah',      'type' => 'opini'],
            ['nama' => 'Sosial',      'slug' => 'sosial-opini','type' => 'opini'],
            ['nama' => 'Keluarga',    'slug' => 'keluarga',    'type' => 'opini'],
            // Dokumen
            ['nama' => 'Laporan',     'slug' => 'laporan',     'type' => 'dokumen'],
            ['nama' => 'SK',          'slug' => 'sk',          'type' => 'dokumen'],
        ];

        foreach ($kategoris as $kat) {
            Kategori::create($kat);
        }
    }
}
