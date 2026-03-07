import { Head } from '@inertiajs/react';
import { ALargeSmall } from 'lucide-react';
import { useState } from 'react';

import ArticleContent from '@/components/berita-detail/article-content';
import type { BeritaDetail } from '@/components/berita-detail/article-hero';
import ArticleHero from '@/components/berita-detail/article-hero';
import type { RelatedBerita } from '@/components/berita-detail/article-related';
import ArticleRelated from '@/components/berita-detail/article-related';
import ArticleShare from '@/components/berita-detail/article-share';
import ArticleSidebar from '@/components/berita-detail/article-sidebar';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

interface BeritaDetailPageProps {
    berita?: BeritaDetail;
    related?: RelatedBerita[];
    latest?: {
        id: number;
        judul: string;
        slug: string;
        gambar?: string;
        created_at: string;
    }[];
    jadwal?: Record<string, string>;
}

// ─── MOCK DATA ────────────────────────────────────────────────────────────────
const MOCK_BERITA: BeritaDetail = {
    id: 1,
    slug: 'kegiatan-ramadhan-1447-h',
    judul: 'Rangkaian Kegiatan Menyambut Bulan Suci Ramadhan 1447 H di Masjid Agung Al-Mukarram Amanah',
    penulis: 'Admin Masjid',
    gambar: undefined,
    created_at: '2026-03-01',
    views: 125,
    isi: `<p>Dalam rangka menyambut bulan suci Ramadhan 1447 H, Pengurus Masjid Agung Al-Mukarram Amanah telah menyiapkan serangkaian program unggulan yang dirancang untuk memaksimalkan ibadah seluruh jamaah sepanjang bulan yang penuh berkah ini.</p>
<h3>Program Kajian Ramadhan</h3>
<p>Kajian ba'da Subuh akan diisi oleh para ustadz berpengalaman dengan materi yang menyentuh hati dan menguatkan iman. Selain itu, kajian kitab kuning juga dijadwalkan ba'da Ashar setiap hari.</p>
<h3>Iftar Jama'i</h3>
<p>Pengurus menyediakan iftar jama'i (buka puasa bersama) setiap hari selama Ramadhan. Masyarakat umum dipersilakan hadir dan turut menikmati hidangan yang disediakan secara sukarela oleh para donatur.</p>
<h3>Tarawih Bersanad</h3>
<p>Sholat Tarawih 23 rakaat akan dipimpin oleh imam-imam hafizh bersertifikat sanad Al-Qur'an, lengkap dengan tadarus Al-Qur'an selesai tiap 3 malam.</p>
<h3>I'tikaf 10 Malam Terakhir</h3>
<p>Bagi yang ingin menghidupkan 10 malam terakhir Ramadhan, masjid mebuka pendaftaran i'tikaf mulai tanggal 20 Ramadhan. Fasilitas yang disediakan meliputi tempat istirahat, sahur bersama, dan bimbingan spiritual.</p>
<p>Seluruh kegiatan ini terbuka untuk umum. Informasi lebih lanjut dapat menghubungi sekretariat masjid atau mengikuti pengumuman resmi di papan informasi.</p>`,
    kategori: 'Kegiatan',
    kat_slug: 'kegiatan',
};

const MOCK_RELATED: RelatedBerita[] = [
    {
        id: 2,
        judul: 'Progres Pemeliharaan Kubah Utama dan Pengecatan Ulang Menara',
        slug: 'pemeliharaan-kubah-masjid',
        created_at: '2026-02-28',
    },
    {
        id: 3,
        judul: 'Penerimaan Zakat Fitrah dan Fidyah Tahun Ini Resmi Dibuka',
        slug: 'penerimaan-zakat-fitrah',
        created_at: '2026-02-25',
    },
    {
        id: 4,
        judul: "Jadwal Lengkap Kajian Mingguan Ba'da Maghrib",
        slug: 'jadwal-kajian-mingguan',
        created_at: '2026-01-05',
    },
];

const MOCK_LATEST = [
    {
        id: 1,
        judul: 'Rangkaian Kegiatan Menyambut Bulan Suci Ramadhan 1447 H',
        slug: 'kegiatan-ramadhan-1447-h',
        created_at: '2026-03-01',
    },
    {
        id: 2,
        judul: 'Progres Pemeliharaan Kubah Utama dan Pengecatan Ulang Menara',
        slug: 'pemeliharaan-kubah-masjid',
        created_at: '2026-02-28',
    },
    {
        id: 3,
        judul: 'Penerimaan Zakat Fitrah dan Fidyah Tahun Ini Resmi Dibuka',
        slug: 'penerimaan-zakat-fitrah',
        created_at: '2026-02-25',
    },
    {
        id: 4,
        judul: 'Profil Imam Besar Masjid Agung Al-Mukarram Amanah',
        slug: 'profil-imam-besar',
        created_at: '2025-11-10',
    },
    {
        id: 5,
        judul: "Jadwal Lengkap Kajian Mingguan Ba'da Maghrib",
        slug: 'jadwal-kajian-mingguan',
        created_at: '2026-01-05',
    },
    {
        id: 6,
        judul: 'Laporan Keuangan Masjid Triwulan I 2026',
        slug: 'laporan-keuangan-2026-q1',
        created_at: '2026-02-10',
    },
];

const MOCK_JADWAL: Record<string, string> = {
    subuh: '04:15',
    terbit: '05:32',
    dhuha: '05:58',
    dzuhur: '11:40',
    ashar: '14:48',
    maghrib: '17:45',
    isya: '18:55',
};
// ─────────────────────────────────────────────────────────────────────────────

export default function BeritaDetailPage({
    berita,
    related,
    latest,
    jadwal,
}: BeritaDetailPageProps) {
    const [fontSize, setFontSize] = useState(1);

    const _berita = berita ?? MOCK_BERITA;
    const _related =
        related && related.length > 0 ? related : MOCK_RELATED;
    const _latest =
        latest && latest.length > 0 ? latest : MOCK_LATEST;
    const _jadwal =
        jadwal && Object.keys(jadwal).length > 0 ? jadwal : MOCK_JADWAL;

    return (
        <>
            <Head title={`${_berita.judul} | Masjid Agung Al-Mukarram`} />
            <Header />

            {/* Page Hero with background-image, overlay, breadcrumb, meta */}
            <ArticleHero berita={_berita} />

            {/* Main Body */}
            <main className="relative flex-1 overflow-hidden py-12 lg:py-16">
                {/* Background texture */}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[32px_32px]" />
                <div className="pointer-events-none absolute top-0 left-0 -z-10 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[100px]" />

                <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                    <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                        {/* Article Column */}
                        <div className="flex flex-col gap-6 lg:col-span-8">
                            {/* Article Body */}
                            <ArticleContent
                                berita={_berita}
                                fontSize={fontSize}
                            />

                            {/* Share */}
                            <ArticleShare
                                judul={_berita.judul}
                                slug={_berita.slug}
                            />

                            {/* Related News */}
                            <ArticleRelated items={_related} />
                        </div>

                        {/* Sidebar Column */}
                        <div className="lg:col-span-4">
                            <ArticleSidebar
                                jadwal={_jadwal}
                                latest={_latest}
                                currentSlug={_berita.slug}
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* Arabesque texture overlay */}
            <div
                className="pointer-events-none fixed inset-0 -z-1 opacity-[0.4] dark:opacity-[0.02]"
                style={{
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                }}
            />

            {/* Font size accessibility button */}
            <div className="fixed right-6 bottom-6 z-50">
                <div className="flex flex-col gap-1.5 overflow-hidden rounded-2xl border border-border bg-white/80 p-2 shadow-lg backdrop-blur-xl dark:bg-zinc-900/80">
                    <span className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                        <ALargeSmall className="h-3 w-3" />
                        Font
                    </span>
                    <button
                        onClick={() =>
                            setFontSize((p) => Math.min(2, +(p + 0.1).toFixed(1)))
                        }
                        className="rounded-xl bg-emerald-50 px-3 py-1.5 text-sm font-extrabold text-emerald-700 transition hover:bg-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:hover:bg-emerald-900/40"
                        aria-label="Perbesar font"
                    >
                        A+
                    </button>
                    <button
                        onClick={() =>
                            setFontSize((p) => Math.max(0.8, +(p - 0.1).toFixed(1)))
                        }
                        className="rounded-xl bg-zinc-100 px-3 py-1.5 text-sm font-bold text-zinc-600 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                        aria-label="Perkecil font"
                    >
                        A-
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
}
