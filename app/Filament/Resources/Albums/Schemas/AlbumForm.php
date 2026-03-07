<?php

namespace App\Filament\Resources\Albums\Schemas;

use App\Models\Kategori;
use App\Models\User;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class AlbumForm
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
                        Textarea::make('deskripsi')
                            ->label('Deskripsi')
                            ->rows(3)
                            ->maxLength(1000)
                            ->extraInputAttributes(['style' => 'resize: none;'])
                            ->helperText('Keterangan singkat tentang foto-foto dalam album ini.')
                            ->columnSpanFull(),
                        FileUpload::make('thumbnail')
                            ->label('Thumbnail')
                            ->image()
                            ->disk('public')
                            ->directory('album/thumbnails')
                            ->imageEditor()
                            ->maxSize(2048)
                            ->helperText('Maks. 2MB. Format: JPG, PNG, WEBP.')
                            ->columnSpanFull(),
                    ]),

                Section::make('Pengaturan')
                    ->columnSpan(1)
                    ->schema([
                        Select::make('kategori_id')
                            ->label('Kategori')
                            ->required()
                            ->options(fn () => Kategori::query()->where('type', 'album')->pluck('nama', 'id'))
                            ->searchable()
                            ->helperText('Pilih kategori yang sesuai untuk album ini.')
                            ->columnSpanFull(),
                        Select::make('user_id')
                            ->label('Pemilik')
                            ->required()
                            ->options(fn () => User::query()->pluck('name', 'id'))
                            ->searchable()
                            ->default(fn () => Auth::id())
                            ->helperText('Pengguna yang memiliki dan bertanggung jawab atas album ini.')
                            ->columnSpanFull(),
                        DatePicker::make('published_at')
                            ->label('Tanggal Publikasi')
                            ->required()
                            ->default(now())
                            ->native(false)
                            ->helperText('Tanggal album ini diterbitkan.')
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

                Section::make('Foto-Foto')
                    ->columnSpan(3)
                    ->schema([
                        Repeater::make('fotos')
                            ->label('')
                            ->relationship()
                            ->schema([
                                FileUpload::make('foto')
                                    ->label('Foto')
                                    ->image()
                                    ->disk('public')
                                    ->directory('album/fotos')
                                    ->imageEditor()
                                    ->maxSize(3072)
                                    ->required(),
                                TextInput::make('urutan')
                                    ->label('Urutan')
                                    ->numeric()
                                    ->default(0)
                                    ->minValue(0)
                                    ->helperText('Angka urutan tampil foto. Semakin kecil semakin awal.'),
                            ])
                            ->columns(2)
                            ->orderColumn('urutan')
                            ->addActionLabel('Tambah Foto')
                            ->collapsible(),
                    ]),
            ]);
    }
}
