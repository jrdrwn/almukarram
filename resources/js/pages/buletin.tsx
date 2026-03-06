import { Head } from '@inertiajs/react';
import { BookOpen, FileText, Home } from 'lucide-react';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';

import BuletinGrid from '@/components/buletin/buletin-grid';
import BuletinSearch from '@/components/buletin/buletin-search';
import BuletinSidebar from '@/components/buletin/buletin-sidebar';

const _kategoris = [
    { id: 1, nama: 'Tahun 2024', slug: 'tahun-2024', total: 45 },
    { id: 2, nama: 'Tahun 2023', slug: 'tahun-2023', total: 52 },
    { id: 3, nama: 'Tahun 2022', slug: 'tahun-2022', total: 48 },
];

const _buletin = {
    data: [
        {
            id: 1,
            title: 'Buletin Jumat Edisi 14 - Keutamaan Bulan Sya\'ban',
            slug: 'buletin-jumat-edisi-14-2024',
            thumbnail: 'https://images.unsplash.com/photo-1584824388147-97d8b5e40e2b?q=80&w=2670&auto=format&fit=crop',
            pdf_url: '/dummy/buletin-edisi-14.pdf',
            published_at: '2024-02-23T00:00:00Z',
            views: 450,
            downloads: 120,
            kategori: { nama: 'Tahun 2024', slug: 'tahun-2024' },
        },
        {
            id: 2,
            title: 'Buletin Jumat Edisi 13 - Menyambut Bulan Rajab',
            slug: 'buletin-jumat-edisi-13-2024',
            thumbnail: 'https://images.unsplash.com/photo-1623800330578-19ebfa5fa0ea?q=80&w=2670&auto=format&fit=crop',
            pdf_url: '/dummy/buletin-edisi-13.pdf',
            published_at: '2024-02-16T00:00:00Z',
            views: 320,
            downloads: 85,
            kategori: { nama: 'Tahun 2024', slug: 'tahun-2024' },
        },
        {
            id: 3,
            title: 'Buletin Jumat Edisi 12 - Pentingnya Istiqomah',
            slug: 'buletin-jumat-edisi-12-2024',
            thumbnail: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2670&auto=format&fit=crop',
            pdf_url: '/dummy/buletin-edisi-12.pdf',
            published_at: '2024-02-09T00:00:00Z',
            views: 280,
            downloads: 65,
            kategori: { nama: 'Tahun 2024', slug: 'tahun-2024' },
        }
    ],
    meta: {
        current_page: 1,
        last_page: 3,
        per_page: 9,
        total: 25,
        from: 1,
        to: 3,
        links: [
            { url: null, label: '&laquo; Previous', active: false },
            { url: '?page=1', label: '1', active: true },
            { url: '?page=2', label: '2', active: false },
            { url: '?page=3', label: '3', active: false },
            { url: '?page=2', label: 'Next &raquo;', active: false },
        ]
    }
};

export default function BuletinPage({ searchParams }: { searchParams?: Record<string, string> }) {
    const q = searchParams?.q || '';
    const kategori = searchParams?.kategori || '';

    return (
        <>
            <Header />
            <Head title="Buletin | Masjid Agung Al-Mukarram" />

            <PageHeader
                title="Buletin"
                subtitle="Dapatkan ringkasan khutbah, jadwal kegiatan, dan informasi penting seputar masjid melalui buletin Jumat kami."
                badgeText="Pojok Baca"
                badgeIcon={<BookOpen className="h-4 w-4" />}
                breadcrumbs={[
                    { label: 'Beranda', href: '/', icon: <Home className="h-4 w-4" /> },
                    { label: 'Pojok Baca', icon: <BookOpen className="h-4 w-4" /> },
                    { label: 'Buletin', icon: <FileText className="h-4 w-4" /> },
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
                        <div className="lg:col-span-8 flex flex-col gap-2">
                            <BuletinSearch
                                kategoriSlug={kategori}
                                searchQuery={q}
                                kategoris={_kategoris}
                                totalRows={_buletin.meta.total}
                            />
                            <BuletinGrid buletins={_buletin} />
                        </div>

                        {/* Sidebar Area */}
                        <div className="lg:col-span-4">
                            <BuletinSidebar />
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
