import { Moon, Star, Sun, Sunrise, Sunset } from "lucide-react";

export default function TomorrowSchedule({
    jadwalBesok,
}: {
    jadwalBesok: Record<string, string> | null;
}) {
    if (!jadwalBesok) return null;

    const cards = [
        { name: "Subuh", time: jadwalBesok.subuh, icon: Sunrise },
        { name: "Dzuhur", time: jadwalBesok.dzuhur, icon: Sun },
        { name: "Ashar", time: jadwalBesok.ashar, icon: Sun },
        { name: "Maghrib", time: jadwalBesok.maghrib, icon: Sunset },
        { name: "Isya", time: jadwalBesok.isya, icon: Moon },
    ];

    return (
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] sm:p-10">
            {/* Light ambient blur */}
            <div className="absolute right-0 top-0 z-0 h-64 w-64 rounded-full bg-blue-50/60 blur-[80px] transition-transform duration-1000 group-hover:scale-150"></div>

            <div className="relative z-10 mb-8 flex flex-col items-start gap-4 border-b border-gray-100 pb-6">
                <div className="flex w-full items-center justify-between">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-blue-50 text-blue-600 shadow-inner">
                        <Star className="h-7 w-7" />
                    </div>
                    <div className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600 ring-1 ring-blue-100">
                        {jadwalBesok.tanggal || "Esok Hari"}
                    </div>
                </div>
                <div className="mt-2">
                    <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
                        Persiapan Esok
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gray-500">
                        Jadwal sholat untuk wilayah Kab. Kapuas
                    </p>
                </div>
            </div>

            <div className="relative z-10 flex flex-col gap-3">
                {cards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                        <div key={i} className="group/card flex items-center justify-between rounded-[1.25rem] bg-gray-50/60 p-4 transition-all duration-300 hover:bg-blue-50 border border-transparent hover:border-blue-100">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-500 shadow-sm transition-transform duration-300 group-hover/card:scale-110">
                                    <Icon className="h-6 w-6" strokeWidth={2} />
                                </div>
                                <div className="text-sm font-bold uppercase tracking-widest text-gray-600 group-hover/card:text-blue-700">
                                    {card.name}
                                </div>
                            </div>
                            <div className="text-xl font-black tracking-tight text-gray-900 group-hover/card:text-blue-700">
                                {card.time || "—"}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
