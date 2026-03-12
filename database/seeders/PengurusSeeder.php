<?php

namespace Database\Seeders;

use App\Models\Pengurus;
use Illuminate\Database\Seeder;

class PengurusSeeder extends Seeder
{
    /**
     * Nama pengurus => nama file foto di storage/app/public/pengurus.
     */
    private const FOTO_BY_NAME = [
        'H.M. Wiyatno, S.P.' => 'pose_change_4.png',
        'H. Hamidhan, S.Ag., M.A.' => 'H. Hamidhan, S. Ag.,MA.JPG',
        'H. Saferiniansyah, S.P., M.E.' => 'H. Saferiniansyah, S.P.,M.E.JPG',
        'Dr. H. Suwarno Muriyat, S.Ag., M.Pd.' => 'suwarnoo.png',
        'Ust. Syaukani' => 'Ust. Syaukani.JPG',
        'H. Samsul Bahri, M.Pd.' => 'H. Samsul Bahri, M.Pd.JPG',
        'Mujiono, S.Pd.SD., M.AP.' => 'Mujiono, S.Pd.SD.,M.AP.JPG',
        'M. Poteran Sosilo, S.HI., M.A.' => 'M. Poteran Sosilo, S.HI.,MA.JPG',
        'Agon, M.Pd.' => 'Agon, S.Pd.I.,M.Pd.JPG',
        'H. Sutrisno, S.H.' => 'H. Sutrisno, S.H.JPG',
        'H. Abdul Munir' => 'H. Abdul Munir..JPG',
        'H. Aspiansyah, S.E.' => 'H. Aspiansyah, S.E.JPG',
        'Muhammad Fahlevi, S.T., M.M.' => 'M. Fahlepi, S.T.,MM.JPG',
        'H. Ahmad Zayad, SKM.' => 'H. Ahmad Zayad, SKM.JPG',
        'H. Suharto' => 'H. Suharto.JPG',
        'M. Ariyanto, S.Pd.I.' => 'M. Ariyanto, S.Pd.I.JPG',
        'Abdul Rohim, S.E.' => 'Abdul Rohim, S.E.JPG',
        'H. Asmadi' => 'H. Asmadi.JPG',
        'Nurul Wahidah, S.Pd.' => 'Nurul Wahidah, S.Pd.JPG',
        'H. Asyhadi, M.Pd.' => 'H. Asy hadi, M.Pd.JPG',
        'H. Arbainsyah, S.Ag., M.Pd.' => 'H. Arbainsyah. M.Pd.JPG',
        'Dr. H. Bidin, S.Ag., M.Pd.' => 'Dr. H. Bidin, S.Ag.,M.Pd.JPG',
        'Drs. H. Asyari' => 'Drs. H. Asyari, M.Pd.JPG',
        'H. Hapip, S.Pd.I.' => 'H. Hapip, S.Pd.I.JPG',
        'Boby' => 'Boby.JPG',
        'Hj. Novita, S.H.' => 'Novita, S.H.JPG',
        'Hj. Agustina' => 'Hj. Agustina.JPG',
        'Drs. H. Ahmad Bahruni, M.AP.' => 'Drs. H. Ahmad Bahruni, M.AP.JPG',
        'H. Nabchan, S.Ag., M.Pd.I.' => 'H. Nabchan, S.Ag.,M.Pd.I.JPG',
        'Ghazali Rahman, S.Ag., M.A.' => 'Ghazali Rahman, S.Ag.,MA.JPG',
        'H. Gusti Mahfudz, S.Kom., M.A.' => 'H. Gusti Mahfudz, S. Kom.,MA.JPG',
        'Andy Rahadian, S.P.' => 'Andy Rahadian, S.P.JPG',
        'H. Syahriannor Fauzi, M.Ag.' => 'H. Syahriannor Fauzi, M.Ag.JPG',
        'H. Mustafa M.' => 'H. Mustafa M.JPG',
        'Sunarso, S.E., M.M.' => 'Sunarso, S.E.,MM.JPG',
        'H. Nuryadin Syahri, S.Ag.' => 'H. Nuryadin Syahri, S.Ag.JPG',
        'Saefudin, S.E.' => 'Saefudin, S.E.JPG',
        'H. Muhammad Jahid Rojani, Lc.' => 'H. Muhammad Jahid Rojani, Lc.JPG',
        'H. Khairani, S.Pd.I.' => 'H. Khairani, S.Pd.I.JPG',
        'M. Rifki Fatahillah, S.Pd.' => 'M. Rifki Fatahillah, S.Pd.I.JPG',
        'Hj. Masitah, S.Pd.' => 'Hj. Masitah, S.Pd.JPG',
        'Hj. Ratnasari, S.Pd.' => 'Hj. Ratna Sari, S.Pd.JPG',
        'Ilham Wahyudi, S.Pd.' => 'Ilham Wahyudi, S.Pd.I.JPG',
    ];

    public function run(): void
    {
        Pengurus::truncate();

        // =====================================================================
        // PIMPINAN INTI
        // =====================================================================

        // Ketua Umum
        $this->createPengurus([
            'nama'      => 'H.M. Wiyatno, S.P.',
            'jabatan'   => 'Ketua Umum BPMA Al-Mukarram Amanah',
            'kelompok'  => 'pimpinan_inti',
            'peran'     => 'ketua_umum',
            'urutan'    => 1,
            'is_active' => true,
        ]);

        // Ketua Harian & Ketua I–III
        $ketua = [
            ['nama' => 'H. Hamidhan, S.Ag., M.A.',           'jabatan' => 'Ketua Harian', 'urutan' => 2],
            ['nama' => 'H. Saferiniansyah, S.P., M.E.',       'jabatan' => 'Ketua I',      'urutan' => 3],
            ['nama' => 'Dr. H. Suwarno Muriyat, S.Ag., M.Pd.','jabatan' => 'Ketua II',     'urutan' => 4],
            ['nama' => 'Ust. Syaukani',                        'jabatan' => 'Ketua III',    'urutan' => 5],
        ];

        foreach ($ketua as $data) {
            $this->createPengurus(array_merge($data, [
                'kelompok'  => 'pimpinan_inti',
                'peran'     => 'ketua',
                'is_active' => true,
            ]));
        }

        // Sekretaris & Bendahara
        $sekbend = [
            ['nama' => 'H. Samsul Bahri, M.Pd.',        'jabatan' => 'Sekretaris Umum', 'peran' => 'sekretaris_umum', 'urutan' => 6],
            ['nama' => 'Mujiono, S.Pd.SD., M.AP.',       'jabatan' => 'Sekretaris I',    'peran' => 'sekretaris',      'urutan' => 7],
            ['nama' => 'M. Poteran Sosilo, S.HI., M.A.', 'jabatan' => 'Sekretaris II',   'peran' => 'sekretaris',      'urutan' => 8],
            ['nama' => 'Agon, M.Pd.',                    'jabatan' => 'Sekretaris III',  'peran' => 'sekretaris',      'urutan' => 9],
            ['nama' => 'H. Sutrisno, S.H.',              'jabatan' => 'Bendahara',       'peran' => 'bendahara',       'urutan' => 10],
        ];

        foreach ($sekbend as $data) {
            $this->createPengurus(array_merge($data, [
                'kelompok'  => 'pimpinan_inti',
                'is_active' => true,
            ]));
        }

        // =====================================================================
        // BIDANG RIAYAH
        // =====================================================================

        $this->createPengurus([
            'nama'      => 'H. Abdul Munir',
            'jabatan'   => 'Ketua Bidang Riayah',
            'kelompok'  => 'bidang_riayah',
            'peran'     => 'ketua_bidang',
            'urutan'    => 1,
            'is_active' => true,
        ]);

        $this->createPengurus([
            'nama'      => 'Supenpri, S.Sos., M.A.',
            'jabatan'   => 'Sekretaris Bidang Riayah',
            'kelompok'  => 'bidang_riayah',
            'peran'     => 'sekretaris_bidang',
            'urutan'    => 2,
            'is_active' => true,
        ]);

        $anggotaRiayah = [
            'H. Aspiansyah, S.E.',
            'Muhammad Fahlevi, S.T., M.M.',
            'Teguh Yunianti, S.H.',
            'Ir. Muhammad Nadhir Fadillah, S.T., M.T.',
            'H. Suriadi',
            'H. Ahmad Zayad, SKM.',
            'H. Suharto',
            'Irwan Zulfahrudin',
            'M. Ariyanto, S.Pd.I.',
            'Abdul Rohim, S.E.',
            'H. Asmadi',
            'Ahmad Gajali',
            'H. Patlianur',
            'M. Jamaluddin',
            'Ansorrohim, S.Sos.',
            'Muhammad Rifani, S.Pd.I.',
            'Hj. Erniwati',
            'Nurul Wahidah, S.Pd.',
            'Suyati Soewadi',
        ];

        foreach ($anggotaRiayah as $index => $nama) {
            $this->createPengurus([
                'nama'      => $nama,
                'jabatan'   => 'Anggota',
                'kelompok'  => 'bidang_riayah',
                'peran'     => 'anggota',
                'urutan'    => $index + 3,
                'is_active' => true,
            ]);
        }

        // =====================================================================
        // BIDANG IDARAH
        // =====================================================================

        $this->createPengurus([
            'nama'      => 'H. Asyhadi, M.Pd.',
            'jabatan'   => 'Ketua Bidang Idarah',
            'kelompok'  => 'bidang_idarah',
            'peran'     => 'ketua_bidang',
            'urutan'    => 1,
            'is_active' => true,
        ]);

        $this->createPengurus([
            'nama'      => 'H. Arbainsyah, S.Ag., M.Pd.',
            'jabatan'   => 'Sekretaris Bidang Idarah',
            'kelompok'  => 'bidang_idarah',
            'peran'     => 'sekretaris_bidang',
            'urutan'    => 2,
            'is_active' => true,
        ]);

        $anggotaIdarah = [
            'Dr. H. Bidin, S.Ag., M.Pd.',
            'Drs. H. Asyari',
            'H. Hasbullah, S.Ag., M.Pd.I.',
            'Arif Irawan, S.E.',
            'H. Heriyanto',
            'Abdul Halim Rais, S.Pd.I., M.Pd.',
            'H. Hapip, S.Pd.I.',
            'Zainal Abidin',
            'Supiani, S.Ag.',
            'Gr. Rahmad Hidayat',
            'Ahmadi',
            'Boby',
            'Hj. Novita, S.H.',
            'Hj. Agustina',
            'Hj. Erniwati',
            'Siti Nasokah, M.Pd.',
        ];

        foreach ($anggotaIdarah as $index => $nama) {
            $this->createPengurus([
                'nama'      => $nama,
                'jabatan'   => 'Anggota',
                'kelompok'  => 'bidang_idarah',
                'peran'     => 'anggota',
                'urutan'    => $index + 3,
                'is_active' => true,
            ]);
        }

        // =====================================================================
        // BIDANG IMARAH
        // =====================================================================

        $this->createPengurus([
            'nama'      => 'Drs. H. Ahmad Bahruni, M.AP.',
            'jabatan'   => 'Ketua Bidang Imarah',
            'kelompok'  => 'bidang_imarah',
            'peran'     => 'ketua_bidang',
            'urutan'    => 1,
            'is_active' => true,
        ]);

        $this->createPengurus([
            'nama'      => 'H. Nabchan, S.Ag., M.Pd.I.',
            'jabatan'   => 'Sekretaris Bidang Imarah',
            'kelompok'  => 'bidang_imarah',
            'peran'     => 'sekretaris_bidang',
            'urutan'    => 2,
            'is_active' => true,
        ]);

        $anggotaImarah = [
            'Ghazali Rahman, S.Ag., M.A.',
            'H. Gusti Mahfudz, S.Kom., M.A.',
            'Andy Rahadian, S.P.',
            'H. Syahriannor Fauzi, M.Ag.',
            'H. Mustafa M.',
            'Sunarso, S.E., M.M.',
            'Jumadi, M.Pd.',
            'H. Nuryadin Syahri, S.Ag.',
            'Saefudin, S.E.',
            'H. Muhammad Jahid Rojani, Lc.',
            'H. Khairani, S.Pd.I.',
            'Sukriadie, S.I.Pust.',
            'M. Rifki Fatahillah, S.Pd.',
            'Fitrian Noor, S.Pd.I.',
            'Gusti Bahriansyah, M.Pd.I.',
            'Abdul Hamid, S.Ag., M.A.',
            'Hj. Masitah, S.Pd.',
            'Hj. Ratnasari, S.Pd.',
        ];

        foreach ($anggotaImarah as $index => $nama) {
            $this->createPengurus([
                'nama'      => $nama,
                'jabatan'   => 'Anggota',
                'kelompok'  => 'bidang_imarah',
                'peran'     => 'anggota',
                'urutan'    => $index + 3,
                'is_active' => true,
            ]);
        }

        // =====================================================================
        // SEKRETARIAT
        // =====================================================================

        $this->createPengurus([
            'nama'      => 'Mashudi, S.Pd.I.',
            'jabatan'   => 'Kepala Sekretariat',
            'kelompok'  => 'sekretariat',
            'peran'     => 'kepala_sekretariat',
            'urutan'    => 1,
            'is_active' => true,
        ]);

        $anggotaSekretariat = [
            'Ahmad Sairaji, S.Pd.I.',
            'Arliansyah',
            'Ilham Wahyudi, S.Pd.',
            'Khairuddin, S.Kom.',
            'Dedy Purnadibrata, S.E., M.AP.',
            'Dadiyanto, S.H.',
            'Akhmad Risjianto, S.E.',
        ];

        foreach ($anggotaSekretariat as $index => $nama) {
            $this->createPengurus([
                'nama'      => $nama,
                'jabatan'   => 'Anggota Sekretariat',
                'kelompok'  => 'sekretariat',
                'peran'     => 'anggota',
                'urutan'    => $index + 2,
                'is_active' => true,
            ]);
        }
    }

    private function createPengurus(array $data): void
    {
        $data['foto'] = $this->resolveFotoPath($data['nama'] ?? null);

        Pengurus::create($data);
    }

    private function resolveFotoPath(?string $nama): ?string
    {
        if (! $nama) {
            return null;
        }

        $filename = self::FOTO_BY_NAME[$nama] ?? null;

        return $filename ? "pengurus/{$filename}" : null;
    }
}
