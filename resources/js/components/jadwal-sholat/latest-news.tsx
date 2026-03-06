import { Link } from '@inertiajs/react';
import { Calendar, ChevronRight, Newspaper, Share2 } from 'lucide-react';

export default function LatestNews({ berita = [] }: { berita?: any[] }) {
    // Dummy if empty
    const displayBerita =
        berita.length > 0
            ? berita
            : [
                  {
                      id: 1,
                      title: "Pengajian Rutin Ba'da Maghrib",
                      date: '12 Oct 2023',
                      excerpt:
                          'Hadirilah pengajian rutin kitab Riyadhus Shalihin bersama Ust. H. Ahmad.',
                      image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=400',
                  },
                  {
                      id: 2,
                      title: 'Jadwal Imam & Khatib Jumat',
                      date: '10 Oct 2023',
                      excerpt:
                          'Berikut adalah daftar petugas sholat jumat untuk bulan ini di Masjid Al-Mukarram.',
                      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=400',
                  },
                  {
                      id: 3,
                      title: 'Donasi Pembangunan Sayap Kanan',
                      date: '05 Oct 2023',
                      excerpt:
                          'Masjid Al-Mukarram membuka kesempatan amal jariyah untuk perluasan bangunan.',
                      image: 'https://images.unsplash.com/photo-1574246604907-db69e30fdcab?auto=format&fit=crop&q=80&w=400',
                  },
              ];

    return (
        <div className="group relative overflow-hidden rounded-4xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] sm:p-8">
            <div className="absolute -right-20 -bottom-20 z-0 h-62.5 w-62.5 rounded-full bg-orange-50 blur-[60px] transition-transform duration-700 group-hover:scale-125"></div>

            <div className="relative z-10 mb-8 flex flex-col items-start gap-4 border-b border-gray-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 shadow-inner">
                        <Newspaper className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-xl font-extrabold tracking-tight text-gray-900">
                            Berita & Info Masjid
                        </h3>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                            Informasi kegiatan terbaru Masjid Al-Mukarram
                        </p>
                    </div>
                </div>

                <Link
                    href="#"
                    className="flex items-center gap-1.5 rounded-xl bg-orange-50/50 px-4 py-2 text-sm font-bold text-orange-600 ring-1 ring-orange-100 transition-colors hover:text-orange-700"
                >
                    Lihat Semua
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="relative z-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {displayBerita.map((item) => (
                    <div
                        key={item.id}
                        className="group/news flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-gray-200"
                    >
                        <div className="relative aspect-4/3 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover/news:scale-110"
                                onError={(e) => {
                                    e.currentTarget.src =
                                        'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=400';
                                }}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover/news:opacity-100"></div>

                            <div className="absolute top-3 right-3 translate-x-4 opacity-0 transition-all duration-300 group-hover/news:translate-x-0 group-hover/news:opacity-100">
                                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/40">
                                    <Share2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <div className="mb-2 flex items-center text-xs font-semibold text-orange-600">
                                <Calendar className="mr-1.5 h-3.5 w-3.5" />
                                {item.date}
                            </div>

                            <h4 className="mb-2 line-clamp-2 text-lg leading-tight font-bold text-gray-900 transition-colors group-hover/news:text-orange-600">
                                {item.title}
                            </h4>

                            <p className="mb-4 line-clamp-2 flex-1 text-sm text-gray-500">
                                {item.excerpt}
                            </p>

                            <Link
                                href="#"
                                className="mt-auto inline-flex items-center text-sm font-bold text-gray-900 group-hover/news:text-orange-600"
                            >
                                Baca selengkapnya
                                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/news:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
