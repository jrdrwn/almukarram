<?php

namespace App\Filament\Resources\Buletins\Widgets;

use App\Models\Buletin;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class BuletinStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total     = Buletin::count();
        $published = Buletin::where('status', 'published')->count();
        $draft     = Buletin::where('status', 'draft')->count();
        $archived  = Buletin::where('status', 'archived')->count();

        return [
            Stat::make('Total Buletin', $total)
                ->description('Semua buletin')
                ->descriptionIcon(Heroicon::OutlinedBookOpen)
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
