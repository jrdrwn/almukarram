<?php

namespace App\Filament\Resources\JadwalPengajians\Pages;

use App\Filament\Resources\JadwalPengajians\JadwalPengajianResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditJadwalPengajian extends EditRecord
{
    protected static string $resource = JadwalPengajianResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
