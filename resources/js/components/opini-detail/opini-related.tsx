import { Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, BookOpen, User } from 'lucide-react';

export interface RelatedOpini {
    slug: string;
    category: string;
    title: string;
    author: string;
    date: string;
    readTime: string;
    excerpt: string;
}

interface OpiniRelatedProps {
    items: RelatedOpini[];
}

export default function OpiniRelated({ items }: OpiniRelatedProps) {
    if (items.length === 0) return null;

    return (
        <section className="relative overflow-hidden rounded-4xl border border-border bg-white/60 p-6 shadow-sm backdrop-blur-xl lg:p-8 dark:bg-zinc-900/50">
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-violet-500/8 blur-[80px]" />

            {/* Header */}
            <div className="relative z-10 mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet-50 to-violet-100/50 text-violet-600 ring-1 ring-violet-500/20 dark:from-violet-900/20 dark:to-violet-800/10 dark:text-violet-400">
                    <BookOpen className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                    Opini Terkait
                </h3>
                <div className="ml-auto h-px flex-1 rounded-full bg-border" />
            </div>

            {/* Grid */}
            <div className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item, idx) => (
                    <Link
                        key={idx}
                        href={`/opini-detail/${item.slug}`}
                        className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 active:-translate-y-1 active:shadow-xl active:shadow-violet-500/10 dark:bg-zinc-900"
                    >
                        {/* Grid texture bg */}
                        <div className="absolute inset-0 z-0 rounded-3xl bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[20px_20px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />

                        <div className="relative z-10">
                            <span className="mb-3 inline-block rounded-full border border-violet-100/50 bg-violet-50 px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-violet-600 uppercase dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400">
                                {item.category}
                            </span>
                            <h4 className="mb-3 line-clamp-3 text-sm leading-snug font-bold text-foreground transition-colors group-hover:text-violet-600 group-active:text-violet-600">
                                {item.title}
                            </h4>
                            <p className="line-clamp-2 text-xs text-muted-foreground">
                                {item.excerpt}
                            </p>
                        </div>

                        <div className="relative z-10 mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                            <div className="flex items-center gap-2">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                                    <User className="h-3.5 w-3.5 text-zinc-500" />
                                </div>
                                <span className="text-[11px] font-semibold text-muted-foreground">
                                    {item.author}
                                </span>
                            </div>
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white opacity-0 shadow-sm ring-1 ring-border transition-all duration-300 group-hover:opacity-100 group-active:opacity-100 dark:bg-zinc-900">
                                <ArrowRight className="h-3.5 w-3.5 text-violet-600" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Back */}
            <div className="relative z-10 mt-6">
                <Link
                    href="/opini"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:bg-zinc-50 hover:shadow-md active:bg-zinc-50 active:bg-zinc-800 active:shadow-md dark:bg-zinc-900 dark:hover:bg-zinc-800"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Kembali ke Opini
                </Link>
            </div>
        </section>
    );
}
