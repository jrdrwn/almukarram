export default function ProgramList() {
    const programs = [
        {
            no: '01',
            judul: 'Pengelolaan Ruang Shalat',
            desc: 'Pengelolaan dan penataan ruang shalat agar tetap bersih, nyaman, tertib, dan kondusif bagi seluruh jamaah yang beribadah.',
        },
        {
            no: '02',
            judul: 'Ruang Serbaguna / Aula',
            desc: 'Pengelolaan dan pemeliharaan ruang serbaguna atau aula masjid agar siap digunakan untuk berbagai kegiatan keagamaan dan kemasyarakatan.',
        },
        {
            no: '03',
            judul: 'Ruang Konsultasi',
            desc: 'Penyediaan dan pengelolaan ruang konsultasi bagi jamaah untuk layanan bimbingan keagamaan, keluarga, dan sosial.',
        },
        {
            no: '04',
            judul: 'Toilet yang Memadai, Bersih & Sehat',
            desc: 'Memastikan tersedianya toilet yang jumlahnya memadai, bersih, nyaman, dan memenuhi persyaratan protokol kesehatan.',
        },
        {
            no: '05',
            judul: 'Sarana untuk Penyandang Cacat & Kursi Shalat',
            desc: 'Penyediaan sarana jalan yang aksesibel untuk penyandang cacat serta kursi shalat bagi jamaah yang membutuhkan.',
        },
        {
            no: '06',
            judul: 'Sistem Pengelolaan Bangunan Berbasis Lingkungan',
            desc: 'Penerapan sistem pengelolaan bangunan yang ramah lingkungan hidup untuk mendukung keberlanjutan ekosistem sekitar masjid.',
        },
        {
            no: '07',
            judul: 'Area Penghijauan & Konservasi Air',
            desc: 'Pembuatan dan pemeliharaan area khusus penghijauan serta fasilitas konservasi air di lingkungan masjid.',
        },
        {
            no: '08',
            judul: 'Pemasangan Payung Besar (Model Masjid Nabawi)',
            desc: 'Pemasangan payung-payung besar seperti di Masjid Nabawi Madinah di halaman depan masjid untuk kenyamanan jamaah.',
        },
        {
            no: '09',
            judul: 'Pemasangan Videotron di Depan Masjid',
            desc: 'Pemasangan layar videotron di depan masjid sebagai media informasi dan syiar dakwah kepada masyarakat luas.',
        },
        {
            no: '10',
            judul: 'Optimalisasi & Renovasi Menara Pandang',
            desc: 'Memfungsikan menara pandang, merenovasi bagian-bagian yang rusak, serta menambah/melengkapi sarana penunjang yang diperlukan seperti lift dan lainnya.',
        },
        {
            no: '11',
            judul: 'Pelebaran Jalan Samping Kanan Masjid',
            desc: 'Pelaksanaan program pelebaran jalan di samping kanan masjid untuk meningkatkan aksesibilitas dan kelancaran arus jamaah.',
        },
        {
            no: '12',
            judul: 'Mobil Operasional',
            desc: 'Pengadaan mobil operasional masjid untuk mendukung berbagai kegiatan, termasuk layanan ambulans jamaah dan transportasi kegiatan.',
        },
        {
            no: '13',
            judul: 'Fasilitas Penanganan Bencana',
            desc: 'Pengadaan dan pengelolaan fasilitas penanganan bencana agar masjid dapat berfungsi sebagai pusat tanggap darurat bagi masyarakat.',
        },
        {
            no: '14',
            judul: 'Internet Aktif dan Stabil',
            desc: 'Memastikan koneksi internet yang aktif dan stabil di seluruh area masjid untuk mendukung kegiatan dakwah digital dan layanan jamaah.',
        },
        {
            no: '15',
            judul: 'Sound System',
            desc: 'Pengadaan, perawatan, dan pengembangan sistem tata suara (sound system) yang berkualitas untuk mendukung seluruh kegiatan ibadah dan dakwah.',
        },
        {
            no: '16',
            judul: 'Halaman Parkir yang Luas',
            desc: 'Pengembangan dan pengelolaan halaman parkir yang luas, tertib, dan nyaman untuk memenuhi kebutuhan kendaraan jamaah.',
        },
        {
            no: '17',
            judul: 'Ruang Terbuka Hijau Ramah Anak',
            desc: 'Penyediaan ruang terbuka hijau yang dapat difungsikan sebagai sarana bermain dan olahraga yang ramah anak di lingkungan masjid.',
        },
        {
            no: '18',
            judul: 'Sarana Bimbingan Manasik Haji',
            desc: 'Pembuatan dan pengadaan sarana bimbingan manasik haji untuk memfasilitasi pelatihan dan bimbingan ibadah haji bagi calon jamaah.',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-zinc-50/50 py-24 dark:bg-zinc-900/10">
            <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 inline-block bg-linear-to-r from-primary to-emerald-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                        Program Kerja Bidang Riayah
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Program-program dalam rangka pemeliharaan dan perawatan
                        sarana prasarana fisik masjid secara keseluruhan.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {programs.map((p, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-all hover:scale-[1.02] hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            <div className="absolute -top-6 -right-6 text-[100px] leading-none font-black text-primary opacity-5 transition-transform group-hover:scale-110">
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
