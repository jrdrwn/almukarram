<?php

namespace App\Filament\Resources\Pengurusses\Schemas;

use App\Models\Pengurus;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PengurusForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(3)
            ->components([
                Section::make('Data Pengurus')
                    ->columnSpan(2)
                    ->schema([
                        TextInput::make('nama')
                            ->label('Nama Lengkap')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->hint(fn ($state) => strlen($state ?? '') . '/255')
                            ->columnSpanFull(),

                        TextInput::make('jabatan')
                            ->label('Jabatan')
                            ->maxLength(255)
                            ->hint(fn ($state) => strlen($state ?? '') . '/255')
                            ->helperText('Contoh: Ketua Umum, Ketua I, Sekretaris Umum, Bendahara, Anggota, dll.')
                            ->columnSpanFull(),

                        Select::make('kelompok')
                            ->label('Kelompok / Seksi')
                            ->required()
                            ->options(Pengurus::kelompokOptions())
                            ->native(false)
                            ->helperText('Bagian / seksi tempat pengurus ini bertugas.')
                            ->columnSpan(1),

                        Select::make('peran')
                            ->label('Peran')
                            ->required()
                            ->options(Pengurus::peranOptions())
                            ->native(false)
                            ->helperText('Peran / posisi pengurus dalam kelompoknya.')
                            ->columnSpan(1),

                        TextInput::make('urutan')
                            ->label('Urutan Tampil')
                            ->numeric()
                            ->default(0)
                            ->minValue(0)
                            ->helperText('Angka lebih kecil tampil lebih dulu.')
                            ->columnSpan(1),
                    ]),

                Section::make('Foto & Status')
                    ->columnSpan(1)
                    ->schema([
                        FileUpload::make('foto')
                            ->label('Foto')
                            ->image()
                            ->disk('public')
                            ->directory('pengurus')
                            ->imageEditor()
                            ->maxSize(2048)
                            ->helperText('Maks. 2MB. Format: JPG, PNG, WEBP.')
                            ->columnSpanFull(),

                        Toggle::make('is_active')
                            ->label('Aktif')
                            ->default(true)
                            ->helperText('Nonaktifkan untuk menyembunyikan dari halaman publik.')
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
