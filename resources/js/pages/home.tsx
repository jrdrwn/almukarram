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
import Seo from '@/components/shared/seo';

export default function Page({
    agendaTerdekat,
    banners,
    features,
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
            <Seo title="Beranda | Masjid Agung Al-Mukarram Amanah" />
            <Header />
            <Hero
                agendaTerdekat={agendaTerdekat}
                siteContact={siteContact}
                heroSetting={heroSetting}
                featuredPengurus={featuredPengurus}
            />
            {/* Banner 4:1 setelah Hero */}
            <div className="my-8">
                <BannerSection banners={banners.filter(b => b.ratio === '4:1')} />
            </div>
            <FeaturesSection features={features} />
            {/* Banner 4:5 setelah Features */}
            <div className="my-8">
                <BannerSection banners={banners.filter(b => b.ratio === '4:5')} />
            </div>
            <SekapurSirihSection ketuaUmum={ketuaUmum} />
            {/* Banner 16:9 setelah SekapurSirih */}
            <div className="my-8">
                <BannerSection banners={banners.filter(b => b.ratio === '16:9')} />
            </div>
            <VideoSection videos={videos} />
            <BeritaSection
                beritaUtama={beritaUtama}
                beritaTerbaru={beritaTerbaru}
            />
            <JadwalMultimediaSection videos={videos} />
            <ArtikelSection opiniTerbaru={opiniTerbaru} />
            <JadwalJumatSection jadwalJumat={jadwalJumat} />
            <JadwalKajianSection jadwalPengajian={jadwalPengajian} />
            {/* Banner 5:3 setelah JadwalKajianSection */}
            <div className="my-8">
                <BannerSection banners={banners.filter(b => b.ratio === '5:3')} />
            </div>
            <KontakPengaduanSection />

            <Footer />
        </>
    );
}

