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
                    { label: 'Layanan', icon: <BookOpen className="h-4 w-4" /> },
                    { label: 'Layanan Waris' },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-zinc-900 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-8 text-zinc-900 dark:text-zinc-100">
                        <h2 className="text-2xl font-bold mb-4">Layanan Konsultasi & Penghitungan Waris</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                            Masjid Agung Al-Mukarram menyediakan layanan bimbingan, konsultasi, dan penghitungan pembagian harta warisan secara syariat Islam (Faraid).
                            Layanan ini bertujuan untuk membantu kaum muslimin mendistribusikan hak pewaris dan ahli waris secara adil sesuai ketentuan Allah SWT.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
