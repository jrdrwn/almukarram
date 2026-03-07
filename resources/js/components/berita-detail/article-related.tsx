import { Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, Calendar, Image as ImageIcon, Newspaper } from 'lucide-react';

export interface RelatedBerita {
    id: number;
    judul: string;
    slug: string;
    gambar?: string;
    created_at: string;
}

interface ArticleRelatedProps {
    items: RelatedBerita[];
}

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

export default function ArticleRelated({ items }: ArticleRelatedProps) {
    if (items.length === 0) return null;

    return (
        <section className="relative overflow-hidden rounded-4xl border border-border bg-white/60 p-6 shadow-sm backdrop-blur-xl dark:bg-zinc-900/50 lg:p-8">
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-blue-500/8 blur-[80px]" />

            {/* Header */}
            <div className="relative z-10 mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-50 to-blue-100/50 text-blue-600 ring-1 ring-blue-500/20 dark:from-blue-900/20 dark:to-blue-800/10 dark:text-blue-400">
                    <Newspaper className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                    Berita Terkait
                </h3>
                <div className="ml-auto h-px flex-1 rounded-full bg-border" />
            </div>

            {/* Grid */}
            <div className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((item) => (
                    <Link
                        key={item.id}
                        href={`/berita-detail/${item.slug}`}
                        className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 dark:bg-zinc-900"
                    >
                        {/* Thumb */}
                        <div className="relative aspect-4/3 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                            {item.gambar ? (
                                <img
                                    src={`/uploads/${item.gambar}`}
                                    alt={item.judul}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                    <ImageIcon className="h-10 w-10 text-zinc-400" />
                                </div>
                            )}
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            {/* Arrow on hover */}
                            <div className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-md backdrop-blur-md transition-all duration-300 group-hover:opacity-100 dark:bg-zinc-900/90">
                                <ArrowRight className="h-4 w-4 text-blue-600" />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex flex-1 flex-col gap-2 p-4">
                            <h4 className="line-clamp-3 text-[13px] leading-snug font-bold text-foreground transition-colors group-hover:text-blue-600">
                                {item.judul}
                            </h4>
                            <div className="mt-auto flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground">
                                <Calendar className="h-3 w-3" />
                                <span>{formatTanggal(item.created_at)}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Back Button */}
            <div className="relative z-10 mt-6 flex justify-start">
                <Link
                    href="/berita"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:bg-zinc-50 hover:shadow-md dark:bg-zinc-900 dark:hover:bg-zinc-800"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Kembali ke Berita
                </Link>
            </div>
        </section>
    );
}
