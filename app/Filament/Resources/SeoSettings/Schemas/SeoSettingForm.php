<?php

namespace App\Filament\Resources\SeoSettings\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class SeoSettingForm
{
    /**
     * Preset path options to make per-page SEO override easier to configure.
     * Dynamic detail pages use wildcard entries.
     *
     * @return array<string, string>
     */
    protected static function pagePathOptions(): array
    {
        return [
            '/' => 'Beranda (/)',
            '/berita' => 'Berita (/berita)',
            '/berita-detail/*' => 'Detail Berita (/berita-detail/*)',
            '/opini' => 'Opini (/opini)',
            '/opini-detail/*' => 'Detail Opini (/opini-detail/*)',
            '/buletin' => 'Buletin (/buletin)',
            '/dokumen' => 'Dokumen (/dokumen)',
            '/galeri' => 'Galeri (/galeri)',
            '/jadwal-sholat' => 'Jadwal Sholat (/jadwal-sholat)',
            '/jadwal-jumat' => 'Jadwal Jumat (/jadwal-jumat)',
            '/jadwal-pengajian' => 'Jadwal Pengajian (/jadwal-pengajian)',
            '/hitung-zakat' => 'Hitung Zakat (/hitung-zakat)',
            '/zis' => 'Waqaf Infaq Shadaqah (/zis)',
            '/kontak' => 'Kontak (/kontak)',
            '/organisasi-masjid' => 'Organisasi Masjid (/organisasi-masjid)',
            '/struktur-organisasi' => 'Struktur Organisasi (/struktur-organisasi)',
            '/sejarah-singkat' => 'Sejarah Singkat (/sejarah-singkat)',
            '/spot-baca' => 'Spot Baca (/spot-baca)',
            '/program-idarah' => 'Program Idarah (/program-idarah)',
            '/program-imarah' => 'Program Imarah (/program-imarah)',
            '/program-riayah' => 'Program Riayah (/program-riayah)',
            '/program-masjid' => 'Program Masjid (/program-masjid)',
            '/layanan-konsultasi' => 'Layanan Konsultasi (/layanan-konsultasi)',
            '/layanan-waris' => 'Layanan Waris (/layanan-waris)',
        ];
    }

    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(2)
            ->components([
                Section::make('Pengaturan Umum SEO')
                    ->columnSpanFull()
                    ->schema([
                        TextInput::make('site_name')
                            ->label('Nama Situs')
                            ->placeholder('Masjid Agung Al-Mukarram')
                            ->maxLength(255)
                            ->columnSpanFull(),
                        TextInput::make('title_suffix')
                            ->label('Suffix Judul')
                            ->placeholder('| Masjid Agung Al-Mukarram')
                            ->maxLength(255)
                            ->helperText('Akan dipakai sebagai akhiran title default saat diperlukan.')
                            ->columnSpanFull(),
                        Textarea::make('default_description')
                            ->label('Default Meta Description')
                            ->rows(3)
                            ->maxLength(500)
                            ->helperText('Dipakai jika halaman tidak mengirim deskripsi khusus.')
                            ->columnSpanFull(),
                        Textarea::make('description_template')
                            ->label('Template Description Otomatis')
                            ->rows(2)
                            ->maxLength(500)
                            ->placeholder('{title} di {site}. Informasi resmi, terbaru, dan terpercaya.')
                            ->helperText('Dipakai jika default description kosong. Placeholder: {title}, {site}, {path}.')
                            ->columnSpanFull(),
                        FileUpload::make('default_image')
                            ->label('Default OG/Twitter Image')
                            ->image()
                            ->disk('public')
                            ->directory('seo')
                            ->imageEditor()
                            ->imageEditorAspectRatios(['1200:630', '1.91:1', '16:9'])
                            ->imageResizeMode('cover')
                            ->imageResizeTargetWidth('1200')
                            ->imageResizeTargetHeight('630')
                            ->maxSize(4096)
                            ->helperText('Upload akan di-scale otomatis ke 1200x630. Gunakan crop 1200:630 agar preview social lebih presisi.')
                            ->columnSpanFull(),
                        Select::make('default_robots')
                            ->label('Default Robots')
                            ->options([
                                'index,follow' => 'index,follow',
                                'noindex,follow' => 'noindex,follow',
                                'index,nofollow' => 'index,nofollow',
                                'noindex,nofollow' => 'noindex,nofollow',
                            ])
                            ->default('index,follow')
                            ->native(false)
                            ->required()
                            ->columnSpanFull(),
                    ]),
                Section::make('Social Metadata')
                    ->columnSpanFull()
                    ->schema([
                        TextInput::make('twitter_site')
                            ->label('Twitter Site')
                            ->placeholder('@almukarram')
                            ->maxLength(255)
                            ->helperText('Opsional. Format umumnya diawali @.')
                            ->columnSpanFull(),
                        TextInput::make('twitter_creator')
                            ->label('Twitter Creator')
                            ->placeholder('@humas_almukarram')
                            ->maxLength(255)
                            ->columnSpanFull(),
                        TextInput::make('facebook_app_id')
                            ->label('Facebook App ID')
                            ->maxLength(255)
                            ->columnSpanFull(),
                    ]),
                Section::make('Override SEO per Halaman')
                    ->description('Atur metadata khusus berdasarkan path halaman, termasuk wildcard seperti /berita-detail/*')
                    ->columnSpanFull()
                    ->schema([
                        Repeater::make('page_overrides')
                            ->label('Daftar Override Halaman')
                            ->columns(2)
                            ->schema([
                                Select::make('path')
                                    ->label('Path Halaman')
                                    ->options(self::pagePathOptions())
                                    ->native(false)
                                    ->searchable()
                                    ->required()
                                    ->helperText('Pilih path dari daftar. Untuk halaman detail gunakan opsi wildcard, misalnya /berita-detail/*.')
                                    ->columnSpanFull(),
                                TextInput::make('title')
                                    ->label('Custom Title')
                                    ->helperText('Opsional. Jika diisi, menggantikan title default halaman.')
                                    ->maxLength(255)
                                    ->columnSpanFull(),
                                Textarea::make('description')
                                    ->label('Custom Description')
                                    ->rows(2)
                                    ->maxLength(500)
                                    ->columnSpanFull(),
                                FileUpload::make('image')
                                    ->label('Custom Image')
                                    ->image()
                                    ->disk('public')
                                    ->directory('seo/pages')
                                    ->imageEditor()
                                    ->imageEditorAspectRatios(['1200:630', '1.91:1', '16:9'])
                                    ->imageResizeMode('cover')
                                    ->imageResizeTargetWidth('1200')
                                    ->imageResizeTargetHeight('630')
                                    ->maxSize(4096)
                                    ->columnSpanFull(),
                                Select::make('robots')
                                    ->label('Robots Halaman')
                                    ->options([
                                        'index,follow' => 'index,follow',
                                        'noindex,follow' => 'noindex,follow',
                                        'index,nofollow' => 'index,nofollow',
                                        'noindex,nofollow' => 'noindex,nofollow',
                                    ])
                                    ->native(false)
                                    ->columnSpan(1),
                                Toggle::make('no_index')
                                    ->label('Paksa No Index')
                                    ->helperText('Jika aktif, robots jadi noindex,nofollow untuk halaman ini.')
                                    ->columnSpan(1),
                            ])
                            ->reorderable()
                            ->collapsible()
                            ->itemLabel(fn (array $state): ?string => $state['path'] ?? 'Override baru')
                            ->addActionLabel('Tambah Override Halaman')
                            ->defaultItems(0)
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
