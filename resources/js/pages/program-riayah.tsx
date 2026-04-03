import DetailSection from '@/components/program-riayah/detail-section';
import ProgramList from '@/components/program-riayah/program-list';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';
import Seo from '@/components/shared/seo';
import { Hammer, Home } from 'lucide-react';

export default function ProgramRiayah() {
    return (
        <>
            <Header />
            <Seo title="Program Riayah | Masjid Agung Al-Mukarram" />

            <PageHeader
                title="Bidang Riayah"
                subtitle="Bidang yang bertanggung jawab atas pemeliharaan dan perawatan fisik bangunan masjid."
                badgeText="Bidang Pengurus"
                badgeIcon={<Hammer className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    { label: 'Program' },
                    { label: 'Program Kerja Pengurus' },
                    { label: 'Riayah' },
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

