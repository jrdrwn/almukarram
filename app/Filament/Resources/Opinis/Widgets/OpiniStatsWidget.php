<?php

namespace App\Filament\Resources\Opinis\Widgets;

use App\Models\Opini;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class OpiniStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total     = Opini::count();
        $published = Opini::where('status', 'published')->count();
        $draft     = Opini::where('status', 'draft')->count();
        $archived  = Opini::where('status', 'archived')->count();

        return [
            Stat::make('Total Opini', $total)
                ->description('Semua opini')
                ->descriptionIcon(Heroicon::OutlinedPencilSquare)
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
