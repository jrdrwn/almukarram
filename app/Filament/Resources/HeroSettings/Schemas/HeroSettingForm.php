<?php

namespace App\Filament\Resources\HeroSettings\Schemas;

use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class HeroSettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(2)
            ->components([
                Section::make('Media Hero Beranda')
                    ->columnSpanFull()
                    ->schema([
                        Select::make('hero_media_type')
                            ->label('Tipe Media Hero')
                            ->options([
                                'video' => 'Video',
                                'image' => 'Foto',
                            ])
                            ->default('video')
                            ->live()
                            ->native(false)
                            ->required()
                            ->helperText('Pilih apakah hero beranda memakai video atau foto.')
                            ->columnSpanFull(),
                        FileUpload::make('hero_video')
                            ->label('Video Hero')
                            ->disk('public')
                            ->directory('hero')
                            ->acceptedFileTypes([
                                'video/mp4',
                                'video/webm',
                                'video/ogg',
                            ])
                            ->maxSize(51200)
                            ->visible(fn ($get) => $get('hero_media_type') === 'video')
                            ->helperText('Unggah video hero ke storage publik. Maksimal 50MB.')
                            ->columnSpanFull(),
                        FileUpload::make('hero_image')
                            ->label('Foto Hero')
                            ->image()
                            ->disk('public')
                            ->directory('hero')
                            ->imageEditor()
                            ->maxSize(4096)
                            ->visible(fn ($get) => $get('hero_media_type') === 'image')
                            ->helperText('Unggah foto hero jika ingin menampilkan gambar statis.')
                            ->columnSpanFull(),
                    ]),

                Section::make('Quick Access Items')
                    ->description('Kelola item akses cepat yang muncul di hero section (maksimal 6 item)')
                    ->columnSpanFull()
                    ->schema([
                        Repeater::make('quick_access_items')
                            ->label('')
                            ->schema([
                                TextInput::make('title')
                                    ->label('Judul')
                                    ->required()
                                    ->placeholder('Alquran Digital')
                                    ->helperText('Nama item yang akan ditampilkan')
                                    ->maxLength(50),

                                TextInput::make('subtitle')
                                    ->label('Subtitle')
                                    ->placeholder('Digital')
                                    ->helperText('Teks kecil di bawah judul (opsional)')
                                    ->maxLength(50),

                                TextInput::make('href')
                                    ->label('Link URL')
                                    ->required()
                                    ->url()
                                    ->prefix('https://')
                                    ->placeholder('alquran-digital')
                                    ->helperText('URL tujuan ketika item diklik. Bisa internal (/alquran) atau eksternal (https://...)'),

                                Select::make('icon')
                                    ->label('Icon')
                                    ->required()
                                    ->native(false)
                                    ->searchable()
                                    ->options([
                                        'book' => '📖 Book (Buku)',
                                        'calculator' => '📋 Calculator (Kalkulator)',
                                        'users' => '👥 Users (Pengguna)',
                                        'calendar' => '📅 Calendar (Kalender)',
                                        'mosque' => '🕌 Mosque (Masjid)',
                                        'pray' => '🤲 Pray (Doa)',
                                        'quran' => '📗 Quran (Al-Qur\'an)',
                                        'heart' => '❤️ Heart (Hati)',
                                        'share' => '🔗 Share (Bagikan)',
                                        'phone' => '📞 Phone (Telepon)',
                                        'mail' => '📧 Mail (Email)',
                                        'location' => '📍 Location (Lokasi)',
                                        'info' => 'ℹ️ Info (Informasi)',
                                        'newspaper' => '📰 Newspaper (Berita)',
                                        'video' => '🎥 Video',
                                        'image' => '🖼️ Image (Gambar)',
                                        'microphone' => '🎤 Microphone (Mikrofon)',
                                        'wallet' => '💰 Wallet (Dompet)',
                                    ])
                                    ->helperText('Pilih icon yang sesuai dengan item'),

                                ColorPicker::make('color')
                                    ->label('Warna Gradient')
                                    ->helperText('Warna untuk gradient background icon')
                                    ->default('#10b981'),

                                Select::make('badge_type')
                                    ->label('Badge/Label')
                                    ->native(false)
                                    ->options([
                                        'none' => 'Tidak Ada',
                                        'new' => '🆕 NEW (Fitur Baru)',
                                        'check' => '✅ Checkmark (Lengkap)',
                                        'external' => '🔗 External Link (Link Luar)',
                                        'hot' => '🔥 HOT (Trending)',
                                        'beta' => '🧪 BETA (Testing)',
                                    ])
                                    ->default('none')
                                    ->helperText('Badge kecil di pojok item'),

                                Textarea::make('description')
                                    ->label('Deskripsi (Opsional)')
                                    ->rows(2)
                                    ->placeholder('Baca Al-Qur\'an dengan terjemahan...')
                                    ->helperText('Deskripsi tambahan untuk tooltip atau info (belum digunakan di UI saat ini)')
                                    ->maxLength(200),
                            ])
                            ->columnSpanFull()
                            ->defaultItems(3)
                            ->addActionLabel('Tambah Item Baru')
                            ->reorderable()
                            ->collapsible()
                            ->itemLabel(fn (array $state): ?string => $state['title'] ?? 'Item Baru')
                            ->maxItems(6)
                            ->minItems(0),
                    ]),
            ]);
    }
}
