<?php

namespace App\Filament\Widgets;

use App\Enums\Role;
use App\Models\JadwalJumat;
use App\Models\JadwalPengajian;
use App\Models\Pengumuman;
use App\Models\User;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class JadwalRingkasanWidget extends StatsOverviewWidget
{
    protected static ?int $sort = 3;

    protected int|string|array $columnSpan = 1;

    public static function canView(): bool
    {
        /** @var User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Root, Role::Admin) ?? false;
    }

    protected function getStats(): array
    {
        $jumatBulanIni = JadwalJumat::whereYear('tanggal', Carbon::now()->year)
            ->whereMonth('tanggal', Carbon::now()->month)
            ->count();

        $pengajianAkanDatang = JadwalPengajian::where('status', 'Akan Datang')
            ->where('tanggal', '>=', Carbon::today())
            ->count();

        $pengumumanAktif = Pengumuman::where(function ($q) {
            $q->whereNull('tanggal_selesai')
                ->orWhere('tanggal_selesai', '>=', Carbon::today());
        })
            ->where(function ($q) {
                $q->whereNull('tanggal_mulai')
                    ->orWhere('tanggal_mulai', '<=', Carbon::today());
            })
            ->count();

        return [
            Stat::make('Jadwal Jumat Bulan Ini', $jumatBulanIni)
                ->description('Sholat Jumat ' . Carbon::now()->translatedFormat('F Y'))
                ->descriptionIcon(Heroicon::OutlinedCalendarDays)
                ->color('primary'),

            Stat::make('Pengajian Akan Datang', $pengajianAkanDatang)
                ->description('Jadwal pengajian mendatang')
                ->descriptionIcon(Heroicon::OutlinedAcademicCap)
                ->color('info'),

            Stat::make('Pengumuman Aktif', $pengumumanAktif)
                ->description('Sedang berlaku saat ini')
                ->descriptionIcon(Heroicon::OutlinedMegaphone)
                ->color($pengumumanAktif > 0 ? 'warning' : 'gray'),
        ];
    }
}
