<?php

namespace App\Filament\Resources\Banners\Tables;
use Filament\Actions\ActionGroup;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DatePicker;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;

class BannersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('gambar')
                    ->label('Banner')
                    ->disk('public')
                    ->rounded()
                    ->defaultImageUrl(asset('/images/sampel-image.jpg')),

                TextColumn::make('judul')
                    ->label('Judul')
                    ->searchable()
                    ->sortable()
                    ->limit(50)
                    ->weight('bold'),

                TextColumn::make('urutan')
                    ->label('Urutan')
                    ->numeric()
                    ->sortable()
                    ->alignCenter(),

                TextColumn::make('ratio')
                    ->label('Rasio')
                    ->sortable()
                    ->alignCenter(),

                TextColumn::make('mulai_tayang')
                    ->label('Mulai')
                    ->date('d M Y')
                    ->sortable()
                    ->placeholder('—'),

                TextColumn::make('selesai_tayang')
                    ->label('Selesai')
                    ->date('d M Y')
                    ->sortable()
                    ->placeholder('—'),

                IconColumn::make('is_active')
                    ->label('Aktif')
                    ->boolean()
                    ->alignCenter(),
            ])
            ->filters([
                Filter::make('periode_tayang')
                    ->label('Periode Tayang')
                    ->form([
                        DatePicker::make('dari')->label('Dari'),
                        DatePicker::make('sampai')->label('Sampai'),
                    ])
                    ->query(fn ($query, array $data) => $query
                        ->when($data['dari'] ?? null, fn ($bannerQuery, $date) => $bannerQuery->whereDate('mulai_tayang', '>=', $date))
                        ->when($data['sampai'] ?? null, fn ($bannerQuery, $date) => $bannerQuery->whereDate('selesai_tayang', '<=', $date))
                    ),
            ])
            ->recordActions([
                ActionGroup::make([
                    EditAction::make(),
                    DeleteAction::make(),
                ]),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('urutan', 'asc')
            ->reorderable('urutan');
    }
}
