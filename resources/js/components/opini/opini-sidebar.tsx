import { Link } from '@inertiajs/react';
import { BookOpen, MapPin, Newspaper, PenLine, Send } from 'lucide-react';

export default function OpiniSidebar() {
    const readLinks = [
        { label: 'Berita', href: '/berita', icon: Newspaper },
        { label: 'Buletin', href: '/buletin', icon: BookOpen },
        { label: 'Spot Baca', href: '/spot-baca', icon: MapPin },
    ];

    return (
        <aside className="space-y-6 sticky top-24">

            {/* Pojok Baca Lainnya Widget */}
            <div className="rounded-4xl shadow-sm ring-1 ring-border bg-white/50 backdrop-blur-xl dark:bg-zinc-900/50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />

                <div className="pb-4 pt-6 md:pt-8 px-6 md:px-8 flex flex-col items-start gap-1 relative z-10">
                    <h6 className="flex items-center gap-2.5 text-[1.1rem] font-bold text-foreground">
                        <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-lg text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20">
                            <BookOpen className="h-4 w-4" />
                        </div>
                        Pojok Baca Lainnya
                    </h6>
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

            {/* Kirim Opini CTA Widget */}
            <div className="rounded-4xl shadow-md ring-1 ring-emerald-600/20 bg-linear-to-br from-emerald-600 to-teal-700 overflow-hidden relative">
                <div className="absolute -bottom-4 -right-4 p-4 opacity-[0.1] pointer-events-none transition-transform duration-500 hover:scale-110">
                    <PenLine className="w-40 h-40 text-white" />
                </div>

                <div className="p-6 md:p-8 relative z-10">
                    <h6 className="flex items-center gap-2.5 text-[1.1rem] font-bold text-white mb-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg text-white shadow-sm ring-1 ring-white/30">
                            <Send className="h-4 w-4" />
                        </div>
                        Kirim Opini Anda
                    </h6>

                    <p className="text-emerald-50 text-sm mb-6 leading-relaxed opacity-90">
                        Bagikan pemikiran dan gagasan islami Anda kepada jamaah dan masyarakat luas.
                    </p>

                    <Link
                        href="/kontak"
                        className="inline-flex items-center justify-center w-max px-6 py-2.5 text-sm font-semibold text-emerald-700 transition-all bg-white hover:bg-emerald-50 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                    >
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Hubungi Kami
                    </Link>
                </div>
            </div>

        </aside>
    );
}
