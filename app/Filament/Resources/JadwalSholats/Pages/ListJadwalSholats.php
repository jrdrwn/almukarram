<?php

namespace App\Filament\Resources\JadwalSholats\Pages;

use App\Filament\Resources\JadwalSholats\JadwalSholatResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListJadwalSholats extends ListRecords
{
    protected static string $resource = JadwalSholatResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
