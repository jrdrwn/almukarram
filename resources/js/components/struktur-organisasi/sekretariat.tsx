import { Briefcase, Building, UserCircle, Users } from 'lucide-react';

import type { AnggotaType, SekretariatType } from '@/types/struktur-organisasi';

import Avatar from './avatar';

export default function Sekretariat({
    data,
    onAvatarClick,
}: {
    data: SekretariatType;
    onAvatarClick: (nama: string, src: string) => void;
}) {
    const handleAvatarClick = (p: AnggotaType) => {
        if (p.fotoUrl) {
            onAvatarClick(p.nama, p.fotoUrl);
        }
    };

    return (
        <section className="relative z-10 mb-16">
            {/* Background glow */}
            <div className="absolute inset-x-0 bottom-0 -z-10 mx-auto h-64 w-full max-w-2xl rounded-full bg-slate-500/10 blur-[80px]" />

            <div className="relative overflow-hidden rounded-3xl border bg-card shadow-sm">
                {/* Header */}
                <div className="relative flex items-center gap-4 overflow-hidden bg-linear-to-r from-slate-700 to-slate-600 p-5 text-white md:p-6 dark:from-slate-800 dark:to-slate-700">
                    {/* Decorative pattern */}
                    <div className="pointer-events-none absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 transform opacity-10">
                        <Building className="h-48 w-48" />
                    </div>

                    <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/20 shadow-inner backdrop-blur-sm">
                        <Building className="h-7 w-7" />
                    </div>
                    <div className="z-10">
                        <h4 className="text-xl font-bold tracking-tight md:text-2xl">
                            Sekretariat
                        </h4>
                        <p className="mt-0.5 text-sm font-medium text-white/80">
                            Pusat Administrasi &amp; Pelayanan
                        </p>
                    </div>
                </div>

                <div className="space-y-6 p-5 md:p-6">
                    {/* Kepala Sekretariat */}
                    {data.kepala && (
                        <div className="flex flex-col gap-5 md:flex-row">
                            <div className="w-full md:w-1/2 lg:w-1/3">
                                <div className="flex h-full items-center gap-4 rounded-2xl border border-slate-300 bg-muted/30 p-4 transition-colors hover:border-slate-400 active:border-slate-400 dark:border-slate-700/50 dark:bg-muted/10">
                                    <div className="shrink-0 drop-shadow-sm">
                                        <Avatar
                                            nama={data.kepala.nama}
                                            fotoUrl={data.kepala.fotoUrl}
                                            size={70}
                                            fallbackIcon={
                                                <Briefcase className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                                            }
                                            bgColor="bg-slate-200 dark:bg-slate-800"
                                            onClick={() =>
                                                handleAvatarClick(data.kepala!)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-1 text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                                            Kepala Sekretariat
                                        </div>
                                        <div className="text-[15px] font-bold">
                                            {data.kepala.nama}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Anggota */}
                    {data.anggota.length > 0 && (
                        <div className="pt-2">
                            <div className="mb-4 flex items-center gap-2">
                                <Users className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                                <h6 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">
                                    Anggota Sekretariat
                                </h6>
                                <span className="ml-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                    {data.anggota.length}
                                </span>
                            </div>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {data.anggota.map((ang, j) => (
                                    <div
                                        key={j}
                                        className="group/member flex items-center gap-3 rounded-xl border bg-background p-2.5 transition-all hover:border-slate-300 hover:shadow-md active:border-slate-300 active:shadow-md dark:hover:border-slate-700"
                                    >
                                        <div className="shrink-0 transition-transform group-hover/member:scale-110 group-active/member:scale-110">
                                            <Avatar
                                                nama={ang.nama}
                                                fotoUrl={ang.fotoUrl}
                                                size={42}
                                                fallbackIcon={
                                                    <UserCircle className="h-5 w-5 text-slate-400" />
                                                }
                                                bgColor="bg-slate-100 dark:bg-slate-800"
                                                onClick={() =>
                                                    handleAvatarClick(ang)
                                                }
                                            />
                                        </div>
                                        <span className="text-sm leading-tight font-medium transition-colors group-hover/member:text-slate-700 group-active/member:text-slate-700 dark:group-hover/member:text-slate-300 dark:group-active/member:text-slate-300">
                                            {ang.nama}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
