<?php

namespace App\Filament\Resources\Banners\Pages;

use App\Filament\Resources\Banners\BannerResource;
use App\Models\Banner;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;

class ListBanners extends ListRecords
{
    protected static string $resource = BannerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }

    public function getTabs(): array
    {
        return [
            'all' => Tab::make()->label('Semua'),
            '4:1' => Tab::make()->label('4:1')->badge(Banner::where('ratio', '4:1')->count())->modifyQueryUsing(fn ($query) => $query->where('ratio', '4:1')),
            '4:5' => Tab::make()->label('4:5')->badge(Banner::where('ratio', '4:5')->count())->modifyQueryUsing(fn ($query) => $query->where('ratio', '4:5')),
            '16:9' => Tab::make()->label('16:9')->badge(Banner::where('ratio', '16:9')->count())->modifyQueryUsing(fn ($query) => $query->where('ratio', '16:9')),
            '5:3' => Tab::make()->label('5:3')->badge(Banner::where('ratio', '5:3')->count())->modifyQueryUsing(fn ($query) => $query->where('ratio', '5:3')),
        ];
    }
}
