import { Head } from '@inertiajs/react';
import { BookOpen, Home, PenTool } from 'lucide-react';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';

import OpiniGrid from '@/components/opini/opini-grid';
import OpiniSearch from '@/components/opini/opini-search';
import OpiniSidebar from '@/components/opini/opini-sidebar';

interface OpiniPageProps {
    opini?: any[];
    currentPage?: number;
    totalPages?: number;
    searchQuery?: string;
    kategoriSlug?: string;
    totalRows?: number;
    kategoris?: any[];
}

export default function Page({
    opini = [],
    currentPage = 1,
    totalPages = 1,
    searchQuery = '',
    kategoriSlug = '',
    totalRows = 0,
    kategoris = [],
}: OpiniPageProps) {

    // MOCK DATA for preview purposes
    const _opini = opini.length > 0 ? opini : [
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
        {
            category: 'Sejarah Islam',
            title: 'Ibrah dari Perang Badar: Kualitas Iman Mengalahkan Kuantitas Pasukan',
            author: 'Ustadz Budi Santoso',
            date: '20 Feb 2026',
            readTime: '7 Min Read',
            excerpt:
                'Perang Badar bukan sekadar catatan sejarah, melainkan bukti nyata bahwa pertolongan Allah selalu hadir bagi hamba-Nya yang bersabar dan bertawakal dalam menghadapi rintangan.',
        }
    ];

    const _kategoris = kategoris.length > 0 ? kategoris : [
        { id: 1, nama: 'Tazkiyatun Nafs', slug: 'tazkiyatun-nafs', total: 10 },
        { id: 2, nama: 'Fiqih Keseharian', slug: 'fiqih-keseharian', total: 15 },
        { id: 3, nama: 'Keluarga Sakinah', slug: 'keluarga-sakinah', total: 8 },
        { id: 4, nama: 'Sejarah Islam', slug: 'sejarah-islam', total: 12 },
    ];

    const _totalPages = totalPages > 1 ? totalPages : 3;

    return (
        <>
            <Header />
            <Head title="Opini | Masjid Agung Al-Mukarram" />

            <PageHeader
                title={searchQuery ? `Cari: ${searchQuery}` : "Opini"}
                subtitle="Bagikan pemikiran dan gagasan islami melalui artikel opini."
                badgeText="Pojok Baca"
                badgeIcon={<BookOpen className="h-4 w-4" />}
                breadcrumbs={[
                    { label: 'Beranda', href: '/', icon: <Home className="h-4 w-4" /> },
                    { label: 'Pojok Baca', icon: <BookOpen className="h-4 w-4" /> },
                    { label: 'Opini', icon: <PenTool className="h-4 w-4" /> },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <main className="flex-1 py-16 lg:py-24 relative overflow-hidden">
                {/* Visual Textures & Glows */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
                <div className="absolute right-0 top-0 w-150 h-150 bg-emerald-500/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 -z-10 pointer-events-none" />

                <div className="max-w-380 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Main Content Area */}
                        <div className="lg:col-span-8 flex flex-col gap-6">

                            <OpiniSearch
                                searchQuery={searchQuery}
                                kategoriSlug={kategoriSlug}
                                totalRows={totalRows || _opini.length}
                                kategoris={_kategoris}
                            />

                            <OpiniGrid
                                data={_opini}
                                currentPage={currentPage}
                                totalPages={_totalPages}
                            />
                        </div>

                        {/* Sidebar Area */}
                        <div className="lg:col-span-4">
                            <OpiniSidebar />
                        </div>
                    </div>
                </div>
            </main>
            <div
                className="pointer-events-none absolute inset-0 -z-1 opacity-[0.4] dark:opacity-[0.02]"
                style={{
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                }}
            ></div>
            <Footer />
        </>
    );
}
