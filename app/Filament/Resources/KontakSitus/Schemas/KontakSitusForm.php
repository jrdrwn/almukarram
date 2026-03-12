<?php

namespace App\Filament\Resources\KontakSitus\Schemas;

use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class KontakSitusForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(2)
            ->components([
                Section::make('Kontak Utama')
                    ->columnSpanFull()
                    ->schema([
                        Textarea::make('address')
                            ->label('Alamat')
                            ->rows(3)
                            ->maxLength(1024)
                            ->columnSpanFull(),
                        TextInput::make('location')
                            ->label('Lokasi (embed URL)')
                            ->placeholder('misal https://www.google.com/maps/embed?pb=...')
                            ->maxLength(2048)
                            ->columnSpanFull(),
                        TextInput::make('phone')
                            ->label('Telepon')
                            ->maxLength(100)
                            ->columnSpanFull(),
                        TextInput::make('whatsapp')
                            ->label('WhatsApp')
                            ->maxLength(100)
                            ->columnSpanFull(),
                        TextInput::make('email')
                            ->label('Email')
                            ->email()
                            ->maxLength(255)
                            ->columnSpanFull(),
                    ]),
                Section::make('Jam Operasional')
                    ->columnSpanFull()
                    ->schema([
                        Repeater::make('operational_hours')
                            ->label('Jam Operasional')
                            ->columns(2)
                            ->schema([
                                TextInput::make('key')
                                    ->label('Hari / Keterangan')
                                    ->required()
                                    ->maxLength(255),
                                TextInput::make('value')
                                    ->label('Waktu')
                                    ->required()
                                    ->maxLength(255),
                            ])
                            ->defaultItems(1)
                            ->columnSpanFull(),
                    ]),
                Section::make('Media Sosial')
                    ->columnSpanFull()
                    ->schema([
                        TextInput::make('instagram')
                            ->label('Instagram')
                            ->maxLength(255)
                            ->columnSpanFull(),
                        TextInput::make('facebook')
                            ->label('Facebook')
                            ->maxLength(255)
                            ->columnSpanFull(),
                        TextInput::make('youtube')
                            ->label('YouTube')
                            ->maxLength(255)
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
