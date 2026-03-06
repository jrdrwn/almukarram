import {
    Baby,
    BookOpen,
    BookText,
    GraduationCap,
    History,
    Library,
    Users,
} from 'lucide-react';

export default function SpotBacaCollections() {
    const koleksi = [
        {
            ikon: BookOpen,
            judul: "Tafsir Al-Qur'an",
            desc: "Berbagai kitab tafsir al-Qur'an dari ulama klasik dan kontemporer.",
            color: 'text-amber-500',
            bgColor: 'bg-amber-100 dark:bg-amber-950/50',
            borderColor: 'group-hover:border-amber-500/50',
        },
        {
            ikon: BookText,
            judul: 'Hadits & Sunnah',
            desc: 'Koleksi kitab Hadits Shahih Bukhari, Muslim, dan lainnya.',
            color: 'text-sky-500',
            bgColor: 'bg-sky-100 dark:bg-sky-950/50',
            borderColor: 'group-hover:border-sky-500/50',
        },
        {
            ikon: GraduationCap,
            judul: 'Fiqih Islam',
            desc: 'Buku-buku fiqih dari berbagai mazhab dan panduan ibadah praktis.',
            color: 'text-violet-500',
            bgColor: 'bg-violet-100 dark:bg-violet-950/50',
            borderColor: 'group-hover:border-violet-500/50',
        },
        {
            ikon: History,
            judul: 'Sejarah Islam',
            desc: 'Buku sejarah peradaban Islam, sirah nabawiyah, dan biografi ulama.',
            color: 'text-rose-500',
            bgColor: 'bg-rose-100 dark:bg-rose-950/50',
            borderColor: 'group-hover:border-rose-500/50',
        },
        {
            ikon: Users,
            judul: 'Sosial & Umum',
            desc: 'Buku umum, pengembangan diri, dan ilmu pengetahuan populer.',
            color: 'text-indigo-500',
            bgColor: 'bg-indigo-100 dark:bg-indigo-950/50',
            borderColor: 'group-hover:border-indigo-500/50',
        },
        {
            ikon: Baby,
            judul: 'Buku Anak',
            desc: 'Cerita islami dan buku edukasi untuk anak-anak usia dini.',
            color: 'text-teal-500',
            bgColor: 'bg-teal-100 dark:bg-teal-950/50',
            borderColor: 'group-hover:border-teal-500/50',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-zinc-50 py-24 dark:bg-zinc-950">
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[32px_32px]" />

            <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-20 flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="animate-bounce-subtle mb-4 inline-flex items-center justify-center rounded-2xl bg-white p-3 text-emerald-600 shadow-xl ring-1 shadow-emerald-500/10 ring-emerald-500/20 dark:bg-zinc-900">
                        <Library className="h-7 w-7" />
                    </div>
                    <h3 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                        Koleksi{' '}
                        <span className="bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                            Tersedia
                        </span>
                    </h3>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                        Nikmati bahan bacaan berkualitas untuk memperkaya
                        khazanah ilmu umat. Mulai dari kitab tafsir hingga buku
                        anak-anak.
                    </p>
                </div>

                {/* Modern Bento Grid Koleksi */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {koleksi.map((item, index) => {
                        const Icon = item.ikon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-4xl border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 dark:bg-zinc-900 ${item.borderColor}`}
                            >
                                {/* Background glow effect on hover */}
                                <div
                                    className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10 ${item.bgColor} rounded-full blur-2xl`}
                                />

                                {/* Large decorative icon */}
                                <div className="pointer-events-none absolute top-0 right-0 translate-x-4 -translate-y-4 transform p-6 opacity-[0.03] transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-12 group-hover:opacity-[0.06]">
                                    <Icon className="h-40 w-40" />
                                </div>

                                <div className="relative z-10 flex h-full flex-col gap-6">
                                    <div
                                        className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${item.bgColor}`}
                                    >
                                        <Icon
                                            className={`h-8 w-8 ${item.color}`}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h4 className="text-xl font-bold text-foreground transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                                            {item.judul}
                                        </h4>
                                        <p className="leading-relaxed text-muted-foreground">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
