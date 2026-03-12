export interface AnggotaType {
    nama: string;
    jabatan?: string | null;
    fotoUrl: string | null;
}

export interface BidangType {
    nama: string;
    warnaKonteks: 'riayah' | 'idarah' | 'imarah';
    ketua: AnggotaType | null;
    sekret: AnggotaType | null;
    anggota: AnggotaType[];
}

export interface SekretariatType {
    kepala: AnggotaType | null;
    anggota: AnggotaType[];
}

export interface PimpinanIntiType {
    pimpinanTop: AnggotaType[];
    ketua: AnggotaType[];
    sekbend: AnggotaType[];
}

export interface StrukturOrganisasiProps {
    pimpinanInti: PimpinanIntiType;
    bidang: BidangType[];
    sekretariat: SekretariatType;
    [key: string]: unknown;
}
