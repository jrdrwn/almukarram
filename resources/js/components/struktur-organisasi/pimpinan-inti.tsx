import { DollarSign, Pen, Star, Target } from 'lucide-react';

import type {
    AnggotaType,
    PimpinanIntiType,
} from '@/types/struktur-organisasi';

import Avatar from './avatar';

export default function PimpinanInti({
    data,
    onAvatarClick,
}: {
    data: PimpinanIntiType;
    onAvatarClick: (nama: string, src: string) => void;
}) {
    const handleAvatarClick = (p: AnggotaType) => {
        if (p.fotoUrl) {
            onAvatarClick(p.nama, p.fotoUrl);
        }
    };

    return (
        <section className="relative z-10 mb-12">
            {/* Background glow for the section */}
            <div className="absolute inset-x-0 -top-20 -z-10 mx-auto h-96 w-full max-w-2xl rounded-full bg-emerald-500/10 blur-[100px]" />

            <div className="mb-8 flex items-center gap-3 border-b-2 border-primary/20 pb-2">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                    Pimpinan BPMA
                </h3>
            </div>

            {/* Ketua Umum */}
            <div className="mb-8 flex justify-center">
                {data.pimpinanTop.map((p, i) => (
                    <div
                        key={i}
                        className="w-full max-w-sm transform rounded-2xl border-2 border-emerald-100 bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 active:-translate-y-1 dark:border-emerald-900/50 dark:bg-card"
                    >
                        <div className="mx-auto mb-4 flex items-center justify-center">
                            <Avatar
                                nama={p.nama}
                                fotoUrl={p.fotoUrl}
                                size={140}
                                fallbackIcon={
                                    <Star className="h-14 w-14 text-white" />
                                }
                                onClick={() => handleAvatarClick(p)}
                            />
                        </div>
                        <div className="text-xl font-bold">{p.nama}</div>
                        <div className="mt-2 font-semibold text-primary">
                            {p.jabatan}
                        </div>
                    </div>
                ))}
            </div>

            {/* Ketua Harian + Ketua I, II, III */}
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {data.ketua.map((p, i) => (
                    <div
                        key={i}
                        className="transform rounded-2xl border border-border/50 bg-white p-5 text-center shadow transition duration-300 hover:-translate-y-1 hover:shadow-md active:-translate-y-1 active:shadow-md dark:bg-card"
                    >
                        <div className="mx-auto mb-4 flex items-center justify-center">
                            <Avatar
                                nama={p.nama}
                                fotoUrl={p.fotoUrl}
                                size={110}
                                onClick={() => handleAvatarClick(p)}
                            />
                        </div>
                        <div className="text-sm leading-tight font-bold">
                            {p.nama}
                        </div>
                        <div className="mt-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                            {p.jabatan}
                        </div>
                    </div>
                ))}
            </div>

            {/* Sekretaris & Bendahara */}
            <div className="flex flex-wrap justify-center gap-6">
                {data.sekbend.map((p, i) => {
                    const isBendahara = p.jabatan?.includes('Bendahara');
                    return (
                        <div
                            key={i}
                            className="w-45 transform rounded-2xl border border-border/50 bg-white p-5 text-center shadow transition duration-300 hover:-translate-y-1 hover:shadow-md active:-translate-y-1 active:shadow-md dark:bg-card"
                        >
                            <div className="mx-auto mb-4 flex items-center justify-center">
                                <Avatar
                                    nama={p.nama}
                                    fotoUrl={p.fotoUrl}
                                    size={90}
                                    fallbackIcon={
                                        isBendahara ? (
                                            <DollarSign className="h-8 w-8 text-primary" />
                                        ) : (
                                            <Pen className="h-8 w-8 text-primary" />
                                        )
                                    }
                                    bgColor="bg-emerald-50 dark:bg-emerald-900/20"
                                    onClick={() => handleAvatarClick(p)}
                                />
                            </div>
                            <div className="text-sm leading-tight font-bold">
                                {p.nama}
                            </div>
                            <div className="mt-2 text-[11px] font-medium tracking-wider text-muted-foreground uppercase">
                                {p.jabatan}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
