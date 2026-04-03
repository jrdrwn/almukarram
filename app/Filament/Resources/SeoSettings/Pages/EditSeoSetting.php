<?php

namespace App\Filament\Resources\SeoSettings\Pages;

use App\Filament\Resources\SeoSettings\SeoSettingResource;
use App\Models\SeoSetting;
use Filament\Resources\Pages\EditRecord;

class EditSeoSetting extends EditRecord
{
    protected static string $resource = SeoSettingResource::class;

    public function getTitle(): string
    {
        return 'SEO Settings';
    }

    public function getHeading(): string
    {
        return 'SEO Settings';
    }

    public function getSubheading(): ?string
    {
        return 'Atur default SEO untuk title, description, image, robots, dan metadata sosial.';
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

    public function getRecord(): SeoSetting
    {
        return SeoSetting::first() ?? SeoSetting::create([
            'site_name' => config('app.name'),
            'title_suffix' => '| ' . config('app.name'),
            'description_template' => '{title} di {site}. Informasi resmi, terbaru, dan terpercaya.',
            'default_robots' => 'index,follow',
        ]);
    }
}
