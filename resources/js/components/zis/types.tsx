import { Building, Coins, HeartHandshake } from 'lucide-react';

export function Types() {
    const types = [
        {
            icon: Building,
            title: 'Waqaf',
            color: 'text-emerald-500',
            bg: 'bg-emerald-500/10',
            border: 'hover:border-emerald-300 hover:shadow-emerald-500/20',
            desc: 'Harta yang diwaqafkan tidak boleh dijual, dihibahkan, atau diwariskan. Pahalanya terus mengalir selama manfaatnya ada. Waqaf dapat berupa tanah, bangunan, atau uang tunai (waqaf produktif).',
            delay: '0s',
        },
        {
            icon: Coins,
            title: 'Infaq',
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            border: 'hover:border-green-300 hover:shadow-green-500/20',
            desc: 'Mengeluarkan sebagian harta untuk kepentingan yang diridhai Allah SWT tanpa batasan nisab. Infaq dapat diberikan kapan saja untuk pembangunan masjid, operasional, dan kegiatan dakwah.',
            delay: '0.1s',
        },
        {
            icon: HeartHandshake,
            title: 'Shadaqah',
            color: 'text-teal-500',
            bg: 'bg-teal-500/10',
            border: 'hover:border-teal-300 hover:shadow-teal-500/20',
            desc: 'Pemberian yang didasari keikhlasan semata-mata karena Allah SWT. Shadaqah tidak terbatas pada harta, namun juga tenaga, ilmu, senyum, dan segala bentuk kebaikan lainnya.',
            delay: '0.2s',
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 reveal fade-up">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Jenis Penyaluran</h2>
                    <div className="mt-4 flex justify-center gap-1.5">
                        <div className="h-1.5 w-10 bg-emerald-500 rounded-full"></div>
                        <div className="h-1.5 w-10 bg-green-400 rounded-full"></div>
                        <div className="h-1.5 w-10 bg-teal-400 rounded-full"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pb-8">
                    {types.map((type, index) => (
                        <div
                            key={index}
                            className={`reveal fade-up h-full p-8 md:p-10 bg-white rounded-4xl border border-slate-100 transition-all duration-500 group relative overflow-hidden ${type.border} ${
                                index === 1
                                ? 'lg:-translate-y-4 hover:-translate-y-6 shadow-md hover:shadow-2xl'
                                : 'lg:translate-y-4 hover:translate-y-2 shadow-sm hover:shadow-2xl'
                            }`}
                            style={{ transitionDelay: type.delay }}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-150 transition-transform duration-700 pointer-events-none">
                                <type.icon className={`h-48 w-48 ${type.color}`} />
                            </div>

                            <div className={`mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl ${type.bg} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ring-4 ring-white shadow-inner relative z-10`}>
                                <type.icon className={`h-10 w-10 ${type.color} drop-shadow-md`} />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{type.title}</h3>
                            <p className="text-slate-600 leading-relaxed relative z-10">
                                {type.desc}
                            </p>

                            <div className={`mt-8 pt-6 border-t border-slate-100 relative z-10 flex items-center gap-2 text-sm font-semibold ${type.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 -translate-x-2 group-hover:translate-x-0`}>
                                Pelajari lebih lanjut &rarr;
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
