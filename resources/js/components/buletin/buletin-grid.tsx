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
            <div className="flex flex-col items-center justify-center py-24 text-center px-4 bg-white/40 dark:bg-zinc-900/40 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <BookOpen className="h-10 w-10 text-emerald-600 dark:text-emerald-500 opacity-80" />
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 mb-2">
                    Belum Ada Buletin
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Maaf, kami tidak dapat menemukan buletin yang sesuai dengan pencarian Anda. Silakan coba mengubah filter pencarian.
                </p>
                <Link
                    href="/buletin"
                    className="mt-8 inline-flex items-center justify-center rounded-xl bg-white dark:bg-zinc-800 px-6 py-3 text-sm font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-all duration-200 hover:scale-105"
                >
                    Kembali ke Daftar Buletin
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-6 lg:gap-8">
                {buletins.data.map((item) => (
                    <Card key={item.id} className="group py-0 pt-0 pb-0 gap-0 overflow-hidden bg-white/70 dark:bg-zinc-900/70 border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md hover:shadow-xl transition-all duration-500 rounded-3xl hover:-translate-y-1 flex flex-col h-full">
                        <div className="relative aspect-3/4 w-full overflow-hidden bg-emerald-50/50 dark:bg-zinc-800/80">
                            {/* Fallback Display */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <BookOpen className="h-24 w-24 text-emerald-600/20 dark:text-zinc-500/20" />
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />

                            {/* Tag Kategori */}
                            <div className="absolute top-4 left-4 z-20">
                                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/90 text-white backdrop-blur-md shadow-lg ring-1 ring-white/20">
                                    <BookOpen className="w-3 h-3 mr-1.5" />
                                    {item.kategori.nama}
                                </span>
                            </div>

                            {/* Stats */}
                            <div className="absolute top-4 right-4 z-20 flex gap-2">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-black/50 text-white backdrop-blur-md border border-white/10">
                                    <Eye className="w-3 h-3 mr-1" />
                                    {item.views}
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-black/50 text-white backdrop-blur-md border border-white/10">
                                    <Download className="w-3 h-3 mr-1" />
                                    {item.downloads}
                                </span>
                            </div>

                            {/* Title Positioned Over Image */}
                            <div className="absolute bottom-4 left-4 right-4 z-20">
                                <h3 className="text-lg font-bold text-white leading-tight line-clamp-3 mb-2 group-hover:text-emerald-300 transition-colors">
                                    {item.title}
                                </h3>
                                <div className="flex items-center text-xs text-zinc-300">
                                    <Calendar className="mr-1.5 h-3.5 w-3.5" />
                                    {format(new Date(item.published_at), 'd MMMM yyyy', { locale: localeId })}
                                </div>
                            </div>
                        </div>

                        <CardFooter className="p-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-auto bg-white/40 dark:bg-zinc-900/40">
                            <div className="flex items-center gap-3 w-full">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="flex-1 rounded-xl group-hover:border-emerald-500/50 group-hover:bg-emerald-50/50 dark:group-hover:bg-emerald-500/10 transition-colors h-11"
                                >
                                    <a href={item.pdf_url} target="_blank" rel="noopener noreferrer">
                                        <Eye className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                                        Baca PDF
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    className="flex-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all h-11"
                                >
                                    <a href={item.pdf_url} download>
                                        <Download className="mr-2 h-4 w-4 animate-bounce-slow" />
                                        Unduh
                                    </a>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Pagination Controls */}
            {buletins.meta && buletins.meta.last_page > 1 && (
                <div className="mt-8 flex flex-col items-center gap-4 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-4xl border border-zinc-100 dark:border-zinc-800/50">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href={buletins.meta.current_page > 1 ? `?page=${buletins.meta.current_page - 1}` : '#'}
                                    className={`rounded-xl border-zinc-200 dark:border-zinc-800 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400 ${buletins.meta.current_page <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
                                />
                            </PaginationItem>

                            {buletins.meta.links.filter(link => !link.label.includes('Previous') && !link.label.includes('Next')).map((link, index) => {
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
                                            className={link.active
                                                ? "rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white hover:text-white border-transparent"
                                                : "cursor-pointer rounded-xl border-zinc-200 dark:border-zinc-800 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"}
                                        >
                                            {link.label}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}

                            <PaginationItem>
                                <PaginationNext
                                    href={buletins.meta.current_page < buletins.meta.last_page ? `?page=${buletins.meta.current_page + 1}` : '#'}
                                    className={`rounded-xl border-zinc-200 dark:border-zinc-800 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400 ${buletins.meta.current_page >= buletins.meta.last_page ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}
