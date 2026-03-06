import JenisZakatInfo from '@/components/hitung-zakat/jenis-zakat-info';
import KalkulatorUtama from '@/components/hitung-zakat/kalkulator-utama';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';
import { Calculator, Home } from 'lucide-react';

export default function HitungZakatPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <PageHeader
                    title="Hitung Zakat"
                    subtitle="Hitung kewajiban zakat Anda dengan mudah dan akurat berdasarkan nisab dan haul"
                    badgeText="Layanan"
                    badgeIcon={<Calculator className="h-4 w-4" />}
                    breadcrumbs={[
                        {
                            label: 'Beranda',
                            href: '/',
                            icon: <Home className="h-4 w-4" />,
                        },
                        { label: 'Layanan' },
                        { label: 'Hitung Zakat' },
                    ]}
                />

                {/* Kalkulator Utama */}
                <KalkulatorUtama />

                {/* Jenis Zakat Info */}
                <JenisZakatInfo />
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
