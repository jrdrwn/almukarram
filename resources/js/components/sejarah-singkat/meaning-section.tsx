import { Shield, Star } from "lucide-react";

export default function MeaningSection() {
    return (
        <section className="relative z-10 w-full py-16 sm:py-24">
            <div className="absolute inset-0 z-0 bg-zinc-50/50 dark:bg-zinc-900/10"></div>

            <div className="relative z-10 mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    <div className="group relative h-full overflow-hidden rounded-[3rem] bg-linear-to-br from-zinc-100 to-zinc-200/50 p-1 shadow-lg shadow-primary/5 transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 dark:from-zinc-800 dark:to-zinc-900/50 dark:shadow-none">
                        <div className="relative h-full p-8 md:p-12 bg-card rounded-[2.8rem] overflow-hidden">
                            <div className="pointer-events-none absolute -right-20 -top-20 z-0 h-64 w-64 rounded-full bg-primary/5 blur-[50px] transition-transform duration-700 group-hover:scale-150" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-16 h-16 rounded-3xl bg-linear-to-br from-primary to-primary/80 flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 transform transition-transform duration-500 group-hover:rotate-12">
                                        <Star className="text-primary-foreground w-8 h-8" />
                                    </div>
                                    <h5 className="font-bold text-3xl m-0 text-foreground tracking-tight">Makna Nama <br/><span className="text-primary">"Al-Mukarram"</span></h5>
                                </div>
                                <p className="text-muted-foreground leading-loose m-0 text-lg">
                                    <strong className="text-foreground">Al-Mukarram</strong> <span className="font-serif text-xl">(الـمُكَـرَّم)</span> berasal dari kata bahasa Arab yang berarti <em className="text-foreground font-medium">"Yang Dimuliakan"</em> atau <em className="text-foreground font-medium">"Yang Dihormati"</em>. Nama ini dipilih sebagai doa dan harapan agar masjid ini senantiasa dimuliakan oleh Allah SWT, disambangi oleh orang-orang yang beriman, dan menjadi sumber keberkahan bagi seluruh masyarakat Kabupaten Kapuas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group relative h-full overflow-hidden rounded-[3rem] bg-linear-to-br from-zinc-100 to-zinc-200/50 p-1 shadow-lg shadow-primary/5 transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 dark:from-zinc-800 dark:to-zinc-900/50 dark:shadow-none">
                        <div className="relative h-full p-8 md:p-12 bg-card rounded-[2.8rem] overflow-hidden">
                            <div className="pointer-events-none absolute -right-20 -top-20 z-0 h-64 w-64 rounded-full bg-primary/5 blur-[50px] transition-transform duration-700 group-hover:scale-150" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-16 h-16 rounded-3xl bg-linear-to-br from-primary to-primary/80 flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 transform transition-transform duration-500 group-hover:-rotate-12">
                                        <Shield className="text-primary-foreground w-8 h-8" />
                                    </div>
                                    <h5 className="font-bold text-3xl m-0 text-foreground tracking-tight">Makna Kata <br/><span className="text-primary">"Amanah"</span></h5>
                                </div>
                                <p className="text-muted-foreground leading-loose m-0 text-lg">
                                    Kata <strong className="text-foreground">Amanah</strong> ditambahkan sebagai cerminan komitmen para pengurus dan seluruh jamaah dalam mengemban kepercayaan pengelolaan masjid dengan penuh tanggung jawab, transparansi, dan integritas — sebuah janji kepada Allah SWT dan kepada seluruh masyarakat Kabupaten Kapuas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
