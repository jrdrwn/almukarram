import HeroSection from '@/components/jadwal-sholat/hero-section';
import InfoSection from '@/components/jadwal-sholat/info-section';
import LatestNews from '@/components/jadwal-sholat/latest-news';
import LocationMap from '@/components/jadwal-sholat/location-map';
import TomorrowSchedule from '@/components/jadwal-sholat/tomorrow-schedule';
import WeeklySchedule from '@/components/jadwal-sholat/weekly-schedule';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import PageHeader from '@/components/shared/page-header';
import Seo from '@/components/shared/seo';
import { Clock, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function JadwalSholat({
    beritaList = [],
}: {
    beritaList?: any[];
}) {
    const [jadwal, setJadwal] = useState<any>({});
    const [jadwalBesok, setJadwalBesok] = useState<any>({});
    const [jadwal7Hari, setJadwal7Hari] = useState<any>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJadwal = async () => {
            try {
                // Fetch for multiple days based on Aladhan API for Kapuas
                const today = new Date();
                const year = today.getFullYear();
                const month = today.getMonth() + 1;

                const response = await fetch(
                    `https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=Kapuas&country=Indonesia&method=20`,
                );
                const data = await response.json();

                if (data.code === 200) {
                    const days = data.data;

                    // get today's date string like "DD-MM-YYYY"
                    const todayStr =
                        String(today.getDate()).padStart(2, '0') +
                        '-' +
                        String(today.getMonth() + 1).padStart(2, '0') +
                        '-' +
                        today.getFullYear();

                    const todayData = days.find(
                        (d: any) => d.date.gregorian.date === todayStr,
                    );

                    if (todayData) {
                        setJadwal({
                            ...todayData.timings,
                            hijri_id: `${todayData.date.hijri.day} ${todayData.date.hijri.month.en} ${todayData.date.hijri.year} H`,
                        });
                    }

                    // Get tomorrow
                    const tomorrow = new Date(today);
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    const tomorrowStr =
                        String(tomorrow.getDate()).padStart(2, '0') +
                        '-' +
                        String(tomorrow.getMonth() + 1).padStart(2, '0') +
                        '-' +
                        tomorrow.getFullYear();

                    const tomorrowData = days.find(
                        (d: any) => d.date.gregorian.date === tomorrowStr,
                    );
                    if (tomorrowData) {
                        setJadwalBesok(tomorrowData.timings);
                    }

                    // 7 days
                    const weekly: any = {};
                    for (let i = 0; i < 7; i++) {
                        const d = new Date(today);
                        d.setDate(d.getDate() + i);
                        const dStr =
                            String(d.getDate()).padStart(2, '0') +
                            '-' +
                            String(d.getMonth() + 1).padStart(2, '0') +
                            '-' +
                            d.getFullYear();

                        const dData = days.find(
                            (item: any) => item.date.gregorian.date === dStr,
                        );

                        // Output key format YYYY-MM-DD
                        const key = d.toISOString().split('T')[0];
                        if (dData) {
                            weekly[key] = {
                                subuh: dData.timings.Fajr,
                                terbit: dData.timings.Sunrise,
                                dhuha: dData.timings.Sunrise, // Approximate
                                dzuhur: dData.timings.Dhuhr,
                                ashar: dData.timings.Asr,
                                maghrib: dData.timings.Maghrib,
                                isya: dData.timings.Isha,
                                imsak: dData.timings.Imsak,
                            };
                        }
                    }
                    setJadwal7Hari(weekly);
                }
            } catch (error) {
                console.error('Error fetching prayer times:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJadwal();
    }, []);

    // Also handle clock ticking
    useEffect(() => {
        const updateClock = () => {
            const clockEl = document.querySelector('.live-clock');
            if (clockEl) {
                const now = new Date();
                clockEl.textContent = now.toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                });
            }

            const dateEl = document.querySelector('.live-date');
            if (dateEl) {
                const now = new Date();
                dateEl.textContent = now.toLocaleDateString('id-ID', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                });
            }

            // check active prayer
            const nowTime = new Date();
            const nowMins = nowTime.getHours() * 60 + nowTime.getMinutes();
            const toMins = (t: string) => {
                if (!t) return -1;
                const [h, m] = t.split(' ')[0].split(':').map(Number);
                return h * 60 + m;
            };

            const schedule = [
                'imsak',
                'subuh',
                'terbit',
                'dhuha',
                'dzuhur',
                'ashar',
                'maghrib',
                'isya',
            ];
            let active = 'isya';

            if (Object.keys(jadwal).length > 0) {
                // map API fields to lowercase local format
                const prayerData: Record<string, string> = {
                    imsak: jadwal.Imsak,
                    subuh: jadwal.Fajr,
                    terbit: jadwal.Sunrise,
                    dhuha: jadwal.Sunrise, // approximate
                    dzuhur: jadwal.Dhuhr,
                    ashar: jadwal.Asr,
                    maghrib: jadwal.Maghrib,
                    isya: jadwal.Isha,
                };

                for (let i = 0; i < schedule.length - 1; i++) {
                    const s = toMins(prayerData[schedule[i]]);
                    const e = toMins(prayerData[schedule[i + 1]]);
                    if (s >= 0 && nowMins >= s && nowMins < e) {
                        active = schedule[i];
                        break;
                    }
                }

                // Remove active classes
                document.querySelectorAll('.waktu-box').forEach((box) => {
                    box.classList.remove(
                        '-translate-y-3',
                        'bg-white/15',
                        'ring-1',
                        'ring-[#fce883]',
                        'shadow-[0_0_30px_rgba(252,232,131,0.25)]',
                    );
                });
                document
                    .querySelectorAll('.label-aktif')
                    .forEach((label: any) => {
                        label.style.display = 'none';
                    });

                // Add active class
                const box = document.querySelector(
                    `.waktu-box[data-prayer="${active}"]`,
                );
                if (box) {
                    box.classList.add(
                        '-translate-y-3',
                        'bg-white/15',
                        'ring-1',
                        'ring-[#fce883]',
                        'shadow-[0_0_30px_rgba(252,232,131,0.25)]',
                    );
                    const lbl: any = document.getElementById(`aktif-${active}`);
                    if (lbl) lbl.style.display = 'block';
                }

                // Determine next prayer countdown
                const activeIdx = schedule.indexOf(active);
                const nextIdx = (activeIdx + 1) % schedule.length;
                const nextPrayer = schedule[nextIdx];
                const nextTimeStr = prayerData[nextPrayer];

                if (nextTimeStr) {
                    const [nh, nm] = nextTimeStr
                        .split(' ')[0]
                        .split(':')
                        .map(Number);
                    const nowTimeObj = new Date();
                    const nextTimeObj = new Date();
                    nextTimeObj.setHours(nh, nm, 0, 0);

                    // If the calculated next time is earlier than now, it means it's for tomorrow.
                    if (nowTimeObj > nextTimeObj) {
                        nextTimeObj.setDate(nextTimeObj.getDate() + 1);
                    }

                    const diffMs = nextTimeObj.getTime() - nowTimeObj.getTime();
                    const h = Math.floor(diffMs / (1000 * 60 * 60));
                    const m = Math.floor(
                        (diffMs % (1000 * 60 * 60)) / (1000 * 60),
                    );
                    const s = Math.floor((diffMs % (1000 * 60)) / 1000);

                    const countdownEl = document.querySelector(
                        '.next-prayer-countdown',
                    );
                    if (countdownEl) {
                        countdownEl.textContent = `-${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
                    }

                    const nextLabelEl =
                        document.querySelector('.next-prayer-label');
                    if (nextLabelEl) {
                        const labels: any = {
                            subuh: 'Subuh',
                            terbit: 'Terbit',
                            dhuha: 'Dhuha',
                            dzuhur: 'Dzuhur',
                            ashar: 'Ashar',
                            maghrib: 'Maghrib',
                            isya: 'Isya',
                            imsak: 'Imsak',
                        };
                        nextLabelEl.textContent = `Menuju ${labels[nextPrayer]}`;
                    }
                }
            }
        };

        const timer = setInterval(updateClock, 1000);
        updateClock(); // initial call

        return () => clearInterval(timer);
    }, [jadwal]);

    // Format jadwal to match the prop that HeroSection expects
    const formattedJadwal = {
        subuh: jadwal.Fajr?.split(' ')[0],
        terbit: jadwal.Sunrise?.split(' ')[0],
        dhuha: jadwal.Sunrise?.split(' ')[0], // mock
        dzuhur: jadwal.Dhuhr?.split(' ')[0],
        ashar: jadwal.Asr?.split(' ')[0],
        maghrib: jadwal.Maghrib?.split(' ')[0],
        isya: jadwal.Isha?.split(' ')[0],
        imsak: jadwal.Imsak?.split(' ')[0],
        hijri_id: jadwal.hijri_id,
    };

    const formattedBesok = {
        subuh: jadwalBesok.Fajr?.split(' ')[0],
        terbit: jadwalBesok.Sunrise?.split(' ')[0],
        dhuha: jadwalBesok.Sunrise?.split(' ')[0], // mock
        dzuhur: jadwalBesok.Dhuhr?.split(' ')[0],
        ashar: jadwalBesok.Asr?.split(' ')[0],
        maghrib: jadwalBesok.Maghrib?.split(' ')[0],
        isya: jadwalBesok.Isha?.split(' ')[0],
        imsak: jadwalBesok.Imsak?.split(' ')[0],
    };

    return (
        <>
            <Seo title="Jadwal Sholat" />
            <Header />
            <PageHeader
                title="Waktu Sholat"
                subtitle="Jadwal lengkap waktu sholat untuk kota Kapuas, Indonesia. Informasi akurat berdasarkan perhitungan astronomi terkini."
                badgeText="Jadwal"
                badgeIcon={<Clock className="h-4 w-4" />}
                breadcrumbs={[
                    {
                        label: 'Beranda',
                        href: '/',
                        icon: <Home className="h-4 w-4" />,
                    },
                    { label: 'Layanan' },
                    {
                        label: 'Jadwal Sholat',
                        icon: <Clock className="h-4 w-4" />,
                    },
                ]}
            />

            <section className="py-12 md:py-20 lg:py-24">
                <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                    {/* Jadwal Hari Ini (Full Width) */}
                    <div className="mb-8 w-full">
                        {loading ? (
                            <div className="flex h-100 w-full items-center justify-center rounded-4xl bg-gray-100">
                                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                            </div>
                        ) : (
                            <HeroSection jadwal={formattedJadwal} />
                        )}
                    </div>

                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                        {/* Kolom Kiri: Tabel Utama, Berita & Info */}
                        <div className="flex flex-col gap-8 lg:col-span-8">
                            {/* Tabel 7 Hari */}
                            {!loading && (
                                <WeeklySchedule jadwal7Hari={jadwal7Hari} />
                            )}

                            {/* Berita Terbaru */}
                            <LatestNews berita={beritaList} />

                            {/* Informasi */}
                            <InfoSection />
                        </div>

                        {/* Kolom Kanan: Sidebar (Sticky) */}
                        <div className="sticky top-24 flex flex-col gap-8 lg:col-span-4">
                            {/* Jadwal Besok */}
                            {!loading &&
                                Object.keys(jadwalBesok).length > 0 && (
                                    <TomorrowSchedule
                                        jadwalBesok={formattedBesok}
                                    />
                                )}

                            {/* Peta Lokasi */}
                            <LocationMap />
                        </div>
                    </div>
                </div>
            </section>
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

