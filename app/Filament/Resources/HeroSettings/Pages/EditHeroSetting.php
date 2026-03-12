<?php

namespace App\Filament\Resources\HeroSettings\Pages;

use App\Filament\Resources\HeroSettings\HeroSettingResource;
use App\Models\HeroSetting;
use Filament\Resources\Pages\EditRecord;

class EditHeroSetting extends EditRecord
{
    protected static string $resource = HeroSettingResource::class;

    public function getTitle(): string
    {
        return 'Media Hero';
    }

    public function getHeading(): string
    {
        return 'Media Hero';
    }

    public function getSubheading(): ?string
    {
        return 'Atur media hero beranda untuk website dan halaman login admin.';
    }

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

    public function getRecord(): HeroSetting
    {
        return HeroSetting::first() ?? HeroSetting::create([
            'hero_media_type' => 'video',
        ]);
    }
}
