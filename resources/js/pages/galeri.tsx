import { Head } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, FolderHeart, Home, Image as ImageIcon, Maximize, Play, PlayCircle, Search, Video, X, Youtube } from 'lucide-react';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data Videos
const mockVideos = [
    {
        id: 1,
        title: 'Ceramah Subuh: Tanda-Tanda Kiamat Besar — Ustaz H. Hamidhan, S.Ag., MA',
        category: 'Ceramah',
        date: '28 FEB 2026',
        youtubeId: 'dQw4w9WgXcQ',
    },
    {
        id: 2,
        title: 'Kajian Rutin Malam Selasa Bersama Majelis Taklim Al-Mukarram',
        category: 'Kajian',
        date: '25 FEB 2026',
        youtubeId: 'dQw4w9WgXcQ',
    },
    {
        id: 3,
        title: "Khutbah Jumat: Membangun Generasi Qur'ani di Era Digital",
        category: 'Khutbah',
        date: '21 FEB 2026',
        youtubeId: 'dQw4w9WgXcQ',
    },
    {
        id: 4,
        title: 'Siaran Langsung Sholat Tarawih Ramadhan 1447 H',
        category: 'Live Streaming',
        date: '15 FEB 2026',
        youtubeId: 'dQw4w9WgXcQ',
    },
    {
        id: 5,
        title: 'Tausiyah Pagi: Keutamaan Sholat Berjamaah di Masjid',
        category: 'Tausiyah',
        date: '10 JAN 2026',
        youtubeId: 'dQw4w9WgXcQ',
    },
    {
        id: 6,
        title: 'Buka Puasa Bersama & Tarawih ke-5 Ramadhan 1447 H',
        category: 'Dokumentasi',
        date: '05 JAN 2026',
        youtubeId: 'dQw4w9WgXcQ',
    },
    {
        id: 7,
        title: 'Pengajian Ahad Pagi: Tafsir Surah Al-Baqarah Ayat 183-187',
        category: 'Kajian',
        date: '01 JAN 2026',
        youtubeId: 'dQw4w9WgXcQ',
    },
    {
        id: 8,
        title: 'Khutbah Idul Fitri 1447 H — Ustaz H. Gusti Mahfudz, S.Kom., MA',
        category: 'Khutbah',
        date: '28 DES 2025',
        youtubeId: 'dQw4w9WgXcQ',
    },
    {
        id: 9,
        title: 'Dokumentasi Malam Nuzulul Qur\'an 1447 H di Masjid Agung Al-Mukarram',
        category: 'Dokumentasi',
        date: '20 DES 2025',
        youtubeId: 'dQw4w9WgXcQ',
    },
];

// Mock data Albums
const mockAlbums = [
    {
        id: 1,
        title: 'Kolaborasi ZAWA, Baitulmaal Muamalat, dan BI Gelar Tot Alquran Isyarat di Istiqlal',
        date: '28 FEB 2026',
        month: 'Februari 2026',
        description: "Dalam upaya perkuat Aksesibilitas Al-Qur'an bagi Sahabat Difabel (Teman Tuli), mewujudkan inklusivitas literasi Al-Qur'an bagi penyandang...",
        images: [
            'https://images.unsplash.com/photo-1564683214965-3619addd900d?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584553421349-355eaca8ea25?q=80&w=400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1577983086915-08e1aab87eb4?q=80&w=400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1603831818222-67da67db75de?q=80&w=400&auto=format&fit=crop',
        ],
    },
    {
        id: 2,
        title: 'Buka Puasa Bersama dan Tarawih #5 Ramadhan',
        date: '25 FEB 2026',
        month: 'Februari 2026',
        description: 'Antusiasme ribuan jamaah masjid dalam mengikuti serangkaian kegiatan buka pausa bersama dan ibadah salat tarawih...',
        images: [
            'https://images.unsplash.com/photo-1603831818222-67da67db75de?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519782531393-271d47155a6d?q=80&w=400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1601058265076-2f1f0a0d4cbb?q=80&w=400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1564683214965-3619addd900d?q=80&w=400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584553421349-355eaca8ea25?q=80&w=400&auto=format&fit=crop',
        ]
    },
    {
        id: 3,
        title: 'Silaturahmi Ulama Se-Kalimantan Tengah',
        date: '10 JAN 2026',
        month: 'Januari 2026',
        description: 'Pertemuan rutin tahunan para ulama untuk membahas kemajuan ukhuwah islamiyah dan program dakwah terpadu.',
        images: [
            'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584553421349-355eaca8ea25?q=80&w=400&auto=format&fit=crop',
        ]
    },
    {
        id: 4,
        title: 'Kerja Bakti Akbar Persiapan Idul Adha',
        date: '05 JAN 2026',
        month: 'Januari 2026',
        description: 'Gotong royong membersihkan seluruh area masjid bersama warga masyarakat sekitar lingkungan.',
        images: [
            'https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1577983086915-08e1aab87eb4?q=80&w=400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1603831818222-67da67db75de?q=80&w=400&auto=format&fit=crop',
        ]
    },
    {
        id: 5,
        title: 'Kajian Subuh Spesial Tahun Baru',
        date: '01 JAN 2026',
        month: 'Januari 2026',
        description: 'Mengawali tahun dengan muhasabah diri dan memperkuat keimanan serta ketaqwaan kepada Allah SWT.',
        images: [
            'https://images.unsplash.com/photo-1564683214965-3619addd900d?q=80&w=800&auto=format&fit=crop',
        ]
    }
];

export default function Galeri() {
    const [activeTab, setActiveTab] = useState('foto');
    const [searchTitle, setSearchTitle] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("Semua Bulan");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAlbum, setSelectedAlbum] = useState<typeof mockAlbums[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeVideo, setActiveVideo] = useState<typeof mockVideos[0] | null>(null);
    const [videoSearch, setVideoSearch] = useState("");
    const [videoCategory, setVideoCategory] = useState("Semua Kategori");
    const [videoPage, setVideoPage] = useState(1);
    const videosPerPage = 6;

    const videoCategories = ["Semua Kategori", "Ceramah", "Kajian", "Khutbah", "Live Streaming", "Tausiyah", "Dokumentasi"];

    const filteredVideos = mockVideos.filter(v => {
        const matchSearch = v.title.toLowerCase().includes(videoSearch.toLowerCase());
        const matchCat = videoCategory === "Semua Kategori" || v.category === videoCategory;
        return matchSearch && matchCat;
    });
    const totalVideoPages = Math.max(1, Math.ceil(filteredVideos.length / videosPerPage));
    const pagedVideos = filteredVideos.slice((videoPage - 1) * videosPerPage, videoPage * videosPerPage);

    const months = ["Semua Bulan", "Februari 2026", "Januari 2026", "Desember 2025"];

    // Filter Logic
    const filteredAlbums = mockAlbums.filter(album => {
        const matchSearch = album.title.toLowerCase().includes(searchTitle.toLowerCase());
        const matchMonth = selectedMonth === "Semua Bulan" || album.month === selectedMonth;
        return matchSearch && matchMonth;
    });

    // Grouping by Month
    const groupedAlbums = filteredAlbums.reduce((acc, album) => {
        if (!acc[album.month]) {
            acc[album.month] = [];
        }
        acc[album.month].push(album);
        return acc;
    }, {} as Record<string, typeof mockAlbums>);

    // Auto Play Logic
    useEffect(() => {
        let interval: any;
        if (isPlaying && selectedAlbum) {
            interval = setInterval(() => {
                setCurrentImageIndex((prev) =>
                    prev === selectedAlbum.images.length - 1 ? 0 : prev + 1
                );
            }, 3000); // 3 seconds interval
        }
        return () => clearInterval(interval);
    }, [isPlaying, selectedAlbum]);

    const handleNext = () => {
        if (!selectedAlbum) return;
        setCurrentImageIndex((prev) => prev === selectedAlbum.images.length - 1 ? 0 : prev + 1);
    };

    const handlePrev = () => {
        if (!selectedAlbum) return;
        setCurrentImageIndex((prev) => prev === 0 ? selectedAlbum.images.length - 1 : prev - 1);
    };

    return (
        <>
            <Header />
            <Head title="Galeri Media | Masjid Agung Al-Mukarram" />
            <PageHeader
                title="Galeri Dokumentasi"
                subtitle="Kumpulan album foto dari berbagai kegiatan dan momen berharga yang diselenggarakan di Masjid Agung Al-Mukarram Amanah."
                breadcrumbs={[
                    {label: "Beranda", href: "/", icon: <Home className='size-4' />},
                    {label: "Galeri", icon: <ImageIcon className='size-4' />}
                ]}
            />

            <section className="py-16 relative bg-background min-h-screen">
                {/* Background Decor */}
                <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
                    <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-teal-400 opacity-20 sm:left-[calc(50%)] sm:w-288.75"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-24">
                    {/* Tabs Toggle */}
                    <div className="flex justify-center mb-10">
                        <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); setSearchTitle(''); setVideoSearch(''); setSelectedMonth('Semua Bulan'); setVideoCategory('Semua Kategori'); setVideoPage(1); }} className="w-full">
                            <div className="flex justify-center mb-12">
                                <div className="inline-flex rounded-2xl bg-card border border-border shadow-lg overflow-hidden">
                                    <TabsList className="flex gap-0 bg-transparent p-0 h-auto">
                                        <TabsTrigger
                                            value="foto"
                                            className="flex items-center gap-2.5 px-10 py-4 text-base font-bold rounded-none border-0 transition-all duration-200 text-muted-foreground data-[state=active]:bg-[#005B41] data-[state=active]:text-white data-[state=active]:shadow-none"
                                        >
                                            <ImageIcon className="w-5 h-5" /> Foto
                                        </TabsTrigger>
                                        <div className="w-px bg-border my-3" />
                                        <TabsTrigger
                                            value="video"
                                            className="flex items-center gap-2.5 px-10 py-4 text-base font-bold rounded-none border-0 transition-all duration-200 text-muted-foreground data-[state=active]:bg-[#005B41] data-[state=active]:text-white data-[state=active]:shadow-none"
                                        >
                                            <Video className="w-5 h-5" /> Video
                                        </TabsTrigger>
                                    </TabsList>
                                </div>
                            </div>

                            {/* ===== FOTO TAB ===== */}
                            <TabsContent value="foto">
                    {/* Control Section / Search Filter Card */}
                    <div className="bg-card p-6 md:p-8 rounded-[2.5rem] border border-border shadow-xl ring-1 ring-border/50 mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
                        <div className="flex flex-col md:flex-row gap-6 items-end justify-between">
                            <div className="w-full md:flex-1 space-y-2">
                                <Label htmlFor="search" className="text-sm font-bold text-muted-foreground ml-1">Cari Nama Album</Label>
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        id="search"
                                        placeholder="Ketik kata kunci..."
                                        className="h-14 pl-12 rounded-2xl bg-background border-input/60 focus-visible:ring-emerald-500 w-full text-base"
                                        value={searchTitle}
                                        onChange={(e) => setSearchTitle(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-72 space-y-2">
                                <Label htmlFor="month" className="text-sm font-bold text-muted-foreground ml-1">Filter Bulan</Label>
                                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                                    <SelectTrigger id="month" className="h-14 rounded-2xl bg-background border-input/60 focus:ring-emerald-500 w-full text-base font-medium">
                                        <SelectValue placeholder="Semua Bulan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {months.map((m) => (
                                            <SelectItem key={m} value={m}>{m}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="w-full md:w-auto">
                                <Button size="lg" className="w-full md:w-auto h-14 rounded-2xl px-10 bg-[#005B41] hover:bg-[#004d36] text-white font-extrabold tracking-wide uppercase transition-all shadow-md hover:shadow-lg">
                                    Cari Album
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Album Content grouped by Month */}
                    <div className="space-y-16">
                        {Object.keys(groupedAlbums).length > 0 ? (
                            Object.entries(groupedAlbums).map(([month, albums]) => (
                                <div key={month} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                                    <div className="mb-8 border-b-2 border-primary/20 pb-2 inline-block">
                                        <h2 className="text-3xl font-extrabold text-[#005B41] dark:text-emerald-500">
                                            {month}
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {albums.map((album) => (
                                            <div key={album.id} className="group flex flex-col bg-card rounded-4xl p-4 border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                                                {/* Images Collage */}
                                                <div
                                                    className="flex gap-2 h-55 sm:h-65 md:h-75 mb-6 rounded-2xl overflow-hidden cursor-pointer"
                                                    onClick={() => {
                                                        setSelectedAlbum(album);
                                                        setCurrentImageIndex(0);
                                                        setIsPlaying(false);
                                                    }}
                                                >
                                                    {/* Main Image */}
                                                    <div className={`${album.images.length === 1 ? 'w-full' : 'w-2/3'} h-full overflow-hidden relative`}>
                                                        <img
                                                            src={album.images[0]}
                                                            alt={album.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                            onError={(e) => {
                                                                e.currentTarget.src = 'https://placehold.co/800x600/e2e8f0/64748b?text=Tak+Ada+Gambar';
                                                                e.currentTarget.onerror = null;
                                                            }}
                                                        />
                                                    </div>
                                                    {/* Side Images */}
                                                    {album.images.length > 1 && (
                                                        <div className="w-1/3 h-full flex flex-col gap-2">
                                                            <div className="flex-1 overflow-hidden relative">
                                                                <img
                                                                    src={album.images[1]}
                                                                    alt=""
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 delay-75"
                                                                    onError={(e) => {
                                                                        e.currentTarget.src = 'https://placehold.co/400x400/e2e8f0/64748b?text=Tak+Ada+Gambar';
                                                                        e.currentTarget.onerror = null;
                                                                    }}
                                                                />
                                                            </div>
                                                            {album.images.length > 2 && (
                                                                <div className="flex-1 overflow-hidden relative">
                                                                    <img
                                                                        src={album.images[2]}
                                                                        alt=""
                                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 delay-150"
                                                                        onError={(e) => {
                                                                            e.currentTarget.src = 'https://placehold.co/400x400/e2e8f0/64748b?text=Tak+Ada+Gambar';
                                                                            e.currentTarget.onerror = null;
                                                                        }}
                                                                    />
                                                                    {/* Overlay for +N More */}
                                                                    {album.images.length > 3 && (
                                                                        <div className="absolute inset-0 bg-[#005B41]/80 flex items-center justify-center">
                                                                            <span className="text-white font-extrabold text-xl sm:text-2xl">
                                                                                +{album.images.length - 3}
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Meta Info */}
                                                <div className="px-2 flex-1 flex flex-col">
                                                    <span className="text-sm font-extrabold text-[#009B65] dark:text-emerald-400 mb-2 uppercase tracking-wider block">
                                                        {album.date}
                                                    </span>
                                                    <h3
                                                        className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-snug line-clamp-2 group-hover:text-[#005B41] transition-colors cursor-pointer"
                                                        onClick={() => {
                                                            setSelectedAlbum(album);
                                                            setCurrentImageIndex(0);
                                                            setIsPlaying(false);
                                                        }}
                                                    >
                                                        {album.title}
                                                    </h3>
                                                    {album.description && (
                                                        <p className="text-muted-foreground text-sm sm:text-base line-clamp-2 mt-auto">
                                                            {album.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="py-20 text-center flex flex-col items-center bg-card rounded-[3rem] border border-dashed border-border">
                                <FolderHeart className="w-20 h-20 text-muted-foreground/30 mb-6" />
                                <h3 className="text-2xl font-bold text-foreground mb-2">Album Tidak Ditemukan</h3>
                                <p className="text-muted-foreground max-w-md">Kami tidak dapat menemukan album yang sesuai dengan filter pencarian Anda. Silakan coba dengan kata kunci atau bulan lain.</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {Object.keys(groupedAlbums).length > 0 && (
                        <div className="mt-16 pt-8 border-t border-border">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            onClick={(e) => { e.preventDefault(); setCurrentPage(prev => Math.max(1, prev - 1)); }}
                                            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                        />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" onClick={(e) => e.preventDefault()}>2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    )}

                            </TabsContent>

                            {/* ===== VIDEO TAB ===== */}
                            <TabsContent value="video">
                                {/* Video Search Filter */}
                                <div className="bg-card p-6 md:p-8 rounded-[2.5rem] border border-border shadow-xl ring-1 ring-border/50 mb-16 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
                                    <div className="flex flex-col md:flex-row gap-6 items-end justify-between">
                                        <div className="w-full md:flex-1 space-y-2">
                                            <Label htmlFor="video-search" className="text-sm font-bold text-muted-foreground ml-1">Cari Video</Label>
                                            <div className="relative">
                                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                                <Input
                                                    id="video-search"
                                                    placeholder="Ketik judul video..."
                                                    className="h-14 pl-12 rounded-2xl bg-background border-input/60 focus-visible:ring-emerald-500 w-full text-base"
                                                    value={videoSearch}
                                                    onChange={(e) => setVideoSearch(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-72 space-y-2">
                                            <Label htmlFor="video-cat" className="text-sm font-bold text-muted-foreground ml-1">Filter Kategori</Label>
                                            <Select value={videoCategory} onValueChange={setVideoCategory}>
                                                <SelectTrigger id="video-cat" className="h-14 rounded-2xl bg-background border-input/60 w-full text-base font-medium">
                                                    <SelectValue placeholder="Semua Kategori" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {videoCategories.map((c) => (
                                                        <SelectItem key={c} value={c}>{c}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="w-full md:w-auto">
                                            <Button size="lg" className="w-full md:w-auto h-14 rounded-2xl px-10 bg-[#005B41] hover:bg-[#004d36] text-white font-extrabold tracking-wide uppercase transition-all shadow-md hover:shadow-lg">
                                                Cari Video
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                {filteredVideos.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {pagedVideos.map((video) => (
                                            <button
                                                key={video.id}
                                                className="group relative w-full aspect-video rounded-3xl overflow-hidden bg-muted border border-border hover:border-[#005B41]/50 transition-all shadow-md hover:shadow-xl hover:shadow-emerald-900/10 block cursor-pointer"
                                                onClick={() => setActiveVideo(video)}
                                            >
                                                {/* YouTube Thumbnail */}
                                                <img
                                                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                                                    alt={video.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                    onError={(e) => {
                                                        e.currentTarget.src = 'https://placehold.co/480x270/e2e8f0/64748b?text=Video';
                                                        e.currentTarget.onerror = null;
                                                    }}
                                                />
                                                {/* Gradient overlay */}
                                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                                                {/* Play Button */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-14 h-14 rounded-full bg-[#005B41]/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#009B65] transition-all">
                                                        <PlayCircle className="w-8 h-8 text-white" />
                                                    </div>
                                                </div>
                                                {/* Category Badge */}
                                                <div className="absolute top-3 left-3">
                                                    <span className="bg-[#005B41]/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                                                        {video.category}
                                                    </span>
                                                </div>
                                                {/* Title and Date */}
                                                <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                                                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">{video.date}</span>
                                                    <p className="text-white font-semibold text-sm leading-snug line-clamp-2 group-hover:text-emerald-300 transition-colors">
                                                        {video.title}
                                                    </p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="py-20 text-center flex flex-col items-center bg-card rounded-[3rem] border border-dashed border-border">
                                        <Youtube className="w-20 h-20 text-muted-foreground/30 mb-6" />
                                        <h3 className="text-2xl font-bold text-foreground mb-2">Video Tidak Ditemukan</h3>
                                        <p className="text-muted-foreground max-w-md">Coba dengan kata kunci atau kategori lain.</p>
                                    </div>
                                )}

                                {/* Video Pagination */}
                                {filteredVideos.length > videosPerPage && (
                                    <div className="mt-16 pt-8 border-t border-border">
                                        <Pagination>
                                            <PaginationContent>
                                                <PaginationItem>
                                                    <PaginationPrevious
                                                        href="#"
                                                        onClick={(e) => { e.preventDefault(); setVideoPage(prev => Math.max(1, prev - 1)); }}
                                                        className={videoPage === 1 ? "pointer-events-none opacity-50" : ""}
                                                    />
                                                </PaginationItem>
                                                {Array.from({ length: totalVideoPages }, (_, i) => i + 1).map((page) => (
                                                    <PaginationItem key={page}>
                                                        <PaginationLink
                                                            href="#"
                                                            isActive={videoPage === page}
                                                            onClick={(e) => { e.preventDefault(); setVideoPage(page); }}
                                                        >
                                                            {page}
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                ))}
                                                <PaginationItem>
                                                    <PaginationNext
                                                        href="#"
                                                        onClick={(e) => { e.preventDefault(); setVideoPage(prev => Math.min(totalVideoPages, prev + 1)); }}
                                                        className={videoPage === totalVideoPages ? "pointer-events-none opacity-50" : ""}
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
                    className="max-w-6xl w-full bg-[#111111] border-[#222222] p-0 h-[90vh] md:h-[95vh] flex flex-col overflow-hidden [&>button]:hidden"
                    aria-describedby={undefined}
                >
                    {/* Header: Title and Close Button */}
                    <div className="flex items-center justify-between p-4 md:px-6 md:py-4 shrink-0 border-b border-white/10">
                        <DialogTitle className="text-xl md:text-2xl font-bold text-[#eab308] truncate pr-4">
                            {selectedAlbum?.title}
                        </DialogTitle>
                        <DialogClose asChild>
                            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 rounded-full w-10 h-10 shrink-0">
                                <X className="w-6 h-6" />
                            </Button>
                        </DialogClose>
                    </div>

                    {/* Main Image Area with Navigation */}
                    <div className="flex-1 relative flex items-center justify-center overflow-hidden bg-black/50 group">
                        {/* Main Image */}
                        {selectedAlbum && selectedAlbum.images.length > 0 ? (
                            <img
                                src={selectedAlbum.images[currentImageIndex]}
                                alt={`${selectedAlbum.title} image ${currentImageIndex + 1}`}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://placehold.co/1200x800/111111/64748b?text=Gambar+Tidak+Tersedia';
                                    e.currentTarget.onerror = null;
                                }}
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center text-white/50">
                                <FolderHeart className="w-16 h-16 mb-4 opacity-50" />
                                <p>Tidak ada gambar dalam album ini</p>
                            </div>
                        )}

                        {/* Navigation Arrows */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 md:px-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 pointer-events-auto backdrop-blur-sm border border-white/10"
                                onClick={handlePrev}
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 pointer-events-auto backdrop-blur-sm border border-white/10"
                                onClick={handleNext}
                            >
                                <ChevronRight className="w-8 h-8" />
                            </Button>
                        </div>

                        {/* Control Buttons (Auto play, Full Screen) */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button
                                variant="outline"
                                className="bg-black/60 hover:bg-black/80 text-white border-white/20 backdrop-blur-md rounded-full px-6"
                                onClick={() => setIsPlaying(!isPlaying)}
                            >
                                <Play className={`w-4 h-4 mr-2 ${isPlaying ? 'text-[#eab308]' : ''}`} />
                                {isPlaying ? 'Membaca...' : 'Auto Play'}
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-black/60 hover:bg-black/80 text-white border-white/20 backdrop-blur-md rounded-full px-6"
                                onClick={() => {
                                    const imgEl = document.querySelector('.object-contain');
                                    if (imgEl && imgEl.requestFullscreen) {
                                        imgEl.requestFullscreen();
                                    }
                                }}
                            >
                                <Maximize className="w-4 h-4 mr-2" />
                                Full Screen
                            </Button>
                        </div>
                    </div>

                    {/* Bottom Thumbnail Strip */}
                    <div className="h-24 md:h-28 shrink-0 bg-[#0a0a0a] border-t border-white/10 p-4 overflow-x-auto flex items-center justify-center gap-3 hide-scrollbar">
                        {selectedAlbum?.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setCurrentImageIndex(idx);
                                    setIsPlaying(false);
                                }}
                                className={`relative h-full aspect-4/3 rounded-md overflow-hidden shrink-0 transition-all ${
                                    currentImageIndex === idx
                                        ? 'ring-2 ring-[#eab308] opacity-100 scale-105'
                                        : 'opacity-50 hover:opacity-80'
                                }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://placehold.co/100x100/333333/64748b?text=Tak+Ada';
                                        e.currentTarget.onerror = null;
                                    }}
                                />
                            </button>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>

            {/* Video Player Dialog */}
            <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
                <DialogContent
                >
                    <DialogHeader>
                        <DialogTitle >
                            {activeVideo?.title}
                        </DialogTitle>
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
            <div className="pointer-events-none absolute inset-0 -z-1 opacity-[0.4] dark:opacity-[0.02]"
                style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                }}
            ></div>
        </>
    );
}
