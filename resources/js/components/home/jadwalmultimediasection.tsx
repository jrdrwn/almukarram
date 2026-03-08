import { useJadwalSholat } from '@/hooks/use-jadwal-sholat';
import type { VideoItem } from '@/types/home';
import { Link } from '@inertiajs/react';
import { ArrowRight, ImageIcon, Play, X } from 'lucide-react';

import { useState } from 'react';
import ReactPlayer from 'react-player';

export default function JadwalMultimediaSection({
    videos = [],
}: {
    videos?: VideoItem[];
}) {
    const { jadwal: jadwalSholat } = useJadwalSholat();
    const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'photo'>(
        'video',
    );
    const [previewMedia, setPreviewMedia] = useState<{
        type: 'video' | 'photo';
        src: string;
    } | null>(null);

    const featuredVideo = videos[0] ?? null;
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
        const ordered = [
            'Isya',
            'Maghrib',
            'Ashar',
            'Dzuhur',
            'Terbit',
            'Subuh',
        ] as const;
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
                                        className={`group relative overflow-hidden rounded-4xl p-6 transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 ${
                                            isActive
                                                ? 'bg-primary text-primary-foreground shadow-[0_0_40px_rgba(var(--color-primary),0.4)]'
                                                : 'border border-white/10 bg-white/5 text-white backdrop-blur-md hover:border-white/20 hover:bg-white/10 active:border-white/20 active:bg-white/10'
                                        } ${prayer.fade ? 'opacity-60' : ''}`}
                                    >
                                        <h4
                                            className={`mb-2 text-sm font-bold tracking-widest uppercase ${isActive ? 'text-primary-foreground/80' : 'text-white/50 group-hover:text-white/80 group-active:text-white/80'}`}
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
                                    <div className="absolute top-[-10%] -right-[10%] h-75 w-75 rounded-full bg-primary/20 blur-[80px] transition-transform duration-1000 group-hover:scale-110 group-active:scale-110"></div>
                                    <div className="absolute bottom-[-10%] left-[-10%] h-50 w-50 rounded-full bg-blue-500/20 blur-[60px] transition-transform duration-1000 group-hover:scale-110 group-active:scale-110"></div>
                                </div>

                                <div className="relative z-10">
                                    {/* Tab Switcher */}
                                    <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 p-1 ring-1 ring-white/5 backdrop-blur-md ring-inset">
                                        <button
                                            onClick={() =>
                                                setActiveMediaTab('video')
                                            }
                                            className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 ${activeMediaTab === 'video' ? 'bg-primary text-white shadow-lg' : 'text-white/50 hover:bg-white/5 hover:text-white active:bg-white/5 active:text-white'}`}
                                        >
                                            <Play className="h-4 w-4" />
                                            Video
                                        </button>
                                        <button
                                            onClick={() =>
                                                setActiveMediaTab('photo')
                                            }
                                            className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 ${activeMediaTab === 'photo' ? 'bg-blue-600 text-white shadow-lg' : 'text-white/50 hover:bg-white/5 hover:text-white active:bg-white/5 active:text-white'}`}
                                        >
                                            <ImageIcon className="h-4 w-4" />
                                            Photo
                                        </button>
                                    </div>

                                    <h3 className="mb-4 text-2xl leading-tight font-extrabold text-white drop-shadow-md sm:text-3xl">
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
                                    <p className="min-h-12 text-sm text-white/60 sm:text-base">
                                        {activeMediaTab === 'video'
                                            ? 'Saksikan kembali rekaman video kajian, ceramah, dan edukasi islami interaktif dari para asatidz.'
                                            : 'Abadikan momen kebersamaan, kegiatan sosial, dan kemegahan arsitektur dalam bingkai lensa.'}
                                    </p>
                                </div>

                                {/* Fake Video Player / Photo Grid Box */}
                                <div className="relative z-10 my-6 flex min-h-40 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-white/5 py-2 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20 active:bg-white/10 active:shadow-2xl active:shadow-primary/20">
                                    {activeMediaTab === 'video' ? (
                                        featuredVideo ? (
                                            <div
                                                className="group/vid relative w-full cursor-pointer px-4"
                                                onClick={() =>
                                                    setPreviewMedia({
                                                        type: 'video',
                                                        src: `https://youtube.com/watch?v=${featuredVideo.youtube_id}`,
                                                    })
                                                }
                                            >
                                                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 transition-transform duration-300 group-hover/vid:scale-[1.02] group-hover/vid:ring-2 group-hover/vid:ring-primary/50 group-active/vid:scale-[1.02] group-active/vid:ring-2 group-active/vid:ring-primary/50">
                                                    <img
                                                        src={`https://img.youtube.com/vi/${featuredVideo.youtube_id}/hqdefault.jpg`}
                                                        alt={
                                                            featuredVideo.judul
                                                        }
                                                        onError={(e) => {
                                                            e.currentTarget.src =
                                                                '/images/masjidnewww-scaled.png';
                                                        }}
                                                        className="h-44 w-full object-cover sm:h-48"
                                                    />
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white shadow-[0_0_30px_rgba(var(--color-primary),0.35)]">
                                                            <Play className="ml-0.5 h-6 w-6" />
                                                        </div>
                                                    </div>

                                                    <div className="absolute right-3 bottom-3 left-3 text-left">
                                                        <p className="line-clamp-1 text-sm font-bold text-white">
                                                            {
                                                                featuredVideo.judul
                                                            }
                                                        </p>
                                                        <p className="text-xs text-white/70">
                                                            {featuredVideo
                                                                .kategori
                                                                ?.nama ??
                                                                'Video Kajian'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_30px_rgba(var(--color-primary),0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-primary group-active:scale-110 group-active:bg-white group-active:text-primary">
                                                    <Play className="ml-0.5 h-7 w-7" />
                                                </div>
                                                <span className="mt-4 text-sm font-semibold tracking-wider text-white/70 transition-colors group-hover:text-white group-active:text-white">
                                                    Belum ada video terbaru
                                                </span>
                                            </>
                                        )
                                    ) : (
                                        <>
                                            <div className="grid w-full grid-cols-2 gap-2 px-2">
                                                <div
                                                    className="col-span-2 aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 p-2 transition-transform duration-300 hover:scale-[1.02] hover:ring-2 hover:ring-blue-500/50 active:scale-[1.02] active:ring-2 active:ring-blue-500/50"
                                                    onClick={() =>
                                                        setPreviewMedia({
                                                            type: 'photo',
                                                            src: photoPreviews[0],
                                                        })
                                                    }
                                                >
                                                    <img
                                                        src={photoPreviews[0]}
                                                        alt="Preview foto utama"
                                                        onError={(e) => {
                                                            e.currentTarget.src =
                                                                '/images/masjidnewww-scaled.png';
                                                        }}
                                                        className="h-full w-full rounded-lg object-contain"
                                                    />
                                                </div>
                                                {photoPreviews
                                                    .slice(1, 3)
                                                    .map((src, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 p-2"
                                                        >
                                                            <img
                                                                src={src}
                                                                alt={`Preview foto ${idx + 1}`}
                                                                onError={(
                                                                    e,
                                                                ) => {
                                                                    e.currentTarget.src =
                                                                        '/images/masjidnewww-scaled.png';
                                                                }}
                                                                className="h-full w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-105 group-active:scale-105"
                                                            />
                                                        </div>
                                                    ))}
                                            </div>
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
                                        className="group/btn relative inline-flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-white/95 px-5 text-base font-bold text-zinc-950 shadow-lg transition-all hover:bg-white hover:shadow-xl active:bg-white active:shadow-xl sm:h-14 sm:rounded-full sm:px-8 sm:text-lg"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {activeMediaTab === 'video'
                                                ? 'Kunjungi Galeri Video'
                                                : 'Kunjungi Galeri Foto'}
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-active/btn:translate-x-1 sm:h-5 sm:w-5" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Preview */}
            {previewMedia && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm sm:px-6"
                    onClick={() => setPreviewMedia(null)}
                >
                    <div
                        className="relative flex w-full max-w-5xl items-center justify-center rounded-2xl bg-zinc-950 p-2 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setPreviewMedia(null)}
                            className="absolute -top-3 -right-3 z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-zinc-800 text-white shadow-lg transition-colors hover:bg-zinc-700 active:bg-zinc-700 sm:-top-5 sm:-right-5"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        {previewMedia.type === 'video' ? (
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
                                <ReactPlayer
                                    src={previewMedia.src}
                                    width="100%"
                                    height="100%"
                                    playing={true}
                                    controls={true}
                                />
                            </div>
                        ) : (
                            <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-black/50">
                                <img
                                    src={previewMedia.src}
                                    alt="Preview Foto"
                                    className="max-h-full max-w-full rounded-lg object-contain"
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
