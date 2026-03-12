import type { CarouselApi } from '@/components/ui/carousel';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import type { BannerItem } from '@/types/home';
import { useEffect, useRef, useState } from 'react';

function buildSlides(banners: BannerItem[]): BannerItem[][] {
    return banners.map((banner) => [banner]);
}

function resolveImageUrl(path: string): string {
    return path.startsWith('http') ? path : `/storage/${path}`;
}

function BannerCard({ banner }: { banner: BannerItem }) {
    const hasLink = Boolean(banner.tautan);

    const content = (
        <div className="group aspect-[4/1] overflow-hidden rounded-4xl">
            <img
                src={resolveImageUrl(banner.gambar)}
                alt={banner.judul}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] group-active:scale-[1.02]"
                onError={(event) => {
                    event.currentTarget.src =
                        'https://placehold.co/1600x900/0a0a0a/e4e4e7?text=Banner';
                    event.currentTarget.onerror = null;
                }}
            />
        </div>
    );

    if (! hasLink) {
        return content;
    }

    return (
        <a
            href={banner.tautan ?? undefined}
            target={banner.buka_tab_baru ? '_blank' : undefined}
            rel={banner.buka_tab_baru ? 'noreferrer noopener' : undefined}
            className="block"
        >
            {content}
        </a>
    );
}

export default function BannerSection({ banners }: { banners: BannerItem[] }) {
    const [api, setApi] = useState<CarouselApi>();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
    const randomStartAppliedRef = useRef(false);

    const slides = buildSlides(banners);

    useEffect(() => {
        if (! api) {
            return;
        }

        const handleSelect = () => {
            setSelectedIndex(api.selectedScrollSnap());
        };

        handleSelect();
        api.on('select', handleSelect);
        api.on('reInit', handleSelect);

        return () => {
            api.off('select', handleSelect);
            api.off('reInit', handleSelect);
        };
    }, [api]);

    useEffect(() => {
        if (! api || slides.length <= 1 || randomStartAppliedRef.current) {
            return;
        }

        const randomIndex = Math.floor(Math.random() * slides.length);

        api.scrollTo(randomIndex, true);
        randomStartAppliedRef.current = true;
    }, [api, slides.length]);

    useEffect(() => {
        if (! api || slides.length <= 1 || isAutoplayPaused) {
            return;
        }

        const interval = window.setInterval(() => {
            api.scrollNext();
        }, 5000);

        return () => {
            window.clearInterval(interval);
        };
    }, [api, isAutoplayPaused, slides.length]);

    if (banners.length === 0) {
        return null;
    }

    return (
        <section className="relative z-10 mx-auto max-w-380 px-4 py-6 sm:py-8">
            <div className="relative">
                <Carousel
                    opts={{ loop: slides.length > 1, align: 'start' }}
                    setApi={setApi}
                    className="relative"
                    onMouseEnter={() => setIsAutoplayPaused(true)}
                    onMouseLeave={() => setIsAutoplayPaused(false)}
                    onFocusCapture={() => setIsAutoplayPaused(true)}
                    onBlurCapture={() => setIsAutoplayPaused(false)}
                >
                    {slides.length > 1 && (
                        <div className="mb-4 flex flex-col gap-4 sm:mb-5 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex flex-wrap items-center gap-2">
                                {slides.map((_, slideIndex) => {
                                    const isActive = slideIndex === selectedIndex;

                                    return (
                                        <button
                                            key={`banner-dot-${slideIndex}`}
                                            type="button"
                                            aria-label={`Pilih slide banner ${slideIndex + 1}`}
                                            aria-current={isActive}
                                            onClick={() => api?.scrollTo(slideIndex)}
                                            className={`h-2.5 rounded-full transition-all ${isActive ? 'w-10 bg-primary' : 'w-2.5 bg-zinc-300 hover:bg-zinc-400 active:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-500 dark:active:bg-zinc-500'}`}
                                        />
                                    );
                                })}
                            </div>

                            <div className="flex items-center justify-end gap-3">
                                <CarouselPrevious className="static top-auto translate-y-0" />
                                <CarouselNext className="static top-auto translate-y-0" />
                            </div>
                        </div>
                    )}

                    <CarouselContent>
                        {slides.map((slide, slideIndex) => {
                            return (
                                <CarouselItem key={`banner-slide-${slideIndex}`}>
                                    <BannerCard banner={slide[0]} />
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
