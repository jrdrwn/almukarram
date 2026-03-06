import { Head } from '@inertiajs/react';
import { Activity, Building2, Home } from 'lucide-react';

import ProgramGrid from '@/components/program-masjid/program-grid';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';

export default function ProgramMasjid() {
    return (
        <>
            <Header />
            <Head title="Program Masjid | Masjid Agung Al-Mukarram" />

            <PageHeader
                title="Program Masjid"
                subtitle="Berbagai program unggulan yang diselenggarakan Masjid Agung Al-Mukarram Amanah untuk memakmurkan masjid dan umat."
                badgeText="Kumpulan Program"
                badgeIcon={<Building2 className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    { label: 'Program', icon: <Activity className="h-4 w-4" /> },
                    { label: 'Program Masjid' },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <main className="flex-1 relative z-10 -mt-10 md:-mt-16">
                <ProgramGrid />
            </main>

            <Footer />

            {/* Global Texture Background overlay */}
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
