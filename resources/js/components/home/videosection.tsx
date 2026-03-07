import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import type { VideoItem } from '@/types/home';
import { PlayCircle, Youtube } from 'lucide-react';
import { useState } from 'react';
import ReactPlayer from 'react-player';

export default function VideoSection({ videos }: { videos: VideoItem[] }) {
    const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

    return (
        <section className="relative z-10 w-full overflow-hidden py-24 sm:py-32">
            {/* Dark BG */}
            <div className="absolute inset-0 z-0 bg-zinc-950"></div>

            {/* Subtle radial glow */}
            <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-120 w-240 -translate-x-1/2 rounded-full bg-emerald-700 opacity-20 blur-[120px]"></div>

            {/* GIANT WATERMARK */}
            <div className="pointer-events-none absolute top-16 left-0 z-0 flex w-full justify-center overflow-hidden opacity-[0.05]">
                <span className="text-[5.5rem] leading-none font-black tracking-tighter text-white select-none sm:text-[11rem] lg:text-[18rem]">
                    VIDEO
                </span>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-14 flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
                    <div className="text-center md:text-left">
                        <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
                            <span className="h-px w-8 bg-emerald-500"></span>
                            <span className="text-sm font-bold tracking-widest text-emerald-400 uppercase">
                                Konten Video
                            </span>
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Tonton &{' '}
                            <span className="font-light text-zinc-400 italic">
                                Simak Ceramah
                            </span>
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                            Koleksi video ceramah, kajian, dan dokumentasi
                            kegiatan Masjid Agung Al-Mukarram yang bisa disimak
                            kapan saja.
                        </p>
                    </div>
                    <a
                        href="https://www.youtube.com/@almukarram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex h-12 w-full shrink-0 items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-5 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] hover:bg-emerald-500 sm:h-14 sm:w-auto sm:px-6 sm:text-base"
                    >
                        <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
                        Lihat Channel YouTube
                    </a>
                </div>

                {/* Carousel */}
                <Carousel opts={{ loop: true, align: 'start' }}>
                    <div className="mb-6 flex flex-row items-center justify-end gap-3">
                        <CarouselPrevious className="static top-auto translate-y-0 border-0 bg-emerald-700 text-white hover:bg-emerald-600" />
                        <CarouselNext className="static top-auto translate-y-0 border-0 bg-emerald-700 text-white hover:bg-emerald-600" />
                    </div>
                    <CarouselContent className="-ml-4">
                        {videos.map((video) => (
                            <CarouselItem
                                key={video.id}
                                className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                            >
                                <button
                                    className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-zinc-800 shadow-md transition-all hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-900/40"
                                    onClick={() => setActiveVideo(video)}
                                >
                                    {/* Thumbnail */}
                                    <img
                                        src={`https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`}
                                        alt={video.judul}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                'https://placehold.co/480x270/111827/4b5563?text=Video';
                                            e.currentTarget.onerror = null;
                                        }}
                                    />
                                    {/* Dark gradient */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600/90 shadow-xl backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-emerald-500">
                                            <PlayCircle className="h-8 w-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                            {video.kategori?.nama ?? 'Video'}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <div className="absolute inset-x-0 bottom-0 p-4">
                                        <p className="line-clamp-2 text-left text-sm leading-snug font-semibold text-white transition-colors group-hover:text-emerald-300">
                                            {video.judul}
                                        </p>
                                    </div>
                                </button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* Video Player Dialog */}
            <Dialog
                open={!!activeVideo}
                onOpenChange={(open) => !open && setActiveVideo(null)}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{activeVideo?.judul}</DialogTitle>
                    </DialogHeader>
                    <div className="aspect-video w-full">
                        {activeVideo && (
                            <ReactPlayer
                                src={`https://www.youtube.com/watch?v=${activeVideo.youtube_id}`}
                                width="100%"
                                height="100%"
                                playing={true}
                                controls={true}
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
}
