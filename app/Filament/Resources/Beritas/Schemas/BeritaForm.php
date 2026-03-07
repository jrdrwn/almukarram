<?php

namespace App\Filament\Resources\Beritas\Schemas;

use App\Models\KategoriBerita;
use App\Models\User;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class BeritaForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(3)
            ->components([
                Section::make('Konten')
                    ->columnSpan(2)
                    ->schema([
                        TextInput::make('judul')
                            ->label('Judul')
                            ->required()
                            ->maxLength(255)
                            ->live()
                            ->hint(fn ($state) => strlen($state ?? '') . '/255')
                            ->afterStateUpdated(function (string $operation, $state, callable $set) {
                                if ($operation === 'edit') {
                                    return;
                                }
                                $set('slug', Str::slug($state));
                            }),
                        TextInput::make('slug')
                            ->label('Slug')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255)
                            ->hint(fn ($state) => strlen($state ?? '') . '/255'),
                        Textarea::make('ringkasan')
                            ->label('Ringkasan')
                            ->rows(3)
                            ->required()
                            ->maxLength(500)
                            ->live(onBlur: true)
                            ->hint(fn ($state) => strlen($state ?? '') . '/500')
                            ->extraInputAttributes(['style' => 'resize: none;'])
                            ->columnSpanFull(),
                        RichEditor::make('isi')
                            ->label('Isi Berita')
                            ->required()
                            ->maxLength(65535)
                            ->live(onBlur: true)
                            ->hint(fn ($state) => strlen($state ?? '') . '/65535')
                            ->columnSpanFull()
                            ->fileAttachmentsDisk('public')
                            ->fileAttachmentsDirectory('berita/attachments'),
                    ]),

                Section::make('Pengaturan')
                    ->columnSpan(1)
                    ->schema([
                        FileUpload::make('gambar')
                            ->label('Gambar')
                            ->image()
                            ->disk('public')
                            ->directory('berita')
                            ->imageEditor()
                            ->maxSize(2048)
                            ->helperText('Maks. 2MB. Format: JPG, PNG, WEBP.')
                            ->columnSpanFull(),
                        Select::make('kategori_id')
                            ->label('Kategori')
                            ->required()
                            ->options(fn() => KategoriBerita::query()->pluck('nama', 'id'))
                            ->searchable()
                            ->columnSpanFull(),
                        Select::make('user_id')
                            ->required()
                            ->label('Penulis')
                            ->options(fn() => User::query()->pluck('name', 'id'))
                            ->searchable()
                            ->default(fn() => Auth::id())
                            ->columnSpanFull(),
                        DateTimePicker::make('published_at')
                            ->label('Tanggal Publikasi')
                            ->required()
                            ->default(now())
                            ->native(false)
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
