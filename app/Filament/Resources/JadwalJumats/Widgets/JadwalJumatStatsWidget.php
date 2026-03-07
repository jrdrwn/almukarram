<?php

namespace App\Filament\Resources\JadwalJumats\Widgets;

use App\Models\JadwalJumat;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Carbon;

class JadwalJumatStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total      = JadwalJumat::count();
        $bulanIni   = JadwalJumat::whereMonth('tanggal', Carbon::now()->month)
            ->whereYear('tanggal', Carbon::now()->year)
            ->count();
        $mendatang  = JadwalJumat::where('tanggal', '>=', Carbon::today())->count();

        return [
            Stat::make('Total Jadwal', $total)
                ->description('Semua jadwal Jumat')
                ->descriptionIcon(Heroicon::OutlinedCalendar)
                ->color('primary'),

            Stat::make('Bulan Ini', $bulanIni)
                ->description(Carbon::now()->translatedFormat('F Y'))
                ->descriptionIcon(Heroicon::OutlinedCalendarDays)
                ->color('info'),

            Stat::make('Akan Datang', $mendatang)
                ->description('Hari ini dan setelahnya')
                ->descriptionIcon(Heroicon::OutlinedClock)
                ->color('success'),
        ];
    }
}
