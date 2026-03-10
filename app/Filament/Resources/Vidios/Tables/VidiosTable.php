<?php

namespace App\Filament\Resources\Vidios\Tables;

use App\Enums\Role;
use App\Models\Kategori;
use Filament\Actions\ActionGroup;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DatePicker;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class VidiosTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('judul')
                    ->label('Judul')
                    ->searchable()
                    ->sortable()
                    ->limit(50),
                TextColumn::make('youtube_id')
                    ->label('ID YouTube')
                    ->url(fn ($record) => 'https://youtu.be/' . $record->youtube_id, shouldOpenInNewTab: true)
                    ->color('info'),
                TextColumn::make('kategori.nama')
                    ->label('Kategori')
                    ->sortable()
                    ->badge(),
                TextColumn::make('user.name')
                    ->label('Pemilik')
                    ->sortable(),
                TextColumn::make('published_at')
                    ->label('Dipublikasikan')
                    ->date('d M Y')
                    ->sortable()
                    ->placeholder('Belum dipublikasikan'),
                TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'published' => 'success',
                        'draft'     => 'warning',
                        'archived'  => 'danger',
                        default     => 'gray',
                    })
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'published' => 'Dipublikasikan',
                        'draft'     => 'Draft',
                        'archived'  => 'Diarsipkan',
                        default     => $state,
                    }),
                TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('kategori_id')
                    ->label('Kategori')
                    ->options(fn () => Kategori::query()->where('type', 'vidio')->pluck('nama', 'id')),
                SelectFilter::make('status')
                    ->label('Status')
                    ->options([
                        'draft'     => 'Draft',
                        'published' => 'Dipublikasikan',
                        'archived'  => 'Diarsipkan',
                    ]),
                Filter::make('tanggal_dibuat')
                    ->label('Tanggal Dibuat')
                    ->form([
                        DatePicker::make('dari')->label('Dari'),
                        DatePicker::make('sampai')->label('Sampai'),
                    ])
                    ->query(fn ($query, array $data) => $query
                        ->when($data['dari'] ?? null, fn ($q, $date) => $q->whereDate('created_at', '>=', $date))
                        ->when($data['sampai'] ?? null, fn ($q, $date) => $q->whereDate('created_at', '<=', $date))
                    ),
            ])
            ->recordActions([
                ActionGroup::make([
                    EditAction::make()
                        ->visible(fn ($record): bool => Role::canEditRecord($record)),
                    DeleteAction::make()
                        ->visible(fn ($record): bool => Role::canDeleteRecord($record)),
                ]),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make()
                        ->visible(fn (): bool => Role::isAdminOrRoot()),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }
}
