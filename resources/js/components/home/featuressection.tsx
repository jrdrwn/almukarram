import {
    BookOpen,
    CalendarDays,
    GraduationCap,
    Megaphone,
    MessageCircle,
    Wallet,
} from 'lucide-react';

const features = [
    {
        title: 'Ibadah',
        description:
            'Fungsi utama Masjid adalah terlaksananya ibadah Shalat berjamaah 5 waktu. Ibadah lain terlaksana dengan dikoordinir oleh bidang berwenang.',
        icon: BookOpen,
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10',
    },
    {
        title: 'Pendidikan',
        description:
            "Masjid juga menyelenggarakan aspek pendidikan. Dari belajar membaca Al-Qur'an untuk anak-anak hingga kajian-kajian Islam untuk masyarakat umum.",
        icon: GraduationCap,
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
    },
    {
        title: 'Keuangan',
        description:
            'Zakat, infaq dan shadaqah dikelola oleh profesional berbasis digital dengan asas transparansi.',
        icon: Wallet,
        color: 'text-amber-500',
        bg: 'bg-amber-500/10',
    },
    {
        title: 'Event',
        description:
            'Setiap event/kegiatan terselenggara dengan perencanaan yang matang dan koordinasi yang baik.',
        icon: CalendarDays,
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
    },
    {
        title: 'Konsultasi (Ibadah/Hukum)',
        description:
            'Layanan tanya jawab dan bimbingan terkait masalah ibadah, hukum Islam, serta problematika kehidupan.',
        icon: MessageCircle,
        color: 'text-teal-500',
        bg: 'bg-teal-500/10',
    },
    {
        title: 'Pengaduan Jamaah',
        description:
            'Layanan aduan dan aspirasi bagi jamaah untuk perbaikan kualitas layanan dan fasilitas masjid.',
        icon: Megaphone,
        color: 'text-rose-500',
        bg: 'bg-rose-500/10',
    },
];

export default function FeaturesSection() {
    return (
        <section className="relative z-10 mx-auto max-w-380 px-4">
            <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
                <div className="text-center md:text-left">
                    <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
                        <span className="h-px w-8 bg-primary"></span>
                        <span className="text-sm font-bold tracking-widest text-primary uppercase">
                            Layanan Kami
                        </span>
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        Eksplorasi Program &{' '}
                        <span className="font-light text-muted-foreground italic">
                            Layanan Expert
                        </span>
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col items-start overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-zinc-50 p-8 transition-all hover:shadow-lg active:bg-zinc-900/80 active:shadow-lg lg:p-10 dark:border-zinc-800/50 dark:bg-zinc-900 dark:hover:bg-zinc-900/80"
                    >
                        {/* Grid Texture Background */}
                        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)] bg-size-[24px_24px] opacity-60 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100 dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>

                        {/* Inner Highlight Gradient */}
                        <div className="absolute inset-x-0 -top-20 -z-10 h-64 bg-linear-to-b from-primary/5 via-primary/5 to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100"></div>

                        <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-transform duration-500 group-hover:scale-110 group-active:scale-110 dark:border-zinc-800 dark:bg-zinc-950">
                            <feature.icon
                                className="h-7 w-7 text-primary"
                                strokeWidth={1.5}
                            />
                        </div>
                        <h3 className="relative z-10 mb-4 text-xl font-bold tracking-tight text-foreground">
                            {feature.title}
                        </h3>
                        <p className="relative z-10 text-base leading-relaxed text-muted-foreground">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
