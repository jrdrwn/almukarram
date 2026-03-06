import { Head } from '@inertiajs/react';

import DokumenGrid from '@/components/dokumen/dokumen-grid';
import DokumenSearch from '@/components/dokumen/dokumen-search';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';
import { FileBarChart, FileText, FolderOpen, Home } from 'lucide-react';

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

    const _dokumen = dokumen.length > 0 ? dokumen : [
        {
            id: 1,
            title: 'SK Penetapan Pengurus BPMA Al-Mukarram Amanah 2025/2028',
            type: 'PDF',
            year: '2025',
            category: 'sk-sop',
            url: '#',
            icon: FileText,
            color: 'text-red-600',
            bg: 'bg-red-50 dark:bg-red-500/10'
        },
        {
            id: 2,
            title: 'Standar Operasional Prosedur (SOP) Penggunaan Aula Masjid',
            type: 'PDF',
            year: '2024',
            category: 'sk-sop',
            url: '#',
            icon: FileBarChart,
            color: 'text-blue-600',
            bg: 'bg-blue-50 dark:bg-blue-500/10'
        },
        {
            id: 3,
            title: 'Laporan Pertanggungjawaban Keuangan Q4 2025',
            type: 'XLSX',
            year: '2025',
            category: 'laporan',
            url: '#',
            icon: FileText,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50 dark:bg-emerald-500/10'
        },
    ];

    const _kategoris = kategoris.length > 0 ? kategoris : [
        { id: 1, nama: 'SK / SOP', slug: 'sk-sop', total: 12 },
        { id: 2, nama: 'Laporan Keuangan', slug: 'laporan', total: 8 },
        { id: 3, nama: 'Materi Kajian', slug: 'materi', total: 24 },
        { id: 4, nama: 'Dokumen Lain', slug: 'dokumen-lain', total: 5 },
    ];

    const _totalPages = totalPages > 1 ? totalPages : 2;

    return (
        <>
            <Header />
            <Head title="Dokumen | Masjid Agung Al-Mukarram" />

            <PageHeader
                title={searchQuery ? `Cari: ${searchQuery}` : "Dokumen"}
                subtitle="Pusat informasi dan unduhan dokumen-dokumen resmi Masjid Agung Al-Mukarram."
                badgeText="Arsip Digital"
                badgeIcon={<FolderOpen className="h-4 w-4" />}
                breadcrumbs={[
                    { label: 'Beranda', href: '/', icon: <Home className="h-4 w-4" /> },
                    { label: 'Dokumen', icon: <FolderOpen className="h-4 w-4" /> },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <main className="flex-1 py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
                <div className="absolute left-0 top-0 w-150 h-150 bg-emerald-500/5 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4 -z-10 pointer-events-none" />

                <div className="w-full max-w-380 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-6">
                        <DokumenSearch
                            searchQuery={searchQuery}
                            kategoriSlug={kategoriSlug}
                            totalRows={totalRows || _dokumen.length}
                            kategoris={_kategoris}
                        />

                        <DokumenGrid
                            data={_dokumen}
                            currentPage={currentPage}
                            totalPages={_totalPages}
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
