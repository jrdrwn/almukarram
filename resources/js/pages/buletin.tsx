import Seo from '@/components/shared/seo';
import { BookOpen, FileText, Home } from 'lucide-react';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';

import BuletinGrid from '@/components/buletin/buletin-grid';
import BuletinSearch from '@/components/buletin/buletin-search';
import BuletinSidebar from '@/components/buletin/buletin-sidebar';

interface BuletinPageProps {
    buletin?: any;
    kategoris?: any[];
    searchQuery?: string;
    kategoriSlug?: string;
}

export default function BuletinPage({
    buletin = { data: [], meta: { current_page: 1, last_page: 1, per_page: 9, total: 0, from: null, to: null, links: [] } },
    kategoris = [],
    searchQuery = '',
    kategoriSlug = '',
}: BuletinPageProps) {
    return (
        <>
            <Header />
            <Seo title="Buletin | Masjid Agung Al-Mukarram" />

            <PageHeader
                title="Buletin"
                subtitle="Dapatkan ringkasan khutbah, jadwal kegiatan, dan informasi penting seputar masjid melalui buletin Jumat kami."
                badgeText="Pojok Baca"
                badgeIcon={<BookOpen className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    {
                        label: 'Pojok Baca',
                        icon: <BookOpen className="h-4 w-4" />,
                    },
                    {
                        label: 'Buletin',
                        icon: <FileText className="h-4 w-4" />,
                    },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <main className="relative flex-1 overflow-hidden py-16 lg:py-24">
                {/* Visual Textures & Glows */}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[32px_32px]" />
                <div className="pointer-events-none absolute top-0 right-0 -z-10 h-150 w-150 translate-x-1/3 -translate-y-1/4 rounded-full bg-emerald-500/5 blur-[120px]" />

                <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                    <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                        {/* Main Content Area */}
                        <div className="flex flex-col gap-2 lg:col-span-8">
                            <BuletinSearch
                                kategoriSlug={kategoriSlug}
                                searchQuery={searchQuery}
                                kategoris={kategoris}
                                totalRows={buletin.meta.total}
                            />
                            <BuletinGrid buletins={buletin} />
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

