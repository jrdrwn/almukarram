import { Head } from '@inertiajs/react';
import { BookOpen, CalendarDays, Home, Users, Calendar, Search, CheckCircle2, Clock, Filter, } from 'lucide-react';
import { useState } from 'react';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

export default function JadwalPengajian() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('Semua Status');
    const [typeFilter, setTypeFilter] = useState('Semua Tipe');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const jadwalKajian = [
        {
            day: 'Senin',
            date: '15 Maret 2026',
            time: "Ba'da Maghrib",
            title: 'Kajian Fiqih Ibadah Praktis',
            speaker: 'Ust. M. Abdullah, M.Ag',
            type: 'Umum',
            status: 'Akan Datang',
            colors: {
                badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
                glow: 'bg-emerald-500/5 group-hover:bg-emerald-500/10',
            },
        },
        {
            day: 'Rabu',
            date: '17 Maret 2026',
            time: "Ba'da Subuh",
            title: "Tafsir Al-Qur'an (Jalalain)",
            speaker: 'KH. Hasan Basri',
            type: 'Umum',
            status: 'Akan Datang',
            colors: {
                badge: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
                glow: 'bg-blue-500/5 group-hover:bg-blue-500/10',
            },
        },
        {
            day: 'Kamis',
            date: '18 Maret 2026',
            time: '16:00 - Selesai',
            title: 'Kajian Kemuslimahan & Sirah',
            speaker: 'Ustadzah Hj. Fatimah',
            type: 'Khusus Muslimah',
            status: 'Akan Datang',
            colors: {
                badge: 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300',
                glow: 'bg-rose-500/5 group-hover:bg-rose-500/10',
            },
        },
        {
            day: 'Jumat',
            date: '12 Maret 2026',
            time: "Ba'da Maghrib",
            title: 'Kajian Kitab Riyadhus Shalihin',
            speaker: 'Ust. H. Ahmad Zainuddin, Lc',
            type: 'Umum',
            status: 'Selesai',
            colors: {
                badge: 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300',
                glow: 'bg-purple-500/5 group-hover:bg-purple-500/10',
            },
        },
        {
            day: 'Sabtu',
            date: '13 Maret 2026',
            time: "08:00 - 10:00",
            title: 'Tahsin dan Tahfidz Qur\'an',
            speaker: 'Tim Asatidz Al-Mukarram',
            type: 'Umum (Pendaftaran)',
            status: 'Selesai',
            colors: {
                badge: 'bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300',
                glow: 'bg-teal-500/5 group-hover:bg-teal-500/10',
            },
        },
        {
            day: 'Ahad',
            date: '14 Maret 2026',
            time: "Ba'da Subuh",
            title: 'Kajian Tematik & Tanya Jawab',
            speaker: 'Berbagai Pemateri (Terjadwal)',
            type: 'Umum',
            status: 'Selesai',
            colors: {
                badge: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
                glow: 'bg-amber-500/5 group-hover:bg-amber-500/10',
            },
        },
        // Data tambahan untuk memastikan pagination muncul
        {
            day: 'Senin',
            date: '8 Maret 2026',
            time: "Ba'da Maghrib",
            title: 'Kajian Fiqih Ibadah Praktis',
            speaker: 'Ust. M. Abdullah, M.Ag',
            type: 'Umum',
            status: 'Selesai',
            colors: {
                badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
                glow: 'bg-emerald-500/5 group-hover:bg-emerald-500/10',
            },
        },
        {
            day: 'Rabu',
            date: '10 Maret 2026',
            time: "Ba'da Subuh",
            title: "Tafsir Al-Qur'an (Jalalain)",
            speaker: 'KH. Hasan Basri',
            type: 'Umum',
            status: 'Selesai',
            colors: {
                badge: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
                glow: 'bg-blue-500/5 group-hover:bg-blue-500/10',
            },
        }
    ];

const filteredJadwal = jadwalKajian.filter(jadwal => {
        const matchesSearch = jadwal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            jadwal.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
            jadwal.day.toLowerCase().includes(searchQuery.toLowerCase()) ||
            jadwal.date.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = statusFilter === 'Semua Status' || jadwal.status === statusFilter;
        const matchesType = typeFilter === 'Semua Tipe' || jadwal.type === typeFilter;

        return matchesSearch && matchesStatus && matchesType;
    });

    const totalPages = Math.ceil(filteredJadwal.length / itemsPerPage);
    const paginatedJadwal = filteredJadwal.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <Header />
            <Head title="Jadwal & Petugas Pengajian | Masjid Agung Al-Mukarram" />

            <PageHeader
                title="Jadwal & Petugas Pengajian"
                subtitle="Jadwal rutin Majelis Taklim dan kajian ilmu di lingkungan Masjid."
                badgeText="Jadwal"
                badgeIcon={<CalendarDays className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    { label: 'Jadwal', icon: <CalendarDays className="h-4 w-4" /> },
                    { label: 'Pengajian / Majelis Taklim' },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section Intro */}
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rotate-3 shadow-sm">
                        <BookOpen className="h-8 w-8 -rotate-3" />
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                        Majelis Taklim & Pengajian Rutin
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        Hadirilah taman-taman surga di dunia. Ikuti kajian Islam, halaqah, dan majelis taklim rutin untuk memperdalam keilmuan dan thalabul ilmi di Masjid Agung Al-Mukarram.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="mb-12 flex flex-col xl:flex-row justify-between items-center gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-8">
                    <h3 className="text-xl font-bold flex items-center gap-2 text-zinc-800 dark:text-zinc-200 w-full xl:w-auto mb-2 xl:mb-0">
                        <CalendarDays className="h-5 w-5 text-emerald-600" />
                        Daftar Jadwal
                    </h3>

                    <div className="flex flex-col sm:flex-row w-full xl:w-auto gap-3">
                        <div className="w-full sm:w-44">
                            <Select
                                value={statusFilter}
                                onValueChange={(value) => {
                                    setStatusFilter(value);
                                    setCurrentPage(1);
                                }}
                            >
                                <SelectTrigger className="w-full rounded-full pl-4 pr-4 h-10 border-zinc-200 focus:ring-emerald-500/20 data-[state=open]:border-emerald-500 bg-white dark:bg-zinc-900 dark:border-zinc-700 shadow-sm transition-all focus:border-emerald-500">
                                    <div className="flex items-center gap-2">
                                        <Filter className="h-4 w-4 text-zinc-400" />
                                        <SelectValue placeholder="Status" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="rounded-xl border-zinc-200 dark:border-zinc-800">
                                    <SelectItem value="Semua Status" className="rounded-lg cursor-pointer">Semua Status</SelectItem>
                                    <SelectItem value="Akan Datang" className="rounded-lg cursor-pointer">Akan Datang</SelectItem>
                                    <SelectItem value="Selesai" className="rounded-lg cursor-pointer">Selesai</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="w-full sm:w-48">
                            <Select
                                value={typeFilter}
                                onValueChange={(value) => {
                                    setTypeFilter(value);
                                    setCurrentPage(1);
                                }}
                            >
                                <SelectTrigger className="w-full rounded-full pl-4 pr-4 h-10 border-zinc-200 focus:ring-emerald-500/20 data-[state=open]:border-emerald-500 bg-white dark:bg-zinc-900 dark:border-zinc-700 shadow-sm transition-all focus:border-emerald-500">
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="h-4 w-4 text-zinc-400" />
                                        <SelectValue placeholder="Tipe" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="rounded-xl border-zinc-200 dark:border-zinc-800">
                                    <SelectItem value="Semua Tipe" className="rounded-lg cursor-pointer">Semua Tipe</SelectItem>
                                    <SelectItem value="Umum" className="rounded-lg cursor-pointer">Umum</SelectItem>
                                    <SelectItem value="Khusus Muslimah" className="rounded-lg cursor-pointer">Khusus Muslimah</SelectItem>
                                    <SelectItem value="Umum (Pendaftaran)" className="rounded-lg cursor-pointer">Umum (Pendaftaran)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 z-10" />
                            <Input
                                type="text"
                                placeholder="Cari judul, asatidz, atau tanggal..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full pl-9 pr-4 h-10 rounded-full border-zinc-200 focus-visible:ring-emerald-500/20 focus-visible:border-emerald-500 bg-white dark:bg-zinc-900 dark:border-zinc-700 shadow-sm transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Grid Schedule */}
                {filteredJadwal.length > 0 ? (
                    <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {paginatedJadwal.map((jadwal, idx) => (
                            <div
                                key={idx}
                                className={`group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border ${jadwal.status === 'Selesai' ? 'border-zinc-200/50 opacity-80' : 'border-zinc-100'} bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:opacity-100 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900 p-6`}
                            >
                                {/* Grid Texture Background */}
                                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)] bg-size-[24px_24px] opacity-60 transition-opacity duration-500 group-hover:opacity-100 dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>

                                {/* Decorative Abstract Shape in background */}
                                <div
                                    className={`absolute -top-16 -right-16 z-0 h-40 w-40 rounded-full transition-all duration-700 group-hover:scale-150 ${jadwal.colors.glow}`}
                                ></div>

                                <div className="relative z-10 flex flex-1 flex-col">
                                    <div className="mb-6 flex flex-wrap items-start justify-between gap-2">
                                        <div className="flex gap-2">
                                            <div
                                                className={`rounded-xl px-4 py-1.5 text-sm font-black tracking-widest shadow-sm ${jadwal.colors.badge}`}
                                            >
                                                {jadwal.day}
                                            </div>
                                            <span className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[10px] font-bold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase shadow-sm dark:bg-zinc-900/50">
                                                {jadwal.type}
                                            </span>
                                        </div>

                                        {/* Status Badge */}
                                        {jadwal.status === 'Selesai' ? (
                                            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full">
                                                <CheckCircle2 className="h-3 w-3" /> Selesai
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-full">
                                                <CalendarDays className="h-3 w-3" /> Akan Datang
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-1 flex-col justify-start">
                                        <h3 className={`mb-4 text-2xl leading-snug font-bold ${jadwal.status === 'Selesai' ? 'text-zinc-700 dark:text-zinc-300' : 'text-zinc-900 dark:text-zinc-100'} transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400`}>
                                            {jadwal.title}
                                        </h3>
                                        <div className="mt-auto mb-6 flex flex-col gap-2">
                                            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-1.5 w-fit text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                                                <Calendar className="h-4 w-4 text-emerald-500" />
                                                Tanggal: {jadwal.date}
                                            </div>
                                            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-1.5 w-fit text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                                                <Clock className="h-4 w-4 text-emerald-500" />
                                                Pukul: {jadwal.time}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 mt-auto flex flex-col justify-end border-t border-zinc-100 dark:border-zinc-800 pt-5">
                                    <p className="mb-1.5 text-[11px] font-bold tracking-widest text-emerald-600 dark:text-emerald-500 uppercase flex items-center gap-1.5">
                                        <Users className="h-3.5 w-3.5" /> Pemateri
                                    </p>
                                    <p className={`text-lg leading-tight font-bold ${jadwal.status === 'Selesai' ? 'text-zinc-600 dark:text-zinc-400' : 'text-zinc-800 dark:text-zinc-200'}`}>
                                        {jadwal.speaker}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center flex flex-col items-center">
                        <div className="bg-zinc-100 dark:bg-zinc-800/50 h-24 w-24 rounded-full flex items-center justify-center mb-4 text-zinc-400">
                            <Search className="h-10 w-10" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-700 dark:text-zinc-300">Jadwal tidak ditemukan</h3>
                        <p className="text-zinc-500 mt-2">Coba gunakan kata kunci pencarian yang lain.</p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 mb-8">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (currentPage > 1) setCurrentPage(p => p - 1);
                                        }}
                                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                    />
                                </PaginationItem>

                                {[...Array(totalPages)].map((_, i) => (
                                    <PaginationItem key={i}>
                                        <PaginationLink
                                            href="#"
                                            isActive={currentPage === i + 1}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setCurrentPage(i + 1);
                                            }}
                                        >
                                            {i + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                <PaginationItem>
                                    <PaginationNext
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (currentPage < totalPages) setCurrentPage(p => p + 1);
                                        }}
                                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                )}

                {/* Info Note */}
                <div className="mt-16 flex justify-center">
                    <div className="inline-flex items-center gap-3 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 px-6 py-3 text-sm text-amber-800 dark:text-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        <span className="font-medium">
                            Jadwal dapat berubah sewaktu-waktu. Info terbaru silakan pantau mading masjid atau sosial media.
                        </span>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
