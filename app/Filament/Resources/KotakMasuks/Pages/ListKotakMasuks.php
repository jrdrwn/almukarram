<?php

namespace App\Filament\Resources\KotakMasuks\Pages;

use App\Filament\Resources\KotakMasuks\KotakMasukResource;
use App\Filament\Resources\KotakMasuks\Widgets\KotakMasukStatsWidget;
use App\Models\KotakMasuk;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;

class ListKotakMasuks extends ListRecords
{
    protected static string $resource = KotakMasukResource::class;

    protected function getHeaderActions(): array
    {
        return [];
    }

    protected function getHeaderWidgets(): array
    {
        return [KotakMasukStatsWidget::class];
    }

    public function getTabs(): array
    {
        return [
            'all'          => Tab::make()->label('Semua')->badge(KotakMasuk::count()),
            'belum_dibaca' => Tab::make()->label('Belum Dibaca')
                ->badge(KotakMasuk::where('status', 'belum_dibaca')->count())
                ->badgeColor('danger')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'belum_dibaca')),
            'sudah_dibaca' => Tab::make()->label('Sudah Dibaca')
                ->badge(KotakMasuk::where('status', 'sudah_dibaca')->count())
                ->badgeColor('success')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'sudah_dibaca')),
        ];
    }
}
