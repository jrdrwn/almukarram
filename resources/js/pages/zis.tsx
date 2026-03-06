import { Head } from '@inertiajs/react';
import { FaMoneyBill } from 'react-icons/fa';
import Footer from '../components/shared/footer';
import Header from '../components/shared/header';
import PageHeader from '../components/shared/page-header';
import { Accounts } from '../components/zis/accounts';
import { Hero } from '../components/zis/hero';
import { Types } from '../components/zis/types';

export default function Zis() {
    return (
        <>
            <Head title="Waqaf, Infaq & Shadaqah" />
            <Header />
            <main className="flex-1">
                <PageHeader
                    title="Waqaf, Infaq & Shadaqah"
                    badgeText="
                    WIS
                    "
                    badgeIcon={<FaMoneyBill className="h-4 w-4" />}
                    subtitle="Mari tingkatkan kepedulian sosial kita dengan berkontribusi melalui Waqaf, Infaq, dan Shadaqah untuk mendukung berbagai program kebaikan di Masjid Agung Al-Mukarram"
                    breadcrumbs={[
                        { label: 'Beranda', href: '/' },
                        { label: 'Layanan', href: '#' },
                        { label: 'Waqaf, Infaq & Shadaqah' },
                    ]}
                />

                <Hero />
                <Types />
                <Accounts />
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
