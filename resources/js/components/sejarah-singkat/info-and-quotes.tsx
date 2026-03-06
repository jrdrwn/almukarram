import {
    Building,
    Expand,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Radio,
    Users,
} from 'lucide-react';

export default function InfoAndQuotes() {
    const infoList = [
        {
            ikon: <MapPin className="h-6 w-6 text-primary" />,
            label: 'Alamat',
            nilai: 'Jl. Tambun Bungai, Komplek Islamic Center, Kuala Kapuas, Kalimantan Tengah',
        },
        {
            ikon: <Building className="h-6 w-6 text-primary" />,
            label: 'Status',
            nilai: 'Masjid Agung Kabupaten Kapuas',
        },
        {
            ikon: <Users className="h-6 w-6 text-primary" />,
            label: 'Kapasitas',
            nilai: '10.631 jamaah (6.361 dalam gedung + 4.000 di tempat terbuka)',
        },
        {
            ikon: <Expand className="h-6 w-6 text-primary" />,
            label: 'Luas Kawasan',
            nilai: '± 3 Hektar (Komplek Islamic Center)',
        },
        {
            ikon: <Phone className="h-6 w-6 text-primary" />,
            label: 'Telepon',
            nilai: '(0513) 24246',
        },
        {
            ikon: <Mail className="h-6 w-6 text-primary" />,
            label: 'Email',
            nilai: 'masjid.almukarram132@gmail.com',
        },
        {
            ikon: <Instagram className="h-6 w-6 text-primary" />,
            label: 'Instagram',
            nilai: '@masjidagung.almukarram_amanah',
        },
        {
            ikon: <Radio className="h-6 w-6 text-primary" />,
            label: 'Radio Dakwah',
            nilai: '90.5 FM',
        },
    ];

    return (
        <section className="relative z-10 w-full py-16 sm:py-24">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]"></div>

            <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
                    <div className="text-center md:text-left">
                        <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                Informasi Singkat
                            </span>
                        </div>
                        <h2 className="text-3xl font-black text-foreground md:text-5xl">
                            Identitas & Lokasi
                        </h2>
                    </div>
                </div>

                <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {infoList.map((inf, i) => (
                        <div
                            key={i}
                            className="group relative h-full overflow-hidden rounded-[2.5rem] bg-linear-to-br from-zinc-50 to-zinc-100/50 p-1 shadow-lg shadow-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 dark:from-zinc-900 dark:to-zinc-950/50 dark:shadow-none"
                        >
                            <div className="relative flex h-full flex-col items-start gap-4 rounded-[2.3rem] bg-card p-8">
                                {/* Card inner glow on hover */}
                                <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary/10 blur-[30px] transition-transform duration-500 group-hover:scale-150"></div>
                                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20">
                                    {inf.ikon}
                                </div>
                                <div className="relative z-10">
                                    <div className="mb-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                                        {inf.label}
                                    </div>
                                    <div className="text-base leading-relaxed font-semibold text-foreground">
                                        {inf.nilai}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Ayat Penutup */}
            </div>
        </section>
    );
}
