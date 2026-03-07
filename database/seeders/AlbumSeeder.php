<?php

namespace Database\Seeders;

use App\Models\Album;
use App\Models\AlbumFoto;
use App\Models\Kategori;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class AlbumSeeder extends Seeder
{
    public function run(): void
    {
        $kategoris = Kategori::where('type', 'album')->pluck('id', 'slug');

        $albums = [
            [
                'judul'        => "Kolaborasi ZAWA, Baitulmaal Muamalat, dan BI Gelar ToT Al-Qur'an Isyarat di Istiqlal",
                'kategori_id'  => $kategoris['kegiatan-album'] ?? null,
                'deskripsi'    => "Dalam upaya perkuat aksesibilitas Al-Qur'an bagi sahabat difabel (Teman Tuli), mewujudkan inklusivitas literasi Al-Qur'an bagi penyandang disabilitas.",
                'published_at' => '2026-02-28',
                'fotos'        => [
                    '/images/sampel-image.jpg',
                    '/images/sampel-image.jpg',
                    '/images/sampel-image.jpg',
                ],
            ],
            [
                'judul'        => 'Buka Puasa Bersama dan Tarawih #5 Ramadhan',
                'kategori_id'  => $kategoris['ramadhan-album'] ?? null,
                'deskripsi'    => 'Antusiasme ribuan jamaah masjid dalam mengikuti serangkaian kegiatan buka puasa bersama dan ibadah salat tarawih.',
                'published_at' => '2026-02-25',
                'fotos'        => [
                    '/images/sampel-image.jpg',
                    '/images/sampel-image.jpg',
                    '/images/sampel-image.jpg',
                    '/images/sampel-image.jpg',
                ],
            ],
            [
                'judul'        => 'Silaturahmi Ulama Se-Kalimantan Tengah',
                'kategori_id'  => $kategoris['kegiatan-album'] ?? null,
                'deskripsi'    => 'Pertemuan rutin tahunan para ulama untuk membahas kemajuan ukhuwah islamiyah dan program dakwah terpadu.',
                'published_at' => '2026-01-10',
                'fotos'        => [
                    '/images/sampel-image.jpg',
                    '/images/sampel-image.jpg',
                ],
            ],
            [
                'judul'        => 'Kerja Bakti Akbar Persiapan Idul Adha',
                'kategori_id'  => $kategoris['kegiatan-album'] ?? null,
                'deskripsi'    => 'Gotong royong membersihkan seluruh area masjid bersama warga masyarakat sekitar lingkungan.',
                'published_at' => '2026-01-05',
                'fotos'        => [
                    '/images/sampel-image.jpg',
                    '/images/sampel-image.jpg',
                ],
            ],
        ];

        foreach ($albums as $data) {
            $fotos = $data['fotos'];
            unset($data['fotos']);

            $album = Album::create(array_merge($data, [
                'slug'      => Str::slug($data['judul']),
                'thumbnail' => $fotos[0] ?? null,
                'user_id'   => 1,
                'status'    => 'published',
            ]));

            foreach ($fotos as $urutan => $foto) {
                AlbumFoto::create([
                    'album_id' => $album->id,
                    'foto'     => $foto,
                    'urutan'   => $urutan,
                ]);
            }
        }
    }
}
