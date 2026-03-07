import { Button } from '@/components/ui/button';
import { Card, CardFooter } from '@/components/ui/card';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { Link } from '@inertiajs/react';
import { format } from 'date-fns';
import { id as localeId } from 'date-fns/locale';
import { BookOpen, Calendar, Download, Eye } from 'lucide-react';

interface BuletinItem {
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    pdf_url: string;
    published_at: string;
    views: number;
    downloads: number;
    kategori: {
        nama: string;
        slug: string;
    };
}

interface PaginationData {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
    links: { url: string | null; label: string; active: boolean }[];
}

interface BuletinData {
    data: BuletinItem[];
    meta: PaginationData | null;
}

export default function BuletinGrid({ buletins }: { buletins: BuletinData }) {
    if (!buletins?.data?.length) {
        return (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-zinc-200/50 bg-white/40 px-4 py-24 text-center backdrop-blur-sm dark:border-zinc-800/50 dark:bg-zinc-900/40">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 shadow-inner dark:bg-emerald-900/30">
                    <BookOpen className="h-10 w-10 text-emerald-600 opacity-80 dark:text-emerald-500" />
                </div>
                <h3 className="mb-2 bg-linear-to-r from-zinc-800 to-zinc-600 bg-clip-text text-2xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400">
                    Belum Ada Buletin
                </h3>
                <p className="mx-auto max-w-md leading-relaxed text-zinc-500 dark:text-zinc-400">
                    Maaf, kami tidak dapat menemukan buletin yang sesuai dengan
                    pencarian Anda. Silakan coba mengubah filter pencarian.
                </p>
                <Link
                    href="/buletin"
                    className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-600 shadow-sm ring-1 ring-zinc-300 transition-all duration-200 ring-inset hover:scale-105 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-emerald-400 dark:ring-zinc-700 dark:hover:bg-zinc-700/50"
                >
                    Kembali ke Daftar Buletin
                </Link>
            </div>
        );
    }

    return (
        <div className="relative z-10 space-y-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {buletins.data.map((item) => (
                    <Card
                        key={item.id}
                        className="group flex h-full flex-col gap-0 overflow-hidden rounded-3xl border-zinc-200/50 bg-white/70 py-0 pt-0 pb-0 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800/50 dark:bg-zinc-900/70"
                    >
                        <div className="relative aspect-3/4 w-full overflow-hidden bg-emerald-50/50 dark:bg-zinc-800/80">
                            {/* Fallback Display */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <BookOpen className="h-24 w-24 text-emerald-600/20 dark:text-zinc-500/20" />
                            </div>

                            {/* Overlay Gradient */}
                            <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="absolute inset-0 h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />

                            {/* Tag Kategori */}
                            <div className="absolute top-4 left-4 z-20">
                                <span className="inline-flex items-center rounded-full bg-emerald-500/90 px-3 py-1.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/20 backdrop-blur-md">
                                    <BookOpen className="mr-1.5 h-3 w-3" />
                                    {item.kategori.nama}
                                </span>
                            </div>

                            {/* Stats */}
                            <div className="absolute top-4 right-4 z-20 flex gap-2">
                                <span className="inline-flex items-center rounded-full border border-white/10 bg-black/50 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-md">
                                    <Eye className="mr-1 h-3 w-3" />
                                    {item.views}
                                </span>
                                <span className="inline-flex items-center rounded-full border border-white/10 bg-black/50 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-md">
                                    <Download className="mr-1 h-3 w-3" />
                                    {item.downloads}
                                </span>
                            </div>

                            {/* Title Positioned Over Image */}
                            <div className="absolute right-4 bottom-4 left-4 z-20">
                                <h3 className="mb-2 line-clamp-3 text-lg leading-tight font-bold text-white transition-colors group-hover:text-emerald-300">
                                    {item.title}
                                </h3>
                                <div className="flex items-center text-xs text-zinc-300">
                                    <Calendar className="mr-1.5 h-3.5 w-3.5" />
                                    {format(
                                        new Date(item.published_at),
                                        'd MMMM yyyy',
                                        { locale: localeId },
                                    )}
                                </div>
                            </div>
                        </div>

                        <CardFooter className="mt-auto border-t border-zinc-100 bg-white/40 p-4 pt-4 dark:border-zinc-800 dark:bg-zinc-900/40">
                            <div className="flex w-full items-center gap-3">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="h-11 flex-1 rounded-xl transition-colors group-hover:border-emerald-500/50 group-hover:bg-emerald-50/50 dark:group-hover:bg-emerald-500/10"
                                >
                                    <a
                                        href={item.pdf_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Eye className="mr-2 h-4 w-4 text-emerald-600 transition-transform group-hover:scale-110 dark:text-emerald-400" />
                                        Baca PDF
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    className="h-11 flex-1 rounded-xl bg-emerald-600 text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg"
                                >
                                    <a href={item.pdf_url} download>
                                        <Download className="animate-bounce-slow mr-2 h-4 w-4" />
                                        Unduh
                                    </a>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Pagination Controls */}
            {buletins.meta && (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-4xl border border-zinc-100 bg-white/50 p-4 backdrop-blur-sm sm:p-6 dark:border-zinc-800/50 dark:bg-zinc-900/50">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href={
                                        buletins.meta.current_page > 1
                                            ? `?page=${buletins.meta.current_page - 1}`
                                            : '#'
                                    }
                                    className={`rounded-xl border-zinc-200 hover:bg-emerald-50 hover:text-emerald-600 dark:border-zinc-800 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400 ${buletins.meta.current_page <= 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                                />
                            </PaginationItem>

                            {buletins.meta.links
                                .filter(
                                    (link) =>
                                        !link.label.includes('Previous') &&
                                        !link.label.includes('Next'),
                                )
                                .map((link, index) => {
                                    if (link.label === '...') {
                                        return (
                                            <PaginationItem key={index}>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        );
                                    }
                                    return (
                                        <PaginationItem key={index}>
                                            <PaginationLink
                                                href={link.url || '#'}
                                                isActive={link.active}
                                                className={
                                                    link.active
                                                        ? 'rounded-xl border-transparent bg-emerald-600 text-white hover:bg-emerald-700 hover:text-white'
                                                        : 'cursor-pointer rounded-xl border-zinc-200 hover:bg-emerald-50 hover:text-emerald-600 dark:border-zinc-800 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400'
                                                }
                                            >
                                                {link.label}
                                            </PaginationLink>
                                        </PaginationItem>
                                    );
                                })}

                            <PaginationItem>
                                <PaginationNext
                                    href={
                                        buletins.meta.current_page <
                                        buletins.meta.last_page
                                            ? `?page=${buletins.meta.current_page + 1}`
                                            : '#'
                                    }
                                    className={`rounded-xl border-zinc-200 hover:bg-emerald-50 hover:text-emerald-600 dark:border-zinc-800 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400 ${buletins.meta.current_page >= buletins.meta.last_page ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}
