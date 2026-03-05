export default function SekapurSirihSection() {
    return (
        <section className="relative z-10 mx-auto max-w-380 px-4 py-24">
                {/* Outer Glow behind the card */}
                <div className="absolute top-1/2 left-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"></div>

                <div className="group relative overflow-hidden rounded-[3rem] bg-linear-to-br from-zinc-50 to-zinc-100/50 p-[1.5px] shadow-2xl shadow-primary/5 transition-transform duration-500 hover:shadow-primary/10 dark:from-zinc-900 dark:to-zinc-950/50 dark:shadow-none">
                    <div className="relative grid overflow-hidden rounded-[2.9rem] bg-card lg:grid-cols-12">
                        {/* Abstract Background pattern for text column */}
                        <div className="pointer-events-none absolute right-0 bottom-0 z-0 h-200 w-200 translate-x-1/3 translate-y-1/3 rounded-full bg-linear-to-tr from-primary/10 to-primary/5 blur-[80px] transition-transform duration-700 group-hover:scale-110" />

                        {/* Image Column */}
                        <div className="relative col-span-1 flex items-end justify-center overflow-hidden bg-linear-to-t from-primary/10 via-primary/5 to-transparent pt-12 sm:px-8 lg:col-span-5 lg:pt-16">
                            {/* Inner Radial Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(var(--color-primary),0.15),transparent_70%)]"></div>

                            {/* Decorative Elements */}
                            <svg
                                className="absolute top-20 -left-12 z-0 h-40 w-40 text-primary/10 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12"
                                viewBox="0 0 100 100"
                                fill="currentColor"
                            >
                                <circle cx="50" cy="50" r="50" />
                            </svg>
                            <svg
                                className="absolute -right-8 bottom-32 z-0 h-24 w-24 text-primary/30 transition-transform duration-700 group-hover:rotate-45"
                                viewBox="0 0 100 100"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeDasharray="8 8"
                            >
                                <circle cx="50" cy="50" r="48" />
                            </svg>

                            <img
                                src="/images/pose_change_4.png"
                                alt="H.M. Wiyatno, S.P."
                                className="relative z-10 h-auto max-h-180 w-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-[1.02]"
                            />

                            {/* Floating Glassmorphism Badge */}
                            <div className="absolute bottom-8 z-20 mx-auto w-max max-w-[90%] transform rounded-full border border-white/40 bg-white/70 px-8 py-4 text-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-white/50 backdrop-blur-xl transition-all duration-500 ring-inset hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(var(--color-primary),0.2)] dark:border-white/10 dark:bg-zinc-950/70 dark:ring-white/10">
                                <h3 className="text-xl font-bold tracking-wide text-foreground">
                                    H.M. Wiyatno, S.P.
                                </h3>
                                <div className="mt-1.5 flex items-center justify-center gap-2">
                                    <span className="h-1 w-8 rounded-full bg-primary/40"></span>
                                    <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                                        Ketua Umum BPMA Al-Mukarram Amanah
                                    </p>
                                    <span className="h-1 w-8 rounded-full bg-primary/40"></span>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="relative z-10 col-span-1 flex flex-col justify-center p-8 sm:p-14 lg:col-span-7 lg:px-20 lg:py-16">
                            {/* Accent line & Badge */}
                            <div className="mb-10 flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                                    <span className="h-1.5 w-8 rounded-full bg-primary"></span>
                                </div>
                                <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                    Sekapur Sirih
                                </span>
                            </div>

                            <div className="relative">
                                {/* Decorative Big Quote */}
                                <span className="absolute -top-20 -left-12 font-serif text-[12rem] leading-none text-primary/5 transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-105 dark:text-primary/10">
                                    "
                                </span>

                                <h2 className="relative z-10 mb-8 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:leading-[1.1]">
                                    Assalamu'alaikum{' '}
                                    <br className="hidden lg:block" />
                                    <span className="bg-linear-to-r from-primary via-primary to-primary/50 bg-clip-text text-transparent drop-shadow-sm">
                                        Wr. Wb.
                                    </span>
                                </h2>

                                <div className="relative z-10 space-y-6 text-lg leading-relaxed text-foreground/80">
                                    <p className="font-semibold text-foreground">
                                        Dengan penuh rasa syukur dan kebanggaan,
                                        kami mengucapkan selamat datang di
                                        website resmi{' '}
                                        <span className="text-primary">
                                            Masjid Agung Al-Mukarram Amanah
                                        </span>{' '}
                                        Kabupaten Kapuas.
                                    </p>
                                    <p>
                                        Website ini kami hadirkan sebagai media
                                        informasi, komunikasi, dan edukasi
                                        keislaman bagi seluruh jamaah serta
                                        masyarakat luas. Masjid ini tidak hanya
                                        berfungsi sebagai tempat ibadah, tetapi
                                        juga sebagai pusat dakwah, pembinaan
                                        umat, pendidikan Al-Qur'an, dan berbagai
                                        kegiatan sosial keagamaan lainnya.
                                    </p>
                                    <p>
                                        Melalui platform digital ini, kami ingin
                                        menghadirkan kemudahan bagi masyarakat
                                        untuk mengakses informasi seputar jadwal
                                        sholat, kegiatan masjid, kajian islami,
                                        layanan keagamaan, hingga dokumentasi
                                        program-program keumatan yang kami
                                        selenggarakan.
                                    </p>
                                </div>

                                <div className="relative z-10 mt-12 flex items-center gap-6 rounded-3xl bg-zinc-50/50 p-4 transition-colors hover:bg-zinc-100/50 sm:p-6 dark:bg-zinc-900/50 dark:hover:bg-zinc-900">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                            <path d="m9 12 2 2 4-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold tracking-tight text-foreground">
                                            Bersama, kita makmurkan masjid,
                                            makmurkan umat.
                                        </p>
                                        <p className="text-sm font-medium tracking-wider text-primary uppercase">
                                            Wassalamu'alaikum Wr. Wb.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}
