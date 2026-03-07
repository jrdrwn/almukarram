<?php

namespace App\Filament\Widgets;

use App\Enums\Role;
use App\Models\KotakMasuk;
use App\Models\User;
use Filament\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Support\Facades\Auth;

class KotakMasukTableWidget extends TableWidget
{
    protected static ?int $sort = 6;

    protected int|string|array $columnSpan = 'full';

    public static function canView(): bool
    {
        /** @var User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Root, Role::Admin, Role::Reviewer) ?? false;
    }

    public function table(Table $table): Table
    {
        return $table
            ->heading('Kotak Masuk Terbaru')
            ->query(
                KotakMasuk::query()->latest()
            )
            ->columns([
                TextColumn::make('nama')
                    ->label('Nama')
                    ->searchable(),
                TextColumn::make('email')
                    ->label('Email')
                    ->copyable(),
                TextColumn::make('subjek')
                    ->label('Subjek')
                    ->limit(40)
                    ->searchable(),
                TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'belum_dibaca' => 'danger',
                        'sudah_dibaca' => 'success',
                        default        => 'gray',
                    })
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'belum_dibaca' => 'Belum Dibaca',
                        'sudah_dibaca' => 'Sudah Dibaca',
                        default        => $state,
                    }),
                TextColumn::make('created_at')
                    ->label('Diterima')
                    ->dateTime('d M Y, H:i')
                    ->sortable(),
            ])
            ->recordActions([
                Action::make('tandai_dibaca')
                    ->label('Tandai Dibaca')
                    ->icon('heroicon-o-check-circle')
                    ->color('success')
                    ->visible(fn (KotakMasuk $record): bool => $record->status === 'belum_dibaca')
                    ->action(fn (KotakMasuk $record) => $record->update(['status' => 'sudah_dibaca'])),
            ])
            ->paginated([5, 10])
            ->defaultPaginationPageOption(5)
            ->defaultSort('created_at', 'desc');
    }
}
