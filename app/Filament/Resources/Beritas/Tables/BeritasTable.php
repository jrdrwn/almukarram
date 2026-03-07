<?php

namespace App\Filament\Resources\Beritas\Tables;

use App\Models\KategoriBerita;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
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
                TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('kategori_id')
                    ->label('Kategori')
                    ->options(fn () => KategoriBerita::query()->pluck('nama', 'id')),
                TernaryFilter::make('published_at')
                    ->label('Status Publikasi')
                    ->nullable()
                    ->trueLabel('Sudah Dipublikasikan')
                    ->falseLabel('Belum Dipublikasikan'),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }
}
