import { Link } from '@inertiajs/react';
import { BookOpen, Clock, Home, PenTool, Tag, User } from 'lucide-react';

export interface OpiniDetail {
    id?: number;
    slug: string;
    category: string;
    title: string;
    author: string;
    date: string;
    readTime: string;
    excerpt: string;
    isi: string;
    foto?: string;
    authorBio?: string;
}

interface OpiniHeroProps {
    opini: OpiniDetail;
}

export default function OpiniHero({ opini }: OpiniHeroProps) {
    return (
        <section className="relative overflow-hidden py-24 md:py-36">
            {/* Background Image blurred */}
            {opini.foto && (
                <div className="absolute inset-0 -z-20">
                    <img
                        src={opini.foto}
                        alt={opini.title}
                        className="h-full w-full scale-105 object-cover object-center blur-sm"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                    />
                </div>
            )}
            {/* Dark overlay */}
            <div className="absolute inset-0 -z-10 bg-indigo-950/80 mix-blend-multiply dark:bg-indigo-950/90" />
            {/* Gradient fade-to-background */}
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-background via-background/35 to-transparent" />
            {/* Ambient glow orbs */}
            <div className="pointer-events-none absolute top-1/4 left-1/4 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
            <div className="pointer-events-none absolute top-0 right-0 -z-10 h-60 w-60 rounded-full bg-indigo-400/15 blur-[80px]" />

            <div className="relative z-10 container mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                {/* Category badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/20 px-4 py-2 text-sm font-semibold text-violet-100 shadow-sm backdrop-blur-md">
                    <Tag className="h-4 w-4" />
                    <span>{opini.category}</span>
                </div>

                {/* Title */}
                <h1 className="mb-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg md:text-5xl">
                    {opini.title}
                </h1>

                {/* Lead / Excerpt */}
                {opini.excerpt && (
                    <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/75 italic">
                        "{opini.excerpt}"
                    </p>
                )}

                {/* Meta */}
                <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
                    <span className="flex items-center gap-1.5">
                        <User className="h-4 w-4 text-violet-300" />
                        {opini.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-violet-300" />
                        {opini.date}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-0.5">
                        <BookOpen className="h-3.5 w-3.5 text-violet-300" />
                        {opini.readTime}
                    </span>
                </div>

                {/* Breadcrumb */}
                <nav aria-label="breadcrumb">
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
                                href="/opini"
                                className="flex items-center gap-1.5 transition-colors hover:text-white"
                            >
                                <PenTool className="h-3.5 w-3.5" />
                                Opini
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <span className="mx-1 opacity-50">/</span>
                            <span
                                className="max-w-50 truncate font-bold text-white"
                                aria-current="page"
                            >
                                {opini.title}
                            </span>
                        </li>
                    </ol>
                </nav>
            </div>
        </section>
    );
}
