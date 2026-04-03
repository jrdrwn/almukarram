import Seo from '@/components/shared/seo';
import { History, Home, Info } from 'lucide-react';

import HeroSection from '@/components/sejarah-singkat/hero-section';
import HistoryNarrative from '@/components/sejarah-singkat/history-narrative';
import InfoAndQuotes from '@/components/sejarah-singkat/info-and-quotes';
import MeaningSection from '@/components/sejarah-singkat/meaning-section';
import Timeline from '@/components/sejarah-singkat/timeline';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';

export default function SejarahSingkat() {
    return (
        <>
            <Header />
            <Seo title="Sejarah Singkat | Masjid Agung Al-Mukarram" />

            <PageHeader
                title="Sejarah Singkat"
                subtitle="Perjalanan panjang pembangunan dan peran Masjid Agung Al-Mukarram Amanah di Bumi Tambun Bungai"
                badgeText="Profil Masjid"
                badgeIcon={<History className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    { label: 'Profil', icon: <Info className="h-4 w-4" /> },
                    { label: 'Sejarah Singkat' },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <HeroSection />
            <HistoryNarrative />
            <Timeline />
            <MeaningSection />
            <InfoAndQuotes />
            <Footer />
            <div
                className="pointer-events-none absolute inset-0 -z-1 opacity-[0.4] dark:opacity-[0.02]"
                style={{
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                }}
            ></div>
        </>
    );
}

