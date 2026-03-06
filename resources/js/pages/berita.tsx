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
    jadwal?: any;
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
    jadwal = {},
}: BeritaPageProps) {

    // MOCK DATA for preview purposes if backend doesn't pass data yet
    const _berita = berita.length > 0 ? berita : [
        {
            id: 1,
            slug: 'kegiatan-ramadhan-1447-h',
            judul: 'Rangkaian Kegiatan Menyambut Bulan Suci Ramadhan 1447 H di Masjid Agung',
            ringkasan: 'Dalam rangka menyambut bulan suci Ramadhan, pengurus masjid telah menyiapkan berbagai program unggulan mulai dari kajian ba\'da subuh, iftar jama\'i, hingga tarawih bersanad.',
            kategori: 'Kegiatan',
            views: 125,
            created_at: '2026-03-01',
        },
        {
            id: 2,
            slug: 'pemeliharaan-kubah-masjid',
            judul: 'Progres Pemeliharaan Kubah Utama dan Pengecatan Ulang Menara',
            ringkasan: 'Alhamdulillah, progres pemeliharaan fasilitas masjid khususnya pengecatan lapis pelindung kubah utama dan menara telah mencapai 80%.',
            kategori: 'Informasi',
            views: 89,
            created_at: '2026-02-28',
        },
        {
            id: 3,
            slug: 'penerimaan-zakat-fitrah',
            judul: 'Penerimaan Zakat Fitrah dan Fidyah Tahun Ini Resmi Dibuka',
            ringkasan: 'Panitia ZIS (Zakat, Infaq, Shadaqah) Masjid Agung Al-Mukarram Amanah mulai menerima penyaluran Zakat Fitrah dan Fidyah masyarakat.',
            kategori: 'Pengumuman',
            views: 310,
            created_at: '2026-02-25',
        }
    ];

    const _kategoris = kategoris.length > 0 ? kategoris : [
        { id: 1, nama: 'Kegiatan Masjid', slug: 'kegiatan-masjid', total: 12 },
        { id: 2, nama: 'Informasi Pembangunan', slug: 'informasi', total: 8 },
        { id: 3, nama: 'Kajian Rutin', slug: 'kajian', total: 24 },
        { id: 4, nama: 'Pengumuman Pengurus', slug: 'pengumuman', total: 5 },
    ];

    const _popularFiles = popularFiles.length > 0 ? popularFiles : [
        { id: 1, slug: 'penerimaan-zakat-fitrah', judul: 'Penerimaan Zakat Fitrah dan Fidyah Tahun Ini Resmi Dibuka', created_at: '2026-02-25' },
        { id: 2, slug: 'profil-imam-besar', judul: 'Profil Imam Besar Masjid Agung Al-Mukarram Amanah', created_at: '2025-11-10' },
        { id: 3, slug: 'jadwal-kajian-mingguan', judul: 'Jadwal Lengkap Kajian Mingguan Ba\'da Maghrib', created_at: '2026-01-05' },
    ];

    const _jadwal = Object.keys(jadwal).length > 0 ? jadwal : {
        subuh: '04:15',
        terbit: '05:32',
        dhuha: '05:58',
        dzuhur: '11:40',
        ashar: '14:48',
        maghrib: '17:45',
        isya: '18:55',
    };

    const _totalPages = totalPages > 1 ? totalPages : 3;

    return (
        <>
            <Header />
            <Head title="Berita & Kegiatan | Masjid Agung Al-Mukarram" />

            <PageHeader
                title={searchQuery ? `Cari: ${searchQuery}` : "Berita & Kegiatan"}
                subtitle="Informasi, pengumuman, dan liputan kegiatan terbaru Seputar Masjid Agung Al-Mukarram Amanah"
                badgeText="Pusat Informasi"
                badgeIcon={<Newspaper className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    { label: 'Berita', icon: <Newspaper className="h-4 w-4" /> },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <main className="flex-1 py-16 lg:py-24 relative overflow-hidden">
                {/* Background Textures for Main Section */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
                <div className="absolute left-0 top-0 w-200 h-200 bg-emerald-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none" />

                <div className="max-w-380 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* Main Content Area (News Grid & Search) */}
                        <div className="lg:col-span-8 flex flex-col gap-2">
                            <BeritaSearch
                                searchQuery={searchQuery}
                                kategoriSlug={kategoriSlug}
                                totalRows={totalRows || _berita.length}
                                kategoris={_kategoris}
                            />

                            <BeritaGrid
                                data={_berita}
                                currentPage={currentPage}
                                totalPages={_totalPages}
                            />
                        </div>

                        {/* Sidebar Area */}
                        <div className="lg:col-span-4">
                            <BeritaSidebar
                                jadwal={_jadwal}
                                kategoris={_kategoris}
                                popularFiles={_popularFiles}
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
