import { useJadwalSholat } from '@/hooks/use-jadwal-sholat';
import { Link } from '@inertiajs/react';
import {
    Calendar,
    ChevronRight,
    Clock,
    Flame,
    Image as ImageIcon,
    Tags,
} from 'lucide-react';

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

interface BeritaSidebarProps {
    kategoris: KategoriItem[];
    popularFiles: PopularItem[];
}

export default function BeritaSidebar({
    kategoris,
    popularFiles,
}: BeritaSidebarProps) {
    const { jadwal } = useJadwalSholat();

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
        <aside className="sticky top-24 space-y-8">
            {/* Jadwal Sholat Widget */}
            <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-emerald-900 to-emerald-950 p-1">
                <div className="pointer-events-none absolute top-0 right-0 p-4 opacity-10">
                    <Clock className="h-32 w-32 rotate-12 text-emerald-400" />
                </div>
                <div className="relative rounded-[1.8rem] border border-emerald-500/20 bg-emerald-950/40 p-6 backdrop-blur-xl md:p-8">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="rounded-xl bg-emerald-500/20 p-2.5">
                            <Clock className="h-6 w-6 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                            Jadwal Sholat
                        </h3>
                    </div>
                    <div className="space-y-3">
                        {waktuSholat.map((w) => (
                            <div
                                key={w.key}
                                className="group flex items-center justify-between border-b border-white/5 py-2 last:border-0"
                            >
                                <span className="font-medium text-emerald-100/80 transition-colors group-hover:text-emerald-300">
                                    {w.label}
                                </span>
                                <span className="font-bold tracking-wider text-white">
                                    {jadwal?.[w.key as keyof typeof jadwal] || '--:--'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Kategori Widget */}
            <div className="relative overflow-hidden rounded-4xl bg-white/50 shadow-sm ring-1 ring-border backdrop-blur-xl dark:bg-zinc-900/50">
                <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-blue-500/5" />
                <div className="relative z-10 flex flex-col items-start gap-1 px-6 pt-6 pb-4 md:px-8 md:pt-8">
                    <h3 className="flex items-center gap-2.5 text-[1.1rem] font-bold text-foreground">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-blue-50 to-blue-100/50 text-blue-600 ring-1 ring-blue-500/20 dark:from-blue-900/20 dark:to-blue-800/10 dark:text-blue-400">
                            <Tags className="h-4 w-4" />
                        </div>
                        Kategori
                    </h3>
                </div>
                <div className="relative z-10 p-4 pt-0 sm:p-6">
                    <div className="flex flex-col gap-1.5">
                        {kategoris.map((k) => (
                            <Link
                                key={k.id}
                                href={`/berita?kategori=${k.slug}`}
                                className="group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-border dark:hover:bg-zinc-800"
                            >
                                <span className="flex items-center text-sm font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
                                    <ChevronRight className="mr-2.5 h-4 w-4 text-zinc-300 transition-colors group-hover:text-blue-500" />
                                    {k.nama}
                                </span>
                                <span className="flex items-center justify-center rounded-lg bg-zinc-100/80 px-2.5 py-1 text-xs font-bold text-zinc-500 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-zinc-800/80 dark:text-zinc-400 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400">
                                    {k.total}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Popular News Widget */}
            <div className="relative overflow-hidden rounded-4xl bg-white/50 shadow-sm ring-1 ring-border backdrop-blur-xl dark:bg-zinc-900/50">
                <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-orange-500/5" />
                <div className="relative z-10 flex flex-col items-start gap-1 px-6 pt-6 pb-4 md:px-8 md:pt-8">
                    <h3 className="flex items-center gap-2.5 text-[1.1rem] font-bold text-foreground">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-orange-50 to-orange-100/50 text-orange-600 ring-1 ring-orange-500/20 dark:from-orange-900/20 dark:to-orange-800/10 dark:text-orange-400">
                            <Flame className="h-4 w-4" />
                        </div>
                        Berita Terpopuler
                    </h3>
                </div>
                <div className="relative z-10 p-4 pt-0 sm:p-6">
                    <div className="flex flex-col gap-4">
                        {popularFiles.map((p, idx) => (
                            <Link
                                key={p.id}
                                href={`/berita-detail/${p.slug}`}
                                className="group flex items-center gap-4 rounded-2xl p-3 transition-all duration-300 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-border dark:hover:bg-zinc-800"
                            >
                                {/* Thumb */}
                                <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-xl bg-zinc-100 shadow-sm dark:bg-zinc-800/80">
                                    {p.gambar ? (
                                        <img
                                            src={`/uploads/${p.gambar}`}
                                            alt={p.judul}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                            <ImageIcon className="h-6 w-6" />
                                        </div>
                                    )}
                                    {/* Number rank overlay */}
                                    <div className="absolute top-0 left-0 z-10 flex h-6 w-6 items-center justify-center rounded-br-xl bg-white/90 text-xs font-black text-foreground shadow-sm backdrop-blur-md dark:bg-zinc-900/90">
                                        {idx + 1}
                                    </div>
                                </div>
                                {/* Info */}
                                <div className="flex flex-1 flex-col gap-1.5 py-1">
                                    <h4 className="line-clamp-2 text-[13px] leading-snug font-bold text-foreground transition-colors group-hover:text-emerald-600">
                                        {p.judul}
                                    </h4>
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
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
