import { useJadwalSholat } from '@/hooks/use-jadwal-sholat';
import { Link } from '@inertiajs/react';
import { ArrowRight, ImageIcon, Play } from 'lucide-react';

import { useState } from 'react';

export default function JadwalMultimediaSection() {
    const { jadwal: jadwalSholat } = useJadwalSholat();
    const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'photo'>(
        'video',
    );
    const photoPreviews = [
        '/images/masjidnewww-scaled.png',
        '/images/pose_change_4.png',
        '/images/logomasjid.png',
        '/images/Scan-QR-Code.png',
    ];

    const prayerTimes = jadwalSholat
        ? [
              { name: 'Subuh', time: jadwalSholat.subuh },
              { name: 'Terbit', time: jadwalSholat.terbit, fade: true },
              { name: 'Dzuhur', time: jadwalSholat.dzuhur },
              { name: 'Ashar', time: jadwalSholat.ashar },
              { name: 'Maghrib', time: jadwalSholat.maghrib },
              { name: 'Isya', time: jadwalSholat.isya },
          ]
        : [
              { name: 'Subuh', time: '--:--' },
              { name: 'Terbit', time: '--:--', fade: true },
              { name: 'Dzuhur', time: '--:--' },
              { name: 'Ashar', time: '--:--' },
              { name: 'Maghrib', time: '--:--' },
              { name: 'Isya', time: '--:--' },
          ];

    // Determine active prayer based on current time
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const toMinutes = (t: string) => {
        const [h, m] = t.split(':').map(Number);
        return (h ?? 0) * 60 + (m ?? 0);
    };

    let activeName = '';
    if (jadwalSholat) {
        const ordered = ['Isya', 'Maghrib', 'Ashar', 'Dzuhur', 'Terbit', 'Subuh'] as const;
        const timeMap: Record<string, string> = {
            Subuh: jadwalSholat.subuh,
            Terbit: jadwalSholat.terbit,
            Dzuhur: jadwalSholat.dzuhur,
            Ashar: jadwalSholat.ashar,
            Maghrib: jadwalSholat.maghrib,
            Isya: jadwalSholat.isya,
        };
        for (const name of ordered) {
            if (currentMinutes >= toMinutes(timeMap[name]!)) {
                activeName = name;
                break;
            }
        }
    }
    return (
        <section className="relative z-10 w-full overflow-hidden bg-zinc-950 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            {/* Immersive Dark Background Effects */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-[-10%] -left-[20%] h-[70%] w-[50%] rounded-[100%] bg-primary/20 blur-[120px]"></div>
                <div className="absolute -right-[10%] bottom-[-20%] h-[60%] w-[40%] rounded-[100%] bg-emerald-500/20 blur-[100px]"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* LEFT COLUMN: PRAYER TIMES (JADWAL SHOLAT) */}
                    <div className="col-span-1 flex flex-col justify-center lg:col-span-7">
                        <div className="mb-8 flex items-center gap-3">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
                                Jadwal Sholat
                            </span>
                        </div>
                        <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl">
                            Mendekatkan Diri, <br className="hidden sm:block" />
                            <span className="font-light text-white/70 italic">
                                Tepat Waktu
                            </span>
                        </h2>
                        <p className="mb-10 max-w-lg text-lg text-white/60">
                            Waktu sholat harian untuk wilayah Kabupaten Kapuas
                            dan sekitarnya. Mari bersama memakmurkan masjid.
                        </p>

                        {/* Minimalist Glass Prayer Times Grid */}
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
                            {prayerTimes.map((prayer, idx) => {
                                const isActive = prayer.name === activeName;
                                return (
                                <div
                                    key={idx}
                                    className={`group relative overflow-hidden rounded-4xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                                        isActive
                                            ? 'bg-primary text-primary-foreground shadow-[0_0_40px_rgba(var(--color-primary),0.4)]'
                                            : 'border border-white/10 bg-white/5 text-white backdrop-blur-md hover:border-white/20 hover:bg-white/10'
                                    } ${prayer.fade ? 'opacity-60' : ''}`}
                                >
                                    <h4
                                        className={`mb-2 text-sm font-bold tracking-widest uppercase ${isActive ? 'text-primary-foreground/80' : 'text-white/50 group-hover:text-white/80'}`}
                                    >
                                        {prayer.name}
                                    </h4>
                                    <span className="text-3xl font-black tracking-tighter tabular-nums sm:text-4xl">
                                        {prayer.time}
                                    </span>
                                    {isActive && (
                                        <div className="absolute top-4 -right-2 flex h-3 w-3 animate-ping rounded-full bg-white/50"></div>
                                    )}
                                    {isActive && (
                                        <div className="absolute top-4 -right-2 flex h-3 w-3 rounded-full bg-white"></div>
                                    )}
                                </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: MULTIMEDIA / DAKWAH DIGITAL */}
                    <div className="col-span-1 lg:col-span-5 lg:pl-10">
                        <div className="relative h-full w-full overflow-hidden rounded-[3rem] bg-linear-to-br from-zinc-800 to-zinc-900 p-1 shadow-2xl">
                            {/* Border Glow Effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary via-blue-500 to-transparent opacity-30"></div>

                            <div className="group relative flex h-full min-h-120 flex-col justify-between overflow-hidden rounded-[2.85rem] bg-zinc-950 p-6 sm:min-h-125 sm:p-12">
                                {/* Abstract background pattern for card */}
                                <div className="absolute inset-0 z-0">
                                    <div className="absolute top-[-10%] -right-[10%] h-75 w-75 rounded-full bg-primary/20 blur-[80px] transition-transform duration-1000 group-hover:scale-110"></div>
                                    <div className="absolute bottom-[-10%] left-[-10%] h-50 w-50 rounded-full bg-blue-500/20 blur-[60px] transition-transform duration-1000 group-hover:scale-110"></div>
                                </div>

                                <div className="relative z-10">
                                    {/* Tab Switcher */}
                                    <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 p-1 ring-1 ring-white/5 backdrop-blur-md ring-inset">
                                        <button
                                            onClick={() =>
                                                setActiveMediaTab('video')
                                            }
                                            className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 ${activeMediaTab === 'video' ? 'bg-primary text-white shadow-lg' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
                                        >
                                            <Play className="h-4 w-4" />
                                            Video
                                        </button>
                                        <button
                                            onClick={() =>
                                                setActiveMediaTab('photo')
                                            }
                                            className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 ${activeMediaTab === 'photo' ? 'bg-blue-600 text-white shadow-lg' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
                                        >
                                            <ImageIcon className="h-4 w-4" />
                                            Photo
                                        </button>
                                    </div>

                                    <h3 className="mb-4 text-3xl leading-tight font-extrabold text-white drop-shadow-md">
                                        {activeMediaTab === 'video' ? (
                                            <>
                                                Kumpulan Jejak <br /> Rekaman
                                                Kajian
                                            </>
                                        ) : (
                                            <>
                                                Galeri Memori <br /> &
                                                Dokumentasi
                                            </>
                                        )}
                                    </h3>
                                    <p className="min-h-12 text-white/60">
                                        {activeMediaTab === 'video'
                                            ? 'Saksikan kembali rekaman video kajian, ceramah, dan edukasi islami interaktif dari para asatidz.'
                                            : 'Abadikan momen kebersamaan, kegiatan sosial, dan kemegahan arsitektur dalam bingkai lensa.'}
                                    </p>
                                </div>

                                {/* Fake Video Player / Photo Grid Box */}
                                <div className="relative z-10 my-6 flex min-h-40 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-4xl border border-white/5 bg-white/5 py-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20">
                                    {activeMediaTab === 'video' ? (
                                        <>
                                            {/* Play icon */}
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_30px_rgba(var(--color-primary),0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="ml-1 h-8 w-8"
                                                >
                                                    <path d="M8 5.14v14l11-7-11-7z" />
                                                </svg>
                                            </div>
                                            <span className="mt-4 text-sm font-semibold tracking-wider text-white/70 transition-colors group-hover:text-white">
                                                Putar Video Terbaru
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            {/* Deterministic preview grid (non-random) */}
                                            <div className="grid w-full max-w-70 grid-cols-2 gap-2 px-4">
                                                {photoPreviews.map((src, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-zinc-800/70"
                                                    >
                                                        <img
                                                            src={src}
                                                            alt={`Preview foto ${idx + 1}`}
                                                            onError={(e) => {
                                                                e.currentTarget.src =
                                                                    '/images/masjidnewww-scaled.png';
                                                            }}
                                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="mt-4 text-sm font-semibold tracking-wider text-white/70 transition-colors group-hover:text-white">
                                                Lihat Semua Foto
                                            </span>
                                        </>
                                    )}
                                </div>

                                <div className="relative z-10">
                                    <Link
                                        href={
                                            activeMediaTab === 'video'
                                                ? '/galeri#video'
                                                : '/galeri#foto'
                                        }
                                        className="group/btn relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-6 py-4 font-bold text-zinc-950 transition-transform hover:scale-[1.02] sm:px-8 sm:py-5"
                                    >
                                        <span className="relative z-10 flex items-center gap-2 text-base sm:text-lg">
                                            {activeMediaTab === 'video'
                                                ? 'Kunjungi Galeri Video'
                                                : 'Kunjungi Galeri Foto'}
                                        </span>
                                        <div
                                            className={`absolute inset-0 z-0 bg-linear-to-r opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100 ${activeMediaTab === 'video' ? 'from-primary to-emerald-500' : 'from-blue-600 to-indigo-500'}`}
                                        ></div>
                                        {/* Swap text color on hover */}
                                        <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-base text-white opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100 sm:text-lg">
                                            {activeMediaTab === 'video'
                                                ? 'Kunjungi Galeri Video'
                                                : 'Kunjungi Galeri Foto'}
                                            <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
