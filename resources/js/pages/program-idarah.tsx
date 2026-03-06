import { Head } from '@inertiajs/react';
import { Home, Settings } from 'lucide-react';


import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

import DetailSection from '@/components/program-idarah/detail-section';
import ProgramList from '@/components/program-idarah/program-list';
import PageHeader from '@/components/shared/page-header';

export default function ProgramIdarah() {
    return (
        <>
            <Header />
            <Head title="Program Idarah | Masjid Agung Al-Mukarram" />

            <PageHeader
                title="Bidang Idarah"
                subtitle="Bidang yang mengelola administrasi dan manajemen operasional masjid."
                badgeText="Bidang Pengurus"
                badgeIcon={<Settings className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    { label: 'Program' },
                    { label: 'Program Kerja Pengurus' },
                    { label: 'Idarah' },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <DetailSection />
            <ProgramList />

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
