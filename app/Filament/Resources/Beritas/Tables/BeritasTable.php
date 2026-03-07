<?php

namespace App\Filament\Resources\Beritas\Tables;

use App\Enums\Role;
use App\Models\Kategori;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DatePicker;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;

class BeritasTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('gambar')
                    ->label('Gambar')
                    ->disk('public')
                    ->square()
                    ->defaultImageUrl(asset('/images/sampel-image.jpg')),
                TextColumn::make('judul')
                    ->label('Judul')
                    ->searchable()
                    ->sortable()
                    ->limit(50),
                TextColumn::make('kategori.nama')
                    ->label('Kategori')
                    ->sortable()
                    ->badge(),
                TextColumn::make('user.name')
                    ->label('Penulis')
                    ->sortable(),
                TextColumn::make('views')
                    ->label('Views')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('published_at')
                    ->label('Dipublikasikan')
                    ->dateTime('d M Y, H:i')
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
                    ->options(fn () => Kategori::query()->where('type', 'berita')->pluck('nama', 'id')),
                SelectFilter::make('status')
                    ->label('Status')
                    ->options([
                        'draft'     => 'Draft',
                        'published' => 'Dipublikasikan',
                        'archived'  => 'Diarsipkan',
                    ]),
                TernaryFilter::make('published_at')
                    ->label('Status Publikasi')
                    ->nullable()
                    ->trueLabel('Sudah Dipublikasikan')
                    ->falseLabel('Belum Dipublikasikan'),
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
