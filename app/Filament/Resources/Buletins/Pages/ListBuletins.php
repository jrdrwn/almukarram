<?php

namespace App\Filament\Resources\Buletins\Pages;

use App\Enums\Role;
use App\Filament\Resources\Buletins\BuletinResource;
use App\Filament\Resources\Buletins\Widgets\BuletinStatsWidget;
use App\Models\Buletin;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;

class ListBuletins extends ListRecords
{
    protected static string $resource = BuletinResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()->visible(fn (): bool => Role::canCreateContent()),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [BuletinStatsWidget::class];
    }

    public function getTabs(): array
    {
        return [
            'all'       => Tab::make()->label('Semua')->badge(Buletin::count()),
            'published' => Tab::make()->label('Dipublikasikan')
                ->badge(Buletin::where('status', 'published')->count())
                ->badgeColor('success')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'published')),
            'draft'     => Tab::make()->label('Draft')
                ->badge(Buletin::where('status', 'draft')->count())
                ->badgeColor('warning')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'draft')),
            'archived'  => Tab::make()->label('Diarsipkan')
                ->badge(Buletin::where('status', 'archived')->count())
                ->badgeColor('danger')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'archived')),
        ];
    }
}
