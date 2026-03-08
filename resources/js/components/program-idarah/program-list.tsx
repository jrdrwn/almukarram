export default function ProgramList() {
    const programs = [
        {
            no: '01',
            judul: 'Struktur Organisasi',
            desc: 'Penyusunan dan penetapan struktur organisasi BPMA yang jelas dengan pembagian tugas, fungsi, dan tanggung jawab yang terperinci.',
        },
        {
            no: '02',
            judul: 'Rencana Program Kerja',
            desc: 'Penyusunan rencana program kerja tahunan yang terstruktur dan terukur sebagai acuan pelaksanaan kegiatan seluruh bidang.',
        },
        {
            no: '03',
            judul: "Sistem Administrasi dan Keuangan Syari'ah",
            desc: "Penerapan sistem administrasi dan pengelolaan keuangan yang sesuai dengan prinsip-prinsip syari'ah Islam.",
        },
        {
            no: '04',
            judul: 'Sistem Administrasi dan Keuangan Berbasis Digital (Simasjid)',
            desc: 'Penggunaan aplikasi Simasjid untuk digitalisasi sistem administrasi dan pengelolaan keuangan masjid secara modern dan transparan.',
        },
        {
            no: '05',
            judul: 'Rapat Rutin & Rapat Monitoring-Evaluasi',
            desc: 'Penyelenggaraan rapat rutin pengurus dan rapat monitoring-evaluasi berkala untuk memastikan seluruh program berjalan optimal.',
        },
        {
            no: '06',
            judul: 'Memenuhi Aspek Legal IMB dan Lainnya',
            desc: 'Pengurusan dan pemenuhan seluruh aspek legalitas masjid termasuk Izin Mendirikan Bangunan (IMB) dan dokumen legal lainnya.',
        },
        {
            no: '07',
            judul: 'Data Jamaah dan Lingkungan yang Selalu Update',
            desc: 'Pemeliharaan dan pembaruan data jamaah serta data lingkungan sekitar masjid secara berkala dan akurat.',
        },
        {
            no: '08',
            judul: 'Data Mitra Kerja, Donatur, Sponsor Selalu Update',
            desc: 'Pengelolaan dan pembaruan data mitra kerja, donatur, dan sponsor masjid agar informasi selalu terkini dan terorganisir dengan baik.',
        },
        {
            no: '09',
            judul: 'Pengadaan Alkah Baru',
            desc: 'Pengadaan tanah wakaf (alkah) baru sebagai aset masjid untuk menunjang pengembangan fasilitas dan kegiatan masjid ke depan.',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-zinc-50/50 py-24 dark:bg-zinc-900/10">
            <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 inline-block bg-linear-to-r from-primary to-emerald-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                        Program Kerja Bidang Idarah
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Program-program unggulan kami dalam mengelola
                        administrasi dan manajemen operasional masjid.
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
