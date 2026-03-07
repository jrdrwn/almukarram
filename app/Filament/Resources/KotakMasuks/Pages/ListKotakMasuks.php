<?php

namespace App\Filament\Resources\KotakMasuks\Pages;

use App\Filament\Resources\KotakMasuks\KotakMasukResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListKotakMasuks extends ListRecords
{
    protected static string $resource = KotakMasukResource::class;

    protected function getHeaderActions(): array
    {
        return [];
    }
}
