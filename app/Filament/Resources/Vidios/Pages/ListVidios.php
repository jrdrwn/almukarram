<?php

namespace App\Filament\Resources\Vidios\Pages;

use App\Enums\Role;
use App\Filament\Resources\Vidios\VidioResource;
use App\Filament\Resources\Vidios\Widgets\VidioStatsWidget;
use App\Models\Vidio;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;

class ListVidios extends ListRecords
{
    protected static string $resource = VidioResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()->visible(fn (): bool => Role::canCreateContent()),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [VidioStatsWidget::class];
    }

    public function getTabs(): array
    {
        return [
            'all'       => Tab::make()->label('Semua')->badge(Vidio::count()),
            'published' => Tab::make()->label('Dipublikasikan')
                ->badge(Vidio::where('status', 'published')->count())
                ->badgeColor('success')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'published')),
            'draft'     => Tab::make()->label('Draft')
                ->badge(Vidio::where('status', 'draft')->count())
                ->badgeColor('warning')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'draft')),
            'archived'  => Tab::make()->label('Diarsipkan')
                ->badge(Vidio::where('status', 'archived')->count())
                ->badgeColor('danger')
                ->modifyQueryUsing(fn ($query) => $query->where('status', 'archived')),
        ];
    }
}
