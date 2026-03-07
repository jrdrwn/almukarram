<?php

namespace App\Filament\Resources\Dokumens\Schemas;

use App\Models\Kategori;
use App\Models\User;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;

class DokumenForm
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
                            ->columnSpanFull(),
                        Select::make('jenis')
                            ->label('Jenis File')
                            ->required()
                            ->options([
                                'PDF'        => 'PDF',
                                'Word'       => 'Word (.docx)',
                                'Excel'      => 'Excel (.xlsx)',
                                'PowerPoint' => 'PowerPoint (.pptx)',
                                'Lainnya'    => 'Lainnya',
                            ])
                            ->native(false),
                        TextInput::make('tahun')
                            ->label('Tahun')
                            ->required()
                            ->maxLength(4)
                            ->default(now()->year),
                        FileUpload::make('file_url')
                            ->label('File Dokumen')
                            ->required()
                            ->disk('public')
                            ->directory('dokumen')
                            ->acceptedFileTypes([
                                'application/pdf',
                                'application/msword',
                                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                                'application/vnd.ms-excel',
                                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                                'application/vnd.ms-powerpoint',
                                'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            ])
                            ->maxSize(20480)
                            ->helperText('Maks. 20MB. Format: PDF, Word, Excel, PowerPoint.')
                            ->columnSpanFull(),
                    ]),

                Section::make('Pengaturan')
                    ->columnSpan(1)
                    ->schema([
                        Select::make('kategori_id')
                            ->label('Kategori')
                            ->required()
                            ->options(fn () => Kategori::query()->where('type', 'dokumen')->pluck('nama', 'id'))
                            ->searchable()
                            ->columnSpanFull(),
                        Select::make('user_id')
                            ->label('Pemilik')
                            ->required()
                            ->options(fn () => User::query()->pluck('name', 'id'))
                            ->searchable()
                            ->default(fn () => Auth::id())
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
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
