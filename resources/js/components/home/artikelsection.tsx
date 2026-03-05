import { ArrowRight, User, BookOpen } from "lucide-react";

export default function ArtikelSection() {
    return (
        <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="mb-16 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
                    <div className="max-w-2xl">
                        <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                Lentera Hati
                            </span>
                        </div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            Artikel &{' '}
                            <span className="font-serif text-muted-foreground italic">
                                Opini Islam
                            </span>
                        </h2>
                    </div>

                    <a
                        href="#"
                        className="group flex h-14 shrink-0 items-center justify-center gap-3 rounded-full border border-border bg-card px-6 font-bold text-foreground shadow-sm transition-all hover:bg-foreground hover:text-background hover:shadow-md"
                    >
                        Semua Artikel
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            category: 'Tazkiyatun Nafs',
                            title: 'Menjaga Hati di Era Digital: Tantangan Generasi Milenial',
                            author: 'Ust. H. Ahmad Fulan',
                            date: '05 Mar 2026',
                            readTime: '4 Min Read',
                            excerpt:
                                'Kemajuan teknologi ibarat pisau bermata dua. Di satu sisi memudahkan akses ilmu, di sisi lain menjadi pintu masuk segala syubhat dan syahwat jika tak dibentengi iman.',
                        },
                        {
                            category: 'Fiqih Keseharian',
                            title: 'Hukum Jual Beli Online dengan Sistem Dropship dalam Pandangan Islam',
                            author: 'Dr. KH. Abdullah M.',
                            date: '01 Mar 2026',
                            readTime: '6 Min Read',
                            excerpt:
                                'Sistem dropship marak digunakan oleh masyarakat. Namun, bagaimana fiqih muamalah kontemporer membedah status kepemilikan dan syarat sah transaksi ini?',
                        },
                        {
                            category: 'Keluarga Sakinah',
                            title: 'Membangun Karakter Anak Melalui Teladan Rasulullah SAW',
                            author: 'Hj. Ummu Kultsum, S.Ag',
                            date: '26 Feb 2026',
                            readTime: '5 Min Read',
                            excerpt:
                                'Pendidikan terbaik bukanlah sekadar masuk ke sekolah elit melaikan keteladanan yang dimulai dari rumah. Rasulullah telah memberikan blueprint pendidikan keluarga yang sempurna.',
                        },
                    ].map((article, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="group relative flex min-h-75 flex-col justify-between overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-zinc-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-8 dark:border-zinc-800/50 dark:bg-zinc-900"
                        >
                            {/* Grid Texture Background */}
                            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)] bg-size-[24px_24px] opacity-60 transition-opacity duration-500 group-hover:opacity-100 dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>

                            <div className="relative z-10">
                                <span className="mb-5 inline-block rounded-full bg-emerald-50 border border-emerald-100/50 px-3 py-1 text-xs font-bold tracking-widest text-emerald-600 uppercase shadow-sm dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400">
                                    {article.category}
                                </span>
                                <h3 className="mb-4 line-clamp-3 text-xl leading-tight font-bold text-foreground transition-colors group-hover:text-primary">
                                    {article.title}
                                </h3>
                                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                                    {article.excerpt}
                                </p>
                            </div>

                            <div className="relative z-10 mt-auto border-t border-border/60 pt-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm border border-zinc-100 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950">
                                        <User className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                                            {article.author}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                            <span>{article.date}</span>
                                            <span className="h-1 w-1 rounded-full bg-border"></span>
                                            <span className="flex items-center gap-1">
                                                <BookOpen className="h-3 w-3" />{' '}
                                                {article.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
    );
}
