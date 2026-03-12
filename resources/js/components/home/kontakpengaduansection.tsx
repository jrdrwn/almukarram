import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import type { OperationalHour, SiteContact } from '@/types/site-contact';
import { useForm, usePage } from '@inertiajs/react';
import {
    AlertCircle,
    CheckCircle2,
    Clock,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
} from 'lucide-react';

export default function KontakPengaduanSection() {
    const { flash, siteContact } = usePage<{
        flash: { success?: string };
        siteContact?: SiteContact;
    }>().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: '',
        telepon: '',
        email: '',
        subjek: '',
        pesan: '',
    });

    const {
        address = 'Jl. Tambun Bungai No. 1, Selat Tengah, Kec. Selat, Kabupaten Kapuas, Kalimantan Tengah 73511',
        phone = '(0513) 24246',
        whatsapp = '+62 812-3456-7890',
        email = 'info@almukarram.id',
        operational_hours = [] as OperationalHour[],
    } = siteContact || {};

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/kotak-masuk', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    }

    return (
        <section className="relative w-full overflow-hidden bg-primary/5 py-24 sm:py-32 dark:bg-zinc-950/50">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-teal-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <span className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                        Bantuan & Aspirasi
                    </span>
                    <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Kontak &{' '}
                        <span className="text-primary italic">
                            Pengaduan Jamaah
                        </span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        Sampaikan pertanyaan, masukan, maupun aduan terkait
                        fasilitas dan pelayanan Masjid Agung Al-Mukarram demi
                        kenyamanan beribadah bersama.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
                    {/* Kiri: Informasi Kontak Card */}
                    <div className="flex flex-col gap-6">
                        <div className="group flex items-start gap-5 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md hover:ring-primary/50 active:-translate-y-1 active:shadow-md active:ring-primary/50">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-active:bg-primary group-active:text-primary-foreground">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-bold text-foreground">
                                    Sekretariat Masjid
                                </h3>
                                <p className="text-muted-foreground">
                                    {address}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="group flex items-center gap-4 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md hover:ring-amber-500/50 active:-translate-y-1 active:shadow-md active:ring-amber-500/50">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white dark:text-amber-400">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                                        Telepon
                                    </p>
                                    <p className="mt-1 font-bold text-foreground">
                                        {phone}
                                    </p>
                                </div>
                            </div>
                            <div className="group flex items-center gap-4 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md hover:ring-emerald-500/50 active:-translate-y-1 active:shadow-md active:ring-emerald-500/50">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white group-active:bg-emerald-500 group-active:text-white dark:text-emerald-400">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                                        WA Center
                                    </p>
                                    <p className="mt-1 font-bold text-foreground">
                                        {whatsapp}
                                    </p>
                                </div>
                            </div>
                            <div className="group flex items-center gap-4 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md hover:ring-blue-500/50 active:-translate-y-1 active:shadow-md active:ring-blue-500/50 sm:col-span-2">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 transition-colors group-hover:bg-blue-500 group-hover:text-white group-active:bg-blue-500 group-active:text-white dark:text-blue-400">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                                        Email Resmi
                                    </p>
                                    <p className="mt-1 font-bold text-foreground">
                                        {email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group flex  items-start gap-4 rounded-3xl bg-primary/5 p-6 shadow-sm ring-1 ring-primary/20">
                            <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
                            <div className="w-full">
                                <h3 className="mb-2 font-bold text-primary">
                                    Jam Operasional Sekretariat
                                </h3>
                                <ul className="w-full space-y-2 text-sm text-muted-foreground">
                                    {
                                        operational_hours.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex justify-between border-b border-primary/10 pb-1"
                                            >
                                                <span>{item.key}:</span>{' '}
                                                <span className="font-semibold text-foreground">
                                                    {item.value}
                                                </span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Kanan: Form Pengaduan */}
                    <div className="flex flex-col rounded-[2.5rem] bg-card p-8 shadow-xl ring-1 ring-border/50 sm:p-10">
                        <h3 className="mb-6 text-2xl font-bold text-foreground">
                            Kirim Pesan / Pengaduan
                        </h3>
                        {flash?.success && (
                            <div className="mb-6 flex items-start space-x-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                                <p className="text-sm font-medium text-emerald-800 dark:text-emerald-400">
                                    {flash.success}
                                </p>
                            </div>
                        )}

                        {Object.keys(errors).length > 0 && (
                            <div className="mb-6 flex items-start space-x-3 rounded-xl border border-red-200 bg-red-50 p-4">
                                <AlertCircle className="mt-0.5 h-5 w-5 text-red-600" />
                                <div className="text-sm font-medium text-red-800 dark:text-red-400">
                                    {Object.values(errors).map((error, i) => (
                                        <p key={i}>{error}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                        <form
                            className="flex flex-1 flex-col justify-between space-y-5"
                            onSubmit={handleSubmit}
                        >
                            <div className="space-y-5">
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label className="text-sm font-bold text-foreground">
                                            Nama Lengkap
                                            <span className="text-red-500"> *</span>
                                        </Label>
                                        <Input
                                            type="text"
                                            required
                                            className={`h-12 rounded-xl border-input/60 px-4 focus-visible:ring-emerald-500 ${errors.nama ? 'border-red-500' : ''}`}
                                            placeholder="Masukkan nama"
                                            value={data.nama}
                                            onChange={(e) =>
                                                setData('nama', e.target.value)
                                            }
                                        />
                                        {errors.nama && (
                                            <p className="text-xs text-red-500">
                                                {errors.nama}
                                            </p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm font-bold text-foreground">
                                            No. WhatsApp
                                            <span className="text-red-500"> *</span>
                                        </Label>
                                        <Input
                                            type="tel"
                                            required
                                            className={`h-12 rounded-xl border-input/60 px-4 focus-visible:ring-emerald-500 ${errors.telepon ? 'border-red-500' : ''}`}
                                            placeholder="08xx-xxxx-xxxx"
                                            value={data.telepon}
                                            onChange={(e) =>
                                                setData(
                                                    'telepon',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.telepon && (
                                            <p className="text-xs text-red-500">
                                                {errors.telepon}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label className="text-sm font-bold text-foreground">
                                            Alamat Email{' '}
                                            <span className="font-normal text-muted-foreground">
                                                (Opsional)
                                            </span>
                                        </Label>
                                        <Input
                                            type="email"
                                            className={`h-12 rounded-xl border-input/60 px-4 focus-visible:ring-emerald-500 ${errors.email ? 'border-red-500' : ''}`}
                                            placeholder="email@contoh.com"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                        />
                                        {errors.email && (
                                            <p className="text-xs text-red-500">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-sm font-bold text-foreground">
                                            Kategori Layanan
                                            <span className="text-red-500"> *</span>
                                        </Label>
                                        <Select
                                            value={data.subjek}
                                            onValueChange={(value) =>
                                                setData('subjek', value)
                                            }
                                        >
                                            <SelectTrigger
                                                className={`h-12! w-full rounded-xl border-input/60 bg-background px-4 focus:ring-emerald-500 ${errors.subjek ? 'border-red-500' : ''}`}
                                            >
                                                <SelectValue placeholder="-- Pilih Subjek --" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Informasi Umum">
                                                    Informasi Umum
                                                </SelectItem>
                                                <SelectItem value="Kegiatan Masjid">
                                                    Kegiatan Masjid
                                                </SelectItem>
                                                <SelectItem value="Donasi & Zakat">
                                                    Donasi & Zakat
                                                </SelectItem>
                                                <SelectItem value="Pendidikan">
                                                    Pendidikan / TPQ
                                                </SelectItem>
                                                <SelectItem value="Sewa Tempat">
                                                    Sewa Fasilitas
                                                </SelectItem>
                                                <SelectItem value="Lainnya">
                                                    Lainnya
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.subjek && (
                                            <p className="text-xs text-red-500">
                                                {errors.subjek}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm font-bold text-foreground">
                                        Pesan / Detail Laporan
                                        <span className="text-red-500"> *</span>
                                    </Label>
                                    <Textarea
                                        required
                                        rows={4}
                                        className={`min-h-35 resize-none rounded-xl border-input/60 p-4 focus-visible:ring-emerald-500 ${errors.pesan ? 'border-red-500' : ''}`}
                                        placeholder="Tuliskan detail pesan atau aduan Anda di sini..."
                                        value={data.pesan}
                                        onChange={(e) =>
                                            setData('pesan', e.target.value)
                                        }
                                    />
                                    {errors.pesan && (
                                        <p className="text-xs text-red-500">
                                            {errors.pesan}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-auto pt-4 lg:pt-0">
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={processing}
                                    className="group h-14 w-full rounded-xl bg-[#009B65] text-base font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#008959] hover:shadow-lg active:-translate-y-0.5 active:bg-[#008959] active:shadow-lg disabled:opacity-50"
                                >
                                    <span>
                                        {processing
                                            ? 'Mengirim...'
                                            : 'Kirim Laporan'}
                                    </span>
                                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-active:translate-x-1 group-active:-translate-y-1" />
                                </Button>

                                <p className="mt-4 text-center text-xs text-muted-foreground">
                                    Laporan terkirim akan langsung diteruskan ke
                                    tim pengurus/layanan jamaah terkait.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
