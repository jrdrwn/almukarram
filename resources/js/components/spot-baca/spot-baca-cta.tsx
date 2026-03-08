import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { MapPin, Phone } from 'lucide-react';

export default function SpotBacaCta() {
    return (
        <section className="mx-auto max-w-380 px-4 py-16 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50 px-6 py-12 text-center shadow-lg sm:px-16">
                {/* Abstract Topographic/Maps Map Texture Background */}
                <div
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04] mix-blend-multiply"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />

                {/* Plus/Grid Map overlay marking */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: `linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        backgroundPosition: 'center center',
                    }}
                />

                {/* Soft Gradient Layers */}
                <div className="pointer-events-none absolute top-0 right-0 h-160 w-160 translate-x-1/4 -translate-y-12 rounded-full bg-linear-to-br from-emerald-100/50 to-teal-100/20 blur-[80px]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-160 w-160 -translate-x-1/4 translate-y-1/4 rounded-full bg-linear-to-tr from-emerald-100/50 to-teal-100/10 blur-[80px]" />

                <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6">
                    <div className="inline-flex items-center justify-center rounded-2xl bg-white p-4 shadow-md ring-1 ring-emerald-100">
                        <MapPin className="h-10 w-10 text-emerald-600 drop-shadow-sm" />
                    </div>

                    <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
                        Lokasi Spot Baca
                    </h2>

                    <p className="mx-auto max-w-xl text-lg leading-relaxed text-emerald-800/80">
                        Tersedia di area{' '}
                        <span className="font-bold text-emerald-900">
                            Masjid Agung Al-Mukarram Amanah
                        </span>{' '}
                        — terbuka setiap hari selepas waktu shalat.
                    </p>

                    <div className="mt-4">
                        <Button
                            asChild
                            size="lg"
                            className="h-14 rounded-full bg-emerald-600 px-8 text-base font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30 active:-translate-y-1 active:bg-emerald-700 active:shadow-xl active:shadow-emerald-600/30"
                        >
                            <Link
                                href="/kontak"
                                className="flex items-center justify-center"
                            >
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
