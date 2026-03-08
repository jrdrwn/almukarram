import { Coins, HandHeart, Quote, Sparkles } from 'lucide-react';
import { FaMoneyBill } from 'react-icons/fa';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-32">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 bg-[url('/images/pattern-islamic.png')] opacity-5"
                style={{ backgroundSize: '400px' }}
            ></div>

            {/* Glowing Blurs */}
            <div className="absolute top-0 right-1/4 -z-10 h-125 w-125 rounded-full bg-emerald-400/20 blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 -z-10 h-100 w-100 rounded-full bg-teal-300/20 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 xl:gap-24">
                    {/* Kolom Kiri: Gambar dengan dekorasi asimetris */}
                    <div className="reveal fade-up relative mx-auto w-full max-w-lg pt-8 pr-4 pb-4 pl-8 lg:max-w-none">
                        {/* Background border offset */}
                        <div className="absolute inset-0 top-12 right-8 bottom-0 left-0 -z-10 translate-x-4 translate-y-4 transform rounded-tl-[6rem] rounded-tr-3xl rounded-br-[6rem] rounded-bl-3xl border-2 border-emerald-500/20"></div>

                        <div className="group relative overflow-hidden rounded-tl-[6rem] rounded-tr-3xl rounded-br-[6rem] rounded-bl-3xl bg-white shadow-2xl ring-1 ring-slate-900/10">
                            {/* Gambar Dummy/Masjid (Sesuaikan dengan gambar yang ada) */}
                            <img
                                src="/images/masjidnewww-scaled.png"
                                alt="Kegiatan ZIS"
                                className="h-112.5 w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 group-active:scale-105"
                                onError={(e) => {
                                    // Fallback jika gambar tidak ditemukan
                                    e.currentTarget.src =
                                        'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=800';
                                }}
                            />
                            {/* Efek Vignette Bawah */}
                            <div className="absolute inset-0 bg-linear-to-t from-emerald-950/90 via-emerald-900/40 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 z-20 w-full p-8 transition-transform duration-500 group-hover:-translate-y-2 group-active:-translate-y-2 md:p-10">
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/80 px-4 py-2 text-white shadow-lg backdrop-blur-md">
                                    <HandHeart className="h-5 w-5" />
                                    <span className="text-sm font-bold tracking-wide">
                                        Mari Berbagi
                                    </span>
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-white">
                                    Pahalanya Terus Mengalir
                                </h3>
                                <p className="text-sm leading-relaxed text-emerald-50/90 md:text-base">
                                    Setiap keping infaq yang Anda salurkan
                                    menjadi saksi amal kebaikan jariyah di
                                    akhirat kelak.
                                </p>
                            </div>
                        </div>

                        {/* Motif Floating Kanan Atas */}
                        <div
                            className="pointer-events-none absolute top-0 right-0 z-10 flex h-28 w-28 animate-bounce items-center justify-center rounded-4xl border border-white/50 bg-white/90 shadow-xl backdrop-blur-md md:-right-6 md:h-32 md:w-32"
                            style={{ animationDuration: '4s' }}
                        >
                            <div className="flex flex-col items-center gap-2">
                                <div className="rounded-xl bg-emerald-100 p-3">
                                    <Coins className="h-8 w-8 text-emerald-600" />
                                </div>
                                <span className="text-xs font-black tracking-wider text-slate-700">
                                    Transparan
                                </span>
                            </div>
                        </div>

                        {/* Motif Floating Kiri Bawah */}
                        <div className="pointer-events-none absolute bottom-4 -left-4 z-10 flex h-24 w-24 transform items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-emerald-600 shadow-2xl shadow-teal-600/40 transition-transform duration-300 hover:scale-110 active:scale-110 md:h-28 md:w-28">
                            <FaMoneyBill className="h-10 w-10 text-white drop-shadow-md md:h-12 md:w-12" />
                            <div
                                className="absolute inset-0 animate-ping rounded-full border-4 border-white/20"
                                style={{ animationDuration: '3s' }}
                            ></div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Teks & Tipografi */}
                    <div
                        className="reveal fade-up"
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700 shadow-inner ring-1 ring-emerald-500/20 backdrop-blur-sm">
                            <Sparkles className="h-4 w-4 text-yellow-500" />
                            SEDEKAH TERBAIK
                        </div>

                        <h2 className="mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
                            Waqaf, Infaq & <br />
                            <span className="relative inline-block bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                                Shadaqah
                                <svg
                                    className="absolute -bottom-2 left-0 h-3 w-full text-teal-400/30"
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0 5 Q 50 10 100 5"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="transparent"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h2>

                        <div className="mb-8 flex gap-2">
                            <div className="h-1.5 w-16 rounded-full bg-linear-to-r from-emerald-600 to-emerald-400"></div>
                            <div className="h-1.5 w-6 rounded-full bg-teal-300"></div>
                        </div>

                        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
                            Masjid Agung Al-Mukarram Amanah membuka pintu
                            seluas-luasnya bagi masyarakat yang ingin
                            berpartisipasi dalam memakmurkan masjid melalui
                            waqaf, infaq, dan shadaqah. Setiap kontribusi Anda
                            akan dikelola secara{' '}
                            <strong className="text-slate-800">
                                transparan
                            </strong>{' '}
                            dan disalurkan untuk kepentingan jamaah dan umat.
                        </p>

                        <blockquote className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md active:shadow-md">
                            <div className="absolute top-0 left-0 h-full w-2 bg-linear-to-b from-emerald-500 to-teal-400"></div>
                            <Quote className="absolute top-6 right-6 h-16 w-16 -rotate-12 transform text-slate-50 opacity-50 transition-all duration-500 group-hover:scale-110 group-hover:text-emerald-50 group-active:scale-110 group-active:text-emerald-50" />

                            <p className="relative z-10 mb-4 text-base leading-relaxed font-medium text-slate-700 italic md:text-lg">
                                "Perumpamaan orang-orang yang menginfaqkan
                                hartanya di jalan Allah adalah seperti sebutir
                                biji yang menumbuhkan tujuh tangkai, pada setiap
                                tangkai ada seratus biji."
                            </p>
                            <footer className="relative z-10 flex items-center gap-3">
                                <div className="h-px w-8 bg-emerald-300"></div>
                                <span className="text-sm font-black tracking-wide text-emerald-700 uppercase">
                                    Q.S. Al-Baqarah : 261
                                </span>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
