<?php

namespace App\Filament\Resources\Vidios\Schemas;

use App\Models\Kategori;
use App\Models\User;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Infolists\Components\TextEntry;
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
                            ->placeholder('contoh: dQw4w9WgXcQ atau URL lengkap')
                            ->helperText('ID video YouTube — bagian setelah ?v= atau youtu.be/. URL apa pun akan otomatis di‑parse.')
                            ->prefix('https://youtu.be/')
                            ->reactive()
                            ->afterStateUpdated(function (?string $state, callable $set) {
                                if (! $state) {
                                    return;
                                }
                                // coerce to string and trim
                                $input = trim($state);
                                // if it already looks like a raw id, do nothing
                                if (preg_match('/^[A-Za-z0-9_-]{11}$/', $input)) {
                                    return;
                                }

                                // try to parse a YouTube URL and extract the video id
                                $id = null;
                                $url = $input;

                                if (! str_starts_with($url, 'http')) {
                                    $url = 'https://' . $url;
                                }

                                $parts = parse_url($url);
                                if ($parts !== false) {
                                    if (isset($parts['host']) && str_contains($parts['host'], 'youtu.be')) {
                                        $id = ltrim($parts['path'] ?? '', '/');
                                    } elseif (isset($parts['path']) && str_contains($parts['path'], '/live/')) {
                                        // live links look like /live/VIDEOID or /live/VIDEOID?si=...
                                        $segments = explode('/', trim($parts['path'], '/'));
                                        $pos = array_search('live', $segments, true);
                                        if ($pos !== false && isset($segments[$pos + 1])) {
                                            $id = $segments[$pos + 1];
                                        }
                                    } elseif (isset($parts['query'])) {
                                        parse_str($parts['query'], $query);
                                        $id = $query['v'] ?? null;
                                    } elseif (isset($parts['path']) && str_contains($parts['path'], '/embed/')) {
                                        $segments = explode('/', $parts['path']);
                                        $id = end($segments);
                                    }
                                }

                                if ($id && preg_match('/^[A-Za-z0-9_-]{11}$/', $id)) {
                                    $set('youtube_id', $id);
                                }
                            })
                            ->live(onBlur: true)
                            ->columnSpanFull(),
                        TextEntry::make('youtube_preview')
                            ->label('Pratinjau')
                            ->state(function ($get): HtmlString {
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
