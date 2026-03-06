import { Head } from '@inertiajs/react';
import { BookOpen, Home, Scale } from 'lucide-react';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';

export default function LayananWaris() {
    return (
        <>
            <Header />
            <Head title="Layanan Waris | Masjid Agung Al-Mukarram" />

            <PageHeader
                title="Layanan Waris"
                subtitle="Informasi dan panduan mengenai pembagian harta waris menurut hukum Islam."
                badgeText="Layanan"
                badgeIcon={<Scale className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    {
                        label: 'Layanan',
                        icon: <BookOpen className="h-4 w-4" />,
                    },
                    { label: 'Layanan Waris' },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-zinc-900">
                    <div className="p-8 text-zinc-900 dark:text-zinc-100">
                        <h2 className="mb-4 text-2xl font-bold">
                            Layanan Konsultasi & Penghitungan Waris
                        </h2>
                        <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                            Masjid Agung Al-Mukarram menyediakan layanan
                            bimbingan, konsultasi, dan penghitungan pembagian
                            harta warisan secara syariat Islam (Faraid). Layanan
                            ini bertujuan untuk membantu kaum muslimin
                            mendistribusikan hak pewaris dan ahli waris secara
                            adil sesuai ketentuan Allah SWT.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
