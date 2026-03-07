<?php

namespace App\Filament\Resources\Vidios\Pages;

use App\Enums\Role;
use App\Filament\Resources\Vidios\VidioResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditVidio extends EditRecord
{
    protected static string $resource = VidioResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make()->visible(fn (): bool => Role::canDeleteRecord($this->getRecord())),
        ];
    }
}
