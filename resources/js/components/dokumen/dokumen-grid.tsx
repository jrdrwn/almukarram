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

export default function DokumenGrid({ data, currentPage = 1, totalPages = 1 }: DokumenGridProps) {
    if (!data || data.length === 0) {
        return (
            <div className="col-span-full py-16 text-center bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-dashed border-border rounded-4xl">
                <FileArchive className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Tidak ada dokumen</h3>
                <p className="text-muted-foreground">Belum ada dokumen yang sesuai dengan kriteria pencarian.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((doc, idx) => (
                    <div
                        key={doc.id}
                        className="group overflow-hidden relative bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-border/50 rounded-4xl p-6 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                        style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />

                        <div className="flex items-start gap-4 flex-1 relative z-10">
                            <div className={cn(
                                "flex items-center justify-center w-14 h-14 rounded-2xl shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md",
                                doc.bg, doc.color
                            )}>
                                <doc.icon className="w-7 h-7" />
                            </div>

                            <div className="space-y-4 flex-1 min-w-0">
                                <h3 className="font-bold text-base text-foreground leading-snug line-clamp-3 group-hover:text-emerald-600 transition-colors">
                                    {doc.title}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    <span className={cn(
                                        "px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border",
                                        "bg-red-50 border-red-100 text-red-600 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-400"
                                    )}>
                                        {doc.type}
                                    </span>
                                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border bg-zinc-50 border-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400">
                                        {doc.year}
                                    </span>
                                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border bg-emerald-50 border-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400">
                                        {doc.category.replace('-', ' ')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 mt-auto relative z-10">
                            <a
                                href={doc.url}
                                download={doc.url !== '#'}
                                className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 gap-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300"
                            >
                                <Download className="w-4 h-4" />
                                {doc.url !== '#' ? 'Unduh Dokumen' : 'Unduh'}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Component */}
            {totalPages > 1 && (
                <div className="mt-8 flex flex-col items-center gap-4 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-4xl border border-zinc-100 dark:border-zinc-800/50">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    className="rounded-xl border-zinc-200 dark:border-zinc-800 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
                                    aria-disabled={currentPage === 1}
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
                                                href="#"
                                                isActive={isCurrent}
                                                className={isCurrent
                                                    ? "rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white hover:text-white border-transparent"
                                                    : "rounded-xl border-zinc-200 dark:border-zinc-800 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
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
                                    href="#"
                                    className="rounded-xl border-zinc-200 dark:border-zinc-800 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
                                    aria-disabled={currentPage === totalPages}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}
