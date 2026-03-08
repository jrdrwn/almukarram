import { Link } from '@inertiajs/react';
import { Calendar, ChevronRight, Newspaper } from 'lucide-react';

interface BeritaItem {
    id: number;
    slug: string;
    judul: string;
    gambar: string | null;
    created_at: string | null;
}

export default function LatestNews({ berita = [] }: { berita?: BeritaItem[] }) {
    const formatDate = (value?: string | null) => {
        if (!value) return '-';

        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return '-';

        return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    const buildImageUrl = (gambar?: string | null) => {
        if (!gambar) return '/images/masjidnewww-scaled.png';
        return gambar.startsWith('http') ? gambar : `/storage/${gambar}`;
    };

    return (
        <div className="group relative overflow-hidden rounded-4xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] active:shadow-[0_8px_30px_rgb(0,0,0,0.08)] sm:p-8">
            <div className="absolute -right-20 -bottom-20 z-0 h-62.5 w-62.5 rounded-full bg-orange-50 blur-[60px] transition-transform duration-700 group-hover:scale-125 group-active:scale-125"></div>

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
                    href="/berita"
                    className="flex items-center gap-1.5 rounded-xl bg-orange-50/50 px-4 py-2 text-sm font-bold text-orange-600 ring-1 ring-orange-100 transition-colors hover:text-orange-700 active:text-orange-700"
                >
                    Lihat Semua
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>

            {berita.length === 0 ? (
                <div className="relative z-10 rounded-3xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-sm text-gray-500">
                    Belum ada berita yang dipublikasikan.
                </div>
            ) : (
                <div className="relative z-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {berita.map((item) => (
                        <Link
                            key={item.id}
                            href={`/berita-detail/${item.slug}`}
                            className="group/news flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-gray-200 active:-translate-y-1 active:shadow-xl active:ring-gray-200"
                        >
                            <div className="relative aspect-4/3 overflow-hidden">
                                <img
                                    src={buildImageUrl(item.gambar)}
                                    alt={item.judul}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover/news:scale-110 group-active/news:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            '/images/masjidnewww-scaled.png';
                                    }}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover/news:opacity-100 group-active/news:opacity-100"></div>
                            </div>

                            <div className="flex flex-1 flex-col p-5">
                                <div className="mb-2 flex items-center text-xs font-semibold text-orange-600">
                                    <Calendar className="mr-1.5 h-3.5 w-3.5" />
                                    {formatDate(item.created_at)}
                                </div>

                                <h4 className="mb-4 line-clamp-3 text-lg leading-tight font-bold text-gray-900 transition-colors group-hover/news:text-orange-600 group-active/news:text-orange-600">
                                    {item.judul}
                                </h4>

                                <span className="mt-auto inline-flex items-center text-sm font-bold text-gray-900 group-hover/news:text-orange-600 group-active/news:text-orange-600">
                                    Baca selengkapnya
                                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/news:translate-x-1 group-active/news:translate-x-1" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
