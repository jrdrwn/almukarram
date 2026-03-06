import DetailSection from '@/components/program-imarah/detail-section';
import ProgramList from '@/components/program-imarah/program-list';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';
import { Head } from '@inertiajs/react';
import { Home, MoonStar } from 'lucide-react';

export default function ProgramImarah() {
    return (
        <>
            <Header />
            <Head title="Program Imarah | Masjid Agung Al-Mukarram" />

            <PageHeader
                title="Bidang Imarah"
                subtitle="Bidang yang bertanggung jawab atas kemakmuran dan keramaian masjid."
                badgeText="Bidang Pengurus"
                badgeIcon={<MoonStar className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    { label: 'Program' },
                    { label: 'Program Kerja Pengurus' },
                    { label: 'Imarah' },
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
