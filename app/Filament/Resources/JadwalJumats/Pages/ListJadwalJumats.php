<?php

namespace App\Filament\Resources\JadwalJumats\Pages;

use App\Filament\Resources\JadwalJumats\JadwalJumatResource;
use App\Filament\Resources\JadwalJumats\Widgets\JadwalJumatStatsWidget;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListJadwalJumats extends ListRecords
{
    protected static string $resource = JadwalJumatResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [JadwalJumatStatsWidget::class];
    }
}
