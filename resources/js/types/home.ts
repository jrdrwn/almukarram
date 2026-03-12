export type AgendaTerdekat = {
    judul: string;
    tanggal_mulai: string | null;
    sumber?: 'pengumuman' | 'jumat' | 'sholat' | 'pengajian';
};

export type BeritaUtama = {
    id: number;
    slug: string;
    judul: string;
    ringkasan: string;
    gambar: string | null;
    views: number;
    published_at: string;
    user: { id: number; name: string } | null;
    kategori: { id: number; nama: string } | null;
};

export type BeritaItem = {
    id: number;
    slug: string;
    judul: string;
    gambar: string | null;
    published_at: string;
    kategori: { id: number; nama: string } | null;
};

export type VideoItem = {
    id: number;
    judul: string;
    youtube_id: string;
    kategori: { id: number; nama: string } | null;
};

export type OpiniItem = {
    id: number;
    slug: string;
    judul: string;
    ringkasan: string;
    waktu_baca: string | null;
    published_at: string;
    user: { id: number; name: string } | null;
    kategori: { id: number; nama: string } | null;
};

export type JadwalJumatData = {
    tanggal: string;
    waktu: string;
    khatib: string;
    imam: string;
    muadzin: string;
    bilal: string;
};

export type JadwalPengajianItem = {
    id: number;
    hari: string;
    tanggal: string;
    waktu: string;
    judul: string;
    pemateri: string;
    tipe: string;
};

export type JadwalSholatData = {
    subuh: string;
    terbit: string;
    dhuha: string;
    dzuhur: string;
    ashar: string;
    maghrib: string;
    isya: string;
};

export type HomePageProps = {
    siteContact?: {
        address?: string;
        phone?: string;
        whatsapp?: string;
        email?: string;
        instagram?: string;
        facebook?: string;
        youtube?: string;
        location?: string;
    };
    agendaTerdekat: AgendaTerdekat | null;
    beritaUtama: BeritaUtama | null;
    beritaTerbaru: BeritaItem[];
    videos: VideoItem[];
    opiniTerbaru: OpiniItem[];
    jadwalJumat: JadwalJumatData | null;
    jadwalPengajian: JadwalPengajianItem[];
};
