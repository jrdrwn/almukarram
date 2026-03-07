import { Link } from '@inertiajs/react';
import {
    Calendar,
    Clock,
    History,
    Image as ImageIcon,
} from 'lucide-react';

interface LatestBerita {
    id: number;
    judul: string;
    slug: string;
    gambar?: string;
    created_at: string;
}

interface JadwalSholat {
    [key: string]: string;
}

interface ArticleSidebarProps {
    jadwal: JadwalSholat;
    latest: LatestBerita[];
    currentSlug: string;
}

const waktuSholat = [
    { key: 'subuh', label: 'Subuh' },
    { key: 'terbit', label: 'Terbit' },
    { key: 'dhuha', label: 'Dhuha' },
    { key: 'dzuhur', label: 'Dzuhur' },
    { key: 'ashar', label: 'Ashar' },
    { key: 'maghrib', label: 'Maghrib' },
    { key: 'isya', label: "Isya'" },
];

function formatTanggal(dateStr: string): string {
    try {
        return new Date(dateStr).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    } catch {
        return dateStr;
    }
}

export default function ArticleSidebar({
    jadwal,
    latest,
    currentSlug,
}: ArticleSidebarProps) {
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
                                    {jadwal[w.key] || '-:-'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Berita Terbaru Widget */}
            <div className="relative overflow-hidden rounded-4xl bg-white/50 shadow-sm ring-1 ring-border backdrop-blur-xl dark:bg-zinc-900/50">
                <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-emerald-500/5" />
                <div className="relative z-10 flex flex-col items-start gap-1 px-6 pt-6 pb-4 md:px-8 md:pt-8">
                    <h3 className="flex items-center gap-2.5 text-[1.1rem] font-bold text-foreground">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-emerald-50 to-emerald-100/50 text-emerald-600 ring-1 ring-emerald-500/20 dark:from-emerald-900/20 dark:to-emerald-800/10 dark:text-emerald-400">
                            <History className="h-4 w-4" />
                        </div>
                        Berita Terbaru
                    </h3>
                </div>
                <div className="relative z-10 flex flex-col gap-3 p-4 pt-0 sm:p-6">
                    {latest.map((item) => (
                        <Link
                            key={item.id}
                            href={`/berita-detail/${item.slug}`}
                            className={`group flex items-center gap-4 rounded-2xl p-3 transition-all duration-300 hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-border dark:hover:bg-zinc-800 ${
                                item.slug === currentSlug
                                    ? 'bg-emerald-50/80 ring-1 ring-emerald-200 dark:bg-emerald-900/20 dark:ring-emerald-500/20'
                                    : ''
                            }`}
                        >
                            {/* Thumb */}
                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-zinc-100 shadow-sm dark:bg-zinc-800/80">
                                {item.gambar ? (
                                    <img
                                        src={`/uploads/${item.gambar}`}
                                        alt={item.judul}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                        <ImageIcon className="h-6 w-6" />
                                    </div>
                                )}
                            </div>
                            {/* Info */}
                            <div className="flex flex-1 flex-col gap-1 py-0.5">
                                <h4
                                    className={`line-clamp-2 text-[13px] leading-snug font-bold transition-colors group-hover:text-emerald-600 ${
                                        item.slug === currentSlug
                                            ? 'text-emerald-700 dark:text-emerald-400'
                                            : 'text-foreground'
                                    }`}
                                >
                                    {item.judul}
                                </h4>
                                <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                                    <Calendar className="h-3 w-3" />
                                    <span>{formatTanggal(item.created_at)}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
}
