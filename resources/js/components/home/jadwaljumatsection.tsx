import type { JadwalJumatData } from '@/types/home';
import { Calendar, CalendarDays } from 'lucide-react';

export default function JadwalJumatSection({ jadwalJumat }: { jadwalJumat: JadwalJumatData | null }) {
    if (!jadwalJumat) return null;

    return (
        <section className="relative z-10 w-full py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-[3rem] bg-emerald-950 px-6 py-16 shadow-2xl sm:px-16 sm:py-20 lg:p-20">
                    {/* Background Decorative patterns */}
                    <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-emerald-800/30 blur-[60px]"></div>
                    <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-emerald-600/20 blur-[80px]"></div>

                    <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
                        {/* Left Text Detail */}
                        <div className="max-w-xl">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-emerald-300 uppercase">
                                <CalendarDays className="h-4 w-4" />
                                Jumat Pekan Ini
                            </div>
                            <h2 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
                                Jadwal & Petugas <br />{' '}
                                <span className="font-light text-emerald-200 italic">
                                    Sholat Jumat
                                </span>
                            </h2>
                            <p className="text-lg leading-relaxed text-emerald-100/70">
                                Mari bersama memakmurkan Sholat Jumat berjamaah
                                di Masjid Agung Al-Mukarram. Jangan lupa datang
                                lebih awal untuk meraih fadhilah shaf pertama
                                dan mendengarkan khutbah dengan saksama.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                                        <Calendar className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium tracking-widest text-emerald-200/50 uppercase">
                                            Tanggal
                                        </p>
                                        <p className="text-sm font-bold text-white">
                                            {new Date(jadwalJumat.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
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
                                            className="lucide lucide-clock"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium tracking-widest text-emerald-200/50 uppercase">
                                            Waktu
                                        </p>
                                        <p className="text-sm font-bold text-white">
                                            {jadwalJumat.waktu} WIB
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
                                    name: jadwalJumat.khatib,
                                },
                                {
                                    role: 'Imam',
                                    name: jadwalJumat.imam,
                                },
                                {
                                    role: 'Muadzin',
                                    name: jadwalJumat.muadzin,
                                },
                                {
                                    role: 'Bilal',
                                    name: jadwalJumat.bilal,
                                },
                            ].map((petugas, idx) => (
                                <div
                                    key={idx}
                                    className="group flex flex-col justify-center rounded-3xl border border-emerald-800/50 bg-emerald-900/40 p-6 backdrop-blur-sm transition-colors hover:bg-emerald-800/60"
                                >
                                    <p className="mb-1 text-xs font-bold tracking-widest text-emerald-400 uppercase">
                                        {petugas.role}
                                    </p>
                                    <h4 className="text-lg leading-tight font-bold text-white transition-colors group-hover:text-emerald-100">
                                        {petugas.name}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
