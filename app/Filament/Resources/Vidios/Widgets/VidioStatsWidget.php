<?php

namespace App\Filament\Resources\Vidios\Widgets;

use App\Models\Vidio;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class VidioStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total     = Vidio::count();
        $published = Vidio::where('status', 'published')->count();
        $draft     = Vidio::where('status', 'draft')->count();
        $archived  = Vidio::where('status', 'archived')->count();

        return [
            Stat::make('Total Video', $total)
                ->description('Semua video')
                ->descriptionIcon(Heroicon::OutlinedFilm)
                ->color('primary'),

            Stat::make('Dipublikasikan', $published)
                ->description('Aktif ditampilkan')
                ->descriptionIcon(Heroicon::OutlinedCheckCircle)
                ->color('success'),

            Stat::make('Draft', $draft)
                ->description('Menunggu review')
                ->descriptionIcon(Heroicon::OutlinedPencil)
                ->color('warning'),

            Stat::make('Diarsipkan', $archived)
                ->description('Tidak ditampilkan')
                ->descriptionIcon(Heroicon::OutlinedArchiveBox)
                ->color('danger'),
        ];
    }
}
