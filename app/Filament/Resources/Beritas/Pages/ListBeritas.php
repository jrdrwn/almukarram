<?php

namespace App\Filament\Resources\Beritas\Pages;

use App\Enums\Role;
use App\Filament\Resources\Beritas\BeritaResource;
use App\Filament\Resources\Beritas\Widgets\BeritaStatsWidget;
use App\Models\Berita;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;

class ListBeritas extends ListRecords
{
    protected static string $resource = BeritaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()->visible(fn (): bool => Role::canCreateContent()),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [BeritaStatsWidget::class];
    }

    public function getTabs(): array
    {
        return [
            'all'       => Tab::make()->label('Semua')->badge(Berita::count()),
            'published' => Tab::make()->label('Dipublikasikan')
                ->badge(Berita::where('status', 'published')->count())
                ->badgeColor('success')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'published')),
            'draft'     => Tab::make()->label('Draft')
                ->badge(Berita::where('status', 'draft')->count())
                ->badgeColor('warning')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'draft')),
            'archived'  => Tab::make()->label('Diarsipkan')
                ->badge(Berita::where('status', 'archived')->count())
                ->badgeColor('danger')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'archived')),
        ];
    }
}
