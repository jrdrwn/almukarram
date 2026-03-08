import { Link } from '@inertiajs/react';
import {
    BookOpen,
    Briefcase,
    Building,
    Coins,
    Fish,
    Gem,
    HandCoins,
    HandHeart,
    Home,
    Leaf,
    Moon,
    Mountain,
    PawPrint,
    Store,
    TrendingUp,
} from 'lucide-react';

const infoZakat = [
    {
        icon: Moon,
        nama: 'Zakat Fitrah',
        desc: 'Wajib setiap Muslim menjelang Idul Fitri. Besaran 2,5 kg beras atau senilai harganya per jiwa.',
    },
    {
        icon: Coins,
        nama: 'Zakat Maal',
        desc: 'Zakat atas harta yang telah memenuhi nisab (85 gr emas) dan haul (1 tahun). Kadar 2,5%.',
    },
    {
        icon: Briefcase,
        nama: 'Zakat Profesi',
        desc: 'Wajib atas penghasilan rutin dari pekerjaan/profesi. Nisab setara 85 gr emas/bulan. Kadar 2,5%.',
    },
    {
        icon: Gem,
        nama: 'Zakat Emas & Perak',
        desc: 'Emas nisab 85 gram, perak nisab 595 gram, telah haul. Kadar 2,5% dari total nilai.',
    },
    {
        icon: Store,
        nama: 'Zakat Perdagangan',
        desc: 'Zakat atas harta usaha/barang dagangan. Nisab setara 85 gr emas. Kadar 2,5%.',
    },
    {
        icon: Leaf,
        nama: 'Zakat Pertanian',
        desc: 'Nisab 5 wasaq (±653 kg gabah). Kadar 5% jika irigasi berbayar, 10% jika tadah hujan.',
    },
    {
        icon: PawPrint,
        nama: 'Zakat Peternakan',
        desc: 'Dikenakan atas kepemilikan hewan ternak yang telah mencapai nisab dan haul 1 tahun.',
    },
    {
        icon: TrendingUp,
        nama: 'Zakat Saham',
        desc: 'Zakat atas kepemilikan saham jika telah memenuhi nisab dan haul. Kadar 2,5%.',
    },
    {
        icon: Building,
        nama: 'Zakat Perusahaan',
        desc: 'Zakat atas aktiva lancar perusahaan dikurangi kewajiban jangka pendek. Kadar 2,5%.',
    },
    {
        icon: Home,
        nama: 'Zakat Properti',
        desc: 'Zakat atas hasil pengelolaan aset properti seperti sewa rumah/kos/gedung. Kadar 2,5%.',
    },
    {
        icon: Fish,
        nama: 'Zakat Tambak',
        desc: 'Zakat atas hasil usaha tambak perikanan. Kadar 5% (intensif) atau 10% (tradisional).',
    },
    {
        icon: Mountain,
        nama: 'Zakat Pertambangan',
        desc: 'Zakat atas hasil usaha pertambangan mineral dan sumber daya alam. Kadar 2,5%.',
    },
    {
        icon: HandCoins,
        nama: 'Zakat Pendapatan & Jasa',
        desc: 'Zakat atas honorarium, fee proyek, atau pendapatan freelance non-rutin. Kadar 2,5%.',
    },
];

export default function JenisZakatInfo() {
    return (
        <section className="border-t border-zinc-100 bg-white py-16 lg:py-24 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="container mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="xs:mb-16 mb-12 text-center">
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                        <BookOpen className="h-4 w-4" /> Edukasi
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                        Jenis-Jenis{' '}
                        <span className="text-emerald-600 dark:text-emerald-500">
                            Zakat
                        </span>
                    </h2>
                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-emerald-500 to-teal-400"></div>
                    <p className="mx-auto mt-4 max-w-2xl text-zinc-500 dark:text-zinc-400">
                        Pelajari detail nisab, kadar, dan cara perhitungan
                        masing-masing jenis zakat
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {infoZakat.map((inf, idx) => {
                        const Icon = inf.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative rounded-3xl border border-zinc-100 bg-zinc-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 active:-translate-y-1 active:border-emerald-100 active:border-emerald-900/50 active:bg-white active:bg-zinc-900 active:shadow-xl active:shadow-emerald-500/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-900/50 dark:hover:bg-zinc-900"
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-active:scale-110 group-active:rotate-3 dark:bg-emerald-500/20 dark:text-emerald-400">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">
                                    {inf.nama}
                                </h3>
                                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                                    {inf.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Call To Action */}
                <div className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-linear-to-br from-emerald-700 via-emerald-600 to-teal-600 px-6 py-10 shadow-2xl sm:px-12 sm:py-16">
                    <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-48 w-48 rounded-full bg-black/10 blur-2xl"></div>

                    <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                                Sudah Tahu Berapa Zakat Anda?
                            </h3>
                            <p className="mt-4 max-w-xl leading-relaxed font-medium text-emerald-50 opacity-90">
                                Salurkan zakat, infaq & shadaqah Anda melalui
                                Masjid Agung Al-Mukarram Amanah secara online
                                atau langsung di lokasi.
                            </p>
                        </div>
                        <div className="flex shrink-0 flex-wrap justify-center gap-4">
                            <Link
                                href="/zis"
                                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-emerald-700 shadow-xl transition-all hover:scale-105 hover:bg-emerald-50 active:scale-105 active:bg-emerald-50"
                            >
                                <HandHeart className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:-rotate-12 group-active:scale-110 group-active:-rotate-12" />
                                Waqaf, Infaq, Shadaqah
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
