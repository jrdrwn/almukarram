<?php

namespace App\Filament\Resources\JadwalPengajians\Pages;

use App\Filament\Resources\JadwalPengajians\JadwalPengajianResource;
use App\Filament\Resources\JadwalPengajians\Widgets\JadwalPengajianStatsWidget;
use App\Models\JadwalPengajian;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;

class ListJadwalPengajians extends ListRecords
{
    protected static string $resource = JadwalPengajianResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [JadwalPengajianStatsWidget::class];
    }

    public function getTabs(): array
    {
        return [
            'all'          => Tab::make()->label('Semua')->badge(JadwalPengajian::count()),
            'akan_datang'  => Tab::make()->label('Akan Datang')
                ->badge(JadwalPengajian::where('status', 'Akan Datang')->count())
                ->badgeColor('info')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'Akan Datang')),
            'berlangsung'  => Tab::make()->label('Berlangsung')
                ->badge(JadwalPengajian::where('status', 'Berlangsung')->count())
                ->badgeColor('success')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'Berlangsung')),
            'selesai'      => Tab::make()->label('Selesai')
                ->badge(JadwalPengajian::where('status', 'Selesai')->count())
                ->badgeColor('gray')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'Selesai')),
            'dibatalkan'   => Tab::make()->label('Dibatalkan')
                ->badge(JadwalPengajian::where('status', 'Dibatalkan')->count())
                ->badgeColor('danger')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'Dibatalkan')),
        ];
    }
}
