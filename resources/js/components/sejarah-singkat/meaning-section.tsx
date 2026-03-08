import { Shield, Star } from 'lucide-react';

export default function MeaningSection() {
    return (
        <section className="relative z-10 w-full py-16 sm:py-24">
            <div className="absolute inset-0 z-0 bg-zinc-50/50 dark:bg-zinc-900/10"></div>

            <div className="relative z-10 mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
                    <div className="group relative h-full overflow-hidden rounded-[3rem] bg-linear-to-br from-zinc-100 to-zinc-200/50 p-1 shadow-lg shadow-primary/5 transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 active:-translate-y-2 active:shadow-xl active:shadow-primary/10 dark:from-zinc-800 dark:to-zinc-900/50 dark:shadow-none">
                        <div className="relative h-full overflow-hidden rounded-[2.8rem] bg-card p-8 md:p-12">
                            <div className="pointer-events-none absolute -top-20 -right-20 z-0 h-64 w-64 rounded-full bg-primary/5 blur-[50px] transition-transform duration-700 group-hover:scale-150 group-active:scale-150" />

                            <div className="relative z-10">
                                <div className="mb-8 flex items-center gap-6">
                                    <div className="flex h-16 w-16 shrink-0 transform items-center justify-center rounded-3xl bg-linear-to-br from-primary to-primary/80 shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:rotate-12 group-active:rotate-12">
                                        <Star className="h-8 w-8 text-primary-foreground" />
                                    </div>
                                    <h5 className="m-0 text-3xl font-bold tracking-tight text-foreground">
                                        Makna Nama <br />
                                        <span className="text-primary">
                                            "Al-Mukarram"
                                        </span>
                                    </h5>
                                </div>
                                <p className="m-0 text-lg leading-loose text-muted-foreground">
                                    <strong className="text-foreground">
                                        Al-Mukarram
                                    </strong>{' '}
                                    <span className="font-serif text-xl">
                                        (الـمُكَـرَّم)
                                    </span>{' '}
                                    berasal dari kata bahasa Arab yang berarti{' '}
                                    <em className="font-medium text-foreground">
                                        "Yang Dimuliakan"
                                    </em>{' '}
                                    atau{' '}
                                    <em className="font-medium text-foreground">
                                        "Yang Dihormati"
                                    </em>
                                    . Nama ini dipilih sebagai doa dan harapan
                                    agar masjid ini senantiasa dimuliakan oleh
                                    Allah SWT, disambangi oleh orang-orang yang
                                    beriman, dan menjadi sumber keberkahan bagi
                                    seluruh masyarakat Kabupaten Kapuas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group relative h-full overflow-hidden rounded-[3rem] bg-linear-to-br from-zinc-100 to-zinc-200/50 p-1 shadow-lg shadow-primary/5 transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 active:-translate-y-2 active:shadow-xl active:shadow-primary/10 dark:from-zinc-800 dark:to-zinc-900/50 dark:shadow-none">
                        <div className="relative h-full overflow-hidden rounded-[2.8rem] bg-card p-8 md:p-12">
                            <div className="pointer-events-none absolute -top-20 -right-20 z-0 h-64 w-64 rounded-full bg-primary/5 blur-[50px] transition-transform duration-700 group-hover:scale-150 group-active:scale-150" />

                            <div className="relative z-10">
                                <div className="mb-8 flex items-center gap-6">
                                    <div className="flex h-16 w-16 shrink-0 transform items-center justify-center rounded-3xl bg-linear-to-br from-primary to-primary/80 shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:-rotate-12 group-active:-rotate-12">
                                        <Shield className="h-8 w-8 text-primary-foreground" />
                                    </div>
                                    <h5 className="m-0 text-3xl font-bold tracking-tight text-foreground">
                                        Makna Kata <br />
                                        <span className="text-primary">
                                            "Amanah"
                                        </span>
                                    </h5>
                                </div>
                                <p className="m-0 text-lg leading-loose text-muted-foreground">
                                    Kata{' '}
                                    <strong className="text-foreground">
                                        Amanah
                                    </strong>{' '}
                                    ditambahkan sebagai cerminan komitmen para
                                    pengurus dan seluruh jamaah dalam mengemban
                                    kepercayaan pengelolaan masjid dengan penuh
                                    tanggung jawab, transparansi, dan integritas
                                    — sebuah janji kepada Allah SWT dan kepada
                                    seluruh masyarakat Kabupaten Kapuas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
