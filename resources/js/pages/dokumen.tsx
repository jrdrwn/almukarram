import { Head } from '@inertiajs/react';

import DokumenGrid from '@/components/dokumen/dokumen-grid';
import DokumenSearch from '@/components/dokumen/dokumen-search';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';
import { FolderOpen, Home } from 'lucide-react';

interface DokumenPageProps {
    dokumen?: any[];
    currentPage?: number;
    totalPages?: number;
    searchQuery?: string;
    kategoriSlug?: string;
    totalRows?: number;
    kategoris?: any[];
}

export default function Dokumen({
    dokumen = [],
    currentPage = 1,
    totalPages = 1,
    searchQuery = '',
    kategoriSlug = '',
    totalRows = 0,
    kategoris = [],
}: DokumenPageProps) {
    return (
        <>
            <Header />
            <Head title="Dokumen | Masjid Agung Al-Mukarram" />

            <PageHeader
                title={searchQuery ? `Cari: ${searchQuery}` : 'Dokumen'}
                subtitle="Pusat informasi dan unduhan dokumen-dokumen resmi Masjid Agung Al-Mukarram."
                badgeText="Arsip Digital"
                badgeIcon={<FolderOpen className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    {
                        label: 'Dokumen',
                        icon: <FolderOpen className="h-4 w-4" />,
                    },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <main className="relative flex-1 overflow-hidden py-16 lg:py-24">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[32px_32px]" />
                <div className="pointer-events-none absolute top-0 left-0 -z-10 h-150 w-150 -translate-x-1/4 -translate-y-1/4 rounded-full bg-emerald-500/5 blur-[120px]" />

                <div className="mx-auto w-full max-w-380 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-6">
                        <DokumenSearch
                            searchQuery={searchQuery}
                            kategoriSlug={kategoriSlug}
                            totalRows={totalRows}
                            kategoris={kategoris}
                        />

                        <DokumenGrid
                            data={dokumen}
                            currentPage={currentPage}
                            totalPages={totalPages}
                        />
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
