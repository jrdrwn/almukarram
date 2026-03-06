import { KontakForm } from '@/components/kontak/kontak-form';
import { KontakInfo } from '@/components/kontak/kontak-info';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';
import { Head } from '@inertiajs/react';
import { Home, Phone } from 'lucide-react';

export default function Kontak() {
    return (
        <>
            <Header />
            <Head title="Kontak Kami | Masjid Agung Al-Mukarram" />
            <PageHeader title="Kontak Kami" subtitle="Hubungi kami untuk pertanyaan, saran, atau informasi lebih lanjut tentang Masjid Agung Al-Mukarram Amanah."
        breadcrumbs={[
            {label: "Beranda", href: "/", icon: <Home className='size-4' />},
            {label: "Kontak", icon: <Phone className='size-4' />}
        ]}
            />
            <section className="py-16 md:py-24 relative overflow-hidden bg-background">
                {/* Background effects */}
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-teal-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                        {/* Info Kontak */}
                        <div className="lg:col-span-5 relative">
                            <KontakInfo />
                        </div>

                        {/* Form Kontak & Peta */}
                        <div className="lg:col-span-7 relative flex flex-col gap-8 h-full">
                            <div className="rounded-[2.5rem] bg-card p-6 shadow-xl ring-1 ring-border/50 sm:p-8 relative overflow-hidden h-fit">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
                                <KontakForm />
                            </div>

                            {/* Peta moved straight here to fill the "empty space" below form or side by side */}
                            <div className="flex flex-col flex-1">
                                <h3 className="mb-5 font-bold text-foreground">Lokasi Masjid di Peta</h3>
                                <div className="rounded-[2.5rem] overflow-hidden border border-border shadow-xl ring-1 ring-border/50 bg-card group p-2 flex-1 min-h-75">
                                    <div className="relative h-full w-full isolate rounded-4xl overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none z-10" />
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.9!2d114.3866271!3d-3.0059342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de46f027f225e35:0x3634ee7d00a14f59!2sMasjid+Agung+Al+Mukarram+Amanah!5e0!3m2!1sid!2sid!4v1740000000000!5m2!1sid!2sid"
                                            className="w-full h-full border-0 grayscale-20 group-hover:grayscale-0 transition-all duration-500 z-0 relative"
                                            allowFullScreen={false}
                                            loading="lazy"
                                            style={{ border: 0 }}
                                            title="Peta Lokasi Masjid Agung Al Mukarram Amanah"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <div className="pointer-events-none absolute inset-0 -z-1 opacity-[0.4] dark:opacity-[0.02]"
                style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                }}
            ></div>
        </>
    );
}
