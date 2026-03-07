<?php

namespace App\Filament\Resources\JadwalPengajians\Tables;

use Filament\Actions\ActionGroup;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DatePicker;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class JadwalPengajiansTable
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
                TextColumn::make('hari')
                    ->label('Hari')
                    ->sortable(),
                TextColumn::make('waktu')
                    ->label('Waktu'),
                TextColumn::make('judul')
                    ->label('Judul')
                    ->searchable()
                    ->limit(40),
                TextColumn::make('pemateri')
                    ->label('Pemateri')
                    ->searchable(),
                TextColumn::make('tipe')
                    ->label('Tipe')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Umum'      => 'primary',
                        'Ibu-Ibu'   => 'success',
                        'Remaja'    => 'warning',
                        'Anak-Anak' => 'info',
                        default     => 'gray',
                    }),
                TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Akan Datang' => 'info',
                        'Berlangsung' => 'success',
                        'Selesai'     => 'gray',
                        'Dibatalkan'  => 'danger',
                        default       => 'gray',
                    }),
                TextColumn::make('user.name')
                    ->label('Diinput Oleh')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('tipe')
                    ->options([
                        'Umum'      => 'Umum',
                        'Ibu-Ibu'   => 'Ibu-Ibu',
                        'Remaja'    => 'Remaja',
                        'Anak-Anak' => 'Anak-Anak',
                    ]),
                SelectFilter::make('status')
                    ->options([
                        'Akan Datang' => 'Akan Datang',
                        'Berlangsung' => 'Berlangsung',
                        'Selesai'     => 'Selesai',
                        'Dibatalkan'  => 'Dibatalkan',
                    ]),
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
            ->recordActions([
                ActionGroup::make([
                    EditAction::make(),
                    DeleteAction::make(),
                ]),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
