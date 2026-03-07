<?php

namespace App\Filament\Resources\JadwalSholats\Widgets;

use App\Models\JadwalSholat;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Carbon;

class JadwalSholatStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total    = JadwalSholat::count();
        $bulanIni = JadwalSholat::whereMonth('tanggal', Carbon::now()->month)
            ->whereYear('tanggal', Carbon::now()->year)
            ->count();
        $hari     = JadwalSholat::whereDate('tanggal', Carbon::today())->count();

        return [
            Stat::make('Total Data', $total)
                ->description('Semua jadwal sholat')
                ->descriptionIcon(Heroicon::OutlinedSun)
                ->color('primary'),

            Stat::make('Bulan Ini', $bulanIni)
                ->description(Carbon::now()->translatedFormat('F Y'))
                ->descriptionIcon(Heroicon::OutlinedCalendarDays)
                ->color('info'),

            Stat::make('Hari Ini', $hari > 0 ? 'Tersedia' : 'Belum Ada')
                ->description(Carbon::today()->translatedFormat('d F Y'))
                ->descriptionIcon(Heroicon::OutlinedClock)
                ->color($hari > 0 ? 'success' : 'warning'),
        ];
    }
}
