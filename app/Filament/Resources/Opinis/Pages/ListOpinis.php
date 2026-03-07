<?php

namespace App\Filament\Resources\Opinis\Pages;

use App\Enums\Role;
use App\Filament\Resources\Opinis\OpiniResource;
use App\Filament\Resources\Opinis\Widgets\OpiniStatsWidget;
use App\Models\Opini;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;

class ListOpinis extends ListRecords
{
    protected static string $resource = OpiniResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()->visible(fn (): bool => Role::canCreateContent()),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [OpiniStatsWidget::class];
    }

    public function getTabs(): array
    {
        return [
            'all'       => Tab::make()->label('Semua')->badge(Opini::count()),
            'published' => Tab::make()->label('Dipublikasikan')
                ->badge(Opini::where('status', 'published')->count())
                ->badgeColor('success')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'published')),
            'draft'     => Tab::make()->label('Draft')
                ->badge(Opini::where('status', 'draft')->count())
                ->badgeColor('warning')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'draft')),
            'archived'  => Tab::make()->label('Diarsipkan')
                ->badge(Opini::where('status', 'archived')->count())
                ->badgeColor('danger')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'archived')),
        ];
    }
}
