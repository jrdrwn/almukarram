<?php

namespace App\Filament\Resources\Pengurusses\Pages;

use App\Filament\Resources\Pengurusses\PengurusResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditPengurus extends EditRecord
{
    protected static string $resource = PengurusResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
