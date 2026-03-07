<?php

namespace App\Filament\Resources\Albums\Widgets;

use App\Models\Album;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class AlbumStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total     = Album::count();
        $published = Album::where('status', 'published')->count();
        $draft     = Album::where('status', 'draft')->count();
        $archived  = Album::where('status', 'archived')->count();

        return [
            Stat::make('Total Album', $total)
                ->description('Semua album foto')
                ->descriptionIcon(Heroicon::OutlinedPhoto)
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
