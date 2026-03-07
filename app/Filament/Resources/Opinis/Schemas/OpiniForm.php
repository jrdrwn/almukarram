<?php

namespace App\Filament\Resources\Opinis\Schemas;

use App\Models\Kategori;
use App\Models\User;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class OpiniForm
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
                            ->hint(fn ($state) => strlen($state ?? '') . '/255')
                            ->helperText('Diisi otomatis dari judul. Digunakan sebagai bagian URL halaman, harus unik.'),
                        Textarea::make('ringkasan')
                            ->label('Ringkasan')
                            ->rows(3)
                            ->maxLength(500)
                            ->live(onBlur: true)
                            ->hint(fn ($state) => strlen($state ?? '') . '/500')
                            ->extraInputAttributes(['style' => 'resize: none;'])
                            ->helperText('Ringkasan singkat yang tampil di halaman daftar opini.')
                            ->columnSpanFull(),
                        RichEditor::make('isi')
                            ->label('Isi Opini')
                            ->required()
                            ->maxLength(65535)
                            ->columnSpanFull()
                            ->fileAttachmentsDisk('public')
                            ->fileAttachmentsDirectory('opini/attachments')
                            ->helperText('Isi lengkap opini. Mendukung format teks kaya: bold, italic, daftar, gambar, dan tautan.'),
                    ]),

                Section::make('Pengaturan')
                    ->columnSpan(1)
                    ->schema([
                        FileUpload::make('foto')
                            ->label('Foto')
                            ->image()
                            ->disk('public')
                            ->directory('opini')
                            ->imageEditor()
                            ->maxSize(2048)
                            ->helperText('Maks. 2MB. Format: JPG, PNG, WEBP.')
                            ->columnSpanFull(),
                        TextInput::make('waktu_baca')
                            ->label('Waktu Baca')
                            ->placeholder('contoh: 5 menit')
                            ->maxLength(50)
                            ->helperText('Estimasi waktu membaca artikel ini, contoh: 5 menit.')
                            ->columnSpanFull(),
                        Select::make('kategori_id')
                            ->label('Kategori')
                            ->required()
                            ->options(fn () => Kategori::query()->where('type', 'opini')->pluck('nama', 'id'))
                            ->searchable()
                            ->helperText('Pilih kategori yang sesuai untuk opini ini.')
                            ->columnSpanFull(),
                        Select::make('user_id')
                            ->label('Penulis')
                            ->required()
                            ->options(fn () => User::query()->pluck('name', 'id'))
                            ->searchable()
                            ->default(fn () => Auth::id())
                            ->helperText('Penulis yang bertanggung jawab atas opini ini.')
                            ->columnSpanFull(),
                        DateTimePicker::make('published_at')
                            ->label('Tanggal Publikasi')
                            ->required()
                            ->default(now())
                            ->native(false)
                            ->helperText('Tanggal dan waktu opini ini dipublikasikan.')
                            ->columnSpanFull(),
                        Select::make('status')
                            ->label('Status')
                            ->required()
                            ->options([
                                'draft'     => 'Draft',
                                'published' => 'Dipublikasikan',
                                'archived'  => 'Diarsipkan',
                            ])
                            ->default('draft')
                            ->native(false)
                            ->helperText('Draft: belum publik · Dipublikasikan: tampil di web · Diarsipkan: disembunyikan.')
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
