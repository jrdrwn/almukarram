import Seo from '@/components/shared/seo';
import {
    ChevronLeft,
    ChevronRight,
    FolderHeart,
    Home,
    Image as ImageIcon,
    Maximize,
    Play,
    PlayCircle,
    Search,
    Video,
    X,
    Youtube,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AlbumItem {
    id: number;
    title: string;
    date: string;
    month: string;
    description: string;
    images: string[];
}

interface VideoItem {
    id: number;
    title: string;
    category: string;
    date: string;
    youtubeId: string;
}

interface GaleriProps {
    albums?: AlbumItem[];
    videos?: VideoItem[];
}

const resolveTabFromHash = (hash: string): 'foto' | 'video' => {
    if (hash === '#video') return 'video';
    if (hash === '#foto' || hash === '#photo') return 'foto';
    return 'foto';
};

export default function Galeri({ albums = [], videos = [] }: GaleriProps) {
    const [activeTab, setActiveTab] = useState<'foto' | 'video'>(() => {
        if (typeof window === 'undefined') return 'foto';
        return resolveTabFromHash(window.location.hash);
    });
    const [searchTitle, setSearchTitle] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('Semua Bulan');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAlbum, setSelectedAlbum] = useState<AlbumItem | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
    const [videoSearch, setVideoSearch] = useState('');
    const [videoCategory, setVideoCategory] = useState('Semua Kategori');
    const [videoPage, setVideoPage] = useState(1);
    const tabsAnchorRef = useRef<HTMLDivElement | null>(null);
    const albumsPerPage = 6;
    const videosPerPage = 6;

    const videoCategories = [
        'Semua Kategori',
        ...Array.from(new Set(videos.map((v) => v.category))),
    ];

    const filteredVideos = videos.filter((v) => {
        const matchSearch = v.title
            .toLowerCase()
            .includes(videoSearch.toLowerCase());
        const matchCat =
            videoCategory === 'Semua Kategori' || v.category === videoCategory;
        return matchSearch && matchCat;
    });
    const totalVideoPages = Math.max(
        1,
        Math.ceil(filteredVideos.length / videosPerPage),
    );
    const pagedVideos = filteredVideos.slice(
        (videoPage - 1) * videosPerPage,
        videoPage * videosPerPage,
    );

    const months = [
        'Semua Bulan',
        ...Array.from(new Set(albums.map((a) => a.month))),
    ];

    // Filter Logic
    const filteredAlbums = albums.filter((album) => {
        const matchSearch = album.title
            .toLowerCase()
            .includes(searchTitle.toLowerCase());
        const matchMonth =
            selectedMonth === 'Semua Bulan' || album.month === selectedMonth;
        return matchSearch && matchMonth;
    });

    const totalAlbumPages = Math.max(
        1,
        Math.ceil(filteredAlbums.length / albumsPerPage),
    );
    const pagedAlbums = filteredAlbums.slice(
        (currentPage - 1) * albumsPerPage,
        currentPage * albumsPerPage,
    );

    // Grouping by Month
    const groupedAlbums = pagedAlbums.reduce(
        (acc, album) => {
            if (!acc[album.month]) {
                acc[album.month] = [];
            }
            acc[album.month].push(album);
            return acc;
        },
        {} as Record<string, AlbumItem[]>,
    );

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const applyHashTab = (shouldScroll = false) => {
            const nextTab = resolveTabFromHash(window.location.hash);
            setActiveTab(nextTab);

            if (shouldScroll) {
                tabsAnchorRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        };

        applyHashTab();

        const handleHashChange = () => applyHashTab(true);
        window.addEventListener('hashchange', handleHashChange);

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Auto Play Logic
    useEffect(() => {
        let interval: any;
        if (isPlaying && selectedAlbum) {
            interval = setInterval(() => {
                setCurrentImageIndex((prev) =>
                    prev === selectedAlbum.images.length - 1 ? 0 : prev + 1,
                );
            }, 3000); // 3 seconds interval
        }
        return () => clearInterval(interval);
    }, [isPlaying, selectedAlbum]);

    const handleNext = () => {
        if (!selectedAlbum) return;
        setCurrentImageIndex((prev) =>
            prev === selectedAlbum.images.length - 1 ? 0 : prev + 1,
        );
    };

    const handlePrev = () => {
        if (!selectedAlbum) return;
        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedAlbum.images.length - 1 : prev - 1,
        );
    };

    return (
        <>
            <Header />
            <Seo title="Galeri Media | Masjid Agung Al-Mukarram" />
            <PageHeader
                title="Galeri Dokumentasi"
                subtitle="Kumpulan album foto dari berbagai kegiatan dan momen berharga yang diselenggarakan di Masjid Agung Al-Mukarram Amanah."
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="size-4" />,
                    },
                    { label: 'Galeri', icon: <ImageIcon className="size-4" /> },
                ]}
            />

            <section className="relative min-h-screen bg-background py-16">
                {/* Background Decor */}
                <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
                    <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-teal-400 opacity-20 sm:left-[calc(50%)] sm:w-288.75"></div>
                </div>

                <div className="relative z-10 mx-auto -mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Tabs Toggle */}
                    <div
                        ref={tabsAnchorRef}
                        className="mb-10 flex justify-center"
                    >
                        <Tabs
                            value={activeTab}
                            onValueChange={(v) => {
                                setActiveTab(v as 'foto' | 'video');
                                setSearchTitle('');
                                setVideoSearch('');
                                setSelectedMonth('Semua Bulan');
                                setVideoCategory('Semua Kategori');
                                setVideoPage(1);

                                if (typeof window !== 'undefined') {
                                    const nextHash =
                                        v === 'video' ? '#video' : '#foto';
                                    if (window.location.hash !== nextHash) {
                                        window.history.replaceState(
                                            null,
                                            '',
                                            `${window.location.pathname}${window.location.search}${nextHash}`,
                                        );
                                    }
                                }
                            }}
                            className="w-full"
                        >
                            <div className="mb-12 flex justify-center">
                                <div className="inline-flex overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
                                    <TabsList className="flex h-auto gap-0 bg-transparent p-0">
                                        <TabsTrigger
                                            value="foto"
                                            className="flex items-center gap-2 rounded-none border-0 px-6 py-3 text-sm font-bold text-muted-foreground transition-all duration-200 data-[state=active]:bg-[#005B41] data-[state=active]:text-white data-[state=active]:shadow-none sm:gap-2.5 sm:px-10 sm:py-4 sm:text-base"
                                        >
                                            <ImageIcon className="h-5 w-5" />{' '}
                                            Foto
                                        </TabsTrigger>
                                        <div className="my-3 w-px bg-border" />
                                        <TabsTrigger
                                            value="video"
                                            className="flex items-center gap-2 rounded-none border-0 px-6 py-3 text-sm font-bold text-muted-foreground transition-all duration-200 data-[state=active]:bg-[#005B41] data-[state=active]:text-white data-[state=active]:shadow-none sm:gap-2.5 sm:px-10 sm:py-4 sm:text-base"
                                        >
                                            <Video className="h-5 w-5" /> Video
                                        </TabsTrigger>
                                    </TabsList>
                                </div>
                            </div>

                            {/* ===== FOTO TAB ===== */}
                            <TabsContent value="foto">
                                {/* Control Section / Search Filter Card */}
                                <div className="relative mb-16 overflow-hidden rounded-[2.5rem] border border-border bg-card p-6 shadow-xl ring-1 ring-border/50 md:p-8">
                                    <div className="pointer-events-none absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />
                                    <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
                                        <div className="w-full space-y-2 md:flex-1">
                                            <Label
                                                htmlFor="search"
                                                className="ml-1 text-sm font-bold text-muted-foreground"
                                            >
                                                Cari Nama Album
                                            </Label>
                                            <div className="relative">
                                                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                                                <Input
                                                    id="search"
                                                    placeholder="Ketik kata kunci..."
                                                    className="h-14 w-full rounded-2xl border-input/60 bg-background pl-12 text-base focus-visible:ring-emerald-500"
                                                    value={searchTitle}
                                                    onChange={(e) => {
                                                        setSearchTitle(
                                                            e.target.value,
                                                        );
                                                        setCurrentPage(1);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full space-y-2 md:w-72">
                                            <Label
                                                htmlFor="month"
                                                className="ml-1 text-sm font-bold text-muted-foreground"
                                            >
                                                Filter Bulan
                                            </Label>
                                            <Select
                                                value={selectedMonth}
                                                onValueChange={(val) => {
                                                    setSelectedMonth(val);
                                                    setCurrentPage(1);
                                                }}
                                            >
                                                <SelectTrigger
                                                    id="month"
                                                    className="h-14 w-full rounded-2xl border-input/60 bg-background text-base font-medium focus:ring-emerald-500"
                                                >
                                                    <SelectValue placeholder="Semua Bulan" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {months.map((m) => (
                                                        <SelectItem
                                                            key={m}
                                                            value={m}
                                                        >
                                                            {m}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="w-full md:w-auto">
                                            <Button
                                                size="lg"
                                                className="hover:bg-[ h-14 w-full rounded-2xl bg-[#005B41] px-10 font-extrabold tracking-wide text-white uppercase shadow-md transition-all hover:shadow-lg active:bg-[#004d36] active:shadow-lg md:w-auto"
                                            >
                                                Cari Album
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Album Content grouped by Month */}
                                <div className="space-y-16">
                                    {Object.keys(groupedAlbums).length > 0 ? (
                                        Object.entries(groupedAlbums).map(
                                            ([month, albums]) => (
                                                <div
                                                    key={month}
                                                    className="animate-in duration-700 fade-in slide-in-from-bottom-8"
                                                >
                                                    <div className="mb-8 inline-block border-b-2 border-primary/20 pb-2">
                                                        <h2 className="text-3xl font-extrabold text-[#005B41] dark:text-emerald-500">
                                                            {month}
                                                        </h2>
                                                    </div>

                                                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                                                        {albums.map((album) => (
                                                            <div
                                                                key={album.id}
                                                                className="group flex flex-col rounded-4xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-xl active:shadow-xl"
                                                            >
                                                                {/* Images Collage */}
                                                                <div
                                                                    className="mb-6 flex h-55 cursor-pointer gap-2 overflow-hidden rounded-2xl sm:h-65 md:h-75"
                                                                    onClick={() => {
                                                                        setSelectedAlbum(
                                                                            album,
                                                                        );
                                                                        setCurrentImageIndex(
                                                                            0,
                                                                        );
                                                                        setIsPlaying(
                                                                            false,
                                                                        );
                                                                    }}
                                                                >
                                                                    {/* Main Image */}
                                                                    <div
                                                                        className={`${album.images.length === 1 ? 'w-full' : 'w-2/3'} relative h-full overflow-hidden`}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                album
                                                                                    .images[0]
                                                                            }
                                                                            alt={
                                                                                album.title
                                                                            }
                                                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
                                                                            onError={(
                                                                                e,
                                                                            ) => {
                                                                                e.currentTarget.src =
                                                                                    'https://placehold.co/800x600/e2e8f0/64748b?text=Tak+Ada+Gambar';
                                                                                e.currentTarget.onerror =
                                                                                    null;
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    {/* Side Images */}
                                                                    {album
                                                                        .images
                                                                        .length >
                                                                        1 && (
                                                                        <div className="flex h-full w-1/3 flex-col gap-2">
                                                                            <div className="relative flex-1 overflow-hidden">
                                                                                <img
                                                                                    src={
                                                                                        album
                                                                                            .images[1]
                                                                                    }
                                                                                    alt=""
                                                                                    className="h-full w-full object-cover transition-transform delay-75 duration-700 group-hover:scale-110 group-active:scale-110"
                                                                                    onError={(
                                                                                        e,
                                                                                    ) => {
                                                                                        e.currentTarget.src =
                                                                                            'https://placehold.co/400x400/e2e8f0/64748b?text=Tak+Ada+Gambar';
                                                                                        e.currentTarget.onerror =
                                                                                            null;
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            {album
                                                                                .images
                                                                                .length >
                                                                                2 && (
                                                                                <div className="relative flex-1 overflow-hidden">
                                                                                    <img
                                                                                        src={
                                                                                            album
                                                                                                .images[2]
                                                                                        }
                                                                                        alt=""
                                                                                        className="h-full w-full object-cover transition-transform delay-150 duration-700 group-hover:scale-110 group-active:scale-110"
                                                                                        onError={(
                                                                                            e,
                                                                                        ) => {
                                                                                            e.currentTarget.src =
                                                                                                'https://placehold.co/400x400/e2e8f0/64748b?text=Tak+Ada+Gambar';
                                                                                            e.currentTarget.onerror =
                                                                                                null;
                                                                                        }}
                                                                                    />
                                                                                    {/* Overlay for +N More */}
                                                                                    {album
                                                                                        .images
                                                                                        .length >
                                                                                        3 && (
                                                                                        <div className="absolute inset-0 flex items-center justify-center bg-[#005B41]/80">
                                                                                            <span className="text-xl font-extrabold text-white sm:text-2xl">
                                                                                                +
                                                                                                {album
                                                                                                    .images
                                                                                                    .length -
                                                                                                    3}
                                                                                            </span>
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </div>

                                                                {/* Meta Info */}
                                                                <div className="flex flex-1 flex-col px-2">
                                                                    <span className="mb-2 block text-sm font-extrabold tracking-wider text-[#009B65] uppercase dark:text-emerald-400">
                                                                        {
                                                                            album.date
                                                                        }
                                                                    </span>
                                                                    <h3
                                                                        className="group-hover:text-[ mb-3 line-clamp-2 cursor-pointer text-xl leading-snug font-bold text-foreground transition-colors group-active:text-[#005B41] sm:text-2xl"
                                                                        onClick={() => {
                                                                            setSelectedAlbum(
                                                                                album,
                                                                            );
                                                                            setCurrentImageIndex(
                                                                                0,
                                                                            );
                                                                            setIsPlaying(
                                                                                false,
                                                                            );
                                                                        }}
                                                                    >
                                                                        {
                                                                            album.title
                                                                        }
                                                                    </h3>
                                                                    {album.description && (
                                                                        <p className="mt-auto line-clamp-2 text-sm text-muted-foreground sm:text-base">
                                                                            {
                                                                                album.description
                                                                            }
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ),
                                        )
                                    ) : (
                                        <div className="flex flex-col items-center rounded-[3rem] border border-dashed border-border bg-card py-20 text-center">
                                            <FolderHeart className="mb-6 h-20 w-20 text-muted-foreground/30" />
                                            <h3 className="mb-2 text-2xl font-bold text-foreground">
                                                Album Tidak Ditemukan
                                            </h3>
                                            <p className="max-w-md text-muted-foreground">
                                                Kami tidak dapat menemukan album
                                                yang sesuai dengan filter
                                                pencarian Anda. Silakan coba
                                                dengan kata kunci atau bulan
                                                lain.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Pagination */}
                                <div className="mt-16 border-t border-border pt-8">
                                    <Pagination>
                                        <PaginationContent>
                                            <PaginationItem>
                                                <PaginationPrevious
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setCurrentPage((prev) =>
                                                            Math.max(
                                                                1,
                                                                prev - 1,
                                                            ),
                                                        );
                                                    }}
                                                    className={
                                                        currentPage === 1
                                                            ? 'pointer-events-none opacity-50'
                                                            : ''
                                                    }
                                                />
                                            </PaginationItem>

                                            {Array.from(
                                                { length: totalAlbumPages },
                                                (_, i) => i + 1,
                                            ).map((page) => {
                                                const isCurrent =
                                                    page === currentPage;
                                                const shouldShow =
                                                    page === 1 ||
                                                    page === totalAlbumPages ||
                                                    (page >= currentPage - 1 &&
                                                        page <=
                                                            currentPage + 1);

                                                if (!shouldShow) {
                                                    if (
                                                        page ===
                                                            currentPage - 2 ||
                                                        page === currentPage + 2
                                                    ) {
                                                        return (
                                                            <PaginationItem
                                                                key={`ellipsis-${page}`}
                                                            >
                                                                <PaginationEllipsis />
                                                            </PaginationItem>
                                                        );
                                                    }

                                                    return null;
                                                }

                                                return (
                                                    <PaginationItem key={page}>
                                                        <PaginationLink
                                                            href="#"
                                                            isActive={isCurrent}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setCurrentPage(
                                                                    page,
                                                                );
                                                            }}
                                                        >
                                                            {page}
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                );
                                            })}

                                            <PaginationItem>
                                                <PaginationNext
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setCurrentPage((prev) =>
                                                            Math.min(
                                                                totalAlbumPages,
                                                                prev + 1,
                                                            ),
                                                        );
                                                    }}
                                                    className={
                                                        currentPage ===
                                                        totalAlbumPages
                                                            ? 'pointer-events-none opacity-50'
                                                            : ''
                                                    }
                                                />
                                            </PaginationItem>
                                        </PaginationContent>
                                    </Pagination>
                                </div>
                            </TabsContent>

                            {/* ===== VIDEO TAB ===== */}
                            <TabsContent value="video">
                                {/* Video Search Filter */}
                                <div className="relative mb-16 overflow-hidden rounded-[2.5rem] border border-border bg-card p-6 shadow-xl ring-1 ring-border/50 md:p-8">
                                    <div className="pointer-events-none absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />
                                    <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
                                        <div className="w-full space-y-2 md:flex-1">
                                            <Label
                                                htmlFor="video-search"
                                                className="ml-1 text-sm font-bold text-muted-foreground"
                                            >
                                                Cari Video
                                            </Label>
                                            <div className="relative">
                                                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                                                <Input
                                                    id="video-search"
                                                    placeholder="Ketik judul video..."
                                                    className="h-14 w-full rounded-2xl border-input/60 bg-background pl-12 text-base focus-visible:ring-emerald-500"
                                                    value={videoSearch}
                                                    onChange={(e) => {
                                                        setVideoSearch(
                                                            e.target.value,
                                                        );
                                                        setVideoPage(1);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full space-y-2 md:w-72">
                                            <Label
                                                htmlFor="video-cat"
                                                className="ml-1 text-sm font-bold text-muted-foreground"
                                            >
                                                Filter Kategori
                                            </Label>
                                            <Select
                                                value={videoCategory}
                                                onValueChange={(val) => {
                                                    setVideoCategory(val);
                                                    setVideoPage(1);
                                                }}
                                            >
                                                <SelectTrigger
                                                    id="video-cat"
                                                    className="h-14 w-full rounded-2xl border-input/60 bg-background text-base font-medium"
                                                >
                                                    <SelectValue placeholder="Semua Kategori" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {videoCategories.map(
                                                        (c) => (
                                                            <SelectItem
                                                                key={c}
                                                                value={c}
                                                            >
                                                                {c}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="w-full md:w-auto">
                                            <Button
                                                size="lg"
                                                className="hover:bg-[ h-14 w-full rounded-2xl bg-[#005B41] px-10 font-extrabold tracking-wide text-white uppercase shadow-md transition-all hover:shadow-lg active:bg-[#004d36] active:shadow-lg md:w-auto"
                                            >
                                                Cari Video
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                {filteredVideos.length > 0 ? (
                                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                        {pagedVideos.map((video) => (
                                            <button
                                                key={video.id}
                                                className="group hover:border-[ relative block aspect-video w-full cursor-pointer overflow-hidden rounded-3xl border border-border bg-muted shadow-md transition-all hover:shadow-xl hover:shadow-emerald-900/10 active:border-[#005B41]/50 active:shadow-xl active:shadow-emerald-900/10"
                                                onClick={() =>
                                                    setActiveVideo(video)
                                                }
                                            >
                                                {/* YouTube Thumbnail */}
                                                <img
                                                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                                                    alt={video.title}
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
                                                    onError={(e) => {
                                                        e.currentTarget.src =
                                                            'https://placehold.co/480x270/e2e8f0/64748b?text=Video';
                                                        e.currentTarget.onerror =
                                                            null;
                                                    }}
                                                />
                                                {/* Gradient overlay */}
                                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                                                {/* Play Button */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="group-hover:bg-[ flex h-14 w-14 items-center justify-center rounded-full bg-[#005B41]/90 shadow-xl backdrop-blur-sm transition-all group-hover:scale-110 group-active:scale-110 group-active:bg-[#009B65]">
                                                        <PlayCircle className="h-8 w-8 text-white" />
                                                    </div>
                                                </div>
                                                {/* Category Badge */}
                                                <div className="absolute top-3 left-3">
                                                    <span className="rounded-full bg-[#005B41]/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                                        {video.category}
                                                    </span>
                                                </div>
                                                {/* Title and Date */}
                                                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                                                    <span className="mb-1 block text-xs font-bold tracking-wider text-emerald-400 uppercase">
                                                        {video.date}
                                                    </span>
                                                    <p className="line-clamp-2 text-sm leading-snug font-semibold text-white transition-colors group-hover:text-emerald-300 group-active:text-emerald-300">
                                                        {video.title}
                                                    </p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center rounded-[3rem] border border-dashed border-border bg-card py-20 text-center">
                                        <Youtube className="mb-6 h-20 w-20 text-muted-foreground/30" />
                                        <h3 className="mb-2 text-2xl font-bold text-foreground">
                                            Video Tidak Ditemukan
                                        </h3>
                                        <p className="max-w-md text-muted-foreground">
                                            Coba dengan kata kunci atau kategori
                                            lain.
                                        </p>
                                    </div>
                                )}

                                {/* Video Pagination */}
                                {filteredVideos.length > videosPerPage && (
                                    <div className="mt-16 border-t border-border pt-8">
                                        <Pagination>
                                            <PaginationContent>
                                                <PaginationItem>
                                                    <PaginationPrevious
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setVideoPage(
                                                                (prev) =>
                                                                    Math.max(
                                                                        1,
                                                                        prev -
                                                                            1,
                                                                    ),
                                                            );
                                                        }}
                                                        className={
                                                            videoPage === 1
                                                                ? 'pointer-events-none opacity-50'
                                                                : ''
                                                        }
                                                    />
                                                </PaginationItem>
                                                {Array.from(
                                                    { length: totalVideoPages },
                                                    (_, i) => i + 1,
                                                ).map((page) => {
                                                    const isCurrent =
                                                        page === videoPage;
                                                    const shouldShow =
                                                        page === 1 ||
                                                        page ===
                                                            totalVideoPages ||
                                                        (page >=
                                                            videoPage - 1 &&
                                                            page <=
                                                                videoPage + 1);

                                                    if (!shouldShow) {
                                                        if (
                                                            page ===
                                                                videoPage - 2 ||
                                                            page ===
                                                                videoPage + 2
                                                        ) {
                                                            return (
                                                                <PaginationItem
                                                                    key={`ellipsis-${page}`}
                                                                >
                                                                    <PaginationEllipsis />
                                                                </PaginationItem>
                                                            );
                                                        }
                                                        return null;
                                                    }

                                                    return (
                                                        <PaginationItem
                                                            key={page}
                                                        >
                                                            <PaginationLink
                                                                href="#"
                                                                isActive={
                                                                    isCurrent
                                                                }
                                                                onClick={(
                                                                    e,
                                                                ) => {
                                                                    e.preventDefault();
                                                                    setVideoPage(
                                                                        page,
                                                                    );
                                                                }}
                                                            >
                                                                {page}
                                                            </PaginationLink>
                                                        </PaginationItem>
                                                    );
                                                })}
                                                <PaginationItem>
                                                    <PaginationNext
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setVideoPage(
                                                                (prev) =>
                                                                    Math.min(
                                                                        totalVideoPages,
                                                                        prev +
                                                                            1,
                                                                    ),
                                                            );
                                                        }}
                                                        className={
                                                            videoPage ===
                                                            totalVideoPages
                                                                ? 'pointer-events-none opacity-50'
                                                                : ''
                                                        }
                                                    />
                                                </PaginationItem>
                                            </PaginationContent>
                                        </Pagination>
                                    </div>
                                )}
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Album Viewer Dialog */}
            <Dialog
                open={!!selectedAlbum}
                onOpenChange={(open) => {
                    if (!open) {
                        setSelectedAlbum(null);
                        setIsPlaying(false);
                    }
                }}
            >
                <DialogContent
                    className="flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden border-[#222222] bg-[#111111] p-0 md:h-[95vh] [&>button]:hidden"
                    aria-describedby={undefined}
                >
                    {/* Header: Title and Close Button */}
                    <div className="flex shrink-0 items-center justify-between border-b border-white/10 p-4 md:px-6 md:py-4">
                        <DialogTitle className="truncate pr-4 text-xl font-bold text-[#eab308] md:text-2xl">
                            {selectedAlbum?.title}
                        </DialogTitle>
                        <DialogClose asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-10 w-10 shrink-0 rounded-full text-white/70 hover:bg-white/10 hover:text-white active:bg-white/10 active:text-white"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </DialogClose>
                    </div>

                    {/* Main Image Area with Navigation */}
                    <div className="group relative flex flex-1 items-center justify-center overflow-hidden bg-black/50">
                        {/* Main Image */}
                        {selectedAlbum && selectedAlbum.images.length > 0 ? (
                            <img
                                src={selectedAlbum.images[currentImageIndex]}
                                alt={`${selectedAlbum.title} image ${currentImageIndex + 1}`}
                                className="h-full w-full object-contain"
                                onError={(e) => {
                                    e.currentTarget.src =
                                        'https://placehold.co/1200x800/111111/64748b?text=Gambar+Tidak+Tersedia';
                                    e.currentTarget.onerror = null;
                                }}
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center text-white/50">
                                <FolderHeart className="mb-4 h-16 w-16 opacity-50" />
                                <p>Tidak ada gambar dalam album ini</p>
                            </div>
                        )}

                        {/* Navigation Arrows */}
                        <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100 md:px-8">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="pointer-events-auto h-12 w-12 rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 active:bg-black/70"
                                onClick={handlePrev}
                            >
                                <ChevronLeft className="h-8 w-8" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="pointer-events-auto h-12 w-12 rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 active:bg-black/70"
                                onClick={handleNext}
                            >
                                <ChevronRight className="h-8 w-8" />
                            </Button>
                        </div>

                        {/* Control Buttons (Auto play, Full Screen) */}
                        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100">
                            <Button
                                variant="outline"
                                className="rounded-full border-white/20 bg-black/60 px-6 text-white backdrop-blur-md hover:bg-black/80 active:bg-black/80"
                                onClick={() => setIsPlaying(!isPlaying)}
                            >
                                <Play
                                    className={`mr-2 h-4 w-4 ${isPlaying ? 'text-[#eab308]' : ''}`}
                                />
                                {isPlaying ? 'Membaca...' : 'Auto Play'}
                            </Button>
                            <Button
                                variant="outline"
                                className="rounded-full border-white/20 bg-black/60 px-6 text-white backdrop-blur-md hover:bg-black/80 active:bg-black/80"
                                onClick={() => {
                                    const imgEl =
                                        document.querySelector(
                                            '.object-contain',
                                        );
                                    if (imgEl && imgEl.requestFullscreen) {
                                        imgEl.requestFullscreen();
                                    }
                                }}
                            >
                                <Maximize className="mr-2 h-4 w-4" />
                                Full Screen
                            </Button>
                        </div>
                    </div>

                    {/* Bottom Thumbnail Strip */}
                    <div className="hide-scrollbar flex h-24 shrink-0 items-center justify-center gap-3 overflow-x-auto border-t border-white/10 bg-[#0a0a0a] p-4 md:h-28">
                        {selectedAlbum?.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setCurrentImageIndex(idx);
                                    setIsPlaying(false);
                                }}
                                className={`relative aspect-4/3 h-full shrink-0 overflow-hidden rounded-md transition-all ${
                                    currentImageIndex === idx
                                        ? 'scale-105 opacity-100 ring-2 ring-[#eab308]'
                                        : 'opacity-50 hover:opacity-80 active:opacity-80'
                                }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            'https://placehold.co/100x100/333333/64748b?text=Tak+Ada';
                                        e.currentTarget.onerror = null;
                                    }}
                                />
                            </button>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>

            {/* Video Player Dialog */}
            <Dialog
                open={!!activeVideo}
                onOpenChange={(open) => !open && setActiveVideo(null)}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{activeVideo?.title}</DialogTitle>
                    </DialogHeader>
                    <div className="aspect-video w-full">
                        {activeVideo && (
                            <ReactPlayer
                                src={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                                width="100%"
                                height="100%"
                                playing={true}
                                controls={true}
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>

            <Footer />
            <div
                className="pointer-events-none absolute inset-0 -z-1 opacity-[0.4] dark:opacity-[0.02]"
                style={{
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                }}
            ></div>
        </>
    );
}

