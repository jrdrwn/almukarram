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
import Seo from '@/components/shared/seo';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

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
    const appUrl = (import.meta.env.VITE_APP_URL || '').replace(/\/+$/, '');
    const imagePath = berita.gambar ? `/storage/${berita.gambar}` : undefined;
    const articlePath = `/berita-detail/${berita.slug}`;
    const articleUrl = appUrl ? `${appUrl}${articlePath}` : articlePath;
    const seoDescription =
        berita.ringkasan?.trim() ||
        berita.isi.replace(/<[^>]+>/g, '').slice(0, 160);

    return (
        <>
            <Seo
                title={`${berita.judul} | Masjid Agung Al-Mukarram`}
                description={seoDescription}
                image={imagePath}
                url={articlePath}
                type="article"
                author={berita.penulis}
                publishedTime={berita.created_at}
            />
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
                                articleUrl={articleUrl}
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
            <div className="fixed right-6 bottom-18 z-50">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            size="icon"
                            className="h-10 w-10 rounded-full border border-border bg-white shadow-xl hover:bg-zinc-100 active:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:active:bg-zinc-800"
                        >
                            <ALargeSmall className="h-6 w-6 text-foreground" />
                            <span className="sr-only">Pengaturan Font</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40 rounded-xl p-2">
                        <DropdownMenuLabel className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                            Ukuran Font
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="flex flex-col gap-1.5 p-1">
                            <Button
                                variant="outline"
                                onClick={() =>
                                    setFontSize((p) => Math.min(2, +(p + 0.1).toFixed(1)))
                                }
                                className="w-full justify-center rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 active:bg-emerald-100 border-0 dark:bg-emerald-900/20 dark:text-emerald-400 dark:hover:bg-emerald-900/40 dark:active:bg-emerald-900/40"
                            >
                                Perbesar (A+)
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    setFontSize((p) => Math.max(0.8, +(p - 0.1).toFixed(1)))
                                }
                                className="w-full justify-center rounded-lg bg-zinc-100 text-zinc-600 hover:bg-zinc-200 active:bg-zinc-200 border-0 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:active:bg-zinc-700"
                            >
                                Perkecil (A-)
                            </Button>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <Footer />
        </>
    );
}
