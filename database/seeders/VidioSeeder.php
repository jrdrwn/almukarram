<?php

namespace Database\Seeders;

use App\Models\Kategori;
use App\Models\Vidio;
use Illuminate\Database\Seeder;

class VidioSeeder extends Seeder
{
    public function run(): void
    {
        $kategoris = Kategori::where('type', 'vidio')->pluck('id', 'slug');

        $items = [
            ['judul' => 'Ceramah Subuh: Tanda-Tanda Kiamat Besar — Ustaz H. Hamidhan, S.Ag., MA',            'kategori_id' => $kategoris['ceramah']       ?? null, 'youtube_id' => 'dQw4w9WgXcQ', 'published_at' => '2026-02-28', 'views' => 512],
            ['judul' => 'Kajian Rutin Malam Selasa Bersama Majelis Taklim Al-Mukarram',                      'kategori_id' => $kategoris['kajian-vidio']  ?? null, 'youtube_id' => 'dQw4w9WgXcQ', 'published_at' => '2026-02-25', 'views' => 310],
            ['judul' => "Khutbah Jumat: Membangun Generasi Qur'ani di Era Digital",                         'kategori_id' => $kategoris['ceramah']       ?? null, 'youtube_id' => 'dQw4w9WgXcQ', 'published_at' => '2026-02-21', 'views' => 428],
            ['judul' => 'Siaran Langsung Sholat Tarawih Ramadhan 1447 H',                                    'kategori_id' => $kategoris['dokumentasi']   ?? null, 'youtube_id' => 'dQw4w9WgXcQ', 'published_at' => '2026-02-15', 'views' => 890],
            ['judul' => 'Tausiyah Pagi: Keutamaan Sholat Berjamaah di Masjid',                              'kategori_id' => $kategoris['ceramah']       ?? null, 'youtube_id' => 'dQw4w9WgXcQ', 'published_at' => '2026-01-10', 'views' => 245],
            ['judul' => 'Buka Puasa Bersama & Tarawih ke-5 Ramadhan 1447 H',                                'kategori_id' => $kategoris['dokumentasi']   ?? null, 'youtube_id' => 'dQw4w9WgXcQ', 'published_at' => '2026-01-05', 'views' => 370],
            ['judul' => 'Pengajian Ahad Pagi: Tafsir Surah Al-Baqarah Ayat 183-187',                        'kategori_id' => $kategoris['kajian-vidio']  ?? null, 'youtube_id' => 'dQw4w9WgXcQ', 'published_at' => '2026-01-01', 'views' => 290],
            ['judul' => 'Khutbah Idul Fitri 1447 H — Ustaz H. Gusti Mahfudz, S.Kom., MA',                  'kategori_id' => $kategoris['ceramah']       ?? null, 'youtube_id' => 'dQw4w9WgXcQ', 'published_at' => '2025-12-28', 'views' => 650],
            ['judul' => "Dokumentasi Malam Nuzulul Qur'an 1447 H di Masjid Agung Al-Mukarram",            'kategori_id' => $kategoris['dokumentasi']   ?? null, 'youtube_id' => 'dQw4w9WgXcQ', 'published_at' => '2025-12-20', 'views' => 420],
        ];

        foreach ($items as $item) {
            Vidio::create(array_merge($item, ['user_id' => 1, 'status' => 'published']));
        }
    }
}
