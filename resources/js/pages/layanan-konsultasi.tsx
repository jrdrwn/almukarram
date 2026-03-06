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
                    {
                        label: 'Layanan',
                        icon: <BookOpen className="h-4 w-4" />,
                    },
                    { label: 'Konsultasi Ibadah / Hukum Islam' },
                ]}
                backgroundImage="/images/masjidnewww-scaled.png"
            />

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-zinc-900">
                    <div className="p-8 text-zinc-900 dark:text-zinc-100">
                        <h2 className="mb-4 text-2xl font-bold">
                            Konsultasi Ibadah dan Hukum Islam
                        </h2>
                        <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                            Mendapatkan pendampingan atau pencerahan terkait
                            fiqih ibadah, polemik keluarga, kewarisan maupun
                            muamalah sehari-hari menurut syariat. Hubungi
                            asatidz kami untuk menjadwalkan konsultasi.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
