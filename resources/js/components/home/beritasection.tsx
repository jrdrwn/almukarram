import type { BeritaItem, BeritaUtama } from '@/types/home';
import { Link } from '@inertiajs/react';
import { ArrowRight, Calendar, Eye, User } from 'lucide-react';

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function BeritaSection({ beritaUtama, beritaTerbaru }: { beritaUtama: BeritaUtama | null; beritaTerbaru: BeritaItem[] }) {
    return (
        <section className="relative z-10 w-full py-24 sm:py-32">
            {/* Background Full Width Accent */}
            <div className="absolute inset-0 z-0 bg-zinc-50 dark:bg-zinc-900/30"></div>

            {/* GIANT WATERMARK */}
            <div className="pointer-events-none absolute top-20 left-0 flex w-full justify-center overflow-hidden opacity-[0.03] dark:opacity-5">
                <span className="text-[12rem] leading-none font-black tracking-tighter text-foreground select-none sm:text-[16rem] lg:text-[20rem]">
                    BERITA
                </span>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Minimalist Heading Layout */}
                <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
                    <div className="text-center md:text-left">
                        <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                Kabar Terbaru
                            </span>
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Wawasan &{' '}
                            <span className="font-light text-muted-foreground italic">
                                Jejak Langkah
                            </span>
                        </h2>
                    </div>
                    <a
                        href="#"
                        className="group flex h-16 shrink-0 items-center justify-center gap-4 rounded-full bg-primary pr-4 pl-8 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105"
                    >
                        Lihat Semua
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:translate-x-1">
                            <ArrowRight className="h-5 w-5" />
                        </div>
                    </a>
                </div>

                {/* MASSIVE IMMERSIVE TOP BANNER */}
                {beritaUtama && (
                <Link
                    href={`/berita-detail/${beritaUtama.slug}`}
                    className="group relative block min-h-137.5 w-full overflow-hidden rounded-[2.5rem] bg-zinc-950 shadow-2xl sm:min-h-162.5 sm:rounded-[3.5rem] lg:min-h-187.5"
                >
                    {/* Background Image / Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#1a2f24] transition-transform duration-1000 group-hover:scale-105">
                        {beritaUtama.gambar ? (
                            <img src={`/storage/${beritaUtama.gambar}`} alt={beritaUtama.judul} className="absolute inset-0 h-full w-full object-cover" />
                        ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-32 w-32 text-primary/20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        </svg>
                        )}
                    </div>

                    {/* Multiple Gradient Overlays for depth */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-transparent opacity-80 lg:opacity-100"></div>

                    {/* Top floating metadata */}
                    <div className="absolute top-8 left-8 flex items-center gap-4 sm:top-12 sm:left-12">
                        <span className="rounded-full bg-primary px-5 py-2 text-xs font-bold tracking-wider text-white uppercase shadow-lg">
                            Sorotan
                        </span>
                        {beritaUtama.kategori && (
                        <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold text-white backdrop-blur-md">
                            {beritaUtama.kategori.nama}
                        </span>
                        )}
                    </div>

                    {/* Bottom Content Area */}
                    <div className="absolute bottom-0 left-0 w-full max-w-4xl p-8 pb-32 sm:p-12 sm:pb-40 lg:p-16 lg:pb-48">
                        <h3 className="group-hover:text-primary-200 mb-4 text-3xl leading-[1.15] font-bold tracking-tight text-white transition-colors duration-300 sm:mb-6 sm:text-5xl lg:text-5xl">
                            {beritaUtama.judul}
                        </h3>
                        <p className="mb-6 line-clamp-2 max-w-2xl text-base text-white/70 sm:text-lg lg:mb-8">
                            {beritaUtama.ringkasan}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-white/50">
                            <span className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-white/80" />{' '}
                                {formatDate(beritaUtama.published_at)}
                            </span>
                            <span className="h-1.5 w-1.5 rounded-full bg-white/30"></span>
                            <span className="flex items-center gap-2">
                                <Eye className="h-5 w-5 text-white/80" /> {beritaUtama.views.toLocaleString('id-ID')} Views
                            </span>
                            {beritaUtama.user && (
                            <>
                            <span className="h-1.5 w-1.5 rounded-full bg-white/30"></span>
                            <span className="flex items-center gap-2">
                                <User className="h-5 w-5 text-white/80" /> {beritaUtama.user.name}
                            </span>
                            </>
                            )}
                        </div>
                    </div>
                </Link>
                )}

                {/* FLOATING OFFSET GRID (PULLED UP OVER THE BANNER) */}
                <div className="relative z-20 mx-auto -mt-16 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:-mt-24 md:grid-cols-2 lg:-mt-32 lg:grid-cols-3">
                    {beritaTerbaru.map((item) => (
                        <Link
                            key={item.id}
                            href={`/berita-detail/${item.slug}`}
                            className="group relative flex min-h-55 flex-col justify-between overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-zinc-50 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl lg:p-8 dark:border-zinc-800/50 dark:bg-zinc-900"
                        >
                            {/* Grid Texture Background */}
                            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)] bg-size-[24px_24px] opacity-60 transition-opacity duration-500 group-hover:opacity-100 dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>

                            <div className="relative z-10">
                                <div className="mb-5 flex items-center justify-between">
                                    <span
                                        className="inline-block rounded-full px-3 py-1 text-xs font-extrabold tracking-widest uppercase shadow-sm text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10"
                                    >
                                        {item.kategori?.nama ?? 'Berita'}
                                    </span>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-white/50 text-muted-foreground backdrop-blur-sm transition-transform group-hover:-rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground dark:bg-zinc-950/50">
                                        <ArrowRight className="h-3 w-3" />
                                    </div>
                                </div>
                                <h4 className="mb-4 line-clamp-3 text-lg leading-snug font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-xl">
                                    {item.judul}
                                </h4>
                            </div>

                            <div className="relative z-10 mt-auto flex items-center border-t border-border/60 pt-4 text-sm font-semibold text-muted-foreground">
                                <Calendar className="mr-2 h-4 w-4" />{' '}
                                {formatDate(item.published_at)}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
