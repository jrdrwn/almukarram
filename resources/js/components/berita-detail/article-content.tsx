import parse from 'html-react-parser';
import { Image as ImageIcon } from 'lucide-react';
import type { BeritaDetail } from './article-hero';

interface ArticleContentProps {
    berita: BeritaDetail;
    fontSize?: number;
}

export default function ArticleContent({
    berita,
    fontSize = 1,
}: ArticleContentProps) {
    return (
        <article className="relative overflow-hidden rounded-4xl border border-border bg-white shadow-sm dark:bg-zinc-900">
            {/* Subtle ambient glow */}
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]" />
            <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />

            {/* Featured Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                {berita.gambar ? (
                    <img
                        src={`/uploads/${berita.gambar}`}
                        alt={berita.judul}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = 'none';
                            if (target.nextElementSibling) {
                                (target.nextElementSibling as HTMLElement).style.display = 'flex';
                            }
                        }}
                    />
                ) : null}
                {/* Fallback Placeholder */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-30"
                    style={{ display: berita.gambar ? 'none' : 'flex' }}
                >
                    <ImageIcon className="h-16 w-16 text-zinc-400" />
                    <span className="text-sm text-zinc-400">Tidak ada gambar</span>
                </div>
            </div>

            {/* Article Body */}
            <div className="relative z-10 px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
                {/* Title (repeated for reading flow within content) */}
                <h2 className="mb-6 text-2xl leading-tight font-extrabold tracking-tight text-foreground md:text-3xl">
                    <span className="bg-linear-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-emerald-300">
                        {berita.judul}
                    </span>
                </h2>

                {/* Divider line */}
                <div className="mb-8 flex items-center gap-4">
                    <div className="h-1 w-16 rounded-full bg-emerald-500" />
                    <div className="h-px flex-1 bg-border" />
                </div>

                {/* HTML Content */}
                <div
                    className="prose prose-sm max-w-none text-justify leading-relaxed text-foreground
                        prose-headings:font-bold prose-headings:text-foreground
                        prose-a:text-emerald-600 prose-a:underline hover:prose-a:text-emerald-700
                        prose-blockquote:border-l-emerald-500 prose-blockquote:bg-emerald-50/50 prose-blockquote:text-muted-foreground
                        prose-img:rounded-3xl prose-img:shadow-md
                        prose-strong:text-foreground
                        prose-ul:list-disc prose-ol:list-decimal
                        lg:prose-base
                        dark:prose-invert dark:prose-blockquote:bg-emerald-900/20"
                    style={{ fontSize: `${fontSize}em` }}
                >
                    {parse(berita.isi)}
                </div>
            </div>
        </article>
    );
}
