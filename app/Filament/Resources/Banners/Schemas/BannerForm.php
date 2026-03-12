<?php

namespace App\Filament\Resources\Banners\Schemas;

use App\Models\Banner;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class BannerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(3)
            ->components([
                Section::make('Konten Banner')
                    ->columnSpan(2)
                    ->schema([
                        TextInput::make('judul')
                            ->label('Judul')
                            ->required()
                            ->maxLength(255)
                            ->hint(fn ($state) => strlen($state ?? '') . '/255')
                            ->helperText('Dipakai sebagai identitas banner di admin.')
                            ->columnSpanFull(),

                        Textarea::make('subjudul')
                            ->label('Subjudul')
                            ->rows(3)
                            ->maxLength(500)
                            ->helperText('Opsional. Untuk catatan internal atau kebutuhan konten lain di masa depan.')
                            ->columnSpanFull(),

                        FileUpload::make('gambar')
                            ->label('Gambar Banner')
                            ->required()
                            ->image()
                            ->disk('public')
                            ->directory('banner')
                            ->imageEditor()
                            ->imageEditorAspectRatios(['4:1'])
                            ->maxSize(3072)
                            ->helperText('Gunakan crop rasio 4:1 untuk seluruh banner homepage.')
                            ->columnSpanFull(),

                        TextInput::make('tautan')
                            ->label('Tautan')
                            ->url()
                            ->maxLength(2048)
                            ->placeholder('https://contoh.id/program-masjid')
                            ->helperText('Opsional. Jika diisi, banner akan bisa diklik.')
                            ->columnSpanFull(),
                    ]),

                Section::make('Pengaturan Tampil')
                    ->columnSpan(1)
                    ->schema([
                        TextInput::make('urutan')
                            ->label('Urutan Tampil')
                            ->numeric()
                            ->default(0)
                            ->minValue(0)
                            ->helperText('Angka lebih kecil tampil lebih dulu.')
                            ->columnSpanFull(),

                        DatePicker::make('mulai_tayang')
                            ->label('Mulai Tayang')
                            ->native(false)
                            ->helperText('Kosongkan jika banner langsung aktif tanpa tanggal mulai.')
                            ->columnSpanFull(),

                        DatePicker::make('selesai_tayang')
                            ->label('Selesai Tayang')
                            ->native(false)
                            ->helperText('Kosongkan jika banner tidak punya tanggal berakhir.')
                            ->columnSpanFull(),

                        Toggle::make('is_active')
                            ->label('Aktif')
                            ->default(true)
                            ->helperText('Nonaktifkan untuk menyembunyikan banner dari homepage.')
                            ->columnSpanFull(),

                        Toggle::make('buka_tab_baru')
                            ->label('Buka di Tab Baru')
                            ->default(false)
                            ->helperText('Aktifkan jika tautan mengarah ke situs eksternal atau dokumen.')
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
