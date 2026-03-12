import type { HeroSetting, QuickAccessItem } from '@/types/hero-setting';
import type { AgendaTerdekat } from '@/types/home';
import type { FeaturedPengurus } from '@/types/pengurus';
import type { SiteContact } from '@/types/site-contact';
import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

function resolveStorageUrl(path?: string | null): string | null {
    if (! path) {
        return null;
    }

    return path.startsWith('http') ? path : `/storage/${path}`;
}

// Icon mapping component
function QuickAccessIcon({ icon, className = '' }: { icon: QuickAccessItem['icon']; className?: string }) {
    const iconMap: Record<QuickAccessItem['icon'], React.ReactElement> = {
        book: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
        ),
        calculator: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M12 11h4" />
                <path d="M12 16h4" />
                <path d="M8 11h.01" />
                <path d="M8 16h.01" />
            </svg>
        ),
        users: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
        calendar: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
        ),
        mosque: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M12 2 L12 6 M9 6 L15 6 M6 14 L18 14 M4 18 L20 18 L20 22 L4 22 Z" />
                <circle cx="12" cy="10" r="2" />
            </svg>
        ),
        pray: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M12 2 L12 6 M8 8 L16 8 L16 14 L14 16 L10 16 L8 14 Z" />
            </svg>
        ),
        quran: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                <path d="M12 6v6l2-1" />
            </svg>
        ),
        heart: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
        ),
        share: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
            </svg>
        ),
        phone: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        mail: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m2 7 10 7L22 7" />
            </svg>
        ),
        location: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        info: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
            </svg>
        ),
        newspaper: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
            </svg>
        ),
        video: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="m22 8-6 4 6 4V8Z" />
                <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
            </svg>
        ),
        image: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
        ),
        microphone: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
        ),
        wallet: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
            </svg>
        ),
    };

    return iconMap[icon] || iconMap.book;
}

// Badge rendering component
function QuickAccessBadge({ badgeType }: { badgeType: QuickAccessItem['badge_type'] }) {
    if (!badgeType || badgeType === 'none') return null;

    switch (badgeType) {
        case 'check':
            return (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[8px] font-bold text-white shadow-lg md:h-6 md:w-6 md:text-[10px]">
                    ✓
                </span>
            );
        case 'new':
            return (
                <span className="absolute -top-1 -right-1 rounded-full bg-amber-500 px-1.5 py-0.5 text-[8px] font-bold text-white shadow-lg md:px-2 md:py-1 md:text-[9px]">
                    NEW
                </span>
            );
        case 'hot':
            return (
                <span className="absolute -top-1 -right-1 rounded-full bg-red-500 px-1.5 py-0.5 text-[8px] font-bold text-white shadow-lg md:px-2 md:py-1 md:text-[9px]">
                    HOT
                </span>
            );
        case 'beta':
            return (
                <span className="absolute -top-1 -right-1 rounded-full bg-purple-500 px-1.5 py-0.5 text-[8px] font-bold text-white shadow-lg md:px-2 md:py-1 md:text-[9px]">
                    BETA
                </span>
            );
        case 'external':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    className="absolute -top-0.5 -right-0.5 opacity-70"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M7 17L17 7M17 7H7M17 7V17"
                    />
                </svg>
            );
        default:
            return null;
    }
}

export default function Hero({
    agendaTerdekat,
    siteContact,
    heroSetting,
    featuredPengurus = [],
}: {
    agendaTerdekat: AgendaTerdekat | null;
    siteContact?: SiteContact;
    heroSetting?: HeroSetting;
    featuredPengurus?: FeaturedPengurus[];
}) {
    const agendaDateText = agendaTerdekat?.tanggal_mulai
        ? new Date(agendaTerdekat.tanggal_mulai).toLocaleDateString('id-ID', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
          })
        : '-';

    const [failedVideoUrl, setFailedVideoUrl] = useState<string | null>(null);

    const heroMediaType = heroSetting?.hero_media_type ?? 'video';
    const configuredHeroVideoUrl =
        resolveStorageUrl(heroSetting?.hero_video) ?? '/storage/hero/vidio.mp4';
    const heroImageUrl =
        resolveStorageUrl(heroSetting?.hero_image) ?? '/images/masjidnewww-scaled.png';
    const heroAddress =
        siteContact?.address ??
        'Jl. Tambun Bungai Komplek Islamic Center Kab. Kapuas';
    const shouldUseImageHero =
        heroMediaType === 'image' ||
        !configuredHeroVideoUrl ||
        failedVideoUrl === configuredHeroVideoUrl;

    return (
        <div className="relative min-h-screen font-sans text-foreground">
            {/* Islamic Subtle Background Pattern */}

            <div className="relative z-10">
                {/* Navigation */}

                {/* Hero Section */}
                <main className="mx-auto max-w-380 px-4 pb-4 md:px-4">
                    {/* SVG clip-path definition for rounded notch shape */}
                    <svg width="100%" height="0" className="hidden md:block">
                        <defs>
                            <clipPath
                                id="hero-clip"
                                clipPathUnits={'objectBoundingBox'}
                            >
                                <path
                                    d="
                                        M0.999479,0
                                        C0.99974,0 1,0.000415 1,0.001
                                        V0.15008
                                        C1,0.17009 0.99516,0.18979 0.99297,0.20746
                                        L0.98356,0.24246
                                        C0.98137,0.26013 0.97448,0.27984 0.97448,0.29984
                                        V0.69924
                                        C0.97448,0.71924 0.98137,0.73895 0.98356,0.75662
                                        L0.99297,0.79162
                                        C0.99516,0.80929 1,0.82899 1,0.849
                                        V0.999
                                        C1,0.99974 0.99974,1 0.999479,1
                                        H0.8379
                                        C0.8328,1 0.8277,0.99815 0.8227,0.9971
                                        L0.7469,0.96697
                                        C0.7419,0.96592 0.7368,0.965 0.7317,0.965
                                        H0.2702
                                        C0.2651,0.965 0.26,0.96592 0.255,0.96697
                                        L0.1792,0.9971
                                        C0.1742,0.99815 0.1691,1 0.164,1
                                        H0.000521
                                        C0.00026,1 0,0.99974 0,0.999
                                        V0.849
                                        C0,0.82899 0.00484,0.80929 0.00703,0.79162
                                        L0.01644,0.75662
                                        C0.01863,0.73895 0.02552,0.71924 0.02552,0.69924
                                        V0.29984
                                        C0.02552,0.27984 0.01863,0.26013 0.01644,0.24246
                                        L0.00703,0.20746
                                        C0.00484,0.18979 0,0.17009 0,0.15008
                                        V0.001
                                        C0,0.000415 0.00026,0 0.000521,0
                                        H0.999479Z
                                    "
                                />
                            </clipPath>
                        </defs>
                    </svg>

                    <div
                        className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden rounded-4xl bg-black p-8 text-center dark:bg-zinc-950"
                        style={{ clipPath: 'url(#hero-clip)' }}
                    >
                        {/* Background Video & Overlay */}
                        <div className="pointer-events-none absolute inset-0 z-0">
                            {shouldUseImageHero ? (
                                <img
                                    src={heroImageUrl}
                                    alt="Hero Masjid Agung Al-Mukarram Amanah"
                                    className="h-full w-full object-cover opacity-55"
                                    onError={(event) => {
                                        event.currentTarget.src =
                                            '/images/masjidnewww-scaled.png';
                                        event.currentTarget.onerror = null;
                                    }}
                                />
                            ) : (
                                <video
                                    key={configuredHeroVideoUrl}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="h-full w-full object-cover opacity-50 mix-blend-screen"
                                    poster={heroImageUrl}
                                    onError={() =>
                                        setFailedVideoUrl(configuredHeroVideoUrl)
                                    }
                                >
                                    <source src={configuredHeroVideoUrl} type="video/mp4" />
                                    <source src={configuredHeroVideoUrl} type="video/webm" />
                                    <source src={configuredHeroVideoUrl} type="video/ogg" />
                                </video>
                            )}
                            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-primary/40 to-black/90 dark:from-black/80 dark:via-primary/30 dark:to-black"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 mt-8 flex max-w-4xl flex-col items-center">
                            <p className="mb-6 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary-foreground/90 backdrop-blur-md md:text-base">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]"></span>
                                {heroAddress}
                            </p>

                            <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                MASJID AGUNG
                                <br />
                                <span className="text-primary drop-shadow-sm">
                                    AL-MUKARRAM AMANAH
                                </span>
                            </h1>

                            <div className="relative mb-10 max-w-3xl text-base leading-relaxed font-light text-white/90 italic sm:text-lg md:text-xl">
                                <span className="absolute -top-4 -left-6 text-4xl text-primary/40">
                                    "
                                </span>
                                Sesungguhnya yang memakmurkan masjid-masjid
                                Allah hanyalah orang-orang yang beriman kepada
                                Allah dan hari akhir . . .
                                <span className="absolute -right-4 -bottom-4 text-4xl text-primary/40">
                                    "
                                </span>
                                <span className="mt-4 block text-sm font-medium tracking-widest text-primary uppercase not-italic">
                                    — Q.S. At-Taubah : 18 —
                                </span>
                            </div>

                            <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:mb-12">
                                <Link
                                    href="/program-masjid"
                                    className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground shadow-[0_0_20px_var(--color-primary)] transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:opacity-90 active:scale-105 active:bg-primary/90 active:opacity-90"
                                >
                                    Program & Layanan
                                    <div className="rounded-full bg-background/20 p-1.5 text-primary-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-active:translate-x-1 group-active:-translate-y-1">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </Link>
                            </div>

                            {/* Quick Access Features - Visible on both mobile & desktop */}
                            {heroSetting?.quick_access_items && heroSetting.quick_access_items.length > 0 && (
                                <div className="mb-8 grid w-full max-w-2xl grid-cols-3 gap-3 px-2 md:mb-12 md:gap-4">
                                    {heroSetting.quick_access_items.map((item, index) => {
                                        const colorWithoutHash = item.color?.replace('#', '') || '10b981';
                                        const rgbColor = {
                                            r: parseInt(colorWithoutHash.slice(0, 2), 16),
                                            g: parseInt(colorWithoutHash.slice(2, 4), 16),
                                            b: parseInt(colorWithoutHash.slice(4, 6), 16),
                                        };

                                        return (
                                            <Link
                                                key={index}
                                                href={item.href}
                                                className={`group relative flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md transition-all hover:scale-105 hover:bg-white/15 hover:shadow-[0_0_20px_rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b},0.3)] active:scale-105 active:bg-white/15 md:p-4`}
                                            >
                                                <div
                                                    className="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition-all md:h-14 md:w-14"
                                                    style={{
                                                        background: `linear-gradient(to bottom right, rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.8), rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.2))`,
                                                    }}
                                                >
                                                    <QuickAccessIcon
                                                        icon={item.icon}
                                                        className="h-6 w-6 transition-transform group-hover:scale-110 md:h-7 md:w-7"
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-xs font-semibold text-white md:text-sm">
                                                        {item.title}
                                                    </div>
                                                    {item.subtitle && (
                                                        <div className="text-[10px] text-white/70 md:text-xs">
                                                            {item.subtitle}
                                                        </div>
                                                    )}
                                                </div>
                                                <QuickAccessBadge badgeType={item.badge_type} />
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Mobile Widgets */}
                            <div className="z-20 flex w-full max-w-md flex-col gap-2 px-1 md:hidden">
                                <div className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-left shadow-xl backdrop-blur-md">
                                    <div className="relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-primary/80 to-primary/20 shadow-inner">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect
                                                width="18"
                                                height="18"
                                                x="3"
                                                y="4"
                                                rx="2"
                                                ry="2"
                                            />
                                            <line
                                                x1="16"
                                                x2="16"
                                                y1="2"
                                                y2="6"
                                            />
                                            <line x1="8" x2="8" y1="2" y2="6" />
                                            <line
                                                x1="3"
                                                x2="21"
                                                y1="10"
                                                y2="10"
                                            />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[10px] font-medium tracking-wider text-primary/80 uppercase">
                                            Agenda Terdekat
                                        </div>
                                        <div className="line-clamp-1 text-xs font-semibold text-white">
                                            {agendaTerdekat
                                                ? agendaTerdekat.judul
                                                : 'Belum ada agenda'}
                                        </div>
                                        <div className="line-clamp-1 text-[11px] text-white/70">
                                            {agendaTerdekat
                                                ? agendaDateText
                                                : '-'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Featured Pengurus Floating Card */}
                        {featuredPengurus.length > 0 && (
                            <Link
                                href="/struktur-organisasi"
                                className="absolute right-10 bottom-18 z-20 hidden items-center gap-4 rounded-full border border-white/10 bg-white/10 p-2 pr-6 shadow-2xl backdrop-blur-md transition-transform hover:scale-105 active:scale-105 md:flex lg:right-16 lg:bottom-14"
                            >
                                <div className="flex -space-x-3">
                                    {featuredPengurus.slice(0, 3).map((pengurus, index) => (
                                        <img
                                            key={index}
                                            className="h-10 w-10 rounded-full border-2 border-primary/40 object-cover opacity-90"
                                            src={pengurus.fotoUrl || '/images/logomasjid.png'}
                                            alt={pengurus.nama}
                                            title={`${pengurus.nama} - ${pengurus.jabatan}`}
                                            onError={(e) => {
                                                e.currentTarget.src = '/images/logomasjid.png';
                                            }}
                                        />
                                    ))}
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-semibold tracking-wide text-white">
                                        Susunan Pengurus
                                    </div>
                                    <div className="mt-0.5 flex items-center gap-1">
                                        <span className="text-xs font-medium text-primary/80">
                                            Badan Pengelola Masjid
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* Floating Info Left Top - Layanan ZISWAF */}
                        <div className="absolute top-10 left-10 z-20 hidden items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 opacity-80 backdrop-blur-sm transition-opacity hover:opacity-100 active:opacity-100 md:flex lg:top-14 lg:left-14">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 2v20" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <div className="text-xs font-semibold text-white">
                                    Layanan ZISWAF
                                </div>
                                <div className="text-[10px] text-white/70">
                                    Zakat, Infaq, & Sedekah
                                </div>
                            </div>
                        </div>

                        {/* Floating Info Right Top - Program Dakwah Terjadwal */}
                        <div className="absolute top-10 right-10 z-20 hidden items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 opacity-80 backdrop-blur-sm transition-opacity hover:opacity-100 active:opacity-100 md:flex lg:top-14 lg:right-14">
                            <div className="text-right">
                                <div className="text-xs font-semibold text-white">
                                    Kajian & Dakwah
                                </div>
                                <div className="text-[10px] text-white/70">
                                    Mengkaji Ilmu Berdasarkan Sunnah
                                </div>
                            </div>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                                </svg>
                            </div>
                        </div>

                        {/* Floating Info Left Bottom */}
                        <div className="absolute bottom-18 left-10 z-20 hidden cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 shadow-2xl backdrop-blur-md transition-transform hover:scale-105 active:scale-105 md:flex lg:bottom-14 lg:left-14">
                            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary/80 to-primary/20 shadow-inner">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        width="18"
                                        height="18"
                                        x="3"
                                        y="4"
                                        rx="2"
                                        ry="2"
                                    />
                                    <line x1="16" x2="16" y1="2" y2="6" />
                                    <line x1="8" x2="8" y1="2" y2="6" />
                                    <line x1="3" x2="21" y1="10" y2="10" />
                                    <path d="M8 14h.01" />
                                    <path d="M12 14h.01" />
                                    <path d="M16 14h.01" />
                                    <path d="M8 18h.01" />
                                    <path d="M12 18h.01" />
                                    <path d="M16 18h.01" />
                                </svg>
                            </div>
                            <div className="min-w-0 max-w-64 text-left">
                                <div className="text-[10px] font-medium tracking-wider text-primary/80 uppercase">
                                    Agenda Terdekat
                                </div>
                                <div className="line-clamp-2 text-sm font-semibold text-white">
                                    {agendaTerdekat
                                        ? agendaTerdekat.judul
                                        : 'Belum ada agenda'}
                                </div>
                                <div className="line-clamp-1 text-xs text-white/70">
                                    {agendaTerdekat ? agendaDateText : '-'}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div
                className="pointer-events-none absolute inset-0 -z-1 opacity-[0.4] dark:opacity-[0.02]"
                style={{
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                }}
            ></div>
        </div>
    );
}
