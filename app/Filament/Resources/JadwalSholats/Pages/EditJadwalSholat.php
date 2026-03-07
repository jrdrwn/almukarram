<?php

namespace App\Filament\Resources\JadwalSholats\Pages;

use App\Filament\Resources\JadwalSholats\JadwalSholatResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditJadwalSholat extends EditRecord
{
    protected static string $resource = JadwalSholatResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
