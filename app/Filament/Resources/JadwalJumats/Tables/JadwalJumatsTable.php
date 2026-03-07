<?php

namespace App\Filament\Resources\JadwalJumats\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class JadwalJumatsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('tanggal', 'desc')
            ->columns([
                TextColumn::make('tanggal')
                    ->label('Tanggal')
                    ->date('d M Y')
                    ->sortable(),
                TextColumn::make('waktu')
                    ->label('Waktu')
                    ->sortable(),
                TextColumn::make('khatib')
                    ->label('Khatib')
                    ->searchable(),
                TextColumn::make('imam')
                    ->label('Imam')
                    ->searchable(),
                TextColumn::make('muadzin')
                    ->label('Muadzin')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('bilal')
                    ->label('Bilal')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('user.name')
                    ->label('Diinput Oleh')
                    ->sortable(),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
