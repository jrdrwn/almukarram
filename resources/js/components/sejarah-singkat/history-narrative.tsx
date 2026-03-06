import { BookOpen } from 'lucide-react';

export default function HistoryNarrative() {
    return (
        <section className="relative z-10 w-full py-16 sm:py-24">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]"></div>

            <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="group relative overflow-hidden rounded-[3rem] bg-linear-to-br from-zinc-50 to-zinc-100/50 p-[1.5px] shadow-2xl shadow-primary/5 transition-transform duration-500 hover:shadow-primary/10 dark:from-zinc-900 dark:to-zinc-950/50 dark:shadow-none">
                    <div className="relative overflow-hidden rounded-[2.9rem] bg-card p-8 md:p-16">
                        {/* Abstract Background pattern for text column */}
                        <div className="pointer-events-none absolute right-0 bottom-0 z-0 h-100 w-100 translate-x-1/3 translate-y-1/3 rounded-full bg-linear-to-tr from-primary/10 to-primary/5 blur-[80px] transition-transform duration-700 group-hover:scale-110" />
                        <div className="pointer-events-none absolute top-0 left-0 z-0 h-100 w-100 -translate-x-1/3 -translate-y-1/3 rounded-full bg-linear-to-tr from-primary/10 to-primary/5 blur-[80px] transition-transform duration-700 group-hover:scale-110" />

                        <div className="relative z-10">
                            <h4 className="mb-8 flex items-center gap-4 text-3xl font-bold text-foreground">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <BookOpen className="h-6 w-6" />
                                </span>
                                Sejarah Pendirian
                            </h4>
                            <div className="space-y-6 text-lg leading-loose text-muted-foreground">
                                <p>
                                    Menyadari pentingnya Masjid sebagai tempat
                                    ibadah serta pembinaan dan pembelaan umat,
                                    maka warga muslim di kawasan Kota Kuala
                                    Kapuas — khususnya wilayah Jalan Tambun
                                    Bungai — mendirikan yayasan bernama{' '}
                                    <strong className="text-foreground">
                                        Yayasan Al-Mukarram
                                    </strong>
                                    . Panitia berusaha keras membangun yayasan
                                    dan masjid di dalam lingkungannya.
                                </p>
                                <p>
                                    Setelah melalui proses panjang dan
                                    berliku-liku, diprakarsai oleh ulama dari{' '}
                                    <strong className="text-foreground">
                                        Muhammadiyah
                                    </strong>{' '}
                                    dan{' '}
                                    <strong className="text-foreground">
                                        Nahdlatul Ulama
                                    </strong>{' '}
                                    sejak permulaan tahun 1987, akhirnya lahan
                                    untuk masjid berhasil diperoleh, surat-surat
                                    perizinan didapat, dan dana berangsur-angsur
                                    terkumpul.
                                </p>
                                <p>
                                    Pada{' '}
                                    <strong className="text-foreground">
                                        tahun 1987
                                    </strong>{' '}
                                    akhirnya dicanangkan pembangunan masjid yang
                                    diharapkan menjadi yang terbesar untuk
                                    Kabupaten Kapuas.{' '}
                                    <strong className="text-foreground">
                                        Gubernur Kalimantan Tengah
                                    </strong>{' '}
                                    meletakkan batu pertama sebagai pertanda
                                    dimulainya pembangunan masjid. Sejak itulah
                                    areal lokasi Masjid juga dibangun gedung
                                    Taman Kanak-kanak Islam, Madrasah
                                    Tsanawiyah, Madrasah Aliyah, dan Sekolah
                                    Tinggi Agama Islam (STAI) — membentuk{' '}
                                    <strong className="text-foreground">
                                        Komplek Islamic Centre
                                    </strong>{' '}
                                    sebagai tempat pembinaan calon-calon
                                    generasi pemakmur masjid.
                                </p>
                                <p>
                                    Setelah hampir tiga tahun berjalan, ternyata
                                    pembangunan Masjid belum terwujud juga.
                                    Melihat kenyataan tersebut, Pengurus Yayasan
                                    yang ketika itu baru saja dibentuk, bertekad
                                    melanjutkan pembangunan masjid. Kegiatan
                                    dimulai kembali pada{' '}
                                    <strong className="text-foreground">
                                        tahun 1990
                                    </strong>
                                    , ketika panitia menerima bantuan dari{' '}
                                    <strong className="text-foreground">
                                        Yayasan Amal Bakti Muslim Pancasila
                                        (YAMP)
                                    </strong>
                                    . Bupati Kapuas pada saat itu adalah{' '}
                                    <strong className="text-foreground">
                                        Endang Kusasi
                                    </strong>
                                    . Pengurus Masjid pada saat itu:
                                </p>

                                <div className="rounded-2xl border-l-4 border-primary bg-primary/5 py-5 pl-6 md:pl-8 dark:bg-primary/10">
                                    <table className="w-full max-w-md text-base">
                                        <tbody className="text-foreground">
                                            <tr>
                                                <td className="w-40 py-1 font-semibold">
                                                    Ketua
                                                </td>
                                                <td>: H. Darbi Zainullah</td>
                                            </tr>
                                            <tr>
                                                <td className="py-1 font-semibold">
                                                    Wakil Ketua
                                                </td>
                                                <td>: H. Kurdi</td>
                                            </tr>
                                            <tr>
                                                <td className="py-1 font-semibold">
                                                    Sekretaris
                                                </td>
                                                <td>: Ahmad Tijam</td>
                                            </tr>
                                            <tr>
                                                <td className="py-1 font-semibold">
                                                    Wakil Sekretaris
                                                </td>
                                                <td>: H. M. Nafiah Ibnor</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p>
                                    Dengan memfungsikan bangunan yang masih
                                    berbentuk kerangka beton sebagai tempat
                                    beribadah dan kegiatan lainnya, dari sinilah
                                    kegiatan penyelesaian pembangunan masjid
                                    dimulai kembali dan terus berjalan.
                                </p>
                                <p>
                                    <strong>Tahun 1997</strong>, masjid yang
                                    sudah berdiri megah dengan nama{' '}
                                    <em>
                                        Masjid Agung Al-Mukarram Kuala Kapuas
                                    </em>{' '}
                                    direnovasi kembali dengan menambah bagian
                                    belakang masjid yang dapat menampung{' '}
                                    <strong className="text-foreground">
                                        1.500 jamaah
                                    </strong>{' '}
                                    — merupakan ide dari Bupati Kapuas saat itu,{' '}
                                    <strong className="text-foreground">
                                        Ir. H. Burhanudin Ali
                                    </strong>
                                    .
                                </p>
                                <p>
                                    Perkembangan berikutnya, mengingat
                                    pertumbuhan penduduk yang sangat tinggi —
                                    khususnya pemeluk agama Islam di Kuala
                                    Kapuas — pada{' '}
                                    <strong className="text-foreground">
                                        tahun 2009
                                    </strong>{' '}
                                    Bupati Kapuas{' '}
                                    <strong className="text-foreground">
                                        Ir. H. Muhammad Mawardi, MM
                                    </strong>{' '}
                                    memanggil Badan Pengelola Masjid Agung
                                    Al-Mukarram untuk musyawarah. Beliau
                                    berharap agar Masjid Agung Al-Mukarram
                                    direnovasi total dan menjadi masjid termegah
                                    di Kota Kuala Kapuas yang dapat menampung
                                    sekitar{' '}
                                    <strong className="text-foreground">
                                        6.361 jamaah
                                    </strong>{' '}
                                    di dalam gedung dan{' '}
                                    <strong className="text-foreground">
                                        4.000 jamaah
                                    </strong>{' '}
                                    di tempat terbuka — sehingga total kapasitas
                                    mencapai{' '}
                                    <strong className="text-foreground">
                                        10.631 jamaah
                                    </strong>
                                    .
                                </p>
                                <p>
                                    Kesepakatan musyawarah menerima bahwa Masjid
                                    Agung Al-Mukarram direnovasi total dengan
                                    harapan dapat diselesaikan dalam beberapa
                                    tahap tahun anggaran. Pada{' '}
                                    <strong className="text-foreground">
                                        hari Sabtu, 9 Maret 2013 M / 26 Rabiul
                                        Akhir 1434 H
                                    </strong>
                                    ,{' '}
                                    <strong className="text-foreground">
                                        Masjid Agung Al-Mukarram Amanah
                                    </strong>{' '}
                                    resmi diresmikan oleh Bupati Kapuas,{' '}
                                    <strong className="text-foreground">
                                        Ir. H. Muhammad Mawardi, MM
                                    </strong>
                                    .
                                </p>
                                <p className="mt-8 mb-0 border-t border-border/50 pt-6 pb-2 text-sm italic opacity-75">
                                    Sumber: simas.kemenag.go.id
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
