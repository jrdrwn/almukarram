<?php

namespace App\Filament\Resources\Vidios\Pages;

use App\Enums\Role;
use App\Filament\Resources\Vidios\VidioResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListVidios extends ListRecords
{
    protected static string $resource = VidioResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()->visible(fn (): bool => Role::canCreateContent()),
        ];
    }
}
