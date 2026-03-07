<?php

namespace App\Filament\Resources\Pengumumans\Widgets;

use App\Models\Pengumuman;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Carbon;

class PengumumanStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total    = Pengumuman::count();
        $today    = Carbon::today();

        $aktif    = Pengumuman::where(function ($q) use ($today) {
            $q->whereNull('tanggal_selesai')
              ->orWhere('tanggal_selesai', '>=', $today);
        })->where(function ($q) use ($today) {
            $q->whereNull('tanggal_mulai')
              ->orWhere('tanggal_mulai', '<=', $today);
        })->count();

        $berakhir = Pengumuman::where('tanggal_selesai', '<', $today)->count();

        return [
            Stat::make('Total Pengumuman', $total)
                ->description('Semua pengumuman')
                ->descriptionIcon(Heroicon::OutlinedSpeakerWave)
                ->color('primary'),

            Stat::make('Aktif', $aktif)
                ->description('Sedang berjalan')
                ->descriptionIcon(Heroicon::OutlinedCheckCircle)
                ->color('success'),

            Stat::make('Berakhir', $berakhir)
                ->description('Sudah lewat')
                ->descriptionIcon(Heroicon::OutlinedXCircle)
                ->color('gray'),
        ];
    }
}
