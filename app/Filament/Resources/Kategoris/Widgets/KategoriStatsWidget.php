<?php

namespace App\Filament\Resources\Kategoris\Widgets;

use App\Models\Kategori;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class KategoriStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total   = Kategori::count();
        $berita  = Kategori::where('type', 'berita')->count();
        $media   = Kategori::whereIn('type', ['vidio', 'album'])->count();
        $lainnya = Kategori::whereIn('type', ['buletin', 'opini', 'dokumen'])->count();

        return [
            Stat::make('Total Kategori', $total)
                ->description('Semua kategori')
                ->descriptionIcon(Heroicon::OutlinedTag)
                ->color('primary'),

            Stat::make('Kategori Berita', $berita)
                ->description('Untuk konten berita')
                ->descriptionIcon(Heroicon::OutlinedNewspaper)
                ->color('info'),

            Stat::make('Kategori Media', $media)
                ->description('Video & Album')
                ->descriptionIcon(Heroicon::OutlinedPhoto)
                ->color('success'),

            Stat::make('Lainnya', $lainnya)
                ->description('Buletin, Opini, Dokumen')
                ->descriptionIcon(Heroicon::OutlinedDocumentText)
                ->color('warning'),
        ];
    }
}
