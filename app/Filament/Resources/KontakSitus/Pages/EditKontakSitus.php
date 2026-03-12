<?php

namespace App\Filament\Resources\KontakSitus\Pages;

use App\Filament\Resources\KontakSitus\KontakSitusResource;
use App\Models\KontakSitus;
use Filament\Resources\Pages\EditRecord;

class EditKontakSitus extends EditRecord
{
    protected static string $resource = KontakSitusResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    public function mount($record = null): void
    {
        $id = $record ?? $this->getRecord()->getKey();

        parent::mount($id);

        $this->record = $this->getRecord();
    }

    public function getRecord(): KontakSitus
    {
        return KontakSitus::first() ?? KontakSitus::create([]);
    }
}
