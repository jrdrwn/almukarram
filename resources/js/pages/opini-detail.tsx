import { Head } from '@inertiajs/react';
import { ALargeSmall } from 'lucide-react';
import { useState } from 'react';

import OpiniContent from '@/components/opini-detail/opini-content';
import type { OpiniDetail } from '@/components/opini-detail/opini-hero';
import OpiniHero from '@/components/opini-detail/opini-hero';
import type { RelatedOpini } from '@/components/opini-detail/opini-related';
import OpiniRelated from '@/components/opini-detail/opini-related';
import OpiniShare from '@/components/opini-detail/opini-share';
import OpiniDetailSidebar from '@/components/opini-detail/opini-sidebar';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

interface OpiniDetailPageProps {
    opini?: OpiniDetail;
    related?: RelatedOpini[];
    latest?: RelatedOpini[];
}

// ─── MOCK DATA ────────────────────────────────────────────────────────────────
const MOCK_OPINI: OpiniDetail = {
    slug: 'menjaga-hati-di-era-digital',
    category: 'Tazkiyatun Nafs',
    title: 'Menjaga Hati di Era Digital: Tantangan Generasi Milenial',
    author: 'Ust. H. Ahmad Fulan',
    date: '05 Mar 2026',
    readTime: '4 Min Read',
    authorBio:
        'Ustadz H. Ahmad Fulan adalah pengajar ilmu tazkiyatun nafs di Masjid Agung Al-Mukarram Amanah. Beliau aktif menulis dan mengisi kajian rutin setiap pekan.',
    excerpt:
        'Kemajuan teknologi ibarat pisau bermata dua. Di satu sisi memudahkan akses ilmu, di sisi lain menjadi pintu masuk segala syubhat dan syahwat jika tak dibentengi iman.',
    isi: `<p>Kemajuan teknologi informasi dalam dua dekade terakhir telah mengubah wajah kehidupan manusia secara fundamental. Smartphone yang kita genggam setiap hari adalah pintu masuk ke hampir seluruh informasi yang pernah ada di muka bumi ini. Namun di balik kemudahan itu, tersimpan ujian yang tidak kecil—terutama bagi generasi milenial dan generasi Z yang tumbuh bersama layar sentuh.</p>

<h3>Syubhat yang Mengalir Deras</h3>

<p>Salah satu tantangan terbesar di era digital adalah banjirnya syubhat—kesamaran dalam akidah dan pemahaman agama. Konten-konten berisi keragu-raguan tentang Islam tersebar begitu mudah, dikemas dengan tampilan menarik, disampaikan oleh orang-orang yang terkesan berwibawa, dan di-share jutaan kali hingga terasa seperti "kebenaran umum".</p>

<p>Imam Ibnul Qayyim rahimahullah dalam Ighatsatul Lahfan menjelaskan bahwa hati ibarat cermin. Jika terus-menerus tercoreng noda, kilauannya akan padam. Di era digital, "noda" itu hadir dalam wujud konten meragukan yang kita konsumsi tanpa filter setiap harinya.</p>

<h3>Syahwat yang Terorganisir</h3>

<p>Belum lagi soal syahwat. Platform digital dirancang secara algoritmis untuk menjaga kita tetap terpaku pada layar selama mungkin. Konten yang merangsang nafsu—apapun bentuknya—diprioritaskan karena ia menambah engagement. Kita seolah-olah memilih, padahal sejatinya sedang diarahkan.</p>

<p>Rasulullah ﷺ bersabda: <em>"Tidaklah anak Adam memenuhi wadah yang lebih buruk dari perutnya. Cukuplah bagi anak Adam beberapa suap yang menegakkan punggungnya."</em> (HR. Tirmidzi). Prinsip ini berlaku pula untuk konsumsi digital: tidak semua yang tersedia perlu dikonsumsi.</p>

<h3>Kuncinya: Muraqabatullah</h3>

<p>Solusi tertinggi adalah menanamkan kesadaran bahwa Allah senantiasa mengawasi—<em>muraqabatullah</em>. Ketika seseorang benar-benar merasakan kehadiran Allah dalam setiap scroll, setiap klik, dan setiap detik online-nya, maka ia akan lebih selektif.</p>

<p>Imam Al-Harawi mendefinisikan muraqabah sebagai: <em>"Ilmu hamba bahwa Allah selalu melihat batin dan zahirnya."</em> Ini bukan sekadar teori, melainkan latihan jiwa yang harus dibiasakan.</p>

<h3>Langkah Praktis</h3>

<ul>
<li><strong>Audit konten yang dikonsumsi.</strong> Periksa akun yang diikuti. Apakah mendatangkan ilmu dan inspirasi, atau justru kebingungan dan syahwat?</li>
<li><strong>Jadwalkan waktu offline.</strong> Sisihkan waktu tanpa gadget, terutama setelah subuh dan sebelum tidur, untuk isi ulang rohani.</li>
<li><strong>Ikuti kajian ilmiah yang bersanad.</strong> Jangan jadikan konten viral sebagai satu-satunya sumber ilmu agama.</li>
<li><strong>Banyak berzikir.</strong> Zikir adalah tameng jiwa. Semakin sering lisannya basah dengan zikir, semakin kuat benteng hatinya dari bisikan yang merusak.</li>
</ul>

<p>Semoga Allah senantiasa menjaga hati kita dalam keistiqamahan dan menjauhkan kita dari segala yang merusak iman. Aamiin.</p>`,
};

const MOCK_RELATED: RelatedOpini[] = [
    {
        slug: 'hukum-jual-beli-dropship',
        category: 'Fiqih Keseharian',
        title: 'Hukum Jual Beli Online dengan Sistem Dropship dalam Pandangan Islam',
        author: 'Dr. KH. Abdullah M.',
        date: '01 Mar 2026',
        readTime: '6 Min Read',
        excerpt:
            'Sistem dropship marak digunakan oleh masyarakat. Namun, bagaimana fiqih muamalah kontemporer membedah status kepemilikan dan syarat sah transaksi ini?',
    },
    {
        slug: 'membangun-karakter-anak',
        category: 'Keluarga Sakinah',
        title: 'Membangun Karakter Anak Melalui Teladan Rasulullah SAW',
        author: 'Hj. Ummu Kultsum, S.Ag',
        date: '26 Feb 2026',
        readTime: '5 Min Read',
        excerpt:
            'Pendidikan terbaik bukanlah sekadar masuk ke sekolah elit melainkan keteladanan yang dimulai dari rumah.',
    },
    {
        slug: 'ibrah-perang-badar',
        category: 'Sejarah Islam',
        title: 'Ibrah dari Perang Badar: Kualitas Iman Mengalahkan Kuantitas Pasukan',
        author: 'Ustadz Budi Santoso',
        date: '20 Feb 2026',
        readTime: '7 Min Read',
        excerpt:
            'Perang Badar bukan sekadar catatan sejarah, melainkan bukti nyata bahwa pertolongan Allah selalu hadir bagi hamba-Nya yang bersabar dan bertawakal.',
    },
];

const MOCK_LATEST: RelatedOpini[] = [
    {
        slug: 'menjaga-hati-di-era-digital',
        category: 'Tazkiyatun Nafs',
        title: 'Menjaga Hati di Era Digital: Tantangan Generasi Milenial',
        author: 'Ust. H. Ahmad Fulan',
        date: '05 Mar 2026',
        readTime: '4 Min Read',
        excerpt:
            'Kemajuan teknologi ibarat pisau bermata dua.',
    },
    {
        slug: 'hukum-jual-beli-dropship',
        category: 'Fiqih Keseharian',
        title: 'Hukum Jual Beli Online dengan Sistem Dropship dalam Pandangan Islam',
        author: 'Dr. KH. Abdullah M.',
        date: '01 Mar 2026',
        readTime: '6 Min Read',
        excerpt:
            'Sistem dropship marak digunakan oleh masyarakat.',
    },
    {
        slug: 'membangun-karakter-anak',
        category: 'Keluarga Sakinah',
        title: 'Membangun Karakter Anak Melalui Teladan Rasulullah SAW',
        author: 'Hj. Ummu Kultsum, S.Ag',
        date: '26 Feb 2026',
        readTime: '5 Min Read',
        excerpt:
            'Pendidikan terbaik bukanlah sekadar masuk ke sekolah elit.',
    },
    {
        slug: 'ibrah-perang-badar',
        category: 'Sejarah Islam',
        title: 'Ibrah dari Perang Badar: Kualitas Iman Mengalahkan Kuantitas Pasukan',
        author: 'Ustadz Budi Santoso',
        date: '20 Feb 2026',
        readTime: '7 Min Read',
        excerpt:
            'Perang Badar bukan sekadar catatan sejarah.',
    },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function OpiniDetailPage({
    opini,
    related,
    latest,
}: OpiniDetailPageProps) {
    const [fontSize, setFontSize] = useState(1);

    const _opini = opini ?? MOCK_OPINI;
    const _related = related && related.length > 0 ? related : MOCK_RELATED;
    const _latest = latest && latest.length > 0 ? latest : MOCK_LATEST;

    return (
        <>
            <Head title={`${_opini.title} | Opini — Masjid Agung Al-Mukarram`} />
            <Header />

            {/* Hero */}
            <OpiniHero opini={_opini} />

            {/* Main Body */}
            <main className="relative flex-1 overflow-hidden py-12 lg:py-16">
                {/* Background texture grid */}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[32px_32px]" />
                {/* Ambient glows */}
                <div className="pointer-events-none absolute top-0 right-0 -z-10 h-96 w-96 translate-x-1/3 -translate-y-1/4 rounded-full bg-violet-500/5 blur-[120px]" />
                <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-64 w-64 -translate-x-1/3 rounded-full bg-indigo-500/5 blur-[100px]" />

                <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                    <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                        {/* Article column */}
                        <div className="flex flex-col gap-6 lg:col-span-8">
                            <OpiniContent opini={_opini} fontSize={fontSize} />
                            <OpiniShare title={_opini.title} slug={_opini.slug} />
                            <OpiniRelated items={_related} />
                        </div>

                        {/* Sidebar column */}
                        <div className="lg:col-span-4">
                            <OpiniDetailSidebar
                                latestOpini={_latest}
                                currentSlug={_opini.slug}
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
                        className="rounded-xl bg-violet-50 px-3 py-1.5 text-sm font-extrabold text-violet-700 transition hover:bg-violet-100 dark:bg-violet-900/20 dark:text-violet-400 dark:hover:bg-violet-900/40"
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
