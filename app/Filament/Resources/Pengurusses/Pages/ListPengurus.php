<?php

namespace App\Filament\Resources\Pengurusses\Pages;

use App\Filament\Resources\Pengurusses\PengurusResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListPengurus extends ListRecords
{
    protected static string $resource = PengurusResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
