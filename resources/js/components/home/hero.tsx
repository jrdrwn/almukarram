import type { AgendaTerdekat } from '@/types/home';
import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ agendaTerdekat }: { agendaTerdekat: AgendaTerdekat | null }) {
    return (
        <div className="relative min-h-screen font-sans text-foreground">
            {/* Islamic Subtle Background Pattern */}

            <div className="relative z-10">
                {/* Navigation */}

                {/* Hero Section */}
                <main className="mx-auto max-w-380 px-4 pb-4 md:px-4">
                    {/* SVG clip-path definition for rounded notch shape */}
                    <svg width="100%" height="0">
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
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-full w-full object-cover opacity-50 mix-blend-screen"
                            >
                                {/* Background video of a mosque */}
                                <source
                                    src="https://www.pexels.com/id-id/download/video/16891597/"
                                    type="video/mp4"
                                />
                            </video>
                            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-primary/40 to-black/90 dark:from-black/80 dark:via-primary/30 dark:to-black"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 mt-8 flex max-w-4xl flex-col items-center">
                            <p className="mb-6 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary-foreground/90 backdrop-blur-md md:text-base">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]"></span>
                                Jl. Tambun Bungai Komplek Islamic Center Kab.
                                Kapuas
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

                            <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:mb-16">
                                <Link
                                    href="/program-masjid"
                                    className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground shadow-[0_0_20px_var(--color-primary)] transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:opacity-90"
                                >
                                    Program & Layanan
                                    <div className="rounded-full bg-background/20 p-1.5 text-primary-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </Link>
                            </div>

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
                                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                            <line x1="16" x2="16" y1="2" y2="6" />
                                            <line x1="8" x2="8" y1="2" y2="6" />
                                            <line x1="3" x2="21" y1="10" y2="10" />
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
                                                ? new Date(
                                                      agendaTerdekat.tanggal_mulai,
                                                  ).toLocaleDateString(
                                                      'id-ID',
                                                      {
                                                          weekday: 'long',
                                                          day: 'numeric',
                                                          month: 'long',
                                                      },
                                                  )
                                                : '-'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Featured Agents Floating Card (Simplified & Centered if needed, but standard is bottom right. I'm moving it to bottom right with more subtle style) */}
                        <div className="absolute right-10 bottom-10 z-20 hidden items-center gap-4 rounded-full border border-white/10 bg-white/10 p-2 pr-6 shadow-2xl backdrop-blur-md md:flex lg:right-16 lg:bottom-14">
                            <div className="flex -space-x-3">
                                <img
                                    className="h-10 w-10 rounded-full border-2 border-primary/40 object-cover opacity-90"
                                    src="https://i.pravatar.cc/100?img=11"
                                    alt="Ustadz 1"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            '/images/logomasjid.png';
                                    }}
                                />
                                <img
                                    className="h-10 w-10 rounded-full border-2 border-primary/40 object-cover opacity-90"
                                    src="https://i.pravatar.cc/100?img=12"
                                    alt="Ustadz 2"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            '/images/logomasjid.png';
                                    }}
                                />
                                <img
                                    className="h-10 w-10 rounded-full border-2 border-primary/40 object-cover opacity-90"
                                    src="https://i.pravatar.cc/100?img=32"
                                    alt="Ustadz 3"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            '/images/logomasjid.png';
                                    }}
                                />
                            </div>
                            <div>
                                <div className="text-sm font-semibold tracking-wide text-white">
                                    Asatidz Pembimbing
                                </div>
                                <div className="mt-0.5 flex items-center gap-1">
                                    <span className="text-xs font-medium text-primary/80">
                                        Bersanad & Berkompeten
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Info Left Top */}
                        <div className="absolute top-10 left-10 z-20 hidden items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 opacity-80 backdrop-blur-sm transition-opacity hover:opacity-100 md:flex lg:top-14 lg:left-14">
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
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <div className="text-xs font-semibold text-white">
                                    Lembaga Pendidikan
                                </div>
                                <div className="text-[10px] text-white/70">
                                    TK, TPA, MDT, & MTs
                                </div>
                            </div>
                        </div>

                        {/* Floating Info Right Top */}
                        <div className="absolute top-10 right-10 z-20 hidden items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 opacity-80 backdrop-blur-sm transition-opacity hover:opacity-100 md:flex lg:top-14 lg:right-14">
                            <div className="text-right">
                                <div className="text-xs font-semibold text-white">
                                    Layanan Ziswaf
                                </div>
                                <div className="text-[10px] text-white/70">
                                    Zakat, Infaq, Sedekah
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
                                    <path d="M12 2v20" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                        </div>

                        {/* Floating Info Left Bottom */}
                        <div className="absolute bottom-10 left-10 z-20 hidden cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 shadow-2xl backdrop-blur-md transition-transform hover:scale-105 md:flex lg:bottom-14 lg:left-14">
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/80 to-primary/20 shadow-inner">
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
                            <div className="text-left">
                                <div className="text-[10px] font-medium tracking-wider text-primary/80 uppercase">
                                    Agenda Terdekat
                                </div>
                                <div className="text-sm font-semibold text-white">
                                    {agendaTerdekat ? agendaTerdekat.judul : 'Belum ada agenda'}
                                </div>
                                <div className="text-xs text-white/70">
                                    {agendaTerdekat ? new Date(agendaTerdekat.tanggal_mulai).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : '-'}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
