<?php

namespace App\Filament\Resources\JadwalSholats\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DatePicker;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;

class JadwalSholatsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('tanggal', 'desc')
            ->filters([
                Filter::make('tanggal')
                    ->label('Rentang Tanggal')
                    ->form([
                        DatePicker::make('dari')->label('Dari'),
                        DatePicker::make('sampai')->label('Sampai'),
                    ])
                    ->query(fn ($query, array $data) => $query
                        ->when($data['dari'] ?? null, fn ($q, $date) => $q->whereDate('tanggal', '>=', $date))
                        ->when($data['sampai'] ?? null, fn ($q, $date) => $q->whereDate('tanggal', '<=', $date))
                    ),
            ])
            ->columns([
                TextColumn::make('tanggal')
                    ->label('Tanggal')
                    ->date('d M Y')
                    ->sortable(),
                TextColumn::make('subuh')
                    ->label('Subuh'),
                TextColumn::make('terbit')
                    ->label('Terbit')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('dhuha')
                    ->label('Dhuha')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('dzuhur')
                    ->label('Dzuhur'),
                TextColumn::make('ashar')
                    ->label('Ashar'),
                TextColumn::make('maghrib')
                    ->label('Maghrib'),
                TextColumn::make('isya')
                    ->label('Isya'),
                TextColumn::make('user.name')
                    ->label('Diinput Oleh')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
