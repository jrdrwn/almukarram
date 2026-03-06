import { Head } from '@inertiajs/react';
import { Home, MapPin } from 'lucide-react';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';

import SpotBacaCollections from '@/components/spot-baca/spot-baca-collections';
import SpotBacaCta from '@/components/spot-baca/spot-baca-cta';
import SpotBacaHero from '@/components/spot-baca/spot-baca-hero';

export default function SpotBaca() {
    return (
        <>
            <Header />
            <Head title="Spot Baca | Masjid Agung Al-Mukarram" />

            <PageHeader
                title="Spot Baca"
                subtitle="Mari manfaatkan waktu luang kita dengan membaca berbagai koleksi islami dan umum"
                badgeText="Pojok Baca"
                badgeIcon={<MapPin className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    { label: 'Pojok Baca', icon: <MapPin className="h-4 w-4" /> },
                    { label: 'Spot Baca' },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <main className="flex-1">
                <SpotBacaHero />
                <SpotBacaCollections />
                <SpotBacaCta />
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
