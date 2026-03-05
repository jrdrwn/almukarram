import { BookOpen } from "lucide-react";

export default function JadwalKajianSection() {
    return (
        <section className="relative z-10 w-full bg-zinc-50 py-24 sm:py-32 dark:bg-zinc-900/20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row">
                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                                    <BookOpen className="h-4 w-4" />
                                </span>
                                <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
                                    Taman Surga
                                </span>
                            </div>
                            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                                Jadwal Kajian{' '}
                                <span className="bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent italic">
                                    & Majlis Taklim
                                </span>
                            </h2>
                        </div>
                        <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-right">
                            Hadirilah majlis-majlis ilmu di Masjid Agung
                            Al-Mukarram untuk menambah wawasan keislaman dan
                            mempererat ukhuwah bersama asatidz pilihan.
                        </p>
                    </div>

                    {/* Timeline / Grid Schedule */}
                    <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                day: 'Senin',
                                time: "Ba'da Maghrib",
                                title: 'Kajian Fiqih Ibadah Praktis',
                                speaker: 'Ust. M. Abdullah, M.Ag',
                                type: 'Umum',
                                colors: {
                                    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
                                    glow: 'bg-emerald-500/5 group-hover:bg-emerald-500/10',
                                },
                            },
                            {
                                day: 'Rabu',
                                time: "Ba'da Subuh",
                                title: "Tafsir Al-Qur'an (Jalalain)",
                                speaker: 'KH. Hasan Basri',
                                type: 'Umum',
                                colors: {
                                    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
                                    glow: 'bg-blue-500/5 group-hover:bg-blue-500/10',
                                },
                            },
                            {
                                day: 'Kamis',
                                time: '16:00 - Selesai',
                                title: 'Kajian Kemuslimahan & Sirah',
                                speaker: 'Ustadzah Hj. Fatimah',
                                type: 'Khusus Muslimah',
                                colors: {
                                    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300',
                                    glow: 'bg-rose-500/5 group-hover:bg-rose-500/10',
                                },
                            },
                            {
                                day: 'Ahad',
                                time: "Ba'da Subuh",
                                title: 'Kajian Tematik & Tanya Jawab',
                                speaker: 'Berbagai Pemateri (Terjadwal)',
                                type: 'Umum',
                                colors: {
                                    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
                                    glow: 'bg-amber-500/5 group-hover:bg-amber-500/10',
                                },
                            },
                        ].map((jadwal, idx) => (
                            <div
                                key={idx}
                                className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-zinc-50 p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8 dark:border-zinc-800/50 dark:bg-zinc-900"
                            >
                                {/* Grid Texture Background */}
                                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)] bg-size-[24px_24px] opacity-60 transition-opacity duration-500 group-hover:opacity-100 dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>

                                {/* Decorative Abstract Shape in background */}
                                <div
                                    className={`absolute -top-16 -right-16 z-0 h-40 w-40 rounded-full transition-all duration-700 group-hover:scale-150 ${jadwal.colors.glow}`}
                                ></div>

                                <div className="relative z-10 flex flex-1 flex-col">
                                    <div className="mb-6 flex min-h-12 flex-wrap items-start gap-2">
                                        <div
                                            className={`rounded-xl px-3 py-1 text-sm font-black tracking-widest shadow-sm ${jadwal.colors.badge}`}
                                        >
                                            {jadwal.day}
                                        </div>
                                        <span className="rounded-full border border-border bg-white/50 backdrop-blur-sm px-2.5 py-1.5 text-[10px] font-bold tracking-wider text-muted-foreground uppercase shadow-sm dark:bg-zinc-950/50">
                                            {jadwal.type}
                                        </span>
                                    </div>

                                    <div className="flex flex-1 flex-col justify-start">
                                        <h3 className="mb-4 text-xl leading-snug font-bold text-foreground transition-colors group-hover:text-primary">
                                            {jadwal.title}
                                        </h3>
                                        <div className="mt-auto mb-6 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="opacity-50"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            Pukul: {jadwal.time}
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 mt-auto flex min-h-20 flex-col justify-end border-t border-border/60 pt-5">
                                    <p className="mb-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                        Pemateri
                                    </p>
                                    <p className="text-base leading-tight font-bold text-foreground">
                                        {jadwal.speaker}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-sm font-medium text-muted-foreground">
                            *Jadwal di atas adalah jadwal rutin mingguan. Untuk
                            perubahan atau kajian insidental akan diumumkan
                            melalui sosial media resmi kami.
                        </p>
                    </div>
                </div>
            </section>
    );
}
