<?php

namespace App\Filament\Resources\JadwalJumats\Pages;

use App\Filament\Resources\JadwalJumats\JadwalJumatResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditJadwalJumat extends EditRecord
{
    protected static string $resource = JadwalJumatResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
