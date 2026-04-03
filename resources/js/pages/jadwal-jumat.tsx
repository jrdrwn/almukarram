import Seo from '@/components/shared/seo';
import {
    Calendar,
    CalendarDays,
    Clock,
    Home,
    Mic,
    User,
    Users,
} from 'lucide-react';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';

interface JadwalItem {
    tanggal: string;
    waktu: string;
    khatib: string;
    imam: string;
    muadzin: string;
    bilal: string;
}

interface JadwalJumatProps {
    jadwalMingguIni?: JadwalItem;
    jadwalSelanjutnya?: JadwalItem[];
}

export default function JadwalJumat({
    jadwalMingguIni,
    jadwalSelanjutnya = [],
}: JadwalJumatProps) {
    const formatTanggal = (tanggal: string) => {
        return new Date(tanggal).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    return (
        <>
            <Header />
            <Seo title="Jadwal & Petugas Jumat | Masjid Agung Al-Mukarram Amanah" />

            <PageHeader
                title="Petugas Salat Jumat"
                subtitle="Jadwal Muazin, Khatib, dan Imam Salat Jumat Masjid Agung Al-Mukarram."
                badgeText="Jadwal"
                badgeIcon={<CalendarDays className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    { label: 'Jadwal', icon: <Users className="h-4 w-4" /> },
                    { label: 'Petugas Jumat' },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <div className="mx-auto max-w-380 space-y-16 px-4 py-16 sm:px-6 lg:px-8">
                {/* Section Jadwal Pekan Ini - Hero Card */}
                {jadwalMingguIni ? (
                <div className="relative overflow-hidden rounded-[2.25rem] bg-emerald-950 px-5 py-10 shadow-2xl sm:rounded-[3rem] sm:px-16 sm:py-20 lg:p-20">
                    {/* Background Decorative patterns */}
                    <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-emerald-800/30 blur-[60px]"></div>
                    <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-emerald-600/20 blur-[80px]"></div>

                    <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
                        {/* Left Text Detail */}
                        <div className="max-w-xl">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-4 py-1.5 text-xs font-bold tracking-widest text-emerald-300 uppercase shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                </span>
                                Jumat Pekan Ini
                            </div>
                            <h2 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
                                Jadwal & Petugas <br />{' '}
                                <span className="font-light text-emerald-200 italic">
                                    Sholat Jumat
                                </span>
                            </h2>
                            <p className="text-lg leading-relaxed text-emerald-100/80">
                                Mari bersama memakmurkan Sholat Jumat berjamaah
                                di Masjid Agung Al-Mukarram. Jangan lupa datang
                                lebih awal untuk meraih fadhilah shaf pertama
                                dan mendengarkan khutbah dengan saksama.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 shadow-inner backdrop-blur-md transition-transform hover:-translate-y-1 active:-translate-y-1 sm:px-6 sm:py-5">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                                        <Calendar className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-widest text-emerald-200/60 uppercase">
                                            Tanggal
                                        </p>
                                        <p className="mt-0.5 text-base font-bold text-white">
                                            {formatTanggal(jadwalMingguIni.tanggal)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 shadow-inner backdrop-blur-md transition-transform hover:-translate-y-1 active:-translate-y-1 sm:px-6 sm:py-5">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-widest text-emerald-200/60 uppercase">
                                            Waktu
                                        </p>
                                        <p className="mt-0.5 text-base font-bold text-white">
                                            {jadwalMingguIni.waktu}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Grid Petugas */}
                        <div className="grid w-full max-w-lg grid-cols-1 gap-4 sm:grid-cols-2 lg:w-1/2 lg:max-w-none">
                            {[
                                {
                                    role: 'Khatib',
                                    name: jadwalMingguIni.khatib,
                                    icon: (
                                        <Mic className="h-5 w-5 opacity-70" />
                                    ),
                                },
                                {
                                    role: 'Imam',
                                    name: jadwalMingguIni.imam,
                                    icon: (
                                        <User className="h-5 w-5 opacity-70" />
                                    ),
                                },
                                {
                                    role: 'Muadzin',
                                    name: jadwalMingguIni.muadzin,
                                    icon: (
                                        <User className="h-5 w-5 opacity-70" />
                                    ),
                                },
                                {
                                    role: 'Bilal',
                                    name: jadwalMingguIni.bilal,
                                    icon: (
                                        <User className="h-5 w-5 opacity-70" />
                                    ),
                                },
                            ].map((petugas, idx) => (
                                <div
                                    key={idx}
                                    className="group relative flex flex-col justify-center rounded-3xl border border-emerald-800/50 bg-emerald-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 hover:bg-emerald-800/70 active:bg-emerald-800/70 hover:shadow-lg active:shadow-lg hover:shadow-emerald-900/20 active:shadow-emerald-900/20"
                                >
                                    <div className="mb-2 flex items-start justify-between">
                                        <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                                            {petugas.role}
                                        </p>
                                        <div className="text-emerald-500 transition-colors group-hover:text-emerald-300 group-active:text-emerald-300">
                                            {petugas.icon}
                                        </div>
                                    </div>
                                    <h4 className="mt-1 text-lg leading-snug font-bold text-white transition-colors group-hover:text-emerald-50 group-active:text-emerald-50">
                                        {petugas.name}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                ) : (
                    <div className="rounded-3xl border border-dashed border-emerald-300 bg-emerald-50/50 p-12 text-center dark:border-emerald-800 dark:bg-emerald-950/30">
                        <CalendarDays className="mx-auto mb-4 h-12 w-12 text-emerald-400" />
                        <p className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">Belum ada jadwal Jumat pekan ini.</p>
                    </div>
                )}

                {/* Section Jadwal Selanjutnya */}
                {jadwalSelanjutnya.length > 0 && (
                <div>
                    <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div>
                            <h3 className="flex items-center gap-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                                <CalendarDays className="h-8 w-8 text-emerald-600" />
                                Jadwal Jumat Selanjutnya
                            </h3>
                            <p className="mt-2 text-zinc-500 md:ml-11 dark:text-zinc-400">
                                Rincian daftar khatib, imam, dan petugas untuk
                                beberapa pekan ke depan.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {jadwalSelanjutnya.map((schedule, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl active:shadow-xl sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
                            >
                                {/* Top Highlight Accent */}
                                <div className="absolute top-0 left-0 h-1.5 w-full origin-left scale-x-0 transform bg-emerald-500 transition-transform duration-500 ease-out group-hover:scale-x-100 group-active:scale-x-100"></div>

                                <div className="mb-6 flex items-center gap-4 border-b border-zinc-100 pb-6 dark:border-zinc-800">
                                    <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-600 shadow-inner dark:bg-emerald-900/30 dark:text-emerald-400">
                                        <Calendar className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                                            {formatTanggal(schedule.tanggal)}
                                        </p>
                                        <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-500">
                                            <Clock className="h-4 w-4" />{' '}
                                            {schedule.waktu}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative z-10 space-y-5">
                                    <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4 transition-colors group-hover:border-emerald-100 group-active:border-emerald-100 dark:border-zinc-800 dark:bg-zinc-800/50 dark:group-hover:border-emerald-900/50 group-active:border-emerald-900/50">
                                        <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
                                            <Mic className="h-3.5 w-3.5" />{' '}
                                            Khatib
                                        </p>
                                        <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200">
                                            {schedule.khatib}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="mb-1 text-[11px] font-bold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
                                                Imam
                                            </p>
                                            <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                                                {schedule.imam}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="mb-1 text-[11px] font-bold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
                                                Muadzin & Bilal
                                            </p>
                                            <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                                                {schedule.muadzin}
                                            </p>
                                            <p className="mt-0.5 text-xs text-zinc-500">
                                                {schedule.bilal}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                )}
            </div>

            <Footer />
        </>
    );
}

