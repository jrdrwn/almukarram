export default function ProgramList() {
    const programs = [
        {
            no: '01',
            judul: 'Silabus & Tema Materi Khutbah / Kajian',
            desc: 'Penyusunan silabus atau tema materi khutbah, ceramah Ramadhan, dan kajian lainnya yang sesuai dengan tuntutan dan kebutuhan jamaah terkini.',
        },
        {
            no: '02',
            judul: 'Daftar Khatib, Imam, dan Muadzin',
            desc: 'Penyusunan daftar khatib, khatib cadangan, imam, dan muadzin yang siap bertugas secara terjadwal dan terorganisir.',
        },
        {
            no: '03',
            judul: 'Membuka Ruang Shalat di Luar Waktu Wajib',
            desc: 'Membuka dan menyediakan ruang shalat bagi jamaah di luar waktu shalat wajib untuk ibadah sunnah dan kegiatan lainnya.',
        },
        {
            no: '04',
            judul: 'Siaran Dakwah (Radio, TV, Live YouTube)',
            desc: 'Penyelenggaraan siaran dakwah melalui berbagai media seperti radio, televisi, dan live streaming YouTube untuk menjangkau jamaah lebih luas.',
        },
        {
            no: '05',
            judul: 'Pendidikan Formal (PAUD dan Sejenisnya)',
            desc: 'Penyelenggaraan pendidikan formal seperti PAUD dan sejenisnya dalam lingkungan masjid untuk membina generasi penerus sejak dini.',
        },
        {
            no: '06',
            judul: 'Pendidikan Nonformal',
            desc: 'Penyelenggaraan pendidikan nonformal meliputi madrasah diniyah, TPQ, majelis taklim, kursus-kursus umum, PKBM, atau sejenisnya.',
        },
        {
            no: '07',
            judul: 'Informasi Terpadu Fardhu Kifayah',
            desc: 'Penyediaan informasi terpadu terkait pelaksanaan fardhu kifayah termasuk pengurusan jenazah, shalat jenazah, dan prosedur terkait.',
        },
        {
            no: '08',
            judul: 'Pembangunan Ruang Pemulasaran Jenazah',
            desc: 'Pembangunan dan pengadaan ruang pemulasaran jenazah yang layak, lengkap, dan memadai di lingkungan masjid.',
        },
        {
            no: '09',
            judul: 'Evaluasi & Rehab Bangunan Fisik',
            desc: 'Evaluasi bangunan fisik masjid secara menyeluruh dan pelaksanaan rehabilitasi secara komprehensif untuk menjaga fungsi dan keindahan bangunan.',
        },
        {
            no: '10',
            judul: 'Pengajian Majelis Taklim Ibu-Ibu',
            desc: 'Penyelenggaraan pengajian dan pembinaan keislaman rutin untuk ibu-ibu jamaah masjid dalam wadah majelis taklim.',
        },
        {
            no: '11',
            judul: 'Pengajian Majelis Taklim Bapak-Bapak',
            desc: 'Penyelenggaraan pengajian dan pembinaan keislaman rutin untuk bapak-bapak jamaah masjid dalam wadah majelis taklim.',
        },
        {
            no: '12',
            judul: 'Penyantunan Fakir Miskin',
            desc: 'Program penyantunan dan bantuan sosial bagi fakir miskin di lingkungan sekitar masjid sebagai wujud kepedulian sosial.',
        },
        {
            no: '13',
            judul: 'Beasiswa Anak Tidak Mampu',
            desc: 'Pemberian beasiswa pendidikan bagi anak-anak yang tidak mampu di lingkungan masjid agar dapat melanjutkan pendidikan dengan layak.',
        },
        {
            no: '14',
            judul: 'Masjid Ramah Anak, Lansia, dan Disabilitas',
            desc: 'Mewujudkan masjid yang ramah dan inklusif bagi anak-anak, lanjut usia, dan penyandang disabilitas dengan fasilitas dan layanan yang sesuai.',
        },
        {
            no: '15',
            judul: 'Peningkatan Kesejahteraan Imam, Kaum & Marbot',
            desc: 'Menaikkan gaji dan meningkatkan kesejahteraan imam, kaum, dan marbot agar dapat menjalankan tugas dengan lebih baik dan berdedikasi.',
        },
        {
            no: '16',
            judul: 'Shalat Berjamaah & Shalat Sunnah Berjamaah',
            desc: 'Terselenggaranya shalat berjamaah dengan baik dan shalat-shalat sunnah yang diselenggarakan secara berjamaah seperti shalat Dhuha dan Tahajud.',
        },
        {
            no: '17',
            judul: 'Kegiatan Dakwah: Kultum, PHBI, Tabligh Akbar',
            desc: 'Terselenggaranya berbagai kegiatan dakwah seperti kultum harian, Peringatan Hari Besar Islam (PHBI), dan tabligh akbar.',
        },
        {
            no: '18',
            judul: 'Program Pengkaderan & Pelatihan',
            desc: 'Terselenggaranya program pengkaderan dan pelatihan khatib, imam, pengurus masjid, pemuda dan remaja masjid, pengelolaan zakat, serta kepengurusan jenazah.',
        },
        {
            no: '19',
            judul: "Buka Puasa Bersama & Tadarus Al-Qur'an Ramadhan",
            desc: "Terselenggaranya program buka puasa bersama dan tadarus Al-Qur'an secara rutin pada bulan Ramadhan.",
        },
        {
            no: '20',
            judul: 'Program Ibadah Qurban',
            desc: 'Terselenggaranya program ibadah qurban setiap Idul Adha dengan pengelolaan yang baik, transparan, dan bermanfaat bagi masyarakat.',
        },
        {
            no: '21',
            judul: 'Kepengurusan Khusus & Kegiatan Sosial Kemasyarakatan',
            desc: 'Terselenggaranya kepengurusan dan kegiatan terkait sosial kemanusiaan, penanggulangan bencana, pemberdayaan ekonomi (BMT/koperasi syariah), pengelolaan ziswaf, santunan fakir miskin dan yatim piatu, pelayanan konsultasi jamaah, serta pelayanan kesehatan bagi pengurus, marbot, dan jamaah.',
        },
        {
            no: '22',
            judul: 'Spot Baca Digital',
            desc: 'Penyediaan dan pengelolaan spot baca digital di area masjid untuk memfasilitasi jamaah mengakses konten keislaman dan pengetahuan umum secara digital.',
        },
        {
            no: '23',
            judul: 'Perpustakaan Digital (E-Library) Aktif',
            desc: 'Tersedianya perpustakaan digital (e-library) yang aktif dan terus diperbarui koleksinya untuk mendukung literasi jamaah.',
        },
        {
            no: '24',
            judul: 'Aktif Mengikuti Kegiatan Hari Besar Islam',
            desc: 'Keaktifan masjid dalam mengikuti kegiatan hari besar Islam seperti pawai dan acara-acara peringatan lainnya di tingkat kota maupun provinsi.',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-zinc-50/50 py-24 dark:bg-zinc-900/10">
            <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 inline-block bg-linear-to-r from-primary to-emerald-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                        Program Kerja Bidang Imarah
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Program-program dalam rangka memakmurkan masjid sebagai
                        pusat penyelenggaraan ibadah dan dakwah.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {programs.map((p, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-all hover:scale-[1.02] hover:shadow-md active:scale-[1.02] active:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            <div className="absolute -top-6 -right-6 text-[100px] leading-none font-black text-primary opacity-5 transition-transform group-hover:scale-110 group-active:scale-110">
                                {p.no}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-foreground">
                                {p.judul}
                            </h3>
                            <p className="leading-relaxed text-muted-foreground">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
