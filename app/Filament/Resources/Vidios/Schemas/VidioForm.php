<?php

namespace App\Filament\Resources\Vidios\Schemas;

use App\Models\Kategori;
use App\Models\User;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\HtmlString;

class VidioForm
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
                            ->hint(fn ($state) => strlen($state ?? '') . '/255')
                            ->helperText('Judul video yang ditampilkan ke publik.')
                            ->columnSpanFull(),
                        TextInput::make('youtube_id')
                            ->label('ID YouTube')
                            ->required()
                            ->maxLength(20)
                            ->placeholder('contoh: dQw4w9WgXcQ')
                            ->helperText('ID video YouTube — bagian setelah ?v= atau youtu.be/')
                            ->prefix('https://youtu.be/')
                            ->live(onBlur: true)
                            ->columnSpanFull(),
                        Placeholder::make('youtube_preview')
                            ->label('Pratinjau')
                            ->content(function ($get): HtmlString {
                                $id = trim($get('youtube_id') ?? '');
                                if (! $id) {
                                    return new HtmlString('<p class="text-sm text-gray-400 italic">Masukkan ID YouTube untuk melihat pratinjau.</p>');
                                }
                                return new HtmlString(
                                    '<iframe style="width:100%;aspect-ratio:16/9;border-radius:0.5rem;display:block;" src="https://www.youtube.com/embed/' . e($id) . '" frameborder="0" allowfullscreen loading="lazy"></iframe>'
                                );
                            })
                            ->columnSpanFull(),
                    ]),

                Section::make('Pengaturan')
                    ->columnSpan(1)
                    ->schema([
                        Select::make('kategori_id')
                            ->label('Kategori')
                            ->required()
                            ->options(fn () => Kategori::query()->where('type', 'vidio')->pluck('nama', 'id'))
                            ->searchable()
                            ->helperText('Pilih kategori yang sesuai untuk video ini.')
                            ->columnSpanFull(),
                        Select::make('user_id')
                            ->label('Pemilik')
                            ->required()
                            ->options(fn () => User::query()->pluck('name', 'id'))
                            ->searchable()
                            ->default(fn () => Auth::id())
                            ->helperText('Pengguna yang memiliki dan bertanggung jawab atas video ini.')
                            ->columnSpanFull(),
                        DatePicker::make('published_at')
                            ->label('Tanggal Publikasi')
                            ->required()
                            ->default(now())
                            ->native(false)
                            ->helperText('Tanggal video ini diterbitkan.')
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
