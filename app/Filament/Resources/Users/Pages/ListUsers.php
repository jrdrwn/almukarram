<?php

namespace App\Filament\Resources\Users\Pages;

use App\Enums\Role;
use App\Filament\Resources\Users\UserResource;
use App\Filament\Resources\Users\Widgets\UserStatsWidget;
use App\Models\User;
use Filament\Actions\CreateAction;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;

class ListUsers extends ListRecords
{
    protected static string $resource = UserResource::class;

    public function mount(): void
    {
        if (! UserResource::canAccess()) {
            Notification::make()
                ->title('Akses Ditolak')
                ->body('Anda tidak memiliki izin untuk mengelola pengguna.')
                ->danger()
                ->send();

            $this->redirect(filament()->getUrl());
            return;
        }

        parent::mount();
    }

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [UserStatsWidget::class];
    }

    public function getTabs(): array
    {
        return [
            'all'      => Tab::make()->label('Semua')->badge(User::count()),
            'admin'    => Tab::make()->label('Admin')
                ->badge(User::where('role', Role::Admin)->count())
                ->badgeColor('warning')
                ->modifyQueryUsing(fn ($query) => $query->where('role', Role::Admin)),
            'penulis'  => Tab::make()->label('Penulis')
                ->badge(User::where('role', Role::Penulis)->count())
                ->badgeColor('success')
                ->modifyQueryUsing(fn ($query) => $query->where('role', Role::Penulis)),
            'reviewer' => Tab::make()->label('Reviewer')
                ->badge(User::where('role', Role::Reviewer)->count())
                ->badgeColor('info')
                ->modifyQueryUsing(fn ($query) => $query->where('role', Role::Reviewer)),
            'root'     => Tab::make()->label('Root')
                ->badge(User::where('role', Role::Root)->count())
                ->badgeColor('danger')
                ->modifyQueryUsing(fn ($query) => $query->where('role', Role::Root)),
        ];
    }
}
