import { Baby, BookOpen, BookText, GraduationCap, History, Library, Users } from 'lucide-react';

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
        <section className="relative overflow-hidden py-24 bg-zinc-50 dark:bg-zinc-950">
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

            <div className="max-w-380 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-20">
                    <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-zinc-900 text-emerald-600 rounded-2xl ring-1 ring-emerald-500/20 shadow-xl shadow-emerald-500/10 mb-4 animate-bounce-subtle">
                        <Library className="h-7 w-7" />
                    </div>
                    <h3 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                        Koleksi <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">Tersedia</span>
                    </h3>
                    <p className="max-w-2xl text-lg text-muted-foreground mt-4 leading-relaxed">
                        Nikmati bahan bacaan berkualitas untuk memperkaya khazanah ilmu umat. Mulai dari kitab tafsir hingga buku anak-anak.
                    </p>
                </div>

                {/* Modern Bento Grid Koleksi */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {koleksi.map((item, index) => {
                        const Icon = item.ikon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden bg-white dark:bg-zinc-900 rounded-4xl border border-border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 ${item.borderColor}`}
                            >
                                {/* Background glow effect on hover */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${item.bgColor} blur-2xl rounded-full`} />

                                {/* Large decorative icon */}
                                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-500 pointer-events-none transform translate-x-4 -translate-y-4 group-hover:-translate-y-2 group-hover:rotate-12">
                                    <Icon className="h-40 w-40" />
                                </div>

                                <div className="flex flex-col h-full relative z-10 gap-6">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${item.bgColor}`}>
                                        <Icon className={`h-8 w-8 ${item.color}`} />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h4 className="text-xl font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                            {item.judul}
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed">
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
