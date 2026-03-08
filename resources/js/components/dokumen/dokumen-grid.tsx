import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import { Download, FileArchive } from 'lucide-react';
import React from 'react';

export interface DokumenItem {
    id: number | string;
    title: string;
    type: string;
    year: string;
    category: string;
    url: string;
    icon: React.ElementType;
    color: string;
    bg: string;
}

interface DokumenGridProps {
    data: DokumenItem[];
    currentPage?: number;
    totalPages?: number;
}

export default function DokumenGrid({
    data,
    currentPage = 1,
    totalPages = 1,
}: DokumenGridProps) {
    if (!data || data.length === 0) {
        return (
            <div className="col-span-full rounded-4xl border border-dashed border-border bg-white/50 py-16 text-center backdrop-blur-xl dark:bg-zinc-900/50">
                <FileArchive className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
                <h3 className="mb-2 text-lg font-bold text-foreground">
                    Tidak ada dokumen
                </h3>
                <p className="text-muted-foreground">
                    Belum ada dokumen yang sesuai dengan kriteria pencarian.
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.map((doc, idx) => (
                    <div
                        key={doc.id}
                        className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-border/50 bg-white/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 active:-translate-y-1 active:shadow-xl active:shadow-emerald-500/5 dark:bg-zinc-900/60"
                        style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        {/* Background Decoration */}
                        <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-emerald-500/5 transition-transform duration-500 group-hover:scale-110 group-active:scale-110" />

                        <div className="relative z-10 flex flex-1 items-start gap-4">
                            <div
                                className={cn(
                                    'flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-active:-translate-y-1 group-active:shadow-md',
                                    doc.bg || 'bg-zinc-100 dark:bg-zinc-800',
                                    doc.color || 'text-zinc-600 dark:text-zinc-400',
                                )}
                            >
                                {doc.icon ? (
                                    <doc.icon className="h-7 w-7" />
                                ) : (
                                    <FileArchive className="h-7 w-7" />
                                )}
                            </div>

                            <div className="min-w-0 flex-1 space-y-4">
                                <h3 className="line-clamp-3 text-base leading-snug font-bold text-foreground transition-colors group-hover:text-emerald-600 group-active:text-emerald-600">
                                    {doc.title}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    <span
                                        className={cn(
                                            'rounded-lg border px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase',
                                            'border-red-100 bg-red-50 text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400',
                                        )}
                                    >
                                        {doc.type}
                                    </span>
                                    <span className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10px] font-bold tracking-wider text-zinc-600 uppercase dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
                                        {doc.year}
                                    </span>
                                    <span className="rounded-lg border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold tracking-wider text-emerald-600 uppercase dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                                        {doc.category ? doc.category.replace('-', ' ') : ''}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto pt-6">
                            <a
                                href={doc.url}
                                download={doc.url !== '#'}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-600 transition-all duration-300 hover:bg-emerald-600 hover:text-white active:bg-emerald-600 active:text-white sm:w-auto dark:bg-emerald-500/10 dark:text-emerald-400"
                            >
                                <Download className="h-4 w-4" />
                                {doc.url !== '#' ? 'Unduh Dokumen' : 'Unduh'}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Component */}
            <div className="mt-8 flex flex-col items-center gap-4 rounded-4xl border border-zinc-100 bg-white/50 p-4 backdrop-blur-sm sm:p-6 dark:border-zinc-800/50 dark:bg-zinc-900/50">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                className="rounded-xl border-zinc-200 hover:bg-emerald-50 hover:text-emerald-600 active:bg-emerald-50 active:bg-emerald-500/10 active:text-emerald-400 active:text-emerald-600 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 dark:border-zinc-800 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
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
                                                    ? 'rounded-xl border-transparent bg-emerald-600 text-white hover:bg-emerald-700 hover:text-white active:bg-emerald-700 active:text-white'
                                                    : 'rounded-xl border-zinc-200 hover:bg-emerald-50 hover:text-emerald-600 active:bg-emerald-50 active:bg-emerald-500/10 active:text-emerald-400 active:text-emerald-600 dark:border-zinc-800 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400'
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
                                className="rounded-xl border-zinc-200 hover:bg-emerald-50 hover:text-emerald-600 active:bg-emerald-50 active:bg-emerald-500/10 active:text-emerald-400 active:text-emerald-600 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 dark:border-zinc-800 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
                                aria-disabled={currentPage === totalPages}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
