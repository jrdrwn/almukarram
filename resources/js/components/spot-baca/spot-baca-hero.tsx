import { Button } from '@/components/ui/button';
import { BookOpen, ChevronRight, QrCode, Quote } from 'lucide-react';

export default function SpotBacaHero() {
    return (
        <section className="relative overflow-hidden bg-background py-10 sm:py-16">
            {/* Elegant Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent dark:from-emerald-900/20" />

            <div className="max-w-380 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left: Image with Floating Effect */}
                    <div className="lg:col-span-5 relative group mx-auto w-full max-w-full">
                        <div className="absolute -inset-4 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700" />
                        <div className="relative rounded-[2.5rem] bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-3 ring-1 ring-emerald-500/10 shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                            <img
                                src="/images/Scan-QR-Code.png"
                                alt="Scan QR Akses Spot Baca"
                                className="w-full h-auto object-cover rounded-4xl"
                            />
                        </div>
                    </div>

                    {/* Right: Premium Content Layout */}
                    <div className="lg:col-span-7 flex flex-col gap-5">
                        <div>
                            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-4 shadow-sm shadow-emerald-500/5">
                                <BookOpen className="h-4 w-4" />
                                <span>Pojok Baca Elektronik</span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">Spot</span> Baca
                            </h2>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="h-1.5 w-24 bg-linear-to-r from-emerald-500 to-teal-400 rounded-full" />
                                <div className="h-1.5 w-4 bg-teal-400/40 rounded-full" />
                            </div>
                        </div>

                        <div className="space-y-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
                            <p className="font-bold text-foreground/90">
                                Mari manfaatkan waktu luang dengan hal yang bermanfaat!
                            </p>
                            <p>
                                Sembari menunggu waktu shalat atau selepas ibadah, sempatkan diri untuk membaca di
                                Spot Baca yang tersedia di area Masjid Agung Al-Mukarram Amanah.
                            </p>
                            <p>
                                Berbagai bacaan islami dan pengetahuan umum telah disediakan untuk menambah
                                wawasan. Membaca adalah bagian dari menuntut ilmu, dan menuntut
                                ilmu adalah ibadah yang mulia.
                            </p>

                            {/* Modern & Compact Quote Box */}
                            <div className="mt-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-100 dark:border-emerald-800/30 flex items-start gap-3">
                                <Quote className="h-6 w-6 text-emerald-500/40 shrink-0 rotate-180" />
                                <p className="text-base font-semibold italic text-emerald-900 dark:text-emerald-300">
                                    "Masjid bukan hanya tempat ibadah, tapi juga pusat peradaban ilmu."
                                </p>
                            </div>
                        </div>

                        <div className="pt-4 mt-2 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400">
                                    <BookOpen className="h-5 w-5" />
                                </span>
                                Yuk, berkunjung ke Spot Baca!
                            </p>

                            <Button
                                asChild
                                size="lg"
                                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium h-12 px-8 shadow-md transition-all duration-300 hover:scale-[1.02]"
                            >
                                <a href="https://spot-api.moco.co.id/agent/corner/s/KjM8d" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
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
