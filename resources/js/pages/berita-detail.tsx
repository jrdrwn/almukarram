import { Head } from '@inertiajs/react';
import { ALargeSmall } from 'lucide-react';
import { useState } from 'react';

import ArticleContent from '@/components/berita-detail/article-content';
import type { BeritaDetail } from '@/components/berita-detail/article-hero';
import ArticleHero from '@/components/berita-detail/article-hero';
import type { RelatedBerita } from '@/components/berita-detail/article-related';
import ArticleRelated from '@/components/berita-detail/article-related';
import ArticleShare from '@/components/berita-detail/article-share';
import ArticleSidebar from '@/components/berita-detail/article-sidebar';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

interface BeritaDetailPageProps {
    berita: BeritaDetail;
    related: RelatedBerita[];
    latest: {
        id: number;
        judul: string;
        slug: string;
        gambar?: string;
        created_at: string;
    }[];
}

export default function BeritaDetailPage({
    berita,
    related,
    latest,
}: BeritaDetailPageProps) {
    const [fontSize, setFontSize] = useState(1);

    return (
        <>
            <Head title={`${berita.judul} | Masjid Agung Al-Mukarram`} />
            <Header />

            {/* Page Hero with background-image, overlay, breadcrumb, meta */}
            <ArticleHero berita={berita} />

            {/* Main Body */}
            <main className="relative flex-1 overflow-hidden py-12 lg:py-16">
                {/* Background texture */}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[32px_32px]" />
                <div className="pointer-events-none absolute top-0 left-0 -z-10 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[100px]" />

                <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                    <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                        {/* Article Column */}
                        <div className="flex flex-col gap-6 lg:col-span-8">
                            {/* Article Body */}
                            <ArticleContent
                                berita={berita}
                                fontSize={fontSize}
                            />

                            {/* Share */}
                            <ArticleShare
                                judul={berita.judul}
                                slug={berita.slug}
                            />

                            {/* Related News */}
                            <ArticleRelated items={related} />
                        </div>

                        {/* Sidebar Column */}
                        <div className="lg:col-span-4">
                            <ArticleSidebar
                                latest={latest}
                                currentSlug={berita.slug}
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* Arabesque texture overlay */}
            <div
                className="pointer-events-none fixed inset-0 -z-1 opacity-[0.4] dark:opacity-[0.02]"
                style={{
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                }}
            />

            {/* Font size accessibility button */}
            <div className="fixed right-6 bottom-6 z-50">
                <div className="flex flex-col gap-1.5 overflow-hidden rounded-2xl border border-border bg-white/80 p-2 shadow-lg backdrop-blur-xl dark:bg-zinc-900/80">
                    <span className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                        <ALargeSmall className="h-3 w-3" />
                        Font
                    </span>
                    <button
                        onClick={() =>
                            setFontSize((p) => Math.min(2, +(p + 0.1).toFixed(1)))
                        }
                        className="rounded-xl bg-emerald-50 px-3 py-1.5 text-sm font-extrabold text-emerald-700 transition hover:bg-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:hover:bg-emerald-900/40"
                        aria-label="Perbesar font"
                    >
                        A+
                    </button>
                    <button
                        onClick={() =>
                            setFontSize((p) => Math.max(0.8, +(p - 0.1).toFixed(1)))
                        }
                        className="rounded-xl bg-zinc-100 px-3 py-1.5 text-sm font-bold text-zinc-600 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                        aria-label="Perkecil font"
                    >
                        A-
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
}
