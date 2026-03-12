<?php

namespace App\Filament\Resources\Pengurusses\Tables;

use App\Enums\Role;
use App\Models\Pengurus;
use Filament\Actions\ActionGroup;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;

class PengurusTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('foto')
                    ->label('Foto')
                    ->disk('public')
                    ->circular()
                    ->defaultImageUrl(asset('/images/pose_change_4.png')),

                TextColumn::make('nama')
                    ->label('Nama')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),

                TextColumn::make('jabatan')
                    ->label('Jabatan')
                    ->searchable()
                    ->placeholder('—'),

                TextColumn::make('kelompok')
                    ->label('Kelompok')
                    ->badge()
                    ->sortable()
                    ->formatStateUsing(fn (string $state): string => Pengurus::kelompokOptions()[$state] ?? $state)
                    ->color(fn (string $state): string => match ($state) {
                        'pimpinan_inti' => 'warning',
                        'bidang_riayah' => 'success',
                        'bidang_idarah' => 'info',
                        'bidang_imarah' => 'primary',
                        'sekretariat'   => 'gray',
                        default         => 'gray',
                    }),

                TextColumn::make('peran')
                    ->label('Peran')
                    ->badge()
                    ->sortable()
                    ->formatStateUsing(fn (string $state): string => Pengurus::peranOptions()[$state] ?? $state)
                    ->color(fn (string $state): string => match ($state) {
                        'ketua_umum'         => 'danger',
                        'ketua'              => 'warning',
                        'sekretaris_umum'    => 'info',
                        'sekretaris'         => 'info',
                        'bendahara'          => 'success',
                        'ketua_bidang'       => 'warning',
                        'sekretaris_bidang'  => 'info',
                        'kepala_sekretariat' => 'warning',
                        'anggota'            => 'gray',
                        default              => 'gray',
                    }),

                TextColumn::make('urutan')
                    ->label('Urutan')
                    ->numeric()
                    ->sortable()
                    ->alignCenter(),

                IconColumn::make('is_active')
                    ->label('Aktif')
                    ->boolean()
                    ->alignCenter(),

                TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('kelompok')
                    ->label('Kelompok')
                    ->options(Pengurus::kelompokOptions()),

                SelectFilter::make('peran')
                    ->label('Peran')
                    ->options(Pengurus::peranOptions()),

                TernaryFilter::make('is_active')
                    ->label('Status Aktif')
                    ->trueLabel('Aktif')
                    ->falseLabel('Tidak Aktif'),
            ])
            ->recordActions([
                ActionGroup::make([
                    EditAction::make()
                        ->visible(fn (): bool => Role::isAdminOrRoot()),
                    DeleteAction::make()
                        ->visible(fn (): bool => Role::isAdminOrRoot()),
                ]),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make()
                        ->visible(fn (): bool => Role::isAdminOrRoot()),
                ]),
            ])
            ->defaultSort('urutan', 'asc')
            ->reorderable('urutan');
    }
}
