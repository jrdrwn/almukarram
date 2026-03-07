<?php

namespace App\Filament\Resources\Albums\Pages;

use App\Enums\Role;
use App\Filament\Resources\Albums\AlbumResource;
use App\Filament\Resources\Albums\Widgets\AlbumStatsWidget;
use App\Models\Album;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;

class ListAlbums extends ListRecords
{
    protected static string $resource = AlbumResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()->visible(fn (): bool => Role::canCreateContent()),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [AlbumStatsWidget::class];
    }

    public function getTabs(): array
    {
        return [
            'all'       => Tab::make()->label('Semua')->badge(Album::count()),
            'published' => Tab::make()->label('Dipublikasikan')
                ->badge(Album::where('status', 'published')->count())
                ->badgeColor('success')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'published')),
            'draft'     => Tab::make()->label('Draft')
                ->badge(Album::where('status', 'draft')->count())
                ->badgeColor('warning')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'draft')),
            'archived'  => Tab::make()->label('Diarsipkan')
                ->badge(Album::where('status', 'archived')->count())
                ->badgeColor('danger')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'archived')),
        ];
    }
}
