import { MapPin, Moon, Satellite } from 'lucide-react';

export default function HeroSection({
    jadwal,
}: {
    jadwal: Record<string, string>;
}) {
    const waktuList = [
        { key: 'subuh', icon: '🌙', label: 'Subuh' },
        { key: 'terbit', icon: '🌅', label: 'Terbit' },
        { key: 'dhuha', icon: '☀️', label: 'Dhuha' },
        { key: 'dzuhur', icon: '🕛', label: 'Dzuhur' },
        { key: 'ashar', icon: '🌤️', label: 'Ashar' },
        { key: 'maghrib', icon: '🌆', label: 'Maghrib' },
        { key: 'isya', icon: '🌃', label: 'Isya' },
        { key: 'imsak', icon: '🌜', label: 'Imsak' },
    ];

    return (
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0A2617] px-4 py-10 shadow-[0_20px_50px_-12px_rgba(10,38,23,0.6)] sm:px-12 sm:py-16">
            {/* Architectural/Geometric Overlay & Gradients */}
            <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-15 mix-blend-overlay"></div>
            <div className="absolute top-0 -left-[20%] z-0 h-150 w-150 -translate-y-1/2 rounded-full bg-emerald-500 opacity-20 mix-blend-screen blur-[130px]"></div>
            <div className="absolute -right-[10%] -bottom-[20%] z-0 h-125 w-125 rounded-full bg-[#fce883] opacity-10 mix-blend-screen blur-[120px]"></div>
            <div className="absolute inset-0 bg-linear-to-t from-[#0A2617] via-transparent to-transparent opacity-80"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Header Pills */}
                <div className="mb-6 flex flex-wrap justify-center gap-3">
                    <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur-md">
                        <Satellite className="h-3.5 w-3.5 text-emerald-400" />
                        Sumber: Kemenag RI
                    </span>
                    {jadwal.hijri_id && (
                        <span className="flex items-center gap-1.5 rounded-full border border-[#fce883]/40 bg-linear-to-r from-[#fce883]/20 to-[#fce883]/5 px-4 py-1.5 text-xs font-bold tracking-wide text-[#fce883] shadow-[0_0_15px_rgba(252,232,131,0.2)] backdrop-blur-md">
                            <Moon className="h-3.5 w-3.5" />
                            {jadwal.hijri_id}
                        </span>
                    )}
                </div>

                {/* Main Clock & Countdown Area */}
                <div className="mt-4 flex w-full max-w-4xl flex-col items-center justify-center gap-8 md:flex-row md:justify-around lg:gap-16">
                    <div className="flex flex-col items-center">
                        <div className="mb-2 text-[0.75rem] font-bold tracking-[0.25em] text-emerald-400/80 uppercase">
                            Waktu Sekarang
                        </div>
                        <div className="live-clock font-mono text-6xl font-black tracking-tighter text-white drop-shadow-lg md:text-7xl lg:text-8xl">
                            00:00:00
                        </div>
                        <div className="live-date mt-3 text-sm font-medium tracking-wide text-white/70">
                            Memuat Tanggal...
                        </div>
                    </div>

                    {/* Divider - Hidden on Mobile */}
                    <div className="hidden h-24 w-px bg-linear-to-b from-transparent via-white/20 to-transparent md:block"></div>

                    <div className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:border-none md:bg-transparent md:p-0 md:backdrop-blur-none">
                        <div className="next-prayer-label mb-2 text-[0.75rem] font-bold tracking-[0.25em] text-emerald-400/80 uppercase">
                            Menyiapkan Data...
                        </div>
                        <div className="next-prayer-countdown font-mono text-5xl font-black tracking-tight text-[#fce883] drop-shadow-[0_0_15px_rgba(252,232,131,0.3)] md:text-6xl lg:text-7xl">
                            --:--:--
                        </div>
                        <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-white/70">
                            <MapPin className="h-3.5 w-3.5 text-[#fce883]" />
                            Kab. Kapuas &bull; WIB
                        </div>
                    </div>
                </div>

                {/* Bottom Schedule Grid */}
                <div className="scrollbar-hide mt-14 flex w-full snap-x snap-mandatory flex-nowrap gap-3 overflow-x-auto pt-2 pb-6 sm:justify-center lg:grid lg:grid-cols-8 lg:overflow-visible lg:pt-0 lg:pb-0">
                    {waktuList.map(({ key, icon, label }) => (
                        <div
                            key={key}
                            data-prayer={key}
                            className={`waktu-box group relative flex w-25 shrink-0 snap-center flex-col items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-xl sm:w-auto lg:w-full`}
                        >
                            <span className="mb-3 block text-[2rem] drop-shadow-md transition-transform duration-300 group-hover:scale-110 sm:text-[2.25rem]">
                                {icon}
                            </span>
                            <div className="mb-1.5 text-[0.65rem] font-bold tracking-widest text-emerald-100/70 uppercase sm:tracking-[0.2em]">
                                {label}
                            </div>
                            <div className="relative z-10 font-mono text-lg font-bold text-white sm:text-xl">
                                {jadwal[key] || '—'}
                            </div>
                            <span
                                id={`aktif-${key}`}
                                className="label-aktif absolute -bottom-3 left-1/2 hidden -translate-x-1/2 rounded bg-linear-to-r from-[#fce883] to-[#e8c63f] px-2 py-0.5 text-[0.6rem] font-black tracking-wider whitespace-nowrap text-green-950 uppercase shadow-md"
                            >
                                SEKARANG
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline Style to hide native scrollbar for the horizontal list on mobile */}
        </div>
    );
}
