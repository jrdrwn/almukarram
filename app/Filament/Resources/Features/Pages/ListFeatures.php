<?php

namespace App\Filament\Resources\Features\Pages;

use App\Filament\Resources\Features\FeatureResource;
use App\Models\Feature;
use Filament\Actions\Action as ActionsAction;
use Filament\Notifications\Notification;
use Filament\Pages\Actions\Action;
use Filament\Resources\Pages\ListRecords;

class ListFeatures extends ListRecords
{
    protected static string $resource = FeatureResource::class;

    protected function getActions(): array
    {
        return [
            ActionsAction::make('create')
                ->label('Tambah')
                ->icon('heroicon-o-plus')
                ->action(function () {
                    if (Feature::query()->count() >= 6) {
                        Notification::make()
                            ->warning()
                            ->title('Batas fitur tercapai')
                            ->body('Hapus satu fitur terlebih dahulu sebelum menambahkan yang baru.')
                            ->send();

                        return;
                    }

                    $this->redirect($this->getResource()::getUrl('create'));
                })
                ->button(),
        ];
    }
}
