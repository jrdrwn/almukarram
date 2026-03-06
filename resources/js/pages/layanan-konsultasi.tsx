import { Head } from '@inertiajs/react';
import { BookOpen, Home, MessageCircleHeart } from 'lucide-react';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';

export default function LayananKonsultasi() {
    return (
        <>
            <Header />
            <Head title="Konsultasi Ibadah & Hukum Islam | Masjid Agung Al-Mukarram" />

            <PageHeader
                title="Layanan Konsultasi"
                subtitle="Tanya jawab ibadah harian, muamalah, dan hukum-hukum fikih."
                badgeText="Layanan"
                badgeIcon={<MessageCircleHeart className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    { label: 'Layanan', icon: <BookOpen className="h-4 w-4" /> },
                    { label: 'Konsultasi Ibadah / Hukum Islam' },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-zinc-900 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-8 text-zinc-900 dark:text-zinc-100">
                        <h2 className="text-2xl font-bold mb-4">Konsultasi Ibadah dan Hukum Islam</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                            Mendapatkan pendampingan atau pencerahan terkait fiqih ibadah, polemik keluarga, kewarisan maupun muamalah sehari-hari menurut syariat.
                            Hubungi asatidz kami untuk menjadwalkan konsultasi.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
