import { useEffect, useState } from 'react';

export interface JadwalSholatResult {
    subuh: string;
    terbit: string;
    dhuha: string;
    dzuhur: string;
    ashar: string;
    maghrib: string;
    isya: string;
}

export function useJadwalSholat() {
    const [jadwal, setJadwal] = useState<JadwalSholatResult | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJadwal = async () => {
            try {
                const today = new Date();
                const year = today.getFullYear();
                const month = today.getMonth() + 1;

                const response = await fetch(
                    `https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=Kapuas&country=Indonesia&method=20`,
                );
                const data = await response.json();

                if (data.code === 200) {
                    const days = data.data;
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
                        const t = todayData.timings;
                        setJadwal({
                            subuh: t.Fajr?.split(' ')[0] ?? '--:--',
                            terbit: t.Sunrise?.split(' ')[0] ?? '--:--',
                            dhuha: t.Sunrise?.split(' ')[0] ?? '--:--',
                            dzuhur: t.Dhuhr?.split(' ')[0] ?? '--:--',
                            ashar: t.Asr?.split(' ')[0] ?? '--:--',
                            maghrib: t.Maghrib?.split(' ')[0] ?? '--:--',
                            isya: t.Isha?.split(' ')[0] ?? '--:--',
                        });
                    }
                }
            } catch (error) {
                console.error('Error fetching prayer times:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJadwal();
    }, []);

    return { jadwal, loading };
}
