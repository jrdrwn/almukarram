<?php

namespace App\Filament\Resources\Beritas\Widgets;

use App\Models\Berita;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class BeritaStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total      = Berita::count();
        $published  = Berita::where('status', 'published')->count();
        $draft      = Berita::where('status', 'draft')->count();
        $archived   = Berita::where('status', 'archived')->count();

        return [
            Stat::make('Total Berita', $total)
                ->description('Semua berita')
                ->descriptionIcon(Heroicon::OutlinedNewspaper)
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
