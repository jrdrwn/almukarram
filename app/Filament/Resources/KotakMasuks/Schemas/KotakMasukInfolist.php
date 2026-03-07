<?php

namespace App\Filament\Resources\KotakMasuks\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class KotakMasukInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Pesan')
                    ->schema([
                        TextEntry::make('nama')
                            ->label('Nama'),
                        TextEntry::make('email')
                            ->label('Email')
                            ->copyable(),
                        TextEntry::make('telepon')
                            ->label('Telepon')
                            ->placeholder('-'),
                        TextEntry::make('subjek')
                            ->label('Subjek')
                            ->columnSpanFull(),
                        TextEntry::make('pesan')
                            ->label('Pesan')
                            ->columnSpanFull(),
                        TextEntry::make('status')
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
                        TextEntry::make('created_at')
                            ->label('Diterima')
                            ->dateTime('d M Y, H:i'),
                    ])
                    ->columns(2),
            ]);
    }
}
