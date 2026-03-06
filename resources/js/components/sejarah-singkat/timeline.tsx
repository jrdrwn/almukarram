import {
    BookOpen,
    Calendar as CalendarIcon,
    CheckCircle2,
    Flag,
    Globe,
    Pickaxe,
    Users,
    Wrench,
} from 'lucide-react';

export default function Timeline() {
    const timelineData = [
        {
            tahun: '1987',
            judul: 'Pencanangan & Peletakan Batu Pertama',
            desc: 'Diprakarsai oleh ulama Muhammadiyah dan Nahdlatul Ulama, lahan berhasil diperoleh dan surat perizinan didapat. Gubernur Kalimantan Tengah meletakkan batu pertama pembangunan masjid yang diharapkan menjadi yang terbesar di Kabupaten Kapuas. Bersamaan itu dibangun pula Komplek Islamic Centre (TK Islam, MTs, MA, dan STAI).',
            sisi: 'kiri',
            icon: <Flag className="h-5 w-5 text-primary-foreground" />,
        },
        {
            tahun: '1990',
            judul: 'Pembangunan Dilanjutkan — Bantuan YAMP',
            desc: 'Setelah sempat terhenti hampir tiga tahun, pembangunan dilanjutkan kembali ketika panitia menerima bantuan dari Yayasan Amal Bakti Muslim Pancasila (YAMP). Bupati Kapuas saat itu Endang Kusasi. Bangunan kerangka beton mulai difungsikan untuk ibadah dan kegiatan keagamaan.',
            sisi: 'kanan',
            icon: <Pickaxe className="h-5 w-5 text-primary-foreground" />,
        },
        {
            tahun: '1997',
            judul: 'Renovasi & Perluasan Bagian Belakang',
            desc: 'Masjid yang telah berdiri megah dengan nama Masjid Agung Al-Mukarram Kuala Kapuas direnovasi kembali. Atas ide Bupati Kapuas Ir. H. Burhanudin Ali, ditambahkan bagian belakang masjid yang mampu menampung 1.500 jamaah.',
            sisi: 'kiri',
            icon: <Wrench className="h-5 w-5 text-primary-foreground" />,
        },
        {
            tahun: '2009',
            judul: 'Musyawarah Renovasi Total',
            desc: 'Bupati Kapuas Ir. H. Muhammad Mawardi, MM memanggil Badan Pengelola Masjid untuk musyawarah. Disepakati renovasi total masjid menjadi yang termegah di Kuala Kapuas dengan total kapasitas 10.631 jamaah (6.361 dalam gedung + 4.000 di tempat terbuka).',
            sisi: 'kanan',
            icon: <Users className="h-5 w-5 text-primary-foreground" />,
        },
        {
            tahun: '2009–2013',
            judul: 'Pembangunan Bertahap',
            desc: 'Renovasi total dilaksanakan secara bertahap sesuai tahun anggaran. Seluruh elemen masyarakat, pemerintah daerah, dan donatur berpartisipasi aktif dalam mewujudkan masjid termegah kebanggaan Kabupaten Kapuas.',
            sisi: 'kiri',
            icon: <CalendarIcon className="h-5 w-5 text-primary-foreground" />,
        },
        {
            tahun: '9 Maret 2013',
            judul: 'Peresmian Masjid Agung Al-Mukarram Amanah',
            desc: 'Bertepatan dengan Sabtu 26 Rabiul Akhir 1434 H, Masjid Agung Al-Mukarram Amanah resmi diresmikan oleh Bupati Kapuas Ir. H. Muhammad Mawardi, MM. Momen bersejarah ini menjadi tonggak baru kejayaan Islam di Bumi Tambun Bungai.',
            sisi: 'kanan',
            icon: <CheckCircle2 className="h-5 w-5 text-primary-foreground" />,
        },
        {
            tahun: '2013–kini',
            judul: 'Pusat Peradaban Islam Kabupaten Kapuas',
            desc: 'Masjid terus berkembang sebagai pusat ibadah, dakwah, pendidikan, dan kegiatan sosial kemasyarakatan. Berbagai program unggulan dijalankan oleh Badan Pengelola Masjid Agung (BPMA) Al-Mukarram Amanah untuk memakmurkan masjid dan memberdayakan umat.',
            sisi: 'kiri',
            icon: <BookOpen className="h-5 w-5 text-primary-foreground" />,
        },
        {
            tahun: '2025–sekarang',
            judul: 'Era Transformasi Digital',
            desc: 'Masjid memasuki era transformasi digital dengan peluncuran website resmi, penggunaan aplikasi Simasjid, siaran dakwah live streaming YouTube, serta berbagai program pengembangan fisik dan pemberdayaan umat yang masif.',
            sisi: 'kanan',
            icon: <Globe className="h-5 w-5 text-primary-foreground" />,
        },
    ];

    return (
        <section className="relative z-10 w-full py-16 sm:py-24">
            {/* GIANT WATERMARK */}
            <div className="pointer-events-none absolute top-20 left-0 flex w-full justify-center overflow-hidden opacity-[0.02] dark:opacity-5">
                <span className="text-[10rem] leading-none font-black tracking-tighter text-foreground select-none sm:text-[14rem] lg:text-[18rem]">
                    SEJARAH
                </span>
            </div>

            <div className="relative z-10 mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
                    <div className="mx-auto text-center md:text-left">
                        <div className="mb-4 flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                Perjalanan
                            </span>
                            <span className="h-px w-8 bg-primary"></span>
                        </div>
                        <h2 className="text-center text-3xl font-black text-foreground md:text-5xl">
                            Tonggak Perkembangan
                        </h2>
                    </div>
                </div>

                <div className="relative mx-auto mt-12 max-w-7xl">
                    {/* Garis tengah with inner glow */}
                    <div className="absolute top-0 bottom-0 left-1/2 z-0 hidden w-1.5 -translate-x-1/2 transform rounded-full bg-zinc-100 md:block dark:bg-zinc-800">
                        <div className="absolute top-0 bottom-0 w-full rounded-full bg-linear-to-b from-primary/80 via-primary/20 to-transparent opacity-50"></div>
                    </div>

                    <div className="relative z-10 flex flex-col gap-10">
                        {timelineData.map((t, i) => {
                            const isKiri = t.sisi === 'kiri';
                            return (
                                <div
                                    key={i}
                                    className="group flex w-full flex-col items-center md:flex-row"
                                >
                                    {isKiri ? (
                                        <>
                                            <div className="w-full pb-6 md:w-5/12 md:pr-10 md:pb-0">
                                                <div className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-card p-8 shadow-xl shadow-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                                                    <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-primary/5 blur-[20px] transition-transform duration-500 group-hover:scale-150"></div>
                                                    <div className="relative z-10">
                                                        <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
                                                            {t.tahun}
                                                        </span>
                                                        <h6 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                                                            {t.judul}
                                                        </h6>
                                                        <p className="text-base leading-relaxed text-muted-foreground">
                                                            {t.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden w-2/12 justify-center md:flex">
                                                <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-background p-1.5 shadow-lg shadow-primary/10">
                                                    <div className="flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-primary to-primary/80 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                                        {t.icon}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-5/12"></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="hidden w-5/12 md:block"></div>
                                            <div className="hidden w-2/12 justify-center md:flex">
                                                <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-background p-1.5 shadow-lg shadow-primary/10">
                                                    <div className="flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-primary to-primary/80 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                                        {t.icon}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-5/12 md:pl-10">
                                                <div className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-card p-8 shadow-xl shadow-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                                                    <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-primary/5 blur-[20px] transition-transform duration-500 group-hover:scale-150"></div>
                                                    <div className="relative z-10">
                                                        <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
                                                            {t.tahun}
                                                        </span>
                                                        <h6 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                                                            {t.judul}
                                                        </h6>
                                                        <p className="text-base leading-relaxed text-muted-foreground">
                                                            {t.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
