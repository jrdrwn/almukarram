import { Link } from '@inertiajs/react';
import { BookOpen, Clock, Library, MapPin, MessageSquare, Newspaper } from 'lucide-react';

export default function BuletinSidebar() {
    const readLinks = [
        { label: 'Berita', href: '/berita', icon: Newspaper },
        { label: 'Opini', href: '/opini', icon: MessageSquare },
        { label: 'Spot Baca', href: '/spot-baca', icon: MapPin },
    ];

    return (
        <aside className="space-y-6 sticky top-24">

            {/* Pojok Baca Lainnya Widget */}
            <div className="rounded-4xl shadow-sm ring-1 ring-border bg-white/50 backdrop-blur-xl dark:bg-zinc-900/50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />

                <div className="pb-4 pt-6 md:pt-8 px-6 md:px-8 flex flex-col items-start gap-1 relative z-10">
                    <h3 className="flex items-center gap-2.5 text-[1.1rem] font-bold text-foreground">
                        <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-lg text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20">
                            <Library className="h-4 w-4" />
                        </div>
                        Pojok Baca Lainnya
                    </h3>
                </div>

                <div className="p-4 sm:p-6 pt-0 relative z-10">
                    <ul className="flex flex-col gap-1.5">
                        {readLinks.map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    href={link.href}
                                    className="group flex items-center px-4 py-3 rounded-2xl hover:bg-white dark:hover:bg-zinc-800 hover:shadow-sm hover:ring-1 hover:ring-border transition-all duration-300"
                                >
                                    <link.icon className="h-4 w-4 mr-3 text-emerald-600/70 group-hover:text-emerald-600 group-hover:scale-110 transition-all" />
                                    <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                                        {link.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a
                                href="https://quran.kemenag.go.id/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center px-4 py-3 rounded-2xl hover:bg-white dark:hover:bg-zinc-800 hover:shadow-sm hover:ring-1 hover:ring-border transition-all duration-300"
                            >
                                <BookOpen className="h-4 w-4 mr-3 text-emerald-600/70 group-hover:text-emerald-600 group-hover:scale-110 transition-all" />
                                <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                                    Al-Qur'an Kemenag
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Jadwal Sholat CTA Widget */}
            <div className="rounded-4xl shadow-sm ring-1 ring-border bg-linear-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/20 dark:to-emerald-900/10 overflow-hidden relative">
                <div className="absolute -bottom-4 -right-4 p-4 opacity-[0.03] pointer-events-none">
                    <Clock className="w-40 h-40" />
                </div>

                <div className="p-6 md:p-8 relative z-10">
                    <h6 className="flex items-center gap-2.5 text-[1.1rem] font-bold text-foreground mb-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-emerald-600 rounded-lg text-white shadow-sm">
                            <Clock className="h-4 w-4" />
                        </div>
                        Jadwal Sholat Hari Ini
                    </h6>

                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        Lihat jadwal waktu sholat terkini untuk wilayah Kab. Kapuas.
                    </p>

                    <Link
                        href="/jadwal-sholat"
                        className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white transition-all bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
                    >
                        <Clock className="w-4 h-4 mr-2 group-hover:animate-spin-slow" />
                        Lihat Jadwal
                    </Link>
                </div>
            </div>

        </aside>
    );
}
