import ArtikelSection from '@/components/home/artikelsection';
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

export default function Page({
    agendaTerdekat,
    beritaUtama,
    beritaTerbaru,
    videos,
    opiniTerbaru,
    jadwalJumat,
    jadwalPengajian,
}: HomePageProps) {
    return (
        <>
            <Header />
            <Hero agendaTerdekat={agendaTerdekat} />
            <FeaturesSection />
            <SekapurSirihSection />
            <VideoSection videos={videos} />
            <BeritaSection beritaUtama={beritaUtama} beritaTerbaru={beritaTerbaru} />
            <JadwalMultimediaSection videos={videos} />
            <ArtikelSection opiniTerbaru={opiniTerbaru} />
            <JadwalJumatSection jadwalJumat={jadwalJumat} />
            <JadwalKajianSection jadwalPengajian={jadwalPengajian} />
            <KontakPengaduanSection />

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
