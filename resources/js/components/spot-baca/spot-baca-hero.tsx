import { Button } from '@/components/ui/button';
import { BookOpen, ChevronRight, QrCode, Quote } from 'lucide-react';

export default function SpotBacaHero() {
    return (
        <section className="relative overflow-hidden bg-background py-10 sm:py-16">
            {/* Elegant Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent dark:from-emerald-900/20" />

            <div className="relative z-10 mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                    {/* Left: Image with Floating Effect */}
                    <div className="group relative mx-auto w-full max-w-full lg:col-span-5">
                        <div className="absolute -inset-4 rounded-[3rem] bg-linear-to-r from-emerald-500/20 to-teal-500/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-70" />
                        <div className="relative rounded-[2.5rem] bg-white/50 p-3 shadow-xl ring-1 ring-emerald-500/10 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02] dark:bg-zinc-900/50">
                            <img
                                src="/images/Scan-QR-Code.png"
                                alt="Scan QR Akses Spot Baca"
                                className="h-auto w-full rounded-4xl object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Premium Content Layout */}
                    <div className="flex flex-col gap-5 lg:col-span-7">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-500/5 dark:text-emerald-400">
                                <BookOpen className="h-4 w-4" />
                                <span>Pojok Baca Elektronik</span>
                            </div>

                            <h2 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                                <span className="bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                                    Spot
                                </span>{' '}
                                Baca
                            </h2>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="h-1.5 w-24 rounded-full bg-linear-to-r from-emerald-500 to-teal-400" />
                                <div className="h-1.5 w-4 rounded-full bg-teal-400/40" />
                            </div>
                        </div>

                        <div className="space-y-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            <p className="font-bold text-foreground/90">
                                Mari manfaatkan waktu luang dengan hal yang
                                bermanfaat!
                            </p>
                            <p>
                                Sembari menunggu waktu shalat atau selepas
                                ibadah, sempatkan diri untuk membaca di Spot
                                Baca yang tersedia di area Masjid Agung
                                Al-Mukarram Amanah.
                            </p>
                            <p>
                                Berbagai bacaan islami dan pengetahuan umum
                                telah disediakan untuk menambah wawasan. Membaca
                                adalah bagian dari menuntut ilmu, dan menuntut
                                ilmu adalah ibadah yang mulia.
                            </p>

                            {/* Modern & Compact Quote Box */}
                            <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-800/30 dark:bg-emerald-900/20">
                                <Quote className="h-6 w-6 shrink-0 rotate-180 text-emerald-500/40" />
                                <p className="text-base font-semibold text-emerald-900 italic dark:text-emerald-300">
                                    "Masjid bukan hanya tempat ibadah, tapi juga
                                    pusat peradaban ilmu."
                                </p>
                            </div>
                        </div>

                        <div className="mt-2 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-4 sm:flex-row">
                            <p className="flex items-center gap-3 font-semibold text-emerald-600 dark:text-emerald-400">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                                    <BookOpen className="h-5 w-5" />
                                </span>
                                Yuk, berkunjung ke Spot Baca!
                            </p>

                            <Button
                                asChild
                                size="lg"
                                className="h-12 w-full rounded-full bg-emerald-600 px-8 font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-700 sm:w-auto"
                            >
                                <a
                                    href="https://spot-api.moco.co.id/agent/corner/s/KjM8d"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center"
                                >
                                    <QrCode className="mr-2 h-5 w-5" />
                                    Akses Spot Baca
                                    <ChevronRight className="ml-1 h-4 w-4 opacity-80" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
