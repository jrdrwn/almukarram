<?php

namespace App\Observers;

use App\Enums\Role;
use App\Models\KotakMasuk;
use App\Models\User;
use Filament\Notifications\Notification;

class KotakMasukObserver
{
    public function created(KotakMasuk $kotakMasuk): void
    {
        $admins = User::whereIn('role', [Role::Root->value, Role::Admin->value])->get();

        Notification::make()
            ->title('Pesan masuk baru dari ' . $kotakMasuk->nama)
            ->body($kotakMasuk->subjek ?? $kotakMasuk->pesan)
            ->icon('heroicon-o-envelope')
            ->iconColor('info')
            ->actions([
                \Filament\Actions\Action::make('lihat')
                    ->label('Lihat Pesan')
                    ->url(fn () => route('filament.admin.resources.kotak-masuks.view', ['record' => $kotakMasuk->id]))
                    ->markAsRead(),
            ])
            ->sendToDatabase($admins);
    }
}
