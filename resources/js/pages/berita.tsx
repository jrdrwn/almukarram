import { Head } from '@inertiajs/react';
import { Home, Newspaper } from 'lucide-react';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';

import type { BeritaItem } from '@/components/berita/berita-grid';
import BeritaGrid from '@/components/berita/berita-grid';
import BeritaSearch from '@/components/berita/berita-search';
import BeritaSidebar from '@/components/berita/berita-sidebar';

interface BeritaPageProps {
    berita?: BeritaItem[];
    currentPage?: number;
    totalPages?: number;
    searchQuery?: string;
    kategoriSlug?: string;
    totalRows?: number;
    kategoris?: any[];
    popularFiles?: any[];
}

export default function BeritaPage({
    berita = [],
    currentPage = 1,
    totalPages = 1,
    searchQuery = '',
    kategoriSlug = '',
    totalRows = 0,
    kategoris = [],
    popularFiles = [],
}: BeritaPageProps) {
    return (
        <>
            <Header />
            <Head title="Berita & Kegiatan | Masjid Agung Al-Mukarram" />

            <PageHeader
                title={
                    searchQuery ? `Cari: ${searchQuery}` : 'Berita & Kegiatan'
                }
                subtitle="Informasi, pengumuman, dan liputan kegiatan terbaru Seputar Masjid Agung Al-Mukarram Amanah"
                badgeText="Pusat Informasi"
                badgeIcon={<Newspaper className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    {
                        label: 'Berita',
                        icon: <Newspaper className="h-4 w-4" />,
                    },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <main className="relative flex-1 overflow-hidden py-16 lg:py-24">
                {/* Background Textures for Main Section */}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[32px_32px]" />
                <div className="pointer-events-none absolute top-0 left-0 -z-10 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[100px]" />

                <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                    <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                        {/* Main Content Area (News Grid & Search) */}
                        <div className="flex flex-col gap-2 lg:col-span-8">
                            <BeritaSearch
                                searchQuery={searchQuery}
                                kategoriSlug={kategoriSlug}
                                totalRows={totalRows}
                                kategoris={kategoris}
                            />

                            <BeritaGrid
                                data={berita}
                                currentPage={currentPage}
                                totalPages={totalPages}
                            />
                        </div>

                        {/* Sidebar Area */}
                        <div className="lg:col-span-4">
                            <BeritaSidebar
                                kategoris={kategoris}
                                popularFiles={popularFiles}
                            />
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
