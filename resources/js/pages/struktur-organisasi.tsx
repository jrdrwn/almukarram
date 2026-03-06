import { Home, Info, Network } from 'lucide-react';
import { useState } from 'react';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';
import BidangBidang from '@/components/struktur-organisasi/bidang';
import LightboxModal from '@/components/struktur-organisasi/lightbox-modal';
import PimpinanInti from '@/components/struktur-organisasi/pimpinan-inti';
import Sekretariat from '@/components/struktur-organisasi/sekretariat';

export default function StrukturOrganisasi() {
    const [lightbox, setLightbox] = useState<{
        isOpen: boolean;
        src: string;
        nama: string;
    }>({
        isOpen: false,
        src: '',
        nama: '',
    });

    const openLightbox = (nama: string, src: string) => {
        setLightbox({ isOpen: true, src, nama });
    };

    const closeLightbox = () => {
        setLightbox({ isOpen: false, src: '', nama: '' });
    };

    return (
        <>
            <Header />

            <PageHeader
                title="Struktur Organisasi"
                subtitle="Badan Pengelola Masjid Agung (BPMA) Al-Mukarram Amanah &mdash; Kuala Kapuas, Kalimantan Tengah"
                badgeText="Kepengurusan BPMA"
                badgeIcon={<Network className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    { label: 'Profil', icon: <Info className="h-4 w-4" /> },
                    { label: 'Struktur Organisasi' },
                ]}
            />

            {/* Main Content Area */}
            <main className="relative py-12 md:py-20">
                <div className="container mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                    <PimpinanInti onAvatarClick={openLightbox} />

                    <div className="py-8">
                        <div className="h-px w-full bg-linear-to-r from-transparent via-emerald-200 to-transparent dark:via-emerald-800"></div>
                    </div>

                    <BidangBidang onAvatarClick={openLightbox} />

                    <div className="py-8">
                        <div className="h-px w-full bg-linear-to-r from-transparent via-emerald-200 to-transparent dark:via-emerald-800"></div>
                    </div>

                    <Sekretariat onAvatarClick={openLightbox} />
                </div>
            </main>

            <Footer />

            <div
                className="pointer-events-none absolute inset-0 -z-20 opacity-[0.3] dark:opacity-[0.02]"
                style={{
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                }}
            ></div>

            <LightboxModal
                isOpen={lightbox.isOpen}
                src={lightbox.src}
                nama={lightbox.nama}
                onClose={closeLightbox}
            />
        </>
    );
}
