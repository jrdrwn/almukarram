<?php

namespace App\Filament\Resources\Kategoris\Pages;

use App\Filament\Resources\Kategoris\KategoriResource;
use App\Filament\Resources\Kategoris\Widgets\KategoriStatsWidget;
use App\Models\Kategori;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;

class ListKategoris extends ListRecords
{
    protected static string $resource = KategoriResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [KategoriStatsWidget::class];
    }

    public function getTabs(): array
    {
        return [
            'all'     => Tab::make()->label('Semua')->badge(Kategori::count()),
            'berita'  => Tab::make()->label('Berita')
                ->badge(Kategori::where('type', 'berita')->count())
                ->modifyQueryUsing(fn ($query) => $query->where('type', 'berita')),
            'vidio'   => Tab::make()->label('Video')
                ->badge(Kategori::where('type', 'vidio')->count())
                ->modifyQueryUsing(fn ($query) => $query->where('type', 'vidio')),
            'album'   => Tab::make()->label('Album')
                ->badge(Kategori::where('type', 'album')->count())
                ->modifyQueryUsing(fn ($query) => $query->where('type', 'album')),
            'buletin' => Tab::make()->label('Buletin')
                ->badge(Kategori::where('type', 'buletin')->count())
                ->modifyQueryUsing(fn ($query) => $query->where('type', 'buletin')),
            'opini'   => Tab::make()->label('Opini')
                ->badge(Kategori::where('type', 'opini')->count())
                ->modifyQueryUsing(fn ($query) => $query->where('type', 'opini')),
            'dokumen' => Tab::make()->label('Dokumen')
                ->badge(Kategori::where('type', 'dokumen')->count())
                ->modifyQueryUsing(fn ($query) => $query->where('type', 'dokumen')),
        ];
    }
}
