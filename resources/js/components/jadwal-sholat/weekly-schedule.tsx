import { CalendarDays, CheckCircle2 } from 'lucide-react';

export default function WeeklySchedule({
    jadwal7Hari,
}: {
    jadwal7Hari: Record<string, any>;
}) {
    const today = new Date().toISOString().split('T')[0];

    const hariId: Record<string, string> = {
        Sunday: 'Minggu',
        Monday: 'Senin',
        Tuesday: 'Selasa',
        Wednesday: 'Rabu',
        Thursday: 'Kamis',
        Friday: 'Jumat',
        Saturday: 'Sabtu',
    };

    return (
        <div className="group hover:shadow-[0 relative overflow-hidden rounded-4xl border border-gray-100 bg-white px-6 py-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all active:shadow-[0_8px_30px_rgb_8px_30px_rgb(0,0,0,0.08)] sm:p-10">
            {/* Ambient Background Blur */}
            <div className="absolute -top-20 -right-20 z-0 h-75 w-75 rounded-full bg-emerald-50 blur-[80px] transition-transform duration-700 group-hover:scale-110 group-active:scale-110"></div>

            <div className="relative z-10 mb-8 flex flex-col items-start justify-between gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-emerald-50 text-emerald-600 shadow-inner">
                        <CalendarDays className="h-7 w-7" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
                            Jadwal 7 Hari ke Depan
                        </h3>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                            Prakiraan waktu sholat untuk wilayah Kab. Kapuas
                        </p>
                    </div>
                </div>
            </div>

            <div className="scrollbar-hide relative z-10 overflow-x-auto">
                <div className="min-w-150 pb-4">
                    <div className="grid grid-cols-6 gap-2 px-2 pb-4 text-[0.7rem] font-bold tracking-[0.15em] text-gray-400 uppercase">
                        <div className="col-span-1 pl-4">Hari / Tanggal</div>
                        <div className="text-center">Subuh</div>
                        <div className="text-center">Dzuhur</div>
                        <div className="text-center">Ashar</div>
                        <div className="text-center">Maghrib</div>
                        <div className="text-center">Isya</div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        {Object.entries(jadwal7Hari).map(([tgl, j]: any) => {
                            const dateObj = new Date(tgl);
                            const dayNameEn = dateObj.toLocaleDateString(
                                'id-ID',
                                { weekday: 'long' },
                            );
                            const dayName =
                                hariId[
                                    dateObj.toLocaleDateString('en-US', {
                                        weekday: 'long',
                                    })
                                ] || dayNameEn;
                            const dateStr = dateObj.toLocaleDateString(
                                'id-ID',
                                { day: '2-digit', month: 'short' },
                            );
                            const isToday = tgl === today;

                            return (
                                <div
                                    key={tgl}
                                    className={`group/row grid grid-cols-6 items-center gap-2 rounded-[1.25rem] p-4 text-sm transition-all duration-300 ${
                                        isToday
                                            ? 'bg-emerald-500 text-white shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)]'
                                            : 'border border-gray-100 bg-white hover:bg-gray-50 active:bg-gray-50'
                                    }`}
                                >
                                    <div className="col-span-1 flex items-center gap-4 pl-2">
                                        {isToday ? (
                                            <CheckCircle2 className="h-5 w-5 text-white/90 drop-shadow-sm" />
                                        ) : (
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-colors group-hover/row:bg-emerald-400 group-active/row:bg-emerald-400"></div>
                                        )}
                                        <div>
                                            <div
                                                className={`font-bold tracking-tight ${isToday ? 'text-white' : 'text-gray-900'}`}
                                            >
                                                {dayName}
                                            </div>
                                            <div
                                                className={`text-xs font-medium ${isToday ? 'text-white/80' : 'text-gray-500'}`}
                                            >
                                                {dateStr}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`text-center font-mono text-base font-bold ${!isToday && 'text-gray-700'}`}
                                    >
                                        {j.subuh || '—'}
                                    </div>
                                    <div
                                        className={`text-center font-mono text-base font-bold ${!isToday && 'text-gray-700'}`}
                                    >
                                        {j.dzuhur || '—'}
                                    </div>
                                    <div
                                        className={`text-center font-mono text-base font-bold ${!isToday && 'text-gray-700'}`}
                                    >
                                        {j.ashar || '—'}
                                    </div>
                                    <div
                                        className={`text-center font-mono text-base font-bold ${!isToday && 'text-gray-700'}`}
                                    >
                                        {j.maghrib || '—'}
                                    </div>
                                    <div
                                        className={`text-center font-mono text-base font-bold ${!isToday && 'text-gray-700'}`}
                                    >
                                        {j.isya || '—'}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
