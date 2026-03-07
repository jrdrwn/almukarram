import { Link } from '@inertiajs/react';
import {
    BookOpen,
    History,
    MapPin,
    Newspaper,
    PenLine,
    Send,
    User,
} from 'lucide-react';
import type { RelatedOpini } from './opini-related';

interface OpiniSidebarProps {
    latestOpini: RelatedOpini[];
    currentSlug: string;
}

const readLinks = [
    { label: 'Berita', href: '/berita', icon: Newspaper },
    { label: 'Buletin', href: '/buletin', icon: BookOpen },
    { label: 'Spot Baca', href: '/spot-baca', icon: MapPin },
];

export default function OpiniDetailSidebar({
    latestOpini,
    currentSlug,
}: OpiniSidebarProps) {
    return (
        <aside className="sticky top-24 space-y-8">
            {/* Opini Terbaru Widget */}
            {latestOpini.length > 0 && (
                <div className="relative overflow-hidden rounded-4xl bg-white/50 shadow-sm ring-1 ring-border backdrop-blur-xl dark:bg-zinc-900/50">
                    <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-violet-500/5" />
                    <div className="relative z-10 flex flex-col items-start gap-1 px-6 pt-6 pb-4 md:px-8 md:pt-8">
                        <h3 className="flex items-center gap-2.5 text-[1.1rem] font-bold text-foreground">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-violet-50 to-violet-100/50 text-violet-600 ring-1 ring-violet-500/20 dark:from-violet-900/20 dark:to-violet-800/10 dark:text-violet-400">
                                <History className="h-4 w-4" />
                            </div>
                            Opini Terbaru
                        </h3>
                    </div>
                    <div className="relative z-10 flex flex-col gap-2 p-4 pt-0 sm:p-6">
                        {latestOpini.map((item, idx) => (
                            <Link
                                key={idx}
                                href={`/opini-detail/${item.slug}`}
                                className={`group rounded-2xl p-3 transition-all duration-300 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-border dark:hover:bg-zinc-800 ${
                                    item.slug === currentSlug
                                        ? 'bg-violet-50/80 ring-1 ring-violet-200 dark:bg-violet-900/20 dark:ring-violet-500/20'
                                        : ''
                                }`}
                            >
                                <span className="mb-1.5 block text-[10px] font-bold tracking-widest text-violet-600 uppercase dark:text-violet-400">
                                    {item.category}
                                </span>
                                <h4
                                    className={`mb-2 line-clamp-2 text-[13px] leading-snug font-bold transition-colors group-hover:text-violet-600 ${
                                        item.slug === currentSlug
                                            ? 'text-violet-700 dark:text-violet-400'
                                            : 'text-foreground'
                                    }`}
                                >
                                    {item.title}
                                </h4>
                                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                                    <User className="h-3 w-3" />
                                    <span className="font-medium">{item.author}</span>
                                    <span className="opacity-40">·</span>
                                    <span>{item.date}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Pojok Baca Lainnya Widget */}
            <div className="relative overflow-hidden rounded-4xl bg-white/50 shadow-sm ring-1 ring-border backdrop-blur-xl dark:bg-zinc-900/50">
                <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-blue-500/5" />
                <div className="relative z-10 flex flex-col items-start gap-1 px-6 pt-6 pb-4 md:px-8 md:pt-8">
                    <h3 className="flex items-center gap-2.5 text-[1.1rem] font-bold text-foreground">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-blue-50 to-blue-100/50 text-blue-600 ring-1 ring-blue-500/20 dark:from-blue-900/20 dark:to-blue-800/10 dark:text-blue-400">
                            <BookOpen className="h-4 w-4" />
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
                                    className="group flex items-center rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-border dark:hover:bg-zinc-800"
                                >
                                    <link.icon className="mr-3 h-4 w-4 text-emerald-600/70 transition-all group-hover:scale-110 group-hover:text-emerald-600" />
                                    <span className="text-sm font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
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
                                className="group flex items-center rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-border dark:hover:bg-zinc-800"
                            >
                                <BookOpen className="mr-3 h-4 w-4 text-emerald-600/70 transition-all group-hover:scale-110 group-hover:text-emerald-600" />
                                <span className="text-sm font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
                                    Al-Qur'an Kemenag
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Kirim Opini CTA */}
            <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-violet-600 to-indigo-700 shadow-md ring-1 ring-violet-600/20">
                <div className="pointer-events-none absolute -right-4 -bottom-4 p-4 opacity-[0.1]">
                    <PenLine className="h-40 w-40 text-white" />
                </div>
                <div className="relative z-10 p-6 md:p-8">
                    <h3 className="mb-3 flex items-center gap-2.5 text-[1.1rem] font-bold text-white">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white shadow-sm ring-1 ring-white/30 backdrop-blur-sm">
                            <Send className="h-4 w-4" />
                        </div>
                        Kirim Opini Anda
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-violet-50 opacity-90">
                        Bagikan pemikiran dan gagasan islami Anda kepada jamaah
                        dan masyarakat luas.
                    </p>
                    <Link
                        href="/kontak"
                        className="group inline-flex w-max items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-violet-700 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-violet-50 hover:shadow-xl"
                    >
                        <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        Hubungi Kami
                    </Link>
                </div>
            </div>
        </aside>
    );
}
