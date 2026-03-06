import {
    Clock,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Youtube,
} from 'lucide-react';

export function KontakInfo() {
    return (
        <div className="animate-in space-y-10 duration-700 fade-in slide-in-from-bottom-8">
            <div>
                <span className="mb-6 inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                    Hubungi Kami
                </span>
                <h2 className="mt-2 mb-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                    Kami Siap{' '}
                    <span className="text-emerald-500 italic">
                        Membantu Anda
                    </span>
                </h2>
                <div className="mb-6 h-1 w-16 rounded-full bg-emerald-500"></div>
                <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                    Jangan ragu untuk menghubungi kami. Kami akan dengan senang
                    hati menjawab pertanyaan dan membantu Anda.
                </p>
            </div>

            <div className="flex flex-col gap-8">
                {/* Alamat */}
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                        <MapPin className="h-5 w-5" />
                    </div>
                    <div className="pt-1">
                        <h3 className="mb-1 text-base font-bold text-foreground">
                            Alamat
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Jl. Tambun Bungai, Komplek Islamic Center
                            <br />
                            Kabupaten Kapuas, Kalimantan Tengah
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {/* Telepon */}
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500 dark:bg-orange-950/50 dark:text-orange-400">
                            <Phone className="h-5 w-5" />
                        </div>
                        <div className="pt-1">
                            <p className="mb-1 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                                TELEPON
                            </p>
                            <a
                                href="tel:051324246"
                                className="block font-bold text-foreground transition-colors hover:text-emerald-600"
                            >
                                (0513) 24246
                            </a>
                        </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                            <MessageCircle className="h-5 w-5" />
                        </div>
                        <div className="pt-1">
                            <p className="mb-1 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                                WHATSAPP
                            </p>
                            <a
                                href="https://wa.me/+6281348521955"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block font-bold text-foreground transition-colors hover:text-emerald-600"
                            >
                                081348521955
                            </a>
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500 dark:bg-blue-950/50 dark:text-blue-400">
                        <Mail className="h-5 w-5" />
                    </div>
                    <div className="pt-1">
                        <p className="mb-1 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                            EMAIL
                        </p>
                        <a
                            href="mailto:masjid.almukarram132@gmail.com"
                            className="block font-bold text-foreground transition-colors hover:text-emerald-600"
                        >
                            masjid.almukarram132@gmail.com
                        </a>
                    </div>
                </div>

                {/* Jam Operasional */}
                <div className="mt-2 flex items-start gap-4 rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6 dark:border-emerald-900/50 dark:bg-emerald-950/20">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-emerald-600 dark:text-emerald-400">
                        <Clock className="h-6 w-6" />
                    </div>
                    <div className="w-full pt-1">
                        <h3 className="mb-4 font-bold text-emerald-600 dark:text-emerald-400">
                            Jam Operasional Sekretariat
                        </h3>
                        <ul className="w-full space-y-3 text-sm">
                            <li className="flex items-center justify-between border-b border-emerald-100/50 pb-3 dark:border-emerald-900/30">
                                <span className="text-muted-foreground">
                                    Senin – Jumat:
                                </span>{' '}
                                <span className="font-bold text-foreground">
                                    08.00 – 16.00 WIB
                                </span>
                            </li>
                            <li className="flex items-center justify-between pt-1">
                                <span className="text-muted-foreground">
                                    Sabtu:
                                </span>{' '}
                                <span className="font-bold text-foreground">
                                    08.00 – 12.00 WIB
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
                <h3 className="mb-5 font-bold text-foreground">
                    Media Sosial Kami
                </h3>
                <div className="flex flex-col gap-3">
                    <a
                        href="https://www.instagram.com/masjidagung.almukarram_amanah/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-3 transition-all hover:border-pink-500 hover:shadow-md"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600 transition-all group-hover:bg-pink-500 group-hover:text-white dark:bg-pink-950/50 dark:text-pink-400 dark:group-hover:text-white">
                            <Instagram className="h-6 w-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold text-foreground">
                                Instagram
                            </p>
                            <p className="truncate text-sm text-muted-foreground">
                                @masjidagung.almukarram_amanah
                            </p>
                        </div>
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=61576298510239"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-3 transition-all hover:border-blue-600 hover:shadow-md"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/50 dark:text-blue-400 dark:group-hover:text-white">
                            <Facebook className="h-6 w-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold text-foreground">
                                Facebook
                            </p>
                            <p className="truncate text-sm text-muted-foreground">
                                Masjid Agung Al Mukarram Amanah
                            </p>
                        </div>
                    </a>

                    <a
                        href="https://www.youtube.com/@MasjidAgung-AlMukarramAmanah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-3 transition-all hover:border-red-600 hover:shadow-md"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-all group-hover:bg-red-600 group-hover:text-white dark:bg-red-950/50 dark:text-red-400 dark:group-hover:text-white">
                            <Youtube className="h-6 w-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold text-foreground">
                                YouTube
                            </p>
                            <p className="truncate text-sm text-muted-foreground">
                                @MasjidAgung-AlMukarramAmanah
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
