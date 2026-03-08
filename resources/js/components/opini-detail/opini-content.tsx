import parse from 'html-react-parser';
import { Award, BookOpen, User } from 'lucide-react';
import type { OpiniDetail } from './opini-hero';

interface OpiniContentProps {
    opini: OpiniDetail;
    fontSize?: number;
}

export default function OpiniContent({
    opini,
    fontSize = 1,
}: OpiniContentProps) {
    return (
        <article className="relative overflow-hidden rounded-4xl border border-border bg-white shadow-sm dark:bg-zinc-900">
            {/* Ambient glow blobs */}
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-500/5 blur-[120px]" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-indigo-500/5 blur-[100px]" />

            {/* Featured Image (if provided) */}
            {opini.foto && (
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <img
                        src={opini.foto}
                        alt={opini.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 active:scale-105"
                        onError={(e) => {
                            (
                                e.currentTarget as HTMLImageElement
                            ).parentElement!.style.display = 'none';
                        }}
                    />
                </div>
            )}

            {/* Article Body */}
            <div className="relative z-10 px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
                {/* Title gradient */}
                <h2 className="mb-4 text-2xl leading-tight font-extrabold tracking-tight text-foreground md:text-3xl">
                    <span className="bg-linear-to-r from-indigo-700 to-violet-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-300">
                        {opini.title}
                    </span>
                </h2>

                {/* Decorative divider */}
                <div className="mb-8 flex items-center gap-4">
                    <div className="h-1 w-16 rounded-full bg-linear-to-r from-indigo-500 to-violet-400" />
                    <div className="h-px flex-1 bg-border" />
                </div>

                {/* Excerpt blockquote */}
                {opini.excerpt && (
                    <blockquote className="mb-8 rounded-2xl border-l-4 border-violet-400 bg-violet-50/70 px-6 py-4 text-base leading-relaxed text-foreground/80 italic dark:bg-violet-900/10 dark:text-white/70">
                        {opini.excerpt}
                    </blockquote>
                )}

                {/* Full HTML content */}
                <div
                    className="prose prose-sm prose-headings:font-bold prose-headings:text-foreground prose-a:text-violet-600 prose-a:underline hover:prose-a active:prose-a:text-violet-700 prose-blockquote:border-l-violet-400 prose-blockquote:bg-violet-50/50 prose-blockquote:text-muted-foreground prose-img:rounded-3xl prose-img:shadow-md prose-strong:text-foreground prose-ul:list-disc prose-ol:list-decimal lg:prose-base dark:prose-invert dark:prose-blockquote:bg-violet-900/20 max-w-none text-justify leading-relaxed text-foreground"
                    style={{ fontSize: `${fontSize}em` }}
                >
                    {parse(opini.isi)}
                </div>

                {/* Author bio card */}
                {(opini.authorBio || opini.author) && (
                    <div className="mt-10 flex items-start gap-5 rounded-2xl border border-border bg-zinc-50/80 p-5 dark:bg-zinc-800/50">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-violet-100 to-indigo-100 ring-2 ring-violet-200 dark:from-violet-900/30 dark:to-indigo-900/30 dark:ring-violet-500/20">
                            <User className="h-7 w-7 text-violet-500" />
                        </div>
                        <div>
                            <div className="mb-1 flex items-center gap-2">
                                <h4 className="font-bold text-foreground">
                                    {opini.author}
                                </h4>
                                <span className="inline-flex items-center gap-1 rounded-full bg-violet-100 px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-violet-600 uppercase dark:bg-violet-900/30 dark:text-violet-400">
                                    <Award className="h-3 w-3" />
                                    Penulis
                                </span>
                            </div>
                            {opini.authorBio && (
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {opini.authorBio}
                                </p>
                            )}
                            <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                                <BookOpen className="h-3 w-3" />
                                <span>{opini.readTime}</span>
                                <span className="mx-1 opacity-40">·</span>
                                <span>{opini.date}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
