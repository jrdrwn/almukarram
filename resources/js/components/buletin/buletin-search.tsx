import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { router, useForm } from '@inertiajs/react';
import { format } from 'date-fns';
import { id as localeId } from 'date-fns/locale';
import { CalendarIcon, Filter, Search, SortDesc, X } from 'lucide-react';
import React, { useState } from 'react';
import type { DateRange } from 'react-day-picker';

interface KategoriItem {
    id: number;
    nama: string;
    slug: string;
    total: number;
}

interface BuletinSearchProps {
    searchQuery?: string;
    kategoriSlug?: string;
    totalRows?: number;
    kategoris?: KategoriItem[];
}

export default function BuletinSearch({
    searchQuery = '',
    kategoriSlug = 'semua',
    totalRows = 0,
    kategoris = [],
}: BuletinSearchProps) {
    const getParam = (param: string, defaultVal = '') => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            return params.get(param) || defaultVal;
        }
        return defaultVal;
    };

    const initialFromStr = getParam('from');
    const initialToStr = getParam('to');

    const parseDate = (dateStr: string) => {
        if (!dateStr) return undefined;
        const d = new Date(dateStr);
        return isNaN(d.getTime()) ? undefined : d;
    };

    const initialDateRange: DateRange | undefined =
        initialFromStr || initialToStr
            ? {
                  from: parseDate(initialFromStr),
                  to: parseDate(initialToStr),
              }
            : undefined;

    const { data, setData } = useForm({
        q: searchQuery,
        kategori: kategoriSlug || 'semua',
        sort: getParam('sort', 'terbaru'),
        from: initialFromStr,
        to: initialToStr,
    });

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [date, setDate] = useState<DateRange | undefined>(initialDateRange);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        submitSearch(data);
    };

    const submitSearch = (payload: any) => {
        const params: Record<string, string> = {};
        if (payload.q) params.q = payload.q;
        if (payload.kategori && payload.kategori !== 'semua')
            params.kategori = payload.kategori;
        if (payload.sort && payload.sort !== 'terbaru')
            params.sort = payload.sort;
        if (payload.from) params.from = payload.from;
        if (payload.to) params.to = payload.to;

        router.get('/buletin', params as any, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleFilterChange = (key: 'kategori' | 'sort', value: string) => {
        setData(key, value);
        const payload = { ...data, [key]: value };
        submitSearch(payload);
    };

    const handleDateSelect = (selectedDate: DateRange | undefined) => {
        setDate(selectedDate);
        const fromStr = selectedDate?.from
            ? format(selectedDate.from, 'yyyy-MM-dd')
            : '';
        const toStr = selectedDate?.to
            ? format(selectedDate.to, 'yyyy-MM-dd')
            : '';

        setData((current) => ({
            ...current,
            from: fromStr,
            to: toStr,
        }));
    };

    const applyDateFilter = () => {
        setIsCalendarOpen(false);
        const fromStr = date?.from ? format(date.from, 'yyyy-MM-dd') : '';
        const toStr = date?.to ? format(date.to, 'yyyy-MM-dd') : '';
        const payload = { ...data, from: fromStr, to: toStr };
        submitSearch(payload);
    };

    const clearDateFilter = () => {
        setDate(undefined);
        setData((current) => ({ ...current, from: '', to: '' }));
        const payload = { ...data, from: '', to: '' };
        submitSearch(payload);
        setIsCalendarOpen(false);
    };

    const hasFilter =
        searchQuery ||
        (kategoriSlug && kategoriSlug !== 'semua') ||
        data.sort !== 'terbaru' ||
        data.from ||
        data.to;

    return (
        <div className="relative z-10 mb-8 flex flex-col gap-4">
            <form onSubmit={handleSearch} className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-emerald-500/20 to-teal-500/20 opacity-25 blur transition duration-500 group-hover:opacity-50 group-active:opacity-50"></div>
                <div className="relative flex items-center rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-emerald-500/20 transition-all focus-within:ring-2 focus-within:ring-emerald-500 dark:bg-zinc-900">
                    <div className="pr-2 pl-4 text-emerald-600 dark:text-emerald-400">
                        <Search className="h-5 w-5" />
                    </div>
                    <input
                        type="text"
                        name="q"
                        value={data.q}
                        onChange={(e) => setData('q', e.target.value)}
                        placeholder="Cari edisi buletin Jumat..."
                        className="flex-1 border-none bg-transparent px-2 py-3 text-base text-foreground outline-none placeholder:text-muted-foreground focus:ring-0"
                    />

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="mr-1 text-zinc-500 hover:text-emerald-600 active:text-emerald-600 md:hidden"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        <Filter className="h-5 w-5" />
                    </Button>

                    <Button
                        type="submit"
                        className="rounded-xl bg-emerald-600 px-4 py-6 font-semibold text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-emerald-700 active:scale-[1.02] active:bg-emerald-700 md:px-6"
                    >
                        Cari
                    </Button>
                </div>
            </form>

            <div
                className={`grid grid-cols-1 gap-4 transition-all duration-300 md:grid-cols-3 ${isFilterOpen ? 'block' : 'hidden md:grid'}`}
            >
                {/* Select Kategori */}
                <div className="flex flex-col gap-1.5">
                    <label className="ml-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <Filter className="h-3.5 w-3.5" />
                        Tahun
                    </label>
                    <Select
                        value={data.kategori}
                        onValueChange={(val) =>
                            handleFilterChange('kategori', val)
                        }
                    >
                        <SelectTrigger className="h-11! w-full rounded-xl border-zinc-200 bg-white shadow-sm focus:ring-emerald-500 dark:border-zinc-800 dark:bg-zinc-900">
                            <SelectValue placeholder="Semua Tahun" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-zinc-200 shadow-lg dark:border-zinc-800">
                            <SelectItem
                                value="semua"
                                className="cursor-pointer"
                            >
                                Semua Tahun
                            </SelectItem>
                            {kategoris.map((kategori) => (
                                <SelectItem
                                    key={kategori.id}
                                    value={kategori.slug}
                                    className="cursor-pointer"
                                >
                                    {kategori.nama}{' '}
                                    <span className="ml-1 text-xs text-muted-foreground">
                                        ({kategori.total})
                                    </span>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Date Picker Range */}
                <div className="flex flex-col gap-1.5">
                    <label className="ml-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <CalendarIcon className="h-3.5 w-3.5" />
                        Rentang Tanggal
                    </label>
                    <Popover
                        open={isCalendarOpen}
                        onOpenChange={setIsCalendarOpen}
                    >
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={'outline'}
                                className={cn(
                                    'h-11! w-full justify-start rounded-xl border-zinc-200 bg-white text-left font-normal shadow-sm hover:bg-zinc-50 focus:ring-emerald-500 active:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900',
                                    !date && 'text-muted-foreground',
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" />
                                {date?.from ? (
                                    date.to ? (
                                        <span className="truncate">
                                            {format(date.from, 'dd MMM yyyy', {
                                                locale: localeId,
                                            })}{' '}
                                            -{' '}
                                            {format(date.to, 'dd MMM yyyy', {
                                                locale: localeId,
                                            })}
                                        </span>
                                    ) : (
                                        format(date.from, 'dd MMM yyyy', {
                                            locale: localeId,
                                        })
                                    )
                                ) : (
                                    <span>Pilih Tanggal</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            className="align-center w-auto rounded-2xl border-zinc-200 bg-white p-2 shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
                            align="start"
                        >
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={handleDateSelect}
                                numberOfMonths={2}
                                locale={localeId}
                                className="rounded-xl"
                            />
                            <div className="mt-2 flex items-center justify-end gap-2 border-t pt-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={clearDateFilter}
                                    className="h-9 rounded-lg hover:bg-red-50 hover:text-red-600 active:bg-red-50 active:text-red-600"
                                >
                                    Hapus
                                </Button>
                                <Button
                                    size="sm"
                                    onClick={applyDateFilter}
                                    className="h-9 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-700"
                                >
                                    Terapkan
                                </Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>

                {/* Sort By */}
                <div className="flex flex-col gap-1.5">
                    <label className="ml-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <SortDesc className="h-3.5 w-3.5" />
                        Urutkan
                    </label>
                    <Select
                        value={data.sort}
                        onValueChange={(val) => handleFilterChange('sort', val)}
                    >
                        <SelectTrigger className="h-11! w-full rounded-xl border-zinc-200 bg-white shadow-sm focus:ring-emerald-500 dark:border-zinc-800 dark:bg-zinc-900">
                            <SelectValue placeholder="Terbaru" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-zinc-200 shadow-lg dark:border-zinc-800">
                            <SelectItem
                                value="terbaru"
                                className="cursor-pointer"
                            >
                                Terbaru
                            </SelectItem>
                            <SelectItem
                                value="terlama"
                                className="cursor-pointer"
                            >
                                Terlama
                            </SelectItem>
                            <SelectItem
                                value="terpopuler"
                                className="cursor-pointer"
                            >
                                Terpopuler
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {hasFilter && (
                <div className="z-0 mt-2 flex flex-wrap items-center gap-2 text-sm">
                    <span className="flex flex-wrap items-center gap-1.5 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-2 text-muted-foreground shadow-sm dark:border-emerald-800/30 dark:bg-emerald-900/20">
                        {searchQuery && (
                            <>
                                Pencarian:{' '}
                                <strong className="font-semibold text-emerald-700 dark:text-emerald-400">
                                    {searchQuery}
                                </strong>
                                <span className="mx-1 text-zinc-300 dark:text-zinc-700">
                                    •
                                </span>
                            </>
                        )}
                        {data.kategori && data.kategori !== 'semua' && (
                            <>
                                Tahun:{' '}
                                <strong className="max-w-37.5 truncate font-semibold text-emerald-700 dark:text-emerald-400">
                                    {kategoris.find(
                                        (k) => k.slug === data.kategori,
                                    )?.nama || data.kategori}
                                </strong>
                                <span className="mx-1 text-zinc-300 dark:text-zinc-700">
                                    •
                                </span>
                            </>
                        )}
                        {(data.from || data.to) && (
                            <>
                                Tanggal:{' '}
                                <strong className="font-semibold text-emerald-700 dark:text-emerald-400">
                                    {data.from
                                        ? format(
                                              new Date(data.from),
                                              'd MMM yyyy',
                                              { locale: localeId },
                                          )
                                        : 'Awal'}
                                    {' - '}
                                    {data.to
                                        ? format(
                                              new Date(data.to),
                                              'd MMM yyyy',
                                              { locale: localeId },
                                          )
                                        : 'Sekarang'}
                                </strong>
                                <span className="mx-1 text-zinc-300 dark:text-zinc-700">
                                    •
                                </span>
                            </>
                        )}
                        {data.sort && data.sort !== 'terbaru' && (
                            <>
                                Urutkan:{' '}
                                <strong className="font-semibold text-emerald-700 capitalize dark:text-emerald-400">
                                    {data.sort}
                                </strong>
                                <span className="mx-1 text-zinc-300 dark:text-zinc-700">
                                    •
                                </span>
                            </>
                        )}
                        Ditemukan{' '}
                        <strong className="text-emerald-700 dark:text-emerald-400">
                            {totalRows}
                        </strong>{' '}
                        buletin.
                    </span>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="ml-auto h-9 rounded-xl px-4 text-red-500 hover:bg-red-50 hover:text-red-600 active:bg-red-50 active:bg-red-950/30 active:text-red-600 md:ml-0 dark:hover:bg-red-950/30"
                        onClick={() => router.get('/buletin')}
                    >
                        <X className="mr-1.5 h-4 w-4" />
                        Reset Filter
                    </Button>
                </div>
            )}
        </div>
    );
}
