<?php

namespace Database\Seeders;

use App\Models\KotakMasuk;
use Illuminate\Database\Seeder;

class KotakMasukSeeder extends Seeder
{
    public function run(): void
    {
        KotakMasuk::create([
            'nama'    => 'Ahmad Fauzi',
            'email'   => 'ahmad.fauzi@example.com',
            'telepon' => '08123456789',
            'subjek'  => 'Pertanyaan Jadwal Kajian',
            'pesan'   => 'Assalamu\'alaikum, saya ingin menanyakan jadwal kajian rutin untuk bulan Ramadhan. Apakah ada perubahan jadwal?',
            'status'  => 'sudah_dibaca',
        ]);

        KotakMasuk::create([
            'nama'    => 'Siti Rahmah',
            'email'   => 'siti.rahmah@example.com',
            'telepon' => null,
            'subjek'  => 'Permohonan Peminjaman Aula',
            'pesan'   => 'Kami dari organisasi remaja masjid ingin memohon izin meminjam aula masjid untuk kegiatan halaqah pada hari Sabtu, 14 Maret 2026.',
            'status'  => 'belum_dibaca',
        ]);
    }
}
