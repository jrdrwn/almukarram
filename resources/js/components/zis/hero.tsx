import { Coins, HandHeart, Quote, Sparkles } from 'lucide-react';
import { FaMoneyBill } from 'react-icons/fa';

export function Hero() {
    return (
        <section className="relative overflow-hidden py-20 sm:py-32 bg-slate-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/images/pattern-islamic.png')] opacity-5" style={{ backgroundSize: '400px' }}></div>

            {/* Glowing Blurs */}
            <div className="absolute top-0 right-1/4 -z-10 h-125 w-125 rounded-full bg-emerald-400/20 blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 -z-10 h-100 w-100 rounded-full bg-teal-300/20 blur-[100px]" />

            <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

                    {/* Kolom Kiri: Gambar dengan dekorasi asimetris */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none reveal fade-up pt-8 pl-8 pr-4 pb-4">
                        {/* Background border offset */}
                        <div className="absolute inset-0 top-12 left-0 right-8 bottom-0 rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-3xl rounded-bl-3xl border-2 border-emerald-500/20 -z-10 transform translate-x-4 translate-y-4"></div>

                        <div className="relative rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 group bg-white">
                            {/* Gambar Dummy/Masjid (Sesuaikan dengan gambar yang ada) */}
                            <img
                                src="/images/masjidnewww-scaled.png"
                                alt="Kegiatan ZIS"
                                className="w-full h-112.5 object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                onError={(e) => {
                                    // Fallback jika gambar tidak ditemukan
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=800';
                                }}
                            />
                            {/* Efek Vignette Bawah */}
                            <div className="absolute inset-0 bg-linear-to-t from-emerald-950/90 via-emerald-900/40 to-transparent"></div>

                            <div className="z-20 absolute bottom-0 left-0 p-8 md:p-10 w-full transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/80 backdrop-blur-md px-4 py-2 text-white shadow-lg mb-4">
                                    <HandHeart className="h-5 w-5" />
                                    <span className="text-sm font-bold tracking-wide">Mari Berbagi</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Pahalanya Terus Mengalir</h3>
                                <p className="text-emerald-50/90 text-sm md:text-base leading-relaxed">
                                    Setiap keping infaq yang Anda salurkan menjadi saksi amal kebaikan jariyah di akhirat kelak.
                                </p>
                            </div>
                        </div>

                        {/* Motif Floating Kanan Atas */}
                        <div className="absolute top-0 right-0 md:-right-6 h-28 w-28 md:h-32 md:w-32 rounded-4xl bg-white/90 backdrop-blur-md shadow-xl border border-white/50 flex items-center justify-center animate-bounce pointer-events-none z-10" style={{ animationDuration: '4s' }}>
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-emerald-100 rounded-xl">
                                    <Coins className="h-8 w-8 text-emerald-600" />
                                </div>
                                <span className="text-xs font-black text-slate-700 tracking-wider">Transparan</span>
                            </div>
                        </div>

                        {/* Motif Floating Kiri Bawah */}
                        <div className="absolute bottom-4 -left-4  h-24 w-24 md:h-28 md:w-28 rounded-full bg-linear-to-br from-teal-500 to-emerald-600 shadow-2xl shadow-teal-600/40 flex items-center justify-center pointer-events-none z-10 transform hover:scale-110 transition-transform duration-300">
                            <FaMoneyBill className="h-10 w-10 md:h-12 md:w-12 text-white drop-shadow-md" />
                            <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping" style={{ animationDuration: '3s' }}></div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Teks & Tipografi */}
                    <div className="reveal fade-up" style={{ transitionDelay: '0.2s' }}>
                        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-emerald-700 bg-emerald-100 shadow-inner ring-1 ring-emerald-500/20 mb-8 backdrop-blur-sm">
                            <Sparkles className="h-4 w-4 text-yellow-500" />
                            SEDEKAH TERBAIK
                        </div>

                        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] leading-[1.1] mb-6">
                            Waqaf, Infaq & <br/>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500 relative inline-block">
                                Shadaqah
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-teal-400/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </h2>

                        <div className="flex gap-2 mb-8">
                            <div className="h-1.5 w-16 bg-linear-to-r from-emerald-600 to-emerald-400 rounded-full"></div>
                            <div className="h-1.5 w-6 bg-teal-300 rounded-full"></div>
                        </div>

                        <p className="text-lg leading-relaxed text-slate-600 mb-10 max-w-2xl">
                            Masjid Agung Al-Mukarram Amanah membuka pintu seluas-luasnya bagi masyarakat yang ingin berpartisipasi dalam memakmurkan masjid melalui waqaf, infaq, dan shadaqah. Setiap kontribusi Anda akan dikelola secara <strong className="text-slate-800">transparan</strong> dan disalurkan untuk kepentingan jamaah dan umat.
                        </p>

                        <blockquote className="relative p-8 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300">
                            <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-emerald-500 to-teal-400"></div>
                            <Quote className="absolute top-6 right-6 h-16 w-16 text-slate-50 opacity-50 transform -rotate-12 group-hover:scale-110 group-hover:text-emerald-50 transition-all duration-500" />

                            <p className="text-base md:text-lg italic text-slate-700 mb-4 relative z-10 font-medium leading-relaxed">
                                "Perumpamaan orang-orang yang menginfaqkan hartanya di jalan Allah adalah seperti sebutir biji yang menumbuhkan tujuh tangkai, pada setiap tangkai ada seratus biji."
                            </p>
                            <footer className="flex items-center gap-3 relative z-10">
                                <div className="h-px w-8 bg-emerald-300"></div>
                                <span className="text-sm font-black text-emerald-700 tracking-wide uppercase">
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
