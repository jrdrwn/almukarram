import { Button } from '@/components/ui/button';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Link, router } from '@inertiajs/react';
import { ArrowRight, Calendar, Eye, Image as ImageIcon, SearchX } from 'lucide-react';

export interface BeritaItem {
    id: number;
    slug: string;
    judul: string;
    ringkasan: string;
    gambar?: string;
    kategori: string;
    views: number;
    created_at: string;
}

interface BeritaGridProps {
    data: BeritaItem[];
    currentPage: number;
    totalPages: number;
}

export default function BeritaGrid({ data, currentPage, totalPages }: BeritaGridProps) {
    if (data.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center px-4 bg-zinc-50 dark:bg-zinc-900/20 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
                <div className="h-24 w-24 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 ring-8 ring-zinc-50 dark:ring-zinc-900/50">
                    <SearchX className="h-10 w-10 text-zinc-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Tidak ada berita ditemukan</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                    Coba kata kunci yang berbeda atau lihat semua berita yang tersedia.
                </p>
                <Button asChild variant="outline" className="rounded-full">
                    <Link href="/berita">Lihat Semua Berita</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col space-y-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {data.map((b) => (
                    <article
                        key={b.id}
                        className="group flex flex-col bg-white dark:bg-zinc-900 rounded-4xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-1"
                    >
                        {/* Image Wrap */}
                        <div className="relative aspect-4/3 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                            {b.gambar ? (
                                <img
                                    src={`/uploads/${b.gambar}`}
                                    alt={b.judul}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                    <ImageIcon className="h-16 w-16" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Category Badge overlay on image */}
                            {b.kategori && (
                                <div className="absolute top-4 left-4 z-10">
                                    <Link
                                        href={`/berita?kategori=${b.kategori.toLowerCase()}`}
                                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-emerald-800 text-xs font-bold shadow-sm hover:bg-emerald-500 hover:text-white transition-colors"
                                    >
                                        {b.kategori}
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6 sm:p-8 flex flex-col">
                            <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                    <span>{b.created_at}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Eye className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                    <span>{b.views} views</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                <Link href={`/berita-detail/${b.slug}`}>
                                    {b.judul}
                                </Link>
                            </h3>

                            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                {b.ringkasan}
                            </p>

                            <Link
                                href={`/berita-detail/${b.slug}`}
                                className="inline-flex items-center mt-auto text-emerald-600 dark:text-emerald-400 font-semibold text-sm group/link hover:text-emerald-700 transition-colors"
                            >
                                Baca Selengkapnya
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            {/* Pagination Component */}
            {totalPages > 1 && (
                <div className="mt-8 flex flex-col items-center gap-4 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-4xl border border-zinc-100 dark:border-zinc-800/50">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href={currentPage > 1 ? `/berita?page=${currentPage - 1}` : '#'}
                                    onClick={(e) => {
                                        if (currentPage <= 1) e.preventDefault();
                                        else {
                                            e.preventDefault();
                                            router.get(`/berita?page=${currentPage - 1}`, {}, { preserveState: true, preserveScroll: true });
                                        }
                                    }}
                                    className={`rounded-xl border-zinc-200 dark:border-zinc-800 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400 ${currentPage <= 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                                />
                            </PaginationItem>

                            {[...Array(totalPages)].map((_, i) => {
                                const page = i + 1;
                                const isCurrent = page === currentPage;

                                if (
                                    page === 1 ||
                                    page === totalPages ||
                                    (page >= currentPage - 1 && page <= currentPage + 1)
                                ) {
                                    return (
                                        <PaginationItem key={page}>
                                            <PaginationLink
                                                href={`/berita?page=${page}`}
                                                isActive={isCurrent}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    router.get(`/berita?page=${page}`, {}, { preserveState: true, preserveScroll: true });
                                                }}
                                                className={isCurrent
                                                    ? "rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white hover:text-white border-transparent"
                                                    : "cursor-pointer rounded-xl border-zinc-200 dark:border-zinc-800 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
                                                }
                                            >
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                    );
                                }

                                if (page === currentPage - 2 || page === currentPage + 2) {
                                    return (
                                        <PaginationItem key={page}>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                    );
                                }

                                return null;
                            })}

                            <PaginationItem>
                                <PaginationNext
                                    href={currentPage < totalPages ? `/berita?page=${currentPage + 1}` : '#'}
                                    onClick={(e) => {
                                        if (currentPage >= totalPages) e.preventDefault();
                                        else {
                                            e.preventDefault();
                                            router.get(`/berita?page=${currentPage + 1}`, {}, { preserveState: true, preserveScroll: true });
                                        }
                                    }}
                                    className={`rounded-xl border-zinc-200 dark:border-zinc-800 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400 ${currentPage >= totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}
