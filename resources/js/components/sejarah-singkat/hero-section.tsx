export default function HeroSection() {
    return (
        <section className="relative z-10 w-full py-16 lg:py-24">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-primary/20 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
            </div>

            <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
                    <div className="w-full lg:w-5/12">
                        <div className="group relative overflow-hidden rounded-[3rem] bg-linear-to-br from-zinc-50 to-zinc-100/50 p-1 shadow-2xl shadow-primary/5 transition-transform duration-500 hover:shadow-primary/10 dark:from-zinc-900 dark:to-zinc-950/50 dark:shadow-none">
                            <div className="flex items-center justify-center rounded-[2.8rem] h-90 md:h-115 bg-card overflow-hidden relative">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary),0.05),transparent_70%)]"></div>
                                <div className="pointer-events-none absolute right-0 bottom-0 z-0 h-full w-full bg-linear-to-br from-primary/10 to-primary/5 blur-2xl transition-transform duration-700 group-hover:scale-110" />
                                <i className="fas fa-mosque text-primary/40 text-8xl md:text-[10rem] transform transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 relative z-10"></i>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12 lg:pl-8">
                        <div className="mb-6 flex items-center justify-start gap-4">
                            <span className="h-0.5 w-12 bg-primary rounded-full"></span>
                            <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                Profil Masjid
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight text-foreground leading-[1.1]">
                            Sejarah Singkat<br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-400">Masjid Agung Al-Mukarram Amanah</span>
                        </h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed mb-6 text-lg">
                            Masjid Agung Al-Mukarram Amanah merupakan masjid kebanggaan masyarakat Kabupaten Kapuas yang berdiri megah di Komplek Islamic Center, Jl. Tambun Bungai, Kuala Kapuas, Kalimantan Tengah. Diprakarsai oleh para ulama dari Muhammadiyah dan Nahdlatul Ulama sejak tahun 1987, masjid ini telah menjadi jantung kegiatan keislaman di Bumi Tambun Bungai.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            Diresmikan pada <strong className="text-foreground font-semibold">9 Maret 2013 / 26 Rabiul Akhir 1434 H</strong> oleh Bupati Kapuas <strong className="text-foreground font-semibold">Ir. H. Muhammad Mawardi, MM</strong>, masjid ini mampu menampung lebih dari <strong className="text-foreground font-semibold">10.631 jamaah</strong> — menjadikannya masjid termegah dan terbesar di Kota Kuala Kapuas.
                        </p>
                        <div className="flex gap-4 mt-10 flex-wrap">
                            <div className="px-6 py-5 rounded-3xl text-center bg-primary/10 min-w-32.5 dark:bg-primary/5 border border-primary/10">
                                <div className="font-extrabold text-3xl text-primary mb-1">1987</div>
                                <div className="text-muted-foreground text-xs font-bold uppercase tracking-wider">Pencanangan</div>
                            </div>
                            <div className="px-6 py-5 rounded-3xl text-center bg-primary/10 min-w-32.5 dark:bg-primary/5 border border-primary/10">
                                <div className="font-extrabold text-3xl text-primary mb-1">10.631</div>
                                <div className="text-muted-foreground text-xs font-bold uppercase tracking-wider">Kapasitas</div>
                            </div>
                            <div className="px-6 py-5 rounded-3xl text-center bg-primary/10 min-w-32.5 dark:bg-primary/5 border border-primary/10">
                                <div className="font-extrabold text-3xl text-primary mb-1">2013</div>
                                <div className="text-muted-foreground text-xs font-bold uppercase tracking-wider">Diresmikan</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
