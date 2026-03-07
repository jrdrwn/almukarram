<?php

namespace App\Filament\Resources\JadwalPengajians\Pages;

use App\Filament\Resources\JadwalPengajians\JadwalPengajianResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListJadwalPengajians extends ListRecords
{
    protected static string $resource = JadwalPengajianResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
