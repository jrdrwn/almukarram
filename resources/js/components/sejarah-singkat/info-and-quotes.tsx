import { Building, Expand, Instagram, Mail, MapPin, Phone, Radio, Users } from "lucide-react";

export default function InfoAndQuotes() {
    const infoList = [
        { ikon: <MapPin className="text-primary w-6 h-6" />, label: 'Alamat', nilai: 'Jl. Tambun Bungai, Komplek Islamic Center, Kuala Kapuas, Kalimantan Tengah' },
        { ikon: <Building className="text-primary w-6 h-6" />, label: 'Status', nilai: 'Masjid Agung Kabupaten Kapuas' },
        { ikon: <Users className="text-primary w-6 h-6" />, label: 'Kapasitas', nilai: '10.631 jamaah (6.361 dalam gedung + 4.000 di tempat terbuka)' },
        { ikon: <Expand className="text-primary w-6 h-6" />, label: 'Luas Kawasan', nilai: '± 3 Hektar (Komplek Islamic Center)' },
        { ikon: <Phone className="text-primary w-6 h-6" />, label: 'Telepon', nilai: '(0513) 24246' },
        { ikon: <Mail className="text-primary w-6 h-6" />, label: 'Email', nilai: 'masjid.almukarram132@gmail.com' },
        { ikon: <Instagram className="text-primary w-6 h-6" />, label: 'Instagram', nilai: '@masjidagung.almukarram_amanah' },
        { ikon: <Radio className="text-primary w-6 h-6" />, label: 'Radio Dakwah', nilai: '90.5 FM' },
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
                        <h2 className="text-3xl font-black md:text-5xl text-foreground">
                            Identitas & Lokasi
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {infoList.map((inf, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-zinc-50 to-zinc-100/50 p-1 shadow-lg shadow-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 dark:from-zinc-900 dark:to-zinc-950/50 dark:shadow-none h-full">
                            <div className="relative flex h-full flex-col items-start gap-4 p-8 bg-card rounded-[2.3rem]">
                                {/* Card inner glow on hover */}
                                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-[30px] transition-transform duration-500 group-hover:scale-150"></div>
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0 relative z-10">
                                    {inf.ikon}
                                </div>
                                <div className="relative z-10">
                                    <div className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-2">{inf.label}</div>
                                    <div className="font-semibold text-foreground text-base leading-relaxed">{inf.nilai}</div>
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
