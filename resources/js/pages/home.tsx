import ArtikelSection from '@/components/home/artikelsection';
import BannerSection from '@/components/home/bannersection';
import BeritaSection from '@/components/home/beritasection';
import FeaturesSection from '@/components/home/featuressection';
import Hero from '@/components/home/hero';
import JadwalJumatSection from '@/components/home/jadwaljumatsection';
import JadwalKajianSection from '@/components/home/jadwalkajiansection';
import JadwalMultimediaSection from '@/components/home/jadwalmultimediasection';
import KontakPengaduanSection from '@/components/home/kontakpengaduansection';
import SekapurSirihSection from '@/components/home/sekapursirihsection';
import VideoSection from '@/components/home/videosection';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import type { HomePageProps } from '@/types/home';
import { Head } from '@inertiajs/react';

export default function Page({
    agendaTerdekat,
    banners,
    heroSetting,
    siteContact,
    ketuaUmum,
    featuredPengurus,
    beritaUtama,
    beritaTerbaru,
    videos,
    opiniTerbaru,
    jadwalJumat,
    jadwalPengajian,
}: HomePageProps) {
    return (
        <>
            <Head title="Beranda | Masjid Agung Al-Mukarram Amanah" />
            <Header />
            <Hero
                agendaTerdekat={agendaTerdekat}
                siteContact={siteContact}
                heroSetting={heroSetting}
                featuredPengurus={featuredPengurus}
            />
            <BannerSection banners={banners} />
            <FeaturesSection />
            <SekapurSirihSection ketuaUmum={ketuaUmum} />
            <VideoSection videos={videos} />
            <BeritaSection
                beritaUtama={beritaUtama}
                beritaTerbaru={beritaTerbaru}
            />
            <JadwalMultimediaSection videos={videos} />
            <ArtikelSection opiniTerbaru={opiniTerbaru} />
            <JadwalJumatSection jadwalJumat={jadwalJumat} />
            <JadwalKajianSection jadwalPengajian={jadwalPengajian} />
            <KontakPengaduanSection />

            <Footer />
        </>
    );
}
