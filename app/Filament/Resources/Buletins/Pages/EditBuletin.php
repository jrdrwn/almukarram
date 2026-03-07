<?php

namespace App\Filament\Resources\Buletins\Pages;

use App\Enums\Role;
use App\Filament\Resources\Buletins\BuletinResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditBuletin extends EditRecord
{
    protected static string $resource = BuletinResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make()->visible(fn (): bool => Role::canDeleteRecord($this->getRecord())),
        ];
    }
}
