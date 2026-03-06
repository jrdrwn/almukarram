export default function HeroSection() {
    return (
        <section className="relative z-10 w-full py-16 lg:py-24">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-primary/20 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                ></div>
            </div>

            <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-8">
                    <div className="w-full lg:w-5/12">
                        <div className="group relative overflow-hidden rounded-[3rem] bg-linear-to-br from-zinc-50 to-zinc-100/50 p-1 shadow-2xl shadow-primary/5 transition-transform duration-500 hover:shadow-primary/10 dark:from-zinc-900 dark:to-zinc-950/50 dark:shadow-none">
                            <div className="relative flex h-90 items-center justify-center overflow-hidden rounded-[2.8rem] bg-card md:h-115">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary),0.05),transparent_70%)]"></div>
                                <div className="pointer-events-none absolute right-0 bottom-0 z-0 h-full w-full bg-linear-to-br from-primary/10 to-primary/5 blur-2xl transition-transform duration-700 group-hover:scale-110" />
                                <i className="fas fa-mosque relative z-10 transform text-8xl text-primary/40 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 md:text-[10rem]"></i>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12 lg:pl-8">
                        <div className="mb-6 flex items-center justify-start gap-4">
                            <span className="h-0.5 w-12 rounded-full bg-primary"></span>
                            <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                Profil Masjid
                            </span>
                        </div>
                        <h2 className="mb-8 text-4xl leading-[1.1] font-black tracking-tight text-foreground md:text-5xl lg:text-6xl">
                            Sejarah Singkat
                            <br />
                            <span className="bg-linear-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                                Masjid Agung Al-Mukarram Amanah
                            </span>
                        </h2>
                        <p className="mt-4 mb-6 text-lg leading-relaxed text-muted-foreground">
                            Masjid Agung Al-Mukarram Amanah merupakan masjid
                            kebanggaan masyarakat Kabupaten Kapuas yang berdiri
                            megah di Komplek Islamic Center, Jl. Tambun Bungai,
                            Kuala Kapuas, Kalimantan Tengah. Diprakarsai oleh
                            para ulama dari Muhammadiyah dan Nahdlatul Ulama
                            sejak tahun 1987, masjid ini telah menjadi jantung
                            kegiatan keislaman di Bumi Tambun Bungai.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Diresmikan pada{' '}
                            <strong className="font-semibold text-foreground">
                                9 Maret 2013 / 26 Rabiul Akhir 1434 H
                            </strong>{' '}
                            oleh Bupati Kapuas{' '}
                            <strong className="font-semibold text-foreground">
                                Ir. H. Muhammad Mawardi, MM
                            </strong>
                            , masjid ini mampu menampung lebih dari{' '}
                            <strong className="font-semibold text-foreground">
                                10.631 jamaah
                            </strong>{' '}
                            — menjadikannya masjid termegah dan terbesar di Kota
                            Kuala Kapuas.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <div className="min-w-32.5 rounded-3xl border border-primary/10 bg-primary/10 px-6 py-5 text-center dark:bg-primary/5">
                                <div className="mb-1 text-3xl font-extrabold text-primary">
                                    1987
                                </div>
                                <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                                    Pencanangan
                                </div>
                            </div>
                            <div className="min-w-32.5 rounded-3xl border border-primary/10 bg-primary/10 px-6 py-5 text-center dark:bg-primary/5">
                                <div className="mb-1 text-3xl font-extrabold text-primary">
                                    10.631
                                </div>
                                <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                                    Kapasitas
                                </div>
                            </div>
                            <div className="min-w-32.5 rounded-3xl border border-primary/10 bg-primary/10 px-6 py-5 text-center dark:bg-primary/5">
                                <div className="mb-1 text-3xl font-extrabold text-primary">
                                    2013
                                </div>
                                <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                                    Diresmikan
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
