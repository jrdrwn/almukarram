<?php

namespace Database\Seeders;

use App\Models\Opini;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class OpiniSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'judul'      => 'Masjid sebagai Pusat Peradaban: Meneladani Masjid Nabawi',
                'kategori'   => 'Pemikiran Islam',
                'ringkasan'  => 'Masjid bukan sekadar tempat shalat, melainkan pusat kehidupan sosial, pendidikan, dan peradaban umat Islam.',
                'isi'        => '<p>Sejak zaman Rasulullah SAW, masjid telah menjadi pusat peradaban umat Islam. Di Masjid Nabawi, segala urusan umat diselesaikan, dari ibadah, pendidikan, hingga diplomasi.</p><p>Sudah saatnya kita mengembalikan fungsi masjid sebagai pusat peradaban yang sesungguhnya.</p>',
                'waktu_baca' => '5 menit',
            ],
            [
                'judul'      => 'Digitalisasi Dakwah: Peluang dan Tantangan di Era 5.0',
                'kategori'   => 'Teknologi & Dakwah',
                'ringkasan'  => 'Era digital membuka peluang besar bagi dakwah Islam, namun juga menghadirkan tantangan yang harus dihadapi dengan bijak.',
                'isi'        => '<p>Perkembangan teknologi digital membuka peluang bagi para dai untuk menjangkau jamaah yang lebih luas. Platform media sosial, podcast, dan siaran langsung menjadi alat dakwah modern yang efektif.</p>',
                'waktu_baca' => '6 menit',
            ],
            [
                'judul'      => 'Mendidik Generasi Qur\'ani di Tengah Gempuran Konten Digital',
                'kategori'   => 'Pendidikan',
                'ringkasan'  => 'Tantangan mendidik anak mencintai Al-Qur\'an di era di mana layar gadget lebih menarik perhatian mereka.',
                'isi'        => '<p>Orang tua masa kini menghadapi tantangan yang tidak pernah dialami generasi sebelumnya: bagaimana menanamkan kecintaan kepada Al-Qur\'an di tengah gempuran konten digital yang begitu menarik bagi anak-anak.</p>',
                'waktu_baca' => '7 menit',
            ],
            [
                'judul'      => 'Zakat sebagai Instrumen Pengentasan Kemiskinan',
                'kategori'   => 'Ekonomi Islam',
                'ringkasan'  => 'Potensi zakat yang sangat besar belum dioptimalkan secara maksimal padahal ia adalah instrumen ekonomi Islam yang sangat powerful.',
                'isi'        => '<p>Indonesia memiliki potensi zakat yang sangat besar, diperkirakan mencapai ratusan triliun rupiah per tahun. Namun realisasinya masih sangat jauh dari potensi tersebut.</p>',
                'waktu_baca' => '8 menit',
            ],
        ];

        foreach ($items as $item) {
            Opini::create(array_merge($item, [
                'slug'         => Str::slug($item['judul']),
                'user_id'      => 2,
                'published_at' => now()->subDays(rand(1, 60)),
            ]));
        }
    }
}
