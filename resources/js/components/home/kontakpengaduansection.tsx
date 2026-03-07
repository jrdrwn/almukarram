import { useForm, usePage } from '@inertiajs/react';
import { CheckCircle, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

export default function KontakPengaduanSection() {
    const { flash } = usePage<{ flash: { success?: string } }>().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: '',
        telepon: '',
        email: '',
        subjek: '',
        pesan: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/kotak-masuk', {
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
                        <div className="group flex items-start gap-5 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md hover:ring-primary/50">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-bold text-foreground">
                                    Sekretariat Masjid
                                </h3>
                                <p className="text-muted-foreground">
                                    Jl. Tambun Bungai No. 1, Selat Tengah, Kec.
                                    Selat, Kabupaten Kapuas, Kalimantan Tengah
                                    73511
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="group flex items-center gap-4 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md hover:ring-amber-500/50">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white dark:text-amber-400">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                                        Telepon
                                    </p>
                                    <p className="mt-1 font-bold text-foreground">
                                        (0513) 24246
                                    </p>
                                </div>
                            </div>
                            <div className="group flex items-center gap-4 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md hover:ring-emerald-500/50">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white dark:text-emerald-400">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                                        WA Center
                                    </p>
                                    <p className="mt-1 font-bold text-foreground">
                                        +62 812-3456-7890
                                    </p>
                                </div>
                            </div>
                            <div className="group flex items-center gap-4 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md hover:ring-blue-500/50 sm:col-span-2">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 transition-colors group-hover:bg-blue-500 group-hover:text-white dark:text-blue-400">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                                        Email Resmi
                                    </p>
                                    <p className="mt-1 font-bold text-foreground">
                                        info@almukarram.id
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group flex flex-1 items-start gap-4 rounded-3xl bg-primary/5 p-6 shadow-sm ring-1 ring-primary/20">
                            <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
                            <div className="w-full">
                                <h3 className="mb-2 font-bold text-primary">
                                    Jam Operasional Sekretariat
                                </h3>
                                <ul className="w-full space-y-2 text-sm text-muted-foreground">
                                    <li className="flex justify-between border-b border-primary/10 pb-1">
                                        <span>Senin - Kamis:</span>{' '}
                                        <span className="font-semibold text-foreground">
                                            08:00 - 15:30 WIB
                                        </span>
                                    </li>
                                    <li className="flex justify-between border-b border-primary/10 pb-1">
                                        <span>Jumat:</span>{' '}
                                        <span className="font-semibold text-foreground">
                                            08:00 - 11:30 WIB
                                        </span>
                                    </li>
                                    <li className="flex justify-between pt-1">
                                        <span>Sabtu - Ahad:</span>{' '}
                                        <span className="font-semibold text-foreground">
                                            Libur{' '}
                                            <span className="text-xs font-normal">
                                                (Kecuali ada event)
                                            </span>
                                        </span>
                                    </li>
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
                            <div className="mb-6 flex items-center gap-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                                <CheckCircle className="h-5 w-5 shrink-0" />
                                {flash.success}
                            </div>
                        )}
                        <form
                            className="flex flex-1 flex-col justify-between space-y-5"
                            onSubmit={handleSubmit}
                        >
                            <div className="space-y-5">
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground">
                                            Nama Lengkap
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                                            placeholder="Masukkan nama"
                                            value={data.nama}
                                            onChange={(e) => setData('nama', e.target.value)}
                                        />
                                        {errors.nama && <p className="text-xs text-red-500">{errors.nama}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground">
                                            No. WhatsApp
                                        </label>
                                        <input
                                            type="tel"
                                            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                                            placeholder="08xx-xxxx-xxxx"
                                            value={data.telepon}
                                            onChange={(e) => setData('telepon', e.target.value)}
                                        />
                                        {errors.telepon && <p className="text-xs text-red-500">{errors.telepon}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground">
                                            Alamat Email{' '}
                                            <span className="font-normal text-muted-foreground">
                                                (Opsional)
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                                            placeholder="email@contoh.com"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                        />
                                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground">
                                            Kategori Layanan
                                        </label>
                                        <select
                                            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                                            value={data.subjek}
                                            onChange={(e) => setData('subjek', e.target.value)}
                                        >
                                            <option value="">
                                                Pilih Kategori...
                                            </option>
                                            <option value="Pengaduan Fasilitas">
                                                Pengaduan Fasilitas
                                            </option>
                                            <option value="Konsultasi Agama/Ibadah">
                                                Konsultasi Agama/Ibadah
                                            </option>
                                            <option value="Informasi Program">
                                                Informasi Program
                                            </option>
                                            <option value="Saran & Masukan Umum">
                                                Saran & Masukan Umum
                                            </option>
                                        </select>
                                        {errors.subjek && <p className="text-xs text-red-500">{errors.subjek}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground">
                                        Pesan / Detail Laporan
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                                        placeholder="Tuliskan detail pesan atau aduan Anda di sini..."
                                        value={data.pesan}
                                        onChange={(e) => setData('pesan', e.target.value)}
                                    ></textarea>
                                    {errors.pesan && <p className="text-xs text-red-500">{errors.pesan}</p>}
                                </div>
                            </div>

                            <div className="mt-auto pt-4 lg:pt-0">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg disabled:opacity-50"
                                >
                                    <span>{processing ? 'Mengirim...' : 'Kirim Laporan'}</span>
                                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button>

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
