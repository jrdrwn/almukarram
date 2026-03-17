<?php

namespace App\Filament\Resources\Features\Schemas;

use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class FeatureForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(2)
            ->components([
                Section::make('Konten Feature')
                    ->columnSpan(2)
                    ->schema([
                        TextInput::make('title')
                            ->label('Judul')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),

                        Textarea::make('description')
                            ->label('Deskripsi')
                            ->rows(3)
                            ->maxLength(500)
                            ->columnSpanFull(),

                        Select::make('icon')
                            ->label('Icon')
                            ->searchable()
                            ->options([
                                '📖' => '📖 Book (Buku)',
                                '📋' => '📋 Calculator (Kalkulator)',
                                '👥' => '👥 Users (Pengguna)',
                                '📅' => '📅 Calendar (Kalender)',
                                '🕌' => '🕌 Mosque (Masjid)',
                                '🤲' => '🤲 Pray (Doa)',
                                '📗' => '📗 Quran (Al-Qur\'an)',
                                '❤️' => '❤️ Heart (Hati)',
                                '🔗' => '🔗 Share (Bagikan)',
                                '📞' => '📞 Phone (Telepon)',
                                '📧' => '📧 Mail (Email)',
                                '📍' => '📍 Location (Lokasi)',
                                'ℹ️' => 'ℹ️ Info (Informasi)',
                                '📰' => '📰 Newspaper (Berita)',
                                '🎥' => '🎥 Video',
                                '🖼️' => '🖼️ Image (Gambar)',
                                '🎤' => '🎤 Microphone (Mikrofon)',
                                '💰' => '💰 Wallet (Dompet)',
                            ])
                            ->columnSpanFull(),


                        TextInput::make('href')
                            ->label('Link')
                            ->helperText('Link ketika feature diklik (boleh kosong). Contoh: /program-masjid')
                            ->maxLength(2048)
                            ->columnSpan(1),
                    ]),

                Section::make('Pengaturan')
                    ->columnSpan(2)
                    ->schema([
                        TextInput::make('urutan')
                            ->label('Urutan Tampil')
                            ->numeric()
                            ->default(0)
                            ->minValue(0)
                            ->helperText('Urutan menurun: lebih kecil tampil lebih dulu.')
                            ->columnSpan(1),

                        Select::make('is_active')
                            ->label('Aktif')
                            ->options([
                                1 => 'Ya',
                                0 => 'Tidak',
                            ])
                            ->default(1)
                            ->columnSpan(1),
                    ]),
            ]);
    }
}
