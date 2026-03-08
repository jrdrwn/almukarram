import {
    BookOpen,
    Clock,
    Compass,
    Database,
    Info,
    Landmark,
    MapPin,
    Sunrise,
    Users,
} from 'lucide-react';

export default function InfoSection() {
    return (
        <div className="group hover:shadow-[0 relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all active:shadow-[0_8px_30px_rgb_8px_30px_rgb(0,0,0,0.08)] sm:p-10">
            {/* Soft Ambient Backgrounds */}
            <div className="absolute -top-20 -left-20 z-0 h-64 w-64 rounded-full bg-emerald-50/50 blur-[80px] transition-transform duration-1000 group-hover:scale-125 group-active:scale-125" />
            <div className="absolute -right-20 -bottom-20 z-0 h-64 w-64 rounded-full bg-teal-50/50 blur-[80px]" />

            <div className="relative z-20 flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">
                        <Info className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-extrabold tracking-tight text-gray-900">
                        Informasi Jadwal
                    </h3>
                </div>

                {/* Content */}
                <div className="mt-2 grid gap-6 text-sm text-gray-600 sm:grid-cols-2">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4">
                        <div className="group/item flex items-center gap-4 rounded-2xl bg-gray-50/50 p-4 ring-1 ring-gray-100/50 transition-colors hover:bg-emerald-50/50 active:bg-emerald-50/50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-500 shadow-sm">
                                <MapPin className="h-4 w-4" />
                            </div>
                            <div className="flex items-center">
                                <span className="block leading-relaxed text-gray-500">
                                    Berlaku untuk{' '}
                                    <strong className="text-gray-900">
                                        Kab. Kapuas, Kalimantan Tengah
                                    </strong>{' '}
                                    (WIB)
                                </span>
                            </div>
                        </div>

                        <div className="group/item flex items-center gap-4 rounded-2xl bg-gray-50/50 p-4 ring-1 ring-gray-100/50 transition-colors hover:bg-emerald-50/50 active:bg-emerald-50/50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-500 shadow-sm">
                                <Compass className="h-4 w-4" />
                            </div>
                            <div className="flex items-center">
                                <span className="block leading-relaxed text-gray-500">
                                    Koordinat:{' '}
                                    <strong className="text-gray-900">
                                        -2.9206° S, 114.2939° E
                                    </strong>
                                </span>
                            </div>
                        </div>

                        <div className="group/item flex items-center gap-4 rounded-2xl bg-gray-50/50 p-4 ring-1 ring-gray-100/50 transition-colors hover:bg-emerald-50/50 active:bg-emerald-50/50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-500 shadow-sm">
                                <Landmark className="h-4 w-4" />
                            </div>
                            <div className="flex items-center">
                                <span className="block leading-relaxed text-gray-500">
                                    Metode:{' '}
                                    <strong className="text-gray-900">
                                        Kementerian Agama RI
                                    </strong>
                                </span>
                            </div>
                        </div>

                        <div className="group/item flex items-center gap-4 rounded-2xl bg-gray-50/50 p-4 ring-1 ring-gray-100/50 transition-colors hover:bg-emerald-50/50 active:bg-emerald-50/50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-500 shadow-sm">
                                <Sunrise className="h-4 w-4" />
                            </div>
                            <div className="flex items-center">
                                <span className="block leading-relaxed text-gray-500">
                                    Dhuha = Terbit + 17 menit (sudut matahari
                                    ~7°)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-4">
                        <div className="group/item flex items-center gap-4 rounded-2xl bg-gray-50/50 p-4 ring-1 ring-gray-100/50 transition-colors hover:bg-emerald-50/50 active:bg-emerald-50/50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-500 shadow-sm">
                                <Database className="h-4 w-4" />
                            </div>
                            <div className="flex items-center">
                                <span className="block leading-relaxed text-gray-500">
                                    Data real-time dari{' '}
                                    <strong className="text-gray-900">
                                        Aladhan API
                                    </strong>
                                    , di-cache harian
                                </span>
                            </div>
                        </div>

                        <div className="group/item flex items-center gap-4 rounded-2xl bg-gray-50/50 p-4 ring-1 ring-gray-100/50 transition-colors hover:bg-emerald-50/50 active:bg-emerald-50/50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-500 shadow-sm">
                                <Clock className="h-4 w-4" />
                            </div>
                            <div className="flex items-center">
                                <span className="block leading-relaxed text-gray-500">
                                    Tiba di masjid{' '}
                                    <strong className="text-gray-900">
                                        5–10 menit
                                    </strong>{' '}
                                    sebelum azan
                                </span>
                            </div>
                        </div>

                        <div className="group/item flex items-center gap-4 rounded-2xl bg-gray-50/50 p-4 ring-1 ring-gray-100/50 transition-colors hover:bg-emerald-50/50 active:bg-emerald-50/50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-500 shadow-sm">
                                <Users className="h-4 w-4" />
                            </div>
                            <div className="flex items-center">
                                <span className="block leading-relaxed text-gray-500">
                                    Sholat Jum'at pukul{' '}
                                    <strong className="text-gray-900">
                                        12:00 WIB
                                    </strong>
                                </span>
                            </div>
                        </div>

                        <div className="group/item flex items-center gap-4 rounded-2xl bg-gray-50/50 p-4 ring-1 ring-gray-100/50 transition-colors hover:bg-emerald-50/50 active:bg-emerald-50/50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-500 shadow-sm">
                                <BookOpen className="h-4 w-4" />
                            </div>
                            <div className="flex items-center">
                                <span className="block leading-relaxed text-gray-500">
                                    Kajian rutin setiap{' '}
                                    <strong className="text-gray-900">
                                        Malam Sabtu
                                    </strong>{' '}
                                    ba'da Maghrib
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
