import { Link } from '@inertiajs/react';
import { ChevronRight, Lock, Mail, MapPin, Phone } from 'lucide-react';
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden border-t border-border bg-white dark:bg-zinc-950">
            {/* Background Texture & Ambient Gradient */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-[0.2] mix-blend-multiply dark:opacity-[0.02] dark:mix-blend-screen"></div>
            <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-150 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]"></div>

            {/* Top Minimalist Gradient Line */}
            {/* <div className=" z-10 absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600"></div> */}

            <div className="relative z-10 container mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8">
                {/* Section 1: Top Center Quote (Elegant Focus) */}
                <div className="mb-20 flex flex-col items-center justify-center text-center">
                    <svg
                        className="mb-6 h-8 w-8 text-emerald-500/30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="max-w-4xl font-serif text-xl leading-relaxed text-foreground/90 italic sm:text-2xl">
                        "Sesungguhnya yang memakmurkan masjid-masjid Allah
                        hanyalah orang-orang yang beriman kepada Allah dan hari
                        akhir, serta tetap mendirikan shalat, menunaikan zakat
                        dan tidak takut (kepada siapapun) selain kepada
                        Allah..."
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                        <span className="h-px w-12 bg-border"></span>
                        <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-500">
                            QS. At-Taubah: 18
                        </span>
                        <span className="h-px w-12 bg-border"></span>
                    </div>
                </div>

                {/* Section 2: Main Footer Grid (Classic 4 Columns) */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {/* Brand & Bio */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                                <img
                                    src="/images/logomasjid.png"
                                    alt="Logo Masjid"
                                    className="h-8 w-auto dark:brightness-0 dark:invert"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                            <div>
                                <h2 className="text-base leading-tight font-bold text-foreground">
                                    Masjid Agung
                                </h2>
                                <h2 className="text-base leading-tight font-black tracking-tight text-emerald-600  dark:text-emerald-500">
                                    Al-Mukarram Amanah
                                </h2>
                            </div>
                        </div>
                        <p className="pr-4 text-sm leading-relaxed text-muted-foreground">
                            Menjadi pusat peribadatan dan peradaban umat yang
                            ramah, nyaman, dan memberdayakan untuk masyarakat
                            Kabupaten Kapuas dan sekitarnya.
                        </p>

                        {/* Social Media Links inline */}
                        <div className="mt-2 flex gap-3">
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:border-emerald-900 dark:hover:bg-emerald-950/50"
                            >
                                <FaInstagram className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-[#0866FF] dark:hover:border-blue-900 dark:hover:bg-blue-950/30"
                            >
                                <FaFacebookF className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-red-200 hover:bg-red-50 hover:text-[#FF0000] dark:hover:border-red-900 dark:hover:bg-red-950/30"
                            >
                                <FaYoutube className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Navigasi */}
                    <div className="lg:pl-8">
                        <h3 className="mb-6 text-sm font-bold tracking-widest text-foreground uppercase">
                            Menu Utama
                        </h3>
                        <ul className="flex flex-col gap-3.5">
                            {[
                                { name: 'Beranda Utama', href: '/' },
                                {
                                    name: 'Sejarah Singkat Masjid',
                                    href: '/sejarah-singkat',
                                },
                                {
                                    name: 'Struktur Pengurus',
                                    href: '/struktur-organisasi',
                                },
                                { name: 'Berita & Artikel', href: '/berita' },
                                { name: 'Galeri Kegiatan', href: '/galeri' },
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                                    >
                                        <ChevronRight className="h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                        <span className="-translate-x-3 transition-transform group-hover:translate-x-0">
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Layanan */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold tracking-widest text-foreground uppercase">
                            Layanan Kami
                        </h3>
                        <ul className="flex flex-col gap-3.5">
                            {[
                                { name: 'Jadwal Sholat', href: '/jadwal-sholat' },
                                { name: 'Kajian & Dakwah', href: '/jadwal-pengajian' },
                                { name: 'Layanan ZISWAF', href: '/zis' },
                                {
                                    name: 'Konsultasi Agama',
                                    href: '/layanan-konsultasi',
                                },
                                {
                                    name: 'Pengaduan Jamaah',
                                    href: '/kontak',
                                },
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                                    >
                                        <ChevronRight className="h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                        <span className="-translate-x-3 transition-transform group-hover:translate-x-0">
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Let's Talk */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold tracking-widest text-foreground uppercase">
                            Kontak Kami
                        </h3>
                        <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
                            <li className="flex items-start gap-4">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                                <span className="leading-relaxed">
                                    Jl. Tambun Bungai, Komplek Islamic Center,
                                    Selat, Kab. Kapuas, Kalteng
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="h-4 w-4 shrink-0 text-emerald-500" />
                                <span>(0513) 24246</span>
                            </li>
                            <li className="group flex items-center gap-4">
                                <FaWhatsapp className="h-4 w-4 shrink-0 text-[#25D366]" />
                                <a
                                    href="https://wa.me/6281348521955"
                                    className="transition-colors group-hover:text-foreground"
                                >
                                    0813 4852 1955
                                </a>
                            </li>
                            <li className="group flex items-center gap-4">
                                <Mail className="h-4 w-4 shrink-0 text-emerald-500" />
                                <a
                                    href="mailto:masjid.almukarram132@gmail.com"
                                    className="truncate transition-colors group-hover:text-foreground"
                                >
                                    masjid.almukarram132@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* Radio Banner */}
                        <div className="mt-8 flex w-max items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-50/50 px-4 py-2 dark:bg-emerald-500/10">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase dark:text-emerald-400">
                                Radio Siar: 90.5 FM
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="relative z-10 mt-4 border-t border-border bg-emerald-50/50 backdrop-blur-sm dark:bg-emerald-950/20">
                <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
                    <p className="text-center text-xs font-medium text-muted-foreground md:text-left">
                        {new Date().getFullYear()} Masjid Agung Al-Mukarram
                        Amanah. Hak Cipta Dilindungi.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        <Link
                            href="/privacy"
                            className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Kebijakan Privasi
                        </Link>
                        <span className="h-3 w-px bg-border"></span>
                        <Link
                            href="/terms"
                            className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Syarat Penggunaan
                        </Link>
                        <span className="h-3 w-px bg-border"></span>
                        <a
                            href="/admin"
                            className="group flex items-center gap-1.5 text-xs font-bold text-muted-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                        >
                            <Lock className="h-3 w-3" />
                            Admin Panel
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
