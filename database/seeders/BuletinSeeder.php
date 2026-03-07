<?php

namespace Database\Seeders;

use App\Models\Buletin;
use App\Models\Kategori;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BuletinSeeder extends Seeder
{
    public function run(): void
    {
        $kategoris = Kategori::where('type', 'buletin')->pluck('id', 'slug');

        $items = [
            ['judul' => "Buletin Jumat — Edisi Nisfu Sya'ban 1447 H",   'kategori_id' => $kategoris['jumat']   ?? null, 'published_at' => '2026-02-28'],
            ['judul' => 'Buletin Jumat — Edisi Pertama Ramadhan',        'kategori_id' => $kategoris['jumat']   ?? null, 'published_at' => '2026-03-01'],
            ['judul' => 'Majalah Islami Al-Mukarram Edisi Januari 2026', 'kategori_id' => $kategoris['bulanan'] ?? null, 'published_at' => '2026-01-01'],
            ['judul' => 'Buletin Idul Adha 1446 H',                      'kategori_id' => $kategoris['jumat']   ?? null, 'published_at' => '2025-06-15'],
        ];

        foreach ($items as $item) {
            Buletin::create(array_merge($item, [
                'slug'      => Str::slug($item['judul']),
                'thumbnail' => 'sampel-image.jpg',
                'file_pdf'  => 'buletin/' . Str::slug($item['judul']) . '.pdf',
                'user_id'   => 1,
                'status'    => 'published',
                'views'     => rand(50, 400),
                'downloads' => rand(10, 150),
            ]));
        }
    }
}
