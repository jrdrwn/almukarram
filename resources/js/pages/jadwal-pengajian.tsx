import { Head } from '@inertiajs/react';
import {
    BookOpen,
    Calendar,
    CalendarDays,
    CheckCircle2,
    Clock,
    Filter,
    Home,
    Search,
    Users,
} from 'lucide-react';
import { useState } from 'react';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';
import { Input } from '@/components/ui/input';
import {
    Pagination,
    PaginationContent,
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

export default function JadwalPengajian({
    jadwalPengajian = [],
}: {
    jadwalPengajian?: {
        day: string;
        date: string;
        time: string;
        title: string;
        speaker: string;
        type: string;
        status: string;
    }[];
}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('Semua Status');
    const [typeFilter, setTypeFilter] = useState('Semua Tipe');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const dayColors: Record<string, { badge: string; glow: string }> = {
        Senin: {
            badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
            glow: 'bg-emerald-500/5 group-hover:bg-emerald-500/10',
        },
        Selasa: {
            badge: 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300',
            glow: 'bg-sky-500/5 group-hover:bg-sky-500/10',
        },
        Rabu: {
            badge: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
            glow: 'bg-blue-500/5 group-hover:bg-blue-500/10',
        },
        Kamis: {
            badge: 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300',
            glow: 'bg-rose-500/5 group-hover:bg-rose-500/10',
        },
        Jumat: {
            badge: 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300',
            glow: 'bg-purple-500/5 group-hover:bg-purple-500/10',
        },
        Sabtu: {
            badge: 'bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300',
            glow: 'bg-teal-500/5 group-hover:bg-teal-500/10',
        },
        Ahad: {
            badge: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
            glow: 'bg-amber-500/5 group-hover:bg-amber-500/10',
        },
        Minggu: {
            badge: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
            glow: 'bg-amber-500/5 group-hover:bg-amber-500/10',
        },
    };

    const defaultColors = {
        badge: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-500/20 dark:text-zinc-300',
        glow: 'bg-zinc-500/5 group-hover:bg-zinc-500/10',
    };

    const jadwalKajian = jadwalPengajian.map((j) => ({
        ...j,
        colors: dayColors[j.day] || defaultColors,
    }));

    const uniqueTypes = [...new Set(jadwalPengajian.map((j) => j.type))];

    const filteredJadwal = jadwalKajian.filter((jadwal) => {
        const matchesSearch =
            jadwal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            jadwal.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
            jadwal.day.toLowerCase().includes(searchQuery.toLowerCase()) ||
            jadwal.date.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus =
            statusFilter === 'Semua Status' || jadwal.status === statusFilter;
        const matchesType =
            typeFilter === 'Semua Tipe' || jadwal.type === typeFilter;

        return matchesSearch && matchesStatus && matchesType;
    });

    const totalPages = Math.ceil(filteredJadwal.length / itemsPerPage);
    const paginatedJadwal = filteredJadwal.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
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
                    {
                        label: 'Jadwal',
                        icon: <CalendarDays className="h-4 w-4" />,
                    },
                    { label: 'Pengajian / Majelis Taklim' },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                {/* Header Section Intro */}
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 rotate-3 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm dark:bg-emerald-900/30 dark:text-emerald-400">
                        <BookOpen className="h-8 w-8 -rotate-3" />
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
                        Majelis Taklim & Pengajian Rutin
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                        Hadirilah taman-taman surga di dunia. Ikuti kajian
                        Islam, halaqah, dan majelis taklim rutin untuk
                        memperdalam keilmuan dan thalabul ilmi di Masjid Agung
                        Al-Mukarram.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="mb-12 flex flex-col items-center justify-between gap-4 border-b border-zinc-100 pb-8 xl:flex-row dark:border-zinc-800">
                    <h3 className="mb-2 flex w-full items-center gap-2 text-xl font-bold text-zinc-800 xl:mb-0 xl:w-auto dark:text-zinc-200">
                        <CalendarDays className="h-5 w-5 text-emerald-600" />
                        Daftar Jadwal
                    </h3>

                    <div className="flex w-full flex-col gap-3 sm:flex-row xl:w-auto">
                        <div className="w-full sm:w-44">
                            <Select
                                value={statusFilter}
                                onValueChange={(value) => {
                                    setStatusFilter(value);
                                    setCurrentPage(1);
                                }}
                            >
                                <SelectTrigger className="h-10 w-full rounded-full border-zinc-200 bg-white pr-4 pl-4 shadow-sm transition-all focus:border-emerald-500 focus:ring-emerald-500/20 data-[state=open]:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900">
                                    <div className="flex items-center gap-2">
                                        <Filter className="h-4 w-4 text-zinc-400" />
                                        <SelectValue placeholder="Status" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="rounded-xl border-zinc-200 dark:border-zinc-800">
                                    <SelectItem
                                        value="Semua Status"
                                        className="cursor-pointer rounded-lg"
                                    >
                                        Semua Status
                                    </SelectItem>
                                    <SelectItem
                                        value="Akan Datang"
                                        className="cursor-pointer rounded-lg"
                                    >
                                        Akan Datang
                                    </SelectItem>
                                    <SelectItem
                                        value="Selesai"
                                        className="cursor-pointer rounded-lg"
                                    >
                                        Selesai
                                    </SelectItem>
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
                                <SelectTrigger className="h-10 w-full rounded-full border-zinc-200 bg-white pr-4 pl-4 shadow-sm transition-all focus:border-emerald-500 focus:ring-emerald-500/20 data-[state=open]:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900">
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="h-4 w-4 text-zinc-400" />
                                        <SelectValue placeholder="Tipe" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="rounded-xl border-zinc-200 dark:border-zinc-800">
                                    <SelectItem
                                        value="Semua Tipe"
                                        className="cursor-pointer rounded-lg"
                                    >
                                        Semua Tipe
                                    </SelectItem>
                                    {uniqueTypes.map((t) => (
                                        <SelectItem
                                            key={t}
                                            value={t}
                                            className="cursor-pointer rounded-lg"
                                        >
                                            {t}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="relative w-full sm:w-72">
                            <Search className="absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                            <Input
                                type="text"
                                placeholder="Cari judul, asatidz, atau tanggal..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="h-10 w-full rounded-full border-zinc-200 bg-white pr-4 pl-9 shadow-sm transition-all focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-900"
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
                                className={`group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border ${jadwal.status === 'Selesai' ? 'border-zinc-200/50 opacity-80' : 'border-zinc-100'} bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:opacity-100 hover:shadow-2xl sm:p-8 dark:border-zinc-800 dark:bg-zinc-900`}
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
                                            <span className="rounded-full border border-zinc-200 bg-white/50 px-3 py-1.5 text-[10px] font-bold tracking-wider text-zinc-500 uppercase shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-400">
                                                {jadwal.type}
                                            </span>
                                        </div>

                                        {/* Status Badge */}
                                        {jadwal.status === 'Selesai' ? (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-bold text-zinc-400 uppercase dark:bg-zinc-800">
                                                <CheckCircle2 className="h-3 w-3" />{' '}
                                                Selesai
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600 uppercase dark:bg-emerald-500/10 dark:text-emerald-400">
                                                <CalendarDays className="h-3 w-3" />{' '}
                                                Akan Datang
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-1 flex-col justify-start">
                                        <h3
                                            className={`mb-4 text-2xl leading-snug font-bold ${jadwal.status === 'Selesai' ? 'text-zinc-700 dark:text-zinc-300' : 'text-zinc-900 dark:text-zinc-100'} transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400`}
                                        >
                                            {jadwal.title}
                                        </h3>
                                        <div className="mt-auto mb-6 flex flex-col gap-2">
                                            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-100 bg-zinc-50 px-3 py-1.5 text-sm font-semibold text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-300">
                                                <Calendar className="h-4 w-4 text-emerald-500" />
                                                Tanggal: {jadwal.date}
                                            </div>
                                            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-100 bg-zinc-50 px-3 py-1.5 text-sm font-semibold text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-300">
                                                <Clock className="h-4 w-4 text-emerald-500" />
                                                Pukul: {jadwal.time}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 mt-auto flex flex-col justify-end border-t border-zinc-100 pt-5 dark:border-zinc-800">
                                    <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-500">
                                        <Users className="h-3.5 w-3.5" />{' '}
                                        Pemateri
                                    </p>
                                    <p
                                        className={`text-lg leading-tight font-bold ${jadwal.status === 'Selesai' ? 'text-zinc-600 dark:text-zinc-400' : 'text-zinc-800 dark:text-zinc-200'}`}
                                    >
                                        {jadwal.speaker}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center py-20 text-center">
                        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-800/50">
                            <Search className="h-10 w-10" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-700 dark:text-zinc-300">
                            Jadwal tidak ditemukan
                        </h3>
                        <p className="mt-2 text-zinc-500">
                            Coba gunakan kata kunci pencarian yang lain.
                        </p>
                    </div>
                )}

                {/* Pagination */}
                <div className="mt-12 mb-8">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (currentPage > 1)
                                            setCurrentPage((p) => p - 1);
                                    }}
                                    className={
                                        currentPage === 1
                                            ? 'pointer-events-none opacity-50'
                                            : 'cursor-pointer'
                                    }
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
                                        if (currentPage < totalPages)
                                            setCurrentPage((p) => p + 1);
                                    }}
                                    className={
                                        currentPage === totalPages
                                            ? 'pointer-events-none opacity-50'
                                            : 'cursor-pointer'
                                    }
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>

                {/* Info Note */}
                <div className="mt-16 flex justify-center">
                    <div className="inline-flex items-center gap-3 rounded-full border border-amber-200 bg-amber-50 px-6 py-3 text-sm text-amber-800 dark:border-amber-800/30 dark:bg-amber-900/20 dark:text-amber-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                        </svg>
                        <span className="font-medium">
                            Jadwal dapat berubah sewaktu-waktu. Info terbaru
                            silakan pantau mading masjid atau sosial media.
                        </span>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
