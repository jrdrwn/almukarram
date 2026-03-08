import { Building, Coins, HeartHandshake } from 'lucide-react';

export function Types() {
    const types = [
        {
            icon: Building,
            title: 'Waqaf',
            color: 'text-emerald-500',
            bg: 'bg-emerald-500/10',
            border: 'hover:border-emerald-300 active:border-emerald-300 hover:shadow-emerald-500/20 active:shadow-emerald-500/20',
            desc: 'Harta yang diwaqafkan tidak boleh dijual, dihibahkan, atau diwariskan. Pahalanya terus mengalir selama manfaatnya ada. Waqaf dapat berupa tanah, bangunan, atau uang tunai (waqaf produktif).',
            delay: '0s',
        },
        {
            icon: Coins,
            title: 'Infaq',
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            border: 'hover:border-green-300 active:border-green-300 hover:shadow-green-500/20 active:shadow-green-500/20',
            desc: 'Mengeluarkan sebagian harta untuk kepentingan yang diridhai Allah SWT tanpa batasan nisab. Infaq dapat diberikan kapan saja untuk pembangunan masjid, operasional, dan kegiatan dakwah.',
            delay: '0.1s',
        },
        {
            icon: HeartHandshake,
            title: 'Shadaqah',
            color: 'text-teal-500',
            bg: 'bg-teal-500/10',
            border: 'hover:border-teal-300 active:border-teal-300 hover:shadow-teal-500/20 active:shadow-teal-500/20',
            desc: 'Pemberian yang didasari keikhlasan semata-mata karena Allah SWT. Shadaqah tidak terbatas pada harta, namun juga tenaga, ilmu, senyum, dan segala bentuk kebaikan lainnya.',
            delay: '0.2s',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white py-24">
            <div className="relative z-10 mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="reveal fade-up mx-auto mb-16 max-w-2xl text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Jenis Penyaluran
                    </h2>
                    <div className="mt-4 flex justify-center gap-1.5">
                        <div className="h-1.5 w-10 rounded-full bg-emerald-500"></div>
                        <div className="h-1.5 w-10 rounded-full bg-green-400"></div>
                        <div className="h-1.5 w-10 rounded-full bg-teal-400"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-2 lg:grid-cols-3">
                    {types.map((type, index) => (
                        <div
                            key={index}
                            className={`reveal fade-up group relative h-full overflow-hidden rounded-4xl border border-slate-100 bg-white p-8 transition-all duration-500 md:p-10 ${type.border} ${
                                index === 1
                                    ? 'shadow-md hover:-translate-y-6 hover:shadow-2xl active:-translate-y-6 active:shadow-2xl lg:-translate-y-4'
                                    : 'shadow-sm hover:translate-y-2 hover:shadow-2xl active:translate-y-2 active:shadow-2xl lg:translate-y-4'
                            }`}
                            style={{ transitionDelay: type.delay }}
                        >
                            <div className="pointer-events-none absolute top-0 right-0 p-8 opacity-5 transition-transform duration-700 group-hover:scale-150 group-active:scale-150">
                                <type.icon
                                    className={`h-48 w-48 ${type.color}`}
                                />
                            </div>

                            <div
                                className={`mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl ${type.bg} relative z-10 shadow-inner ring-4 ring-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-active:scale-110 group-active:rotate-6`}
                            >
                                <type.icon
                                    className={`h-10 w-10 ${type.color} drop-shadow-md`}
                                />
                            </div>

                            <h3 className="relative z-10 mb-4 text-2xl font-bold text-slate-900">
                                {type.title}
                            </h3>
                            <p className="relative z-10 leading-relaxed text-slate-600">
                                {type.desc}
                            </p>

                            <div
                                className={`relative z-10 mt-8 flex items-center gap-2 border-t border-slate-100 pt-6 text-sm font-semibold ${type.color} -translate-x-2 opacity-0 transition-opacity delay-100 duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-active:translate-x-0 group-active:opacity-100`}
                            >
                                Pelajari lebih lanjut &rarr;
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
