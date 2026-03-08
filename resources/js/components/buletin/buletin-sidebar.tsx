import { Link } from '@inertiajs/react';
import {
    BookOpen,
    Clock,
    Library,
    MapPin,
    MessageSquare,
    Newspaper,
} from 'lucide-react';

export default function BuletinSidebar() {
    const readLinks = [
        { label: 'Berita', href: '/berita', icon: Newspaper },
        { label: 'Opini', href: '/opini', icon: MessageSquare },
        { label: 'Spot Baca', href: '/spot-baca', icon: MapPin },
    ];

    return (
        <aside className="sticky top-24 space-y-6">
            {/* Pojok Baca Lainnya Widget */}
            <div className="relative overflow-hidden rounded-4xl bg-white/50 shadow-sm ring-1 ring-border backdrop-blur-xl dark:bg-zinc-900/50">
                <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-blue-500/5" />

                <div className="relative z-10 flex flex-col items-start gap-1 px-6 pt-6 pb-4 md:px-8 md:pt-8">
                    <h3 className="flex items-center gap-2.5 text-[1.1rem] font-bold text-foreground">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-50 to-blue-100/50 text-blue-600 ring-1 ring-blue-500/20 dark:from-blue-900/20 dark:to-blue-800/10 dark:text-blue-400">
                            <Library className="h-4 w-4" />
                        </div>
                        Pojok Baca Lainnya
                    </h3>
                </div>

                <div className="relative z-10 p-4 pt-0 sm:p-6">
                    <ul className="flex flex-col gap-1.5">
                        {readLinks.map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    href={link.href}
                                    className="group flex items-center rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-border active:bg-white active:bg-zinc-800 active:shadow-sm active:ring-1 active:ring-border dark:hover:bg-zinc-800"
                                >
                                    <link.icon className="mr-3 h-4 w-4 text-emerald-600/70 transition-all group-hover:scale-110 group-hover:text-emerald-600 group-active:scale-110 group-active:text-emerald-600" />
                                    <span className="text-sm font-semibold text-muted-foreground transition-colors group-hover:text-foreground group-active:text-foreground">
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
                                className="group flex items-center rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-border active:bg-white active:bg-zinc-800 active:shadow-sm active:ring-1 active:ring-border dark:hover:bg-zinc-800"
                            >
                                <BookOpen className="mr-3 h-4 w-4 text-emerald-600/70 transition-all group-hover:scale-110 group-hover:text-emerald-600 group-active:scale-110 group-active:text-emerald-600" />
                                <span className="text-sm font-semibold text-muted-foreground transition-colors group-hover:text-foreground group-active:text-foreground">
                                    Al-Qur'an Kemenag
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Jadwal Sholat CTA Widget */}
            <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-emerald-50 to-emerald-100/50 shadow-sm ring-1 ring-border dark:from-emerald-950/20 dark:to-emerald-900/10">
                <div className="pointer-events-none absolute -right-4 -bottom-4 p-4 opacity-[0.03]">
                    <Clock className="h-40 w-40" />
                </div>

                <div className="relative z-10 p-6 md:p-8">
                    <h6 className="mb-3 flex items-center gap-2.5 text-[1.1rem] font-bold text-foreground">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
                            <Clock className="h-4 w-4" />
                        </div>
                        Jadwal Sholat Hari Ini
                    </h6>

                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                        Lihat jadwal waktu sholat terkini untuk wilayah Kab.
                        Kapuas.
                    </p>

                    <Link
                        href="/jadwal-sholat"
                        className="group inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg active:-translate-y-0.5 active:bg-emerald-700 active:shadow-lg"
                    >
                        <Clock className="group-hover:animate-spin-slow group-active:animate-spin-slow mr-2 h-4 w-4" />
                        Lihat Jadwal
                    </Link>
                </div>
            </div>
        </aside>
    );
}
