import { Head } from '@inertiajs/react';

import HeroSection from '@/components/sejarah-singkat/hero-section';
import HistoryNarrative from '@/components/sejarah-singkat/history-narrative';
import InfoAndQuotes from '@/components/sejarah-singkat/info-and-quotes';
import MeaningSection from '@/components/sejarah-singkat/meaning-section';
import Timeline from '@/components/sejarah-singkat/timeline';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

export default function SejarahSingkat() {
    return (
        <>
            <Header />
            <Head title="Sejarah Singkat | Masjid Agung Al-Mukarram" />
            <HeroSection />
            <HistoryNarrative />
            <Timeline />
            <MeaningSection />
            <InfoAndQuotes />
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
