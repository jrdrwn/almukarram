import Seo from '@/components/shared/seo';
import { Network, Home, Info } from 'lucide-react';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';

export default function OrganisasiMasjid() {
    return (
        <>
            <Header />
            <Seo title="Organisasi Masjid | Masjid Agung Al-Mukarram" />

            <PageHeader
                title="Organisasi Masjid"
                subtitle="Badan pengurus & yayasan pengelola Masjid Agung Al-Mukarram."
                badgeText="Profil"
                badgeIcon={<Network className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    { label: 'Profil', icon: <Info className="h-4 w-4" /> },
                    { label: 'Organisasi Masjid' },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-zinc-900">
                    <div className="p-8 text-zinc-900 dark:text-zinc-100">
                        <h2 className="mb-4 text-2xl font-bold">
                            Pengurus & Manajemen Masjid
                        </h2>
                        <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                            Mengenal jajaran kepengurusan (Idarah, Imarah, dan
                            Riayah) dalam mengelola dan memakmurkan kegiatan
                            Masjid Agung Al-Mukarram.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

