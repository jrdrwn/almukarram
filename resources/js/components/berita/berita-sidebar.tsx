import { Link } from '@inertiajs/react';
import { Calendar, ChevronRight, Clock, Flame, Image as ImageIcon, Tags } from 'lucide-react';

interface KategoriItem {
    id: number;
    nama: string;
    slug: string;
    total: number;
}

interface PopularItem {
    id: number;
    slug: string;
    judul: string;
    gambar?: string;
    created_at: string;
}

interface JadwalSholat {
    [key: string]: string; // e.g. "subuh": "04:30"
}

interface BeritaSidebarProps {
    jadwal: JadwalSholat;
    kategoris: KategoriItem[];
    popularFiles: PopularItem[];
}

export default function BeritaSidebar({ jadwal, kategoris, popularFiles }: BeritaSidebarProps) {
    const waktuSholat = [
        { key: 'subuh', label: 'Subuh' },
        { key: 'terbit', label: 'Terbit' },
        { key: 'dhuha', label: 'Dhuha' },
        { key: 'dzuhur', label: 'Dzuhur' },
        { key: 'ashar', label: 'Ashar' },
        { key: 'maghrib', label: 'Maghrib' },
        { key: 'isya', label: 'Isya' },
    ];

    return (
        <aside className="space-y-8 sticky top-24">
            {/* Jadwal Sholat Widget */}
            <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-emerald-900 to-emerald-950 p-1">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <Clock className="w-32 h-32 text-emerald-400 rotate-12" />
                </div>
                <div className="relative bg-emerald-950/40 backdrop-blur-xl rounded-[1.8rem] border border-emerald-500/20 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 bg-emerald-500/20 rounded-xl">
                            <Clock className="h-6 w-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Jadwal Sholat</h3>
                    </div>
                    <div className="space-y-3">
                        {waktuSholat.map((w) => (
                            <div key={w.key} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0 group">
                                <span className="text-emerald-100/80 font-medium group-hover:text-emerald-300 transition-colors">{w.label}</span>
                                <span className="text-white font-bold tracking-wider">{jadwal[w.key] || '-:-'}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Kategori Widget */}
            <div className="rounded-4xl shadow-sm ring-1 ring-border bg-white/50 backdrop-blur-xl dark:bg-zinc-900/50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />
                <div className="pb-4 pt-6 md:pt-8 px-6 md:px-8 flex flex-col items-start gap-1 relative z-10">
                    <h3 className="flex items-center gap-2.5 text-[1.1rem] font-bold text-foreground">
                        <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-xl text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20">
                            <Tags className="h-4 w-4" />
                        </div>
                        Kategori
                    </h3>
                </div>
                <div className="p-4 sm:p-6 pt-0 relative z-10">
                    <div className="flex flex-col gap-1.5">
                        {kategoris.map((k) => (
                            <Link
                                key={k.id}
                                href={`/berita?kategori=${k.slug}`}
                                className="group flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white dark:hover:bg-zinc-800 hover:shadow-sm hover:ring-1 hover:ring-border transition-all duration-300"
                            >
                                <span className="flex items-center text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                                    <ChevronRight className="h-4 w-4 mr-2.5 text-zinc-300 group-hover:text-blue-500 transition-colors" />
                                    {k.nama}
                                </span>
                                <span className="flex items-center justify-center bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400 text-xs font-bold px-2.5 py-1 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400 transition-colors">
                                    {k.total}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Popular News Widget */}
            <div className="rounded-4xl shadow-sm ring-1 ring-border bg-white/50 backdrop-blur-xl dark:bg-zinc-900/50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full pointer-events-none" />
                <div className="pb-4 pt-6 md:pt-8 px-6 md:px-8 flex flex-col items-start gap-1 relative z-10">
                    <h3 className="flex items-center gap-2.5 text-[1.1rem] font-bold text-foreground">
                        <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/10 rounded-xl text-orange-600 dark:text-orange-400 ring-1 ring-orange-500/20">
                            <Flame className="h-4 w-4" />
                        </div>
                        Berita Terpopuler
                    </h3>
                </div>
                <div className="p-4 sm:p-6 pt-0 relative z-10">
                    <div className="flex flex-col gap-4">
                        {popularFiles.map((p, idx) => (
                            <Link key={p.id} href={`/berita-detail/${p.slug}`} className="group flex gap-4 items-center p-3 rounded-2xl hover:bg-white dark:hover:bg-zinc-800 hover:shadow-sm hover:ring-1 hover:ring-border transition-all duration-300">
                                {/* Thumb */}
                                <div className="relative shrink-0 w-18 h-18 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800/80 shadow-sm">
                                    {p.gambar ? (
                                        <img src={`/uploads/${p.gambar}`} alt={p.judul} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                            <ImageIcon className="h-6 w-6" />
                                        </div>
                                    )}
                                    {/* Number rank overlay */}
                                    <div className="absolute top-0 left-0 w-6 h-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-foreground text-xs font-black flex items-center justify-center rounded-br-xl shadow-sm z-10">
                                        {idx + 1}
                                    </div>
                                </div>
                                {/* Info */}
                                <div className="flex flex-col flex-1 gap-1.5 py-1">
                                    <h4 className="text-[13px] font-bold leading-snug line-clamp-2 text-foreground group-hover:text-emerald-600 transition-colors">
                                        {p.judul}
                                    </h4>
                                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                                        <Calendar className="h-3 w-3" />
                                        <span>{p.created_at}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}
