import {
    MoonStar,
    PenTool,
    Settings,
    UserCircle,
    Users,
    Wrench,
} from 'lucide-react';
import Avatar from './avatar';
import { bidang, fotoMap } from './struktur-organisasi-data';

const icons = {
    riayah: Wrench,
    idarah: Settings,
    imarah: MoonStar,
};

const gradients = {
    riayah: 'from-emerald-800 to-emerald-700 dark:from-emerald-900 dark:to-emerald-800',
    idarah: 'from-green-700 to-green-600 dark:from-green-900 dark:to-green-800',
    imarah: 'from-teal-700 to-teal-600 dark:from-teal-900 dark:to-teal-800',
};

export default function BidangBidang({
    onAvatarClick,
}: {
    onAvatarClick: (nama: string, src: string) => void;
}) {
    const handleAvatarClick = (nama: string) => {
        const foto = fotoMap[nama];
        if (foto) {
            onAvatarClick(nama, `/images/${encodeURIComponent(foto)}`);
        }
    };

    return (
        <section className="relative z-10 mb-12 space-y-10">
            {bidang.map((b, idx) => {
                const Icon = icons[b.warnaKonteks as keyof typeof icons];
                const bgGradient =
                    gradients[b.warnaKonteks as keyof typeof gradients];

                return (
                    <div key={idx} className="group relative">
                        {/* Background glow for the section */}
                        <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/5 blur-xl transition duration-500 group-hover:bg-primary/10 group-active:bg-primary/10" />

                        <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
                            {/* Header bidang */}
                            <div
                                className={`flex items-center gap-4 bg-linear-to-r p-5 md:p-6 ${bgGradient} text-white`}
                            >
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/20 shadow-inner backdrop-blur-sm">
                                    <Icon className="h-7 w-7" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold tracking-tight md:text-2xl">
                                        {b.nama}
                                    </h4>
                                    <p className="mt-0.5 text-sm font-medium text-white/80">
                                        Badan Pengelola Masjid Agung
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 p-5 md:p-6">
                                {/* Ketua & Sekretaris */}
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div className="flex items-center gap-4 rounded-2xl border border-primary/20 bg-muted/30 p-4 transition-colors hover:border-primary/50 active:border-primary/50 dark:bg-muted/10">
                                        <div className="shrink-0 drop-shadow-sm">
                                            <Avatar
                                                nama={b.ketua}
                                                size={70}
                                                onClick={() =>
                                                    handleAvatarClick(b.ketua)
                                                }
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-1 text-xs font-bold tracking-wider text-primary uppercase">
                                                Ketua Bidang
                                            </div>
                                            <div className="text-[15px] font-bold">
                                                {b.ketua}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 rounded-2xl border bg-muted/30 p-4 transition-colors hover:border-border/80 active:border-border/80 dark:bg-muted/10">
                                        <div className="shrink-0 drop-shadow-sm">
                                            <Avatar
                                                nama={b.sekret}
                                                size={70}
                                                fallbackIcon={
                                                    <PenTool className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                                                }
                                                bgColor="bg-slate-200 dark:bg-slate-800"
                                                onClick={() =>
                                                    handleAvatarClick(b.sekret)
                                                }
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-1 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                                                Sekretaris Bidang
                                            </div>
                                            <div className="text-[15px] font-bold">
                                                {b.sekret}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Anggota */}
                                <div className="pt-2">
                                    <div className="mb-4 flex items-center gap-2">
                                        <Users className="h-5 w-5 text-primary" />
                                        <h6 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">
                                            Anggota
                                        </h6>
                                        <span className="ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                                            {b.anggota.length}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                        {b.anggota.map((ang, j) => (
                                            <div
                                                key={j}
                                                className="group/member flex items-center gap-3 rounded-xl border bg-background p-2.5 transition-all hover:border-primary/30 hover:shadow-md active:border-primary/30 active:shadow-md"
                                            >
                                                <div className="shrink-0 transition-transform group-hover/member:scale-110 group-active/member:scale-110">
                                                    <Avatar
                                                        nama={ang}
                                                        size={42}
                                                        fallbackIcon={
                                                            <UserCircle className="h-5 w-5 text-slate-400" />
                                                        }
                                                        bgColor="bg-slate-100 dark:bg-slate-800"
                                                        onClick={() =>
                                                            handleAvatarClick(
                                                                ang,
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <span className="text-sm leading-tight font-medium transition-colors group-hover/member:text-primary group-active/member:text-primary">
                                                    {ang}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
