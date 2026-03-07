<?php

namespace App\Filament\Resources\Dokumens\Widgets;

use App\Models\Dokumen;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class DokumenStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total     = Dokumen::count();
        $published = Dokumen::where('status', 'published')->count();
        $draft     = Dokumen::where('status', 'draft')->count();
        $archived  = Dokumen::where('status', 'archived')->count();

        return [
            Stat::make('Total Dokumen', $total)
                ->description('Semua dokumen')
                ->descriptionIcon(Heroicon::OutlinedDocumentText)
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
