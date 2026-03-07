<?php

namespace App\Filament\Resources\Kategoris\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class KategoriForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(2)
            ->components([
                TextInput::make('nama')
                    ->label('Nama')
                    ->required()
                    ->maxLength(100)
                    ->live()
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
                    ->maxLength(100),
                Select::make('type')
                    ->label('Tipe')
                    ->required()
                    ->options([
                        'berita'  => 'Berita',
                        'vidio'   => 'Vidio',
                        'album'   => 'Album',
                        'buletin' => 'Buletin',
                        'opini'   => 'Opini',
                        'dokumen' => 'Dokumen',
                    ])
                    ->native(false),
            ]);
    }
}
