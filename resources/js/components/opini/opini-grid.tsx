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
import { BookOpen, PenTool, User } from 'lucide-react';

interface OpiniItem {
    slug?: string;
    category: string;
    title: string;
    author: string;
    date: string;
    readTime: string;
    excerpt: string;
}

interface OpiniGridProps {
    data: OpiniItem[];
    currentPage?: number;
    totalPages?: number;
}

export default function OpiniGrid({
    data,
    currentPage = 1,
    totalPages = 1,
}: OpiniGridProps) {
    if (!data || data.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-200 bg-zinc-50 px-4 py-20 text-center dark:border-zinc-800 dark:bg-zinc-900/40">
                <div className="group relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm ring-8 ring-zinc-50 dark:bg-zinc-800 dark:ring-zinc-900/50">
                    <PenTool className="h-10 w-10 text-zinc-300 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 dark:text-zinc-600" />
                </div>
                <h5 className="mb-2 text-xl font-bold text-foreground">
                    Belum Ada Artikel Opini
                </h5>
                <p className="mb-6 max-w-md text-sm text-muted-foreground">
                    Artikel opini dari pengurus dan jamaah masjid akan segera
                    hadir di sini.
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {data.map((article, idx) => (
                    <Link
                        key={idx}
                        href={article.slug ? `/opini-detail/${article.slug}` : '#'}
                        className="group relative flex min-h-75 flex-col justify-between overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-zinc-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-8 dark:border-zinc-800/50 dark:bg-zinc-900"
                    >
                        {/* Grid Texture Background */}
                        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)] bg-size-[24px_24px] opacity-60 transition-opacity duration-500 group-hover:opacity-100 dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>

                        <div className="relative z-10">
                            <span className="mb-5 inline-block rounded-full border border-emerald-100/50 bg-emerald-50 px-3 py-1 text-xs font-bold tracking-widest text-emerald-600 uppercase shadow-sm dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                                {article.category}
                            </span>
                            <h3 className="mb-4 line-clamp-3 text-xl leading-tight font-bold text-foreground transition-colors group-hover:text-emerald-600">
                                {article.title}
                            </h3>
                            <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-muted-foreground/80">
                                {article.excerpt}
                            </p>
                        </div>

                        <div className="relative z-10 mt-auto border-t border-border/60 pt-5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-100 bg-white text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                                    <User className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-foreground transition-colors group-hover:text-emerald-600">
                                        {article.author}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                        <span>{article.date}</span>
                                        <span className="h-1 w-1 rounded-full bg-border"></span>
                                        <span className="flex items-center gap-1">
                                            <BookOpen className="h-3 w-3" />{' '}
                                            {article.readTime}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination Component */}
            <div className="mt-8 flex flex-col items-center gap-4 rounded-4xl border border-zinc-100 bg-white/50 p-4 backdrop-blur-sm sm:p-6 dark:border-zinc-800/50 dark:bg-zinc-900/50">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                className="rounded-xl border-zinc-200 hover:bg-emerald-50 hover:text-emerald-600 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 dark:border-zinc-800 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
                                aria-disabled={currentPage === 1}
                            />
                        </PaginationItem>

                        {[...Array(totalPages)].map((_, i) => {
                            const page = i + 1;
                            const isCurrent = page === currentPage;

                            if (
                                page === 1 ||
                                page === totalPages ||
                                (page >= currentPage - 1 &&
                                    page <= currentPage + 1)
                            ) {
                                return (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            href="#"
                                            isActive={isCurrent}
                                            className={
                                                isCurrent
                                                    ? 'rounded-xl border-transparent bg-emerald-600 text-white hover:bg-emerald-700 hover:text-white'
                                                    : 'rounded-xl border-zinc-200 hover:bg-emerald-50 hover:text-emerald-600 dark:border-zinc-800 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400'
                                            }
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            }

                            if (
                                page === currentPage - 2 ||
                                page === currentPage + 2
                            ) {
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
                                href="#"
                                className="rounded-xl border-zinc-200 hover:bg-emerald-50 hover:text-emerald-600 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 dark:border-zinc-800 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
                                aria-disabled={currentPage === totalPages}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
