<?php

namespace App\Filament\Resources\JadwalPengajians\Widgets;

use App\Models\JadwalPengajian;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class JadwalPengajianStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total       = JadwalPengajian::count();
        $akanDatang  = JadwalPengajian::where('status', 'Akan Datang')->count();
        $berlangsung = JadwalPengajian::where('status', 'Berlangsung')->count();
        $selesai     = JadwalPengajian::where('status', 'Selesai')->count();

        return [
            Stat::make('Total Jadwal', $total)
                ->description('Semua jadwal pengajian')
                ->descriptionIcon(Heroicon::OutlinedCalendarDays)
                ->color('primary'),

            Stat::make('Akan Datang', $akanDatang)
                ->description('Dijadwalkan')
                ->descriptionIcon(Heroicon::OutlinedClock)
                ->color('info'),

            Stat::make('Berlangsung', $berlangsung)
                ->description('Sedang berjalan')
                ->descriptionIcon(Heroicon::OutlinedPlayCircle)
                ->color('success'),

            Stat::make('Selesai', $selesai)
                ->description('Telah selesai')
                ->descriptionIcon(Heroicon::OutlinedCheckCircle)
                ->color('gray'),
        ];
    }
}
