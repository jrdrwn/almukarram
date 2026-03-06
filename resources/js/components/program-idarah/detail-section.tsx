import { Settings, User } from 'lucide-react';

export default function DetailSection() {
    return (
        <section className="relative overflow-hidden py-24">
            <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-primary/5 to-transparent blur-[120px]"></div>

            <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        <div className="relative flex h-80 items-center justify-center rounded-3xl bg-linear-to-br from-[#e8f5ee] to-[#c8e6d0] shadow-sm">
                            <Settings className="h-32 w-32 text-primary opacity-35" />
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                            Tugas Pokok & Fungsi
                        </h2>
                        <div className="mb-6 h-1 w-20 rounded-full bg-primary" />

                        <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                            <strong className="text-foreground">Idarah</strong>{' '}
                            adalah bidang yang mengelola administrasi dan
                            manajemen operasional masjid secara keseluruhan,
                            meliputi tata kelola organisasi, keuangan, sumber
                            daya manusia, serta pendataan jamaah dan aset
                            masjid.
                        </p>
                        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                            Bidang ini memastikan seluruh roda organisasi BPMA
                            Al-Mukarram Amanah berjalan tertib, terstruktur, dan
                            akuntabel sesuai dengan prinsip tata kelola yang
                            baik.
                        </p>

                        <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white/50 p-4 shadow-xs backdrop-blur-xs dark:bg-zinc-900/50">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                <User className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">
                                    H. Asyhadi, M.Pd.
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    Ketua Bidang Idarah
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
