import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { MapPin, Phone } from 'lucide-react';

export default function SpotBacaCta() {
    return (
        <section className="py-16 max-w-380 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-emerald-50 px-6 py-12 text-center shadow-lg border border-emerald-100 sm:px-16"
            >
                {/* Abstract Topographic/Maps Map Texture Background */}
                <div
                    className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />

                {/* Plus/Grid Map overlay marking */}
                <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        backgroundPosition: 'center center'
                    }}
                />

                {/* Soft Gradient Layers */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-160 h-160 bg-linear-to-br from-emerald-100/50 to-teal-100/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-160 h-160 bg-linear-to-tr from-emerald-100/50 to-teal-100/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="mx-auto max-w-2xl flex flex-col gap-6 items-center relative z-10">
                    <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white ring-1 ring-emerald-100 shadow-md">
                        <MapPin className="h-10 w-10 text-emerald-600 drop-shadow-sm" />
                    </div>

                    <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
                        Lokasi Spot Baca
                    </h2>

                    <p className="mx-auto text-lg leading-relaxed text-emerald-800/80 max-w-xl">
                        Tersedia di area <span className="text-emerald-900 font-bold">Masjid Agung Al-Mukarram Amanah</span> — terbuka setiap hari selepas waktu shalat.
                    </p>

                    <div className="mt-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 h-14 rounded-full font-bold shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-600/30 text-base"
                        >
                            <Link href="/kontak" className="flex items-center justify-center">
                                <Phone className="mr-2 h-5 w-5" />
                                Hubungi Pengurus
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
