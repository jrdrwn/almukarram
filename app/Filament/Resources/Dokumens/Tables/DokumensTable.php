<?php

namespace App\Filament\Resources\Dokumens\Tables;

use App\Enums\Role;
use App\Models\Kategori;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class DokumensTable
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
                TextColumn::make('jenis')
                    ->label('Jenis')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'PDF'        => 'danger',
                        'Word'       => 'info',
                        'Excel'      => 'success',
                        'PowerPoint' => 'warning',
                        default      => 'gray',
                    }),
                TextColumn::make('kategori.nama')
                    ->label('Kategori')
                    ->sortable()
                    ->badge(),
                TextColumn::make('tahun')
                    ->label('Tahun')
                    ->sortable(),
                TextColumn::make('user.name')
                    ->label('Pemilik')
                    ->sortable(),
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
                    ->options(fn () => Kategori::query()->where('type', 'dokumen')->pluck('nama', 'id')),
                SelectFilter::make('jenis')
                    ->label('Jenis')
                    ->options([
                        'PDF'        => 'PDF',
                        'Word'       => 'Word',
                        'Excel'      => 'Excel',
                        'PowerPoint' => 'PowerPoint',
                        'Lainnya'    => 'Lainnya',
                    ]),
                SelectFilter::make('status')
                    ->label('Status')
                    ->options([
                        'draft'     => 'Draft',
                        'published' => 'Dipublikasikan',
                        'archived'  => 'Diarsipkan',
                    ]),
            ])
            ->recordActions([
                EditAction::make()
                    ->visible(fn ($record): bool => Role::canEditRecord($record)),
                DeleteAction::make()
                    ->visible(fn ($record): bool => Role::canDeleteRecord($record)),
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
