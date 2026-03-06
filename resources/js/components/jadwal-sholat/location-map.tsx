import { Map as MapIcon, Navigation } from 'lucide-react';

export default function LocationMap() {
    return (
        <div className="group relative overflow-hidden rounded-4xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] sm:p-8">
            {/* Soft Ambient Glow */}
            <div className="absolute -top-10 -left-10 z-0 h-48 w-48 rounded-full bg-blue-50 blur-[60px] transition-transform duration-700 group-hover:scale-125"></div>

            <div className="relative z-10 mb-6 flex flex-col items-start gap-4 border-b border-gray-100 pb-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner">
                        <MapIcon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-xl font-extrabold tracking-tight text-gray-900">
                            Lokasi Masjid
                        </h3>
                    </div>
                </div>

                <a
                    href="https://maps.google.com/?q=Masjid+Agung+Al-Mukarram+Kuala+Kapuas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-2 text-sm font-bold text-gray-700 shadow-sm ring-1 ring-gray-200/50 transition-colors hover:bg-gray-100 hover:text-emerald-600"
                >
                    <Navigation className="h-4 w-4" />
                    Buka di Maps
                </a>
            </div>

            <div className="group/map relative z-10 overflow-hidden rounded-3xl bg-gray-100 shadow-inner ring-1 ring-gray-200">
                {/* Temporary Overlay loader */}
                <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-gray-50/50 opacity-0 backdrop-blur-sm transition-opacity duration-1000">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
                </div>

                <iframe
                    title="Lokasi Masjid Al Mukarram"
                    src="https://maps.google.com/maps?q=Masjid+Agung+Al-Mukarram+Kuala+Kapuas&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-30 transition-all duration-700 group-hover/map:grayscale-0"
                ></iframe>
            </div>

            <div className="relative z-10 mt-6 grid gap-4 text-sm font-medium text-gray-600">
                <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4 ring-1 ring-gray-100">
                    <div className="rounded-lg bg-white p-2 text-blue-500 shadow-sm">
                        <Navigation className="h-5 w-5" />
                    </div>
                    <div>
                        <span className="block font-bold text-gray-900">
                            Alamat Lengkap
                        </span>
                        <span className="text-sm">
                            Jl. Tambun Bungai, Selat Tengah, Kec. Selat,
                            Kabupaten Kapuas, Kalimantan Tengah 73516
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
