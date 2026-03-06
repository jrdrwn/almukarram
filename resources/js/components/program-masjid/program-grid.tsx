import {
    BookOpenText,
    CalendarDays,
    Clock,
    GraduationCap,
    HandCoins,
    MoonStar,
    Users
} from 'lucide-react';

const programs = [
    {
        title: 'Sholat Berjamaah',
        description:
            'Pelaksanaan sholat fardhu 5 waktu secara berjamaah dengan imam tetap yang berpengalaman dan bacaan tartil.',
        icon: Clock,
        warna: 'text-emerald-700 dark:text-emerald-400',
        bgWarna: 'bg-emerald-100 dark:bg-emerald-900/30',
        borderWarna: 'group-hover:border-emerald-500/50',
    },
    {
        title: 'Sholat Jumat',
        description:
            'Pelaksanaan sholat Jumat mingguan disertai khutbah yang ilmiah dan inspiratif dari para khatib terpilih.',
        icon: Users,
        warna: 'text-green-700 dark:text-green-400',
        bgWarna: 'bg-green-100 dark:bg-green-900/30',
        borderWarna: 'group-hover:border-green-500/50',
    },
    {
        title: 'Kajian Rutin',
        description:
            'Kajian ilmu agama Islam yang diselenggarakan secara rutin setiap minggu dengan berbagai tema keislaman.',
        icon: BookOpenText,
        warna: 'text-teal-700 dark:text-teal-400',
        bgWarna: 'bg-teal-100 dark:bg-teal-900/30',
        borderWarna: 'group-hover:border-teal-500/50',
    },
    {
        title: 'TPQ / TPA',
        description:
            "Taman Pendidikan Al-Qur'an untuk anak-anak agar dapat membaca dan memahami Al-Qur'an dengan baik dan benar.",
        icon: GraduationCap,
        warna: 'text-lime-700 dark:text-lime-400',
        bgWarna: 'bg-lime-100 dark:bg-lime-900/30',
        borderWarna: 'group-hover:border-lime-500/50',
    },
    {
        title: 'Zakat & Infaq',
        description:
            'Pengelolaan zakat, infaq, dan shadaqah secara profesional berbasis digital dengan prinsip transparansi.',
        icon: HandCoins,
        warna: 'text-emerald-700 dark:text-emerald-400',
        bgWarna: 'bg-emerald-100 dark:bg-emerald-900/30',
        borderWarna: 'group-hover:border-emerald-500/50',
    },
    {
        title: 'Majelis Taklim',
        description:
            'Pembinaan ibu-ibu jamaah melalui majelis taklim dengan ceramah, tanya jawab, dan kegiatan sosial keagamaan.',
        icon: Users,
        warna: 'text-green-700 dark:text-green-400',
        bgWarna: 'bg-green-100 dark:bg-green-900/30',
        borderWarna: 'group-hover:border-green-500/50',
    },
    {
        title: 'Peringatan Hari Besar Islam',
        description:
            "Penyelenggaraan peringatan hari-hari besar Islam seperti Maulid Nabi, Isra Mi'raj, Nuzulul Qur'an, dan lainnya.",
        icon: CalendarDays,
        warna: 'text-teal-700 dark:text-teal-400',
        bgWarna: 'bg-teal-100 dark:bg-teal-900/30',
        borderWarna: 'group-hover:border-teal-500/50',
    },
    {
        title: "I'tikaf Ramadhan",
        description:
            "Program i'tikaf di bulan Ramadhan dengan berbagai kegiatan ibadah, tadarus, dan pembinaan spiritual.",
        icon: MoonStar,
        warna: 'text-lime-700 dark:text-lime-400',
        bgWarna: 'bg-lime-100 dark:bg-lime-900/30',
        borderWarna: 'group-hover:border-lime-500/50',
    },
];

export default function ProgramGrid() {
    return (
        <section className="relative pb-16 pt-12 md:pb-24 md:pt-16">
            {/* Background Blur Elements */}
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-120 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[120px] dark:bg-emerald-500/10"></div>

            <div className="container relative z-10 mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                {/* Programs Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {programs.map((program, index) => {
                        const Icon = program.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 dark:bg-zinc-900/50 dark:hover:bg-zinc-900/80 ${program.borderWarna}`}
                            >
                                {/* Subtle background gradient inside card */}
                                <div className="absolute inset-0 bg-linear-to-br from-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-white/5"></div>

                                <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                                    <div className={`absolute inset-0 rounded-2xl ${program.bgWarna} opacity-50`}></div>
                                    <Icon className={`relative z-10 h-10 w-10 ${program.warna}`} />
                                </div>
                                <h3 className="relative z-10 mb-4 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                                    {program.title}
                                </h3>
                                <p className="relative z-10 text-muted-foreground leading-relaxed grow text-sm">
                                    {program.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
