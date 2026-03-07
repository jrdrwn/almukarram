<?php

namespace App\Filament\Resources\KotakMasuks\Pages;

use App\Filament\Resources\KotakMasuks\KotakMasukResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\ViewRecord;

class ViewKotakMasuk extends ViewRecord
{
    protected static string $resource = KotakMasukResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        $this->record->update(['status' => 'sudah_dibaca']);

        return $data;
    }
}
