import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import {
    Briefcase,
    Building,
    Calculator,
    CircleDashed,
    Coins,
    Fish,
    Gem,
    HandCoins,
    HandHeart,
    Home,
    Info,
    Leaf,
    Moon,
    Mountain,
    PawPrint,
    ShieldAlert,
    Store,
    TrendingUp
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

const HARGA_PERAK_DEFAULT = 50627;
const HARGA_BERAS_DEFAULT = 15000;

const zakatTypes = [
    { id: 'fitrah', icon: Moon, label: 'Zakat Fitrah' },
    { id: 'maal', icon: Coins, label: 'Zakat Maal' },
    { id: 'profesi', icon: Briefcase, label: 'Zakat Profesi' },
    { id: 'penghasilan', icon: HandCoins, label: 'Zakat Pendapatan & Jasa' },
    { id: 'emas', icon: Gem, label: 'Zakat Emas & Perak' },
    { id: 'perdagangan', icon: Store, label: 'Zakat Perdagangan' },
    { id: 'pertanian', icon: Leaf, label: 'Zakat Pertanian' },
    { id: 'peternakan', icon: PawPrint, label: 'Zakat Peternakan' },
    { id: 'saham', icon: TrendingUp, label: 'Zakat Saham' },
    { id: 'perusahaan', icon: Building, label: 'Zakat Perusahaan' },
    { id: 'properti', icon: Home, label: 'Zakat Properti' },
    { id: 'tambak', icon: Fish, label: 'Zakat Tambak' },
    { id: 'pertambangan', icon: Mountain, label: 'Zakat Pertambangan' },
];

function fmt(n: number) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formatRp(n: number) {
    return 'Rp\u00A0' + fmt(n);
}

function parseFmt(val: string) {
    return Number(val.replace(/\./g, '').replace(/\D/g, '')) || 0;
}

export default function KalkulatorUtama() {
    const [hargaEmas, setHargaEmas] = useState(2851290);
    const [emasLoading, setEmasLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState('');

    const [currentType, setCurrentType] = useState('fitrah');
    const [formValues, setFormValues] = useState<Record<string, string>>({
        f_beras: fmt(HARGA_BERAS_DEFAULT),
        f_jiwa: '1',
    });

    const [hasil, setHasil] = useState<{
        wajib: boolean;
        label?: string;
        nominal?: string;
        ket?: string;
        judul?: string;
    } | null>(null);

    const [nisabHtml, setNisabHtml] = useState<React.ReactNode | null>(null);

    useEffect(() => {
        setFormValues(prev => ({
            ...prev,
            f_emas: fmt(hargaEmas),
            f_hEmas: fmt(hargaEmas),
            f_hPerak: fmt(HARGA_PERAK_DEFAULT),
            f_irigasi: '0.05',
            f_hewan: 'sapi',
            f_jenisTambak: '0.05'
        }));
    }, [hargaEmas]);

    useEffect(() => {
        fetchHargaEmas();
    }, []);

    const fetchHargaEmas = async () => {
        setEmasLoading(true);
        try {
            const res = await fetch('/db/harga_emas.php');
            if (res.ok) {
                const data = await res.json();
                if (data.success && data.harga_per_gram) {
                    setHargaEmas(data.harga_per_gram);
                    setLastUpdated(data.updated_at ? data.updated_at.substring(0,16).replace('T',' ') : '');
                }
            }
        } catch (e) {
            console.error('Failed to fetch gold price', e);
        } finally {
            setEmasLoading(false);
        }
    };

    const handleInput = (id: string, value: string, isNumeric: boolean = true) => {
        if (isNumeric && value) {
            // Live formatting for money
            const raw = value.replace(/\./g, '').replace(/\D/g, '');
            value = raw ? raw.replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '';
        }
        setFormValues(prev => ({ ...prev, [id]: value }));
    };

    const handleSelectType = (id: string) => {
        setCurrentType(id);
        setHasil(null);
        setNisabHtml(null);
    };

    const val = (id: string) => parseFmt(formValues[id] || '0');

    const handleHitung = () => {
        let nisabInfo: React.ReactNode = null;

        switch (currentType) {
            case 'fitrah': {
                const jiwa = Number(formValues.f_jiwa) || 0;
                const harga = val('f_beras');
                if (!jiwa || !harga) return;

                nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Setiap jiwa: <strong>2,5 kg beras</strong> atau senilai harganya.</>;
                setNisabHtml(nisabInfo);
                setHasil({
                    wajib: true,
                    label: 'Total Zakat Fitrah',
                    nominal: formatRp(jiwa * 2.5 * harga),
                    ket: `${jiwa * 2.5} kg beras untuk ${jiwa} jiwa`
                });
                break;
            }
            case 'maal': {
                const harta = val('f_harta');
                const utang = val('f_utang');
                const hEmas = val('f_emas') || hargaEmas;
                const nisab = 85 * hEmas;
                const net = harta - utang;

                nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Nisab: <strong>{formatRp(nisab)}</strong> (setara 85 gram emas @ {formatRp(hEmas)}/gram)</>;
                setNisabHtml(nisabInfo);

                if (net >= nisab) {
                    setHasil({ wajib: true, label: 'Total Zakat Maal (2,5%)', nominal: formatRp(net * 0.025), ket: `Harta bersih ${formatRp(net)} ✓ Wajib Zakat` });
                } else {
                    setHasil({ wajib: false, judul: 'Harta belum mencapai nisab', ket: `Harta bersih ${formatRp(net)} — nisab ${formatRp(nisab)} — kekurangan ${formatRp(nisab - net)}` });
                }
                break;
            }
            case 'profesi': {
                const gaji = val('f_gaji');
                const hEmas = val('f_emas') || hargaEmas;
                const nisab = 85 * hEmas / 12;

                nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Nisab bulanan: <strong>{formatRp(nisab)}</strong> (85 gr emas ÷ 12 bulan)</>;
                setNisabHtml(nisabInfo);

                if (gaji >= nisab) {
                    setHasil({ wajib: true, label: 'Zakat Profesi per Bulan (2,5%)', nominal: formatRp(gaji * 0.025), ket: `Penghasilan ${formatRp(gaji)} ✓ Wajib Zakat` });
                } else {
                    setHasil({ wajib: false, judul: 'Penghasilan belum mencapai nisab bulanan', ket: `${formatRp(gaji)} — nisab ${formatRp(nisab)}` });
                }
                break;
            }
            case 'penghasilan': {
                const honor = val('f_honor');
                const hEmas = val('f_emas') || hargaEmas;
                const nisab = 85 * hEmas;

                nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Nisab: <strong>{formatRp(nisab)}</strong> (setara 85 gram emas)</>;
                setNisabHtml(nisabInfo);

                if (honor >= nisab) {
                    setHasil({ wajib: true, label: 'Zakat Pendapatan & Jasa (2,5%)', nominal: formatRp(honor * 0.025), ket: `Pendapatan ${formatRp(honor)} ✓ Wajib Zakat` });
                } else {
                    setHasil({ wajib: false, judul: 'Pendapatan belum mencapai nisab', ket: `${formatRp(honor)} — nisab ${formatRp(nisab)}` });
                }
                break;
            }
            case 'emas': {
                const gE = Number(formValues.f_gramEmas) || 0;
                const hE = val('f_hEmas') || hargaEmas;
                const gP = Number(formValues.f_gramPerak) || 0;
                const hP = val('f_hPerak') || HARGA_PERAK_DEFAULT;

                nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Nisab emas: <strong>85 gr</strong> ({formatRp(85*hE)}) &nbsp;|&nbsp; Nisab perak: <strong>595 gr</strong> ({formatRp(595*hP)})</>;
                setNisabHtml(nisabInfo);

                const eWajib = gE >= 85, pWajib = gP >= 595;
                if (eWajib || pWajib) {
                    let total = 0;
                    const ketArr = [];
                    if (eWajib) { total += gE * hE * 0.025; ketArr.push(`Emas ${gE} gr ✓`); }
                    if (pWajib) { total += gP * hP * 0.025; ketArr.push(`Perak ${gP} gr ✓`); }
                    setHasil({ wajib: true, label: 'Total Zakat Emas & Perak (2,5%)', nominal: formatRp(total), ket: ketArr.join(' | ') });
                } else {
                    setHasil({ wajib: false, judul: 'Belum mencapai nisab', ket: `Emas ${gE} gr (nisab 85 gr) | Perak ${gP} gr (nisab 595 gr)` });
                }
                break;
            }
            case 'perdagangan': {
                const modal = val('f_modal'), laba = val('f_laba');
                const piutang = val('f_piutang'), hutang = val('f_hutang');
                const hEmas = val('f_emas') || hargaEmas;
                const nisab = 85 * hEmas, net = modal + laba + piutang - hutang;

                nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Nisab: <strong>{formatRp(nisab)}</strong> &nbsp;|&nbsp; Harta bersih usaha: <strong>{formatRp(net)}</strong></>;
                setNisabHtml(nisabInfo);

                if (net >= nisab) {
                    setHasil({ wajib: true, label: 'Zakat Perdagangan (2,5%)', nominal: formatRp(net * 0.025), ket: `Harta bersih ${formatRp(net)} ✓ Wajib Zakat` });
                } else {
                    setHasil({ wajib: false, judul: 'Harta usaha belum mencapai nisab', ket: `${formatRp(net)} — nisab ${formatRp(nisab)}` });
                }
                break;
            }
            case 'pertanian': {
                const panen = Number(formValues.f_panen) || 0;
                const kadar = Number(formValues.f_irigasi) || 0.05;

                nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Nisab: <strong>653 kg</strong> gabah kering &nbsp;|&nbsp; Kadar: <strong>{kadar*100}%</strong></>;
                setNisabHtml(nisabInfo);

                if (panen >= 653) {
                    setHasil({ wajib: true, label: `Zakat Pertanian (${kadar*100}%)`, nominal: `${fmt(panen * kadar)} kg`, ket: `Hasil panen ${fmt(panen)} kg ✓ Wajib Zakat` });
                } else {
                    setHasil({ wajib: false, judul: 'Hasil panen belum mencapai nisab', ket: `${fmt(panen)} kg — nisab 653 kg` });
                }
                break;
            }
            case 'peternakan': {
                const jenis = formValues.f_hewan || 'sapi';
                const jumlah = Number(formValues.f_hewan_jumlah) || 0;

                if (jenis === 'sapi') {
                    if (jumlah < 30) {
                        setHasil({ wajib: false, judul: 'Belum mencapai nisab', ket: `Sapi ${jumlah} ekor — nisab 30 ekor` });
                        return;
                    }
                    nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Nisab sapi: <strong>30 ekor</strong>. Setiap 30 ekor = 1 tabi', setiap 40 ekor = 1 musinnah.</>;
                    setNisabHtml(nisabInfo);
                    setHasil({ wajib: true, label: 'Wajib Zakat Sapi/Kerbau', nominal: `${jumlah} ekor`, ket: `${jumlah} ekor ✓ Konsultasikan dengan amil zakat` });
                } else {
                    let wajibStr = null;
                    if (jumlah >= 40 && jumlah <= 120) wajibStr = '1 ekor kambing';
                    else if (jumlah >= 121 && jumlah <= 200) wajibStr = '2 ekor kambing';
                    else if (jumlah > 200) wajibStr = `${2 + Math.floor((jumlah - 200) / 100) + 1} ekor kambing`;

                    if (!wajibStr) {
                        setHasil({ wajib: false, judul: 'Belum mencapai nisab', ket: `Kambing ${jumlah} ekor — nisab 40 ekor` });
                        return;
                    }

                    nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Nisab kambing: <strong>40 ekor</strong>. 40–120 = 1 ekor, 121–200 = 2 ekor, dst.</>;
                    setNisabHtml(nisabInfo);
                    setHasil({ wajib: true, label: 'Zakat Kambing/Domba', nominal: wajibStr, ket: `${jumlah} ekor ✓ Wajib ${wajibStr}` });
                }
                break;
            }
            case 'saham': {
                const lembar = Number(formValues.f_lembar) || 0, hSaham = val('f_hargaSaham');
                const dividen = val('f_dividen'), hEmas = val('f_emas') || hargaEmas;
                const nisab = 85 * hEmas, total = (lembar * hSaham) + dividen;

                nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Nisab: <strong>{formatRp(nisab)}</strong> &nbsp;|&nbsp; Total nilai: <strong>{formatRp(total)}</strong></>;
                setNisabHtml(nisabInfo);

                if (total >= nisab) {
                    setHasil({ wajib: true, label: 'Zakat Saham (2,5%)', nominal: formatRp(total * 0.025), ket: `Nilai saham ${formatRp(lembar * hSaham)} + dividen ${formatRp(dividen)} ✓ Wajib Zakat` });
                } else {
                    setHasil({ wajib: false, judul: 'Nilai saham belum mencapai nisab', ket: `${formatRp(total)} — nisab ${formatRp(nisab)}` });
                }
                break;
            }
            case 'perusahaan': {
                const aktiva = val('f_aktiva'), kewajiban = val('f_kewajiban');
                const hEmas = val('f_emas') || hargaEmas;
                const nisab = 85 * hEmas, net = aktiva - kewajiban;

                nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Nisab: <strong>{formatRp(nisab)}</strong> &nbsp;|&nbsp; Aset bersih: <strong>{formatRp(net)}</strong></>;
                setNisabHtml(nisabInfo);

                if (net >= nisab) {
                    setHasil({ wajib: true, label: 'Zakat Perusahaan (2,5%)', nominal: formatRp(net * 0.025), ket: `Aset bersih ${formatRp(net)} ✓ Wajib Zakat` });
                } else {
                    setHasil({ wajib: false, judul: 'Aset belum mencapai nisab', ket: `${formatRp(net)} — nisab ${formatRp(nisab)}` });
                }
                break;
            }
            case 'properti': {
                const sewa = val('f_sewa'), biaya = val('f_biaya');
                const hEmas = val('f_emas') || hargaEmas;
                const nisab = 85 * hEmas, net = sewa - biaya;

                nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Nisab: <strong>{formatRp(nisab)}</strong> &nbsp;|&nbsp; Penghasilan bersih: <strong>{formatRp(net)}</strong></>;
                setNisabHtml(nisabInfo);

                if (net >= nisab) {
                    setHasil({ wajib: true, label: 'Zakat Properti (2,5%)', nominal: formatRp(net * 0.025), ket: `Penghasilan bersih ${formatRp(net)} ✓ Wajib Zakat` });
                } else {
                    setHasil({ wajib: false, judul: 'Penghasilan belum mencapai nisab', ket: `${formatRp(net)} — nisab ${formatRp(nisab)}` });
                }
                break;
            }
            case 'tambak': {
                const hasilTmbk = val('f_tambak');
                const kadar = Number(formValues.f_jenisTambak) || 0.05;

                nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Kadar zakat tambak: <strong>{kadar*100}%</strong></>;
                setNisabHtml(nisabInfo);

                if (hasilTmbk > 0) {
                    setHasil({ wajib: true, label: `Zakat Tambak (${kadar*100}%)`, nominal: formatRp(hasilTmbk * kadar), ket: `Hasil panen ${formatRp(hasilTmbk)} ✓ Wajib Zakat` });
                } else {
                    setHasil(null);
                }
                break;
            }
            case 'pertambangan': {
                const hasilTmbg = val('f_tambang'), biayaTmbg = val('f_opTambang');
                const netTmbg = hasilTmbg - biayaTmbg;

                nisabInfo = <><Info className="inline h-4 w-4 mr-2" />Kadar zakat pertambangan: <strong>2,5%</strong> dari hasil bersih</>;
                setNisabHtml(nisabInfo);

                if (netTmbg > 0) {
                    setHasil({ wajib: true, label: 'Zakat Pertambangan (2,5%)', nominal: formatRp(netTmbg * 0.025), ket: `Hasil bersih ${formatRp(netTmbg)} ✓ Wajib Zakat` });
                } else {
                    setHasil({ wajib: false, judul: 'Penghasilan belum ada', ket: 'Tidak ada penghasilan bersih' });
                }
                break;
            }
        }
    };

    const renderInputMoney = (id: string, label: string, placeholder="0", desc="") => (
        <div className="mb-4">
            <label className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {label} {desc && <span className="font-normal text-muted-foreground">{desc}</span>}
            </label>
            <div className="flex">
                <span className="inline-flex h-11 items-center rounded-l-lg border border-r-0 border-zinc-200 bg-zinc-50 px-3 text-sm text-zinc-500 shadow-xs dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-400">Rp</span>
                <Input
                    type="text"
                    inputMode="numeric"
                    value={formValues[id] || ''}
                    onChange={(e) => handleInput(id, e.target.value)}
                    placeholder={placeholder}
                    className="h-11 rounded-l-none rounded-r-lg"
                />
            </div>
        </div>
    );

    const renderInputNumber = (id: string, label: string, placeholder="0", desc="", step="1", isDecimal=false) => (
        <div className="mb-4">
            <label className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {label} {desc && <span className="font-normal text-muted-foreground">{desc}</span>}
            </label>
            <Input
                type="number"
                min="0"
                step={step}
                value={formValues[id] || ''}
                onChange={(e) => handleInput(id, e.target.value, false)}
                placeholder={placeholder}
                className="h-11 rounded-lg"
            />
        </div>
    );

    const typesInfo = {
        fitrah: { label: 'Zakat Fitrah', desc: 'Wajib dikeluarkan setiap jiwa menjelang Idul Fitri sebesar 1 sha\' (±2,5 kg) beras atau senilai harganya.' },
        maal: { label: 'Zakat Maal', desc: 'Zakat atas harta yang telah mencapai nisab (85 gr emas) dan haul (≥ 1 tahun). Kadar 2,5%.' },
        profesi: { label: 'Zakat Profesi', desc: 'Wajib atas penghasilan rutin dari pekerjaan/profesi jika mencapai nisab bulanan (85 gr emas ÷ 12). Kadar 2,5%.' },
        penghasilan: { label: 'Zakat Pendapatan & Jasa', desc: 'Zakat atas pendapatan non-rutin (honorarium, fee proyek, freelance) yang mencapai nisab. Kadar 2,5%.' },
        emas: { label: 'Zakat Emas & Perak', desc: 'Nisab emas 85 gram, nisab perak 595 gram, telah haul 1 tahun. Kadar 2,5%.' },
        perdagangan: { label: 'Zakat Perdagangan', desc: 'Zakat atas harta usaha/barang dagangan. Nisab setara 85 gr emas, haul 1 tahun. Kadar 2,5%.' },
        pertanian: { label: 'Zakat Pertanian', desc: 'Nisab 5 wasaq (±653 kg gabah kering). Kadar 5% jika irigasi berbayar, 10% jika tadah hujan.' },
        peternakan: { label: 'Zakat Peternakan', desc: 'Zakat atas kepemilikan hewan ternak yang telah mencapai nisab dan haul 1 tahun.' },
        saham: { label: 'Zakat Saham', desc: 'Zakat atas kepemilikan saham yang telah memenuhi nisab (85 gr emas) dan haul 1 tahun. Kadar 2,5%.' },
        perusahaan: { label: 'Zakat Perusahaan', desc: 'Zakat atas aktiva lancar perusahaan dikurangi kewajiban jangka pendek. Nisab 85 gr emas. Kadar 2,5%.' },
        properti: { label: 'Zakat Properti', desc: 'Zakat atas hasil pengelolaan aset properti seperti sewa rumah, kos, atau gedung. Kadar 2,5%.' },
        tambak: { label: 'Zakat Tambak', desc: 'Zakat atas hasil usaha tambak perikanan. Kadar 5% (intensif) atau 10% (tradisional).' },
        pertambangan: { label: 'Zakat Pertambangan', desc: 'Zakat atas hasil usaha pertambangan mineral dan sumber daya alam. Kadar 2,5%.' },
    };

    const actInfo = typesInfo[currentType as keyof typeof typesInfo];

    return (
        <section className="relative overflow-hidden py-16 lg:py-24 bg-zinc-50/50 dark:bg-zinc-950/50">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 blur-[120px]">
                <div className="h-100 w-100 rounded-full bg-emerald-500/10 mix-blend-multiply dark:bg-emerald-500/5"></div>
            </div>

            <div className="container mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                {/* Mobile Dropdown */}
                <div className="mb-8 block lg:hidden">
                    <label className="mb-2 block text-sm font-semibold text-emerald-800 dark:text-emerald-400">
                        Pilih Jenis Zakat
                    </label>
                    <Select
                        value={currentType}
                        onValueChange={(val) => handleSelectType(val)}
                    >
                        <SelectTrigger className="h-12 w-full rounded-xl bg-white px-4 font-semibold text-zinc-900 shadow-sm focus:ring-emerald-500 dark:bg-zinc-900 dark:text-zinc-100">
                            <SelectValue placeholder="Pilih Jenis Zakat" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-zinc-200 dark:border-zinc-800">
                            {zakatTypes.map(t => (
                                <SelectItem key={t.id} value={t.id} className="cursor-pointer">
                                    {t.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* Sidebar Desktop */}
                    <div className="hidden lg:block lg:col-span-4">
                        <div className="rounded-4xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 h-full">
                            <h3 className="mb-5 text-lg font-bold text-zinc-900 dark:text-white">Pilih Jenis Zakat</h3>
                            <div className="flex flex-col space-y-1.5">
                                {zakatTypes.map(t => {
                                    const Icon = t.icon;
                                    const isActive = currentType === t.id;
                                    return (
                                        <button
                                            key={t.id}
                                            onClick={() => handleSelectType(t.id)}
                                            className={cn(
                                                "group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-semibold transition-all duration-200",
                                                isActive
                                                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                                                    : "bg-zinc-50 text-zinc-700 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                            )}
                                        >
                                            <div className={cn(
                                                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                                                isActive ? "bg-white/20" : "bg-white text-emerald-600 dark:bg-zinc-950 dark:text-emerald-500 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-950/50"
                                            )}>
                                                <Icon className={cn("h-4 w-4", isActive ? "text-white" : "")} />
                                            </div>
                                            <span className="text-sm">{t.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Kalkulator Area */}
                    <div className="lg:col-span-8">
                        <div className="relative min-h-125 rounded-4xl border border-zinc-100 bg-white p-6 sm:p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

                            {/* Live Badge */}
                            <div className="absolute top-6 right-6 md:top-8 md:right-8">
                                {emasLoading ? (
                                    <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-500 dark:bg-zinc-800">
                                        <CircleDashed className="h-3 w-3 animate-spin" /> Memuat...
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                                        <span className="relative flex h-2 w-2">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        Harga Emas Live
                                    </div>
                                )}
                            </div>

                            <div className="mb-8 max-w-lg">
                                <h3 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                                    {actInfo?.label}
                                </h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    {actInfo?.desc}
                                </p>
                            </div>

                            <div className="mb-8 h-px w-full bg-zinc-100 dark:bg-zinc-800"></div>

                            {/* Form Area */}
                            <div className="space-y-2">
                                {currentType === 'fitrah' && (
                                    <>
                                        {renderInputNumber('f_jiwa', 'Jumlah Jiwa yang Ditanggung')}
                                        {renderInputMoney('f_beras', 'Harga Beras per Kg (Rp)', '15000', '(Masukkan harga beras saat ini)')}
                                    </>
                                )}
                                {currentType === 'maal' && (
                                    <>
                                        {renderInputMoney('f_harta', 'Total Harta', '0', '(tabungan, deposito, investasi, dll)')}
                                        {renderInputMoney('f_utang', 'Total Utang', '0', '- Opsional')}
                                        {renderInputMoney('f_emas', 'Harga Emas per Gram (Rp)', fmt(HARGA_BERAS_DEFAULT), '(Masukkan harga emas saat ini)')}
                                    </>
                                )}
                                {currentType === 'profesi' && (
                                    <>
                                        {renderInputMoney('f_gaji', 'Penghasilan per Bulan (Rp)', '0')}
                                        {renderInputMoney('f_emas', 'Harga Emas per Gram (Rp)', fmt(HARGA_BERAS_DEFAULT), '(Masukkan harga emas saat ini)')}
                                    </>
                                )}
                                {currentType === 'penghasilan' && (
                                    <>
                                        {renderInputMoney('f_honor', 'Total Pendapatan / Honorarium (Rp)', '0')}
                                        {renderInputMoney('f_emas', 'Harga Emas per Gram (Rp)', fmt(HARGA_BERAS_DEFAULT), '(Masukkan harga emas saat ini)')}
                                    </>
                                )}
                                {currentType === 'emas' && (
                                    <>
                                        {renderInputNumber('f_gramEmas', 'Berat Emas (gram)', '0', '', '0.1', true)}
                                        {renderInputMoney('f_hEmas', 'Harga Emas per Gram (Rp)', fmt(HARGA_BERAS_DEFAULT), '(Masukkan harga emas saat ini)')}
                                        <div className="my-6 border-t border-zinc-100 dark:border-zinc-800"></div>
                                        {renderInputNumber('f_gramPerak', 'Berat Perak (gram)', '0', '- Opsional', '0.1', true)}
                                        {renderInputMoney('f_hPerak', 'Harga Perak per Gram (Rp)', fmt(HARGA_PERAK_DEFAULT), '(Masukkan harga perak saat ini)')}
                                    </>
                                )}
                                {currentType === 'perdagangan' && (
                                    <>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {renderInputMoney('f_modal', 'Modal Usaha (Rp)', '0')}
                                            {renderInputMoney('f_laba', 'Keuntungan / Laba (Rp)', '0')}
                                            {renderInputMoney('f_piutang', 'Piutang Dapat Ditagih (Rp)', '0')}
                                            {renderInputMoney('f_hutang', 'Utang Jangka Pendek (Rp)', '0')}
                                        </div>
                                        {renderInputMoney('f_emas', 'Harga Emas per Gram (Rp)', fmt(HARGA_BERAS_DEFAULT), '(Masukkan harga emas saat ini)')}
                                    </>
                                )}
                                {currentType === 'pertanian' && (
                                    <>
                                        {renderInputNumber('f_panen', 'Hasil Panen (kg)', '0')}
                                        <div className="mb-4">
                                            <label className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                                Jenis Pengairan
                                            </label>
                                            <Select
                                                value={formValues.f_irigasi || '0.05'}
                                                onValueChange={(val) => handleInput('f_irigasi', val, false)}
                                            >
                                                <SelectTrigger className="h-11 w-full rounded-lg bg-white dark:bg-zinc-900">
                                                    <SelectValue placeholder="Pilih Jenis Pengairan" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-xl border-zinc-200 dark:border-zinc-800">
                                                    <SelectItem value="0.05" className="cursor-pointer">Irigasi / Pompa (biaya sendiri) — 5%</SelectItem>
                                                    <SelectItem value="0.10" className="cursor-pointer">Tadah Hujan / Sumber Alami — 10%</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </>
                                )}
                                {currentType === 'peternakan' && (
                                    <>
                                        <div className="mb-4">
                                            <label className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                                Jenis Hewan Ternak
                                            </label>
                                            <Select
                                                value={formValues.f_hewan || 'sapi'}
                                                onValueChange={(val) => handleInput('f_hewan', val, false)}
                                            >
                                                <SelectTrigger className="h-11 w-full rounded-lg bg-white dark:bg-zinc-900">
                                                    <SelectValue placeholder="Pilih Jenis Hewan" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-xl border-zinc-200 dark:border-zinc-800">
                                                    <SelectItem value="sapi" className="cursor-pointer">Sapi / Kerbau</SelectItem>
                                                    <SelectItem value="kambing" className="cursor-pointer">Kambing / Domba</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        {renderInputNumber('f_hewan_jumlah', 'Jumlah Hewan (ekor)', '0')}
                                        <div className="mt-2 rounded-lg bg-zinc-50 p-3 text-xs text-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-400">
                                            <Info className="inline h-3.5 w-3.5 mr-1" />
                                            Nisab: {formValues.f_hewan === 'sapi' ? 'sapi/kerbau 30 ekor' : 'kambing/domba 40 ekor'}.
                                            Anda: {formValues.f_hewan_jumlah || 0} ekor.
                                        </div>
                                    </>
                                )}
                                {currentType === 'saham' && (
                                    <>
                                        {renderInputNumber('f_lembar', 'Jumlah Lembar Saham', '0')}
                                        {renderInputMoney('f_hargaSaham', 'Harga Saham per Lembar (Rp)', '0')}
                                        {renderInputMoney('f_dividen', 'Dividen Diterima (Rp)', '0', '- Opsional')}
                                        {renderInputMoney('f_emas', 'Harga Emas per Gram (Rp)', fmt(HARGA_BERAS_DEFAULT), '(Masukkan harga emas saat ini)')}
                                    </>
                                )}
                                {currentType === 'perusahaan' && (
                                    <>
                                        {renderInputMoney('f_aktiva', 'Aktiva Lancar (Rp)', '0')}
                                        {renderInputMoney('f_kewajiban', 'Kewajiban Jangka Pendek (Rp)', '0')}
                                        {renderInputMoney('f_emas', 'Harga Emas per Gram (Rp)', fmt(HARGA_BERAS_DEFAULT), '(Masukkan harga emas saat ini)')}
                                    </>
                                )}
                                {currentType === 'properti' && (
                                    <>
                                        {renderInputMoney('f_sewa', 'Penghasilan Sewa per Tahun (Rp)', '0')}
                                        {renderInputMoney('f_biaya', 'Biaya Operasional / Perawatan (Rp)', '0', '- Opsional')}
                                        {renderInputMoney('f_emas', 'Harga Emas per Gram (Rp)', fmt(HARGA_BERAS_DEFAULT), '(Masukkan harga emas saat ini)')}
                                    </>
                                )}
                                {currentType === 'tambak' && (
                                    <>
                                        {renderInputMoney('f_tambak', 'Hasil Panen Tambak (Rp)', '0')}
                                        <div className="mb-4">
                                            <label className="mb-1.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                                Jenis Budidaya
                                            </label>
                                            <Select
                                                value={formValues.f_jenisTambak || '0.05'}
                                                onValueChange={(val) => handleInput('f_jenisTambak', val, false)}
                                            >
                                                <SelectTrigger className="h-11 w-full rounded-lg bg-white dark:bg-zinc-900">
                                                    <SelectValue placeholder="Pilih Jenis Budidaya" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-xl border-zinc-200 dark:border-zinc-800">
                                                    <SelectItem value="0.05" className="cursor-pointer">Intensif / Modal Besar — 5%</SelectItem>
                                                    <SelectItem value="0.10" className="cursor-pointer">Tradisional / Alamiah — 10%</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </>
                                )}
                                {currentType === 'pertambangan' && (
                                    <>
                                        {renderInputMoney('f_tambang', 'Nilai Hasil Tambang (Rp)', '0')}
                                        {renderInputMoney('f_opTambang', 'Biaya Operasional (Rp)', '0', '- Opsional')}
                                    </>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleHitung}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-[0.98]"
                                >
                                    <Calculator className="h-5 w-5" />
                                    Hitung Zakat
                                </button>
                                <button
                                    onClick={() => {
                                        setHasil(null);
                                        setNisabHtml(null);
                                    }}
                                    className="flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3.5 font-bold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700/80 sm:w-auto"
                                >
                                    Reset
                                </button>
                            </div>

                            {/* Empty State / Belum Dihitung */}
                            {!hasil && !nisabHtml && (
                                <div className="mt-8 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-zinc-100 py-12 px-6 text-center dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/20">
                                    <div className="mb-4 rounded-full bg-emerald-100/50 p-4 dark:bg-emerald-900/20">
                                        <Calculator className="h-8 w-8 text-emerald-600/70 dark:text-emerald-500/70" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="mb-2 text-base font-bold text-zinc-700 dark:text-zinc-300">
                                        Belum Ada Perhitungan
                                    </h4>
                                    <p className="max-w-70 text-sm text-zinc-500 dark:text-zinc-500">
                                        Silakan isi form di atas lalu klik <strong className="font-semibold text-zinc-700 dark:text-zinc-400">Hitung Zakat</strong> untuk melihat hasil estimasi kewajiban {actInfo?.label.toLowerCase()} Anda.
                                    </p>
                                </div>
                            )}

                            {/* Nisab Info */}
                            {nisabHtml && (
                                <div className="mt-6 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/50 p-4 text-sm text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300">
                                    {nisabHtml}
                                </div>
                            )}

                            {/* Output Result */}
                            {hasil && (
                                <div className={cn(
                                    "mt-6 rounded-3xl p-6 text-center shadow-inner relative overflow-hidden",
                                    hasil.wajib
                                        ? "bg-linear-to-br from-emerald-50 to-teal-50/50 dark:from-emerald-950/40 dark:to-teal-900/20 border border-emerald-100 dark:border-emerald-800/50"
                                        : "bg-amber-50/80 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/50"
                                )}>
                                    {hasil.wajib ? (
                                        <>
                                            <div className="absolute top-0 right-0 -mr-6 -mt-6 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl"></div>
                                            <p className="text-sm font-semibold text-emerald-600/80 dark:text-emerald-400 mb-2 uppercase tracking-wider">{hasil.label}</p>
                                            <div className="text-3xl md:text-5xl font-extrabold text-emerald-700 dark:text-emerald-300 mb-3 drop-shadow-sm">
                                                {hasil.nominal}
                                            </div>
                                            <p className="text-sm font-medium text-emerald-800/70 dark:text-emerald-400 mb-6">{hasil.ket}</p>
                                            <Link
                                                href="/zis"
                                                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-emerald-700"
                                            >
                                                <HandHeart className="h-4 w-4" /> Bayar Zakat di Masjid
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <ShieldAlert className="mx-auto h-12 w-12 text-amber-500 mb-4 opacity-80" />
                                            <h4 className="text-lg font-bold text-amber-700 dark:text-amber-500 mb-2">{hasil.judul}</h4>
                                            <p className="text-sm font-medium text-amber-600/80 dark:text-amber-400/80">{hasil.ket}</p>
                                        </>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
