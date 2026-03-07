import { Link } from '@inertiajs/react';
import {
    Calendar,
    Eye,
    Home,
    Newspaper,
    Tag,
    User,
} from 'lucide-react';

export interface BeritaDetail {
    id: number;
    slug: string;
    judul: string;
    penulis: string;
    gambar?: string;
    created_at: string;
    views: number;
    isi: string;
    kategori?: string;
    kat_slug?: string;
    ringkasan?: string;
}

interface ArticleHeroProps {
    berita: BeritaDetail;
}

function formatTanggal(dateStr: string): string {
    try {
        return new Date(dateStr).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    } catch {
        return dateStr;
    }
}

export default function ArticleHero({ berita }: ArticleHeroProps) {
    return (
        <section className="relative overflow-hidden py-24 md:py-32">
            {/* Background Image */}
            {berita.gambar && (
                <div className="absolute inset-0 -z-20">
                    <img
                        src={`/uploads/${berita.gambar}`}
                        alt={berita.judul}
                        className="h-full w-full object-cover object-center blur-sm scale-105"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                    />
                </div>
            )}
            {/* Overlays */}
            <div className="absolute inset-0 -z-10 bg-emerald-900/85 mix-blend-multiply dark:bg-emerald-950/90" />
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-background via-background/40 to-transparent" />

            <div className="relative z-10 container mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                {/* Badge Kategori */}
                {berita.kategori && (
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-100 shadow-sm backdrop-blur-md">
                        <Tag className="h-4 w-4" />
                        <span>{berita.kategori}</span>
                    </div>
                )}

                {/* Judul */}
                <h1 className="mb-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg md:text-5xl">
                    {berita.judul}
                </h1>

                {/* Meta */}
                <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/75">
                    <span className="flex items-center gap-1.5">
                        <User className="h-4 w-4 text-emerald-300" />
                        {berita.penulis}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-emerald-300" />
                        {formatTanggal(berita.created_at)}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Eye className="h-4 w-4 text-emerald-300" />
                        {berita.views.toLocaleString('id-ID')} Dilihat
                    </span>
                    {berita.kategori && berita.kat_slug && (
                        <Link
                            href={`/berita?kategori=${berita.kat_slug}`}
                            className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-0.5 text-emerald-200 transition-colors hover:bg-white/20"
                        >
                            <Newspaper className="h-3.5 w-3.5" />
                            {berita.kategori}
                        </Link>
                    )}
                </div>

                {/* Breadcrumb */}
                <nav aria-label="breadcrumb" className="mx-auto flex justify-start">
                    <ol className="inline-flex flex-wrap items-center gap-y-2 space-x-2 rounded-full border border-white/10 bg-black/20 px-5 py-2.5 text-sm text-white/80 shadow-lg backdrop-blur-md dark:bg-black/40">
                        <li className="flex items-center">
                            <Link
                                href="/"
                                className="flex items-center gap-1.5 transition-colors hover:text-white"
                            >
                                <Home className="h-3.5 w-3.5" />
                                Beranda
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <span className="mx-1 opacity-50">/</span>
                            <Link
                                href="/berita"
                                className="flex items-center gap-1.5 transition-colors hover:text-white"
                            >
                                <Newspaper className="h-3.5 w-3.5" />
                                Berita
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <span className="mx-1 opacity-50">/</span>
                            <span
                                className="max-w-50 truncate font-bold text-white"
                                aria-current="page"
                            >
                                {berita.judul}
                            </span>
                        </li>
                    </ol>
                </nav>
            </div>
        </section>
    );
}
