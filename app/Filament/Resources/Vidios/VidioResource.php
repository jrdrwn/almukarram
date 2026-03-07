<?php

namespace App\Filament\Resources\Vidios;

use App\Filament\Resources\Vidios\Pages\CreateVidio;
use App\Filament\Resources\Vidios\Pages\EditVidio;
use App\Filament\Resources\Vidios\Pages\ListVidios;
use App\Filament\Resources\Vidios\Schemas\VidioForm;
use App\Filament\Resources\Vidios\Tables\VidiosTable;
use App\Models\Vidio;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class VidioResource extends Resource
{
    protected static ?string $model = Vidio::class;

    protected static ?string $recordTitleAttribute = 'judul';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedVideoCamera;

    protected static ?string $navigationLabel = 'Vidio';

    protected static ?string $pluralLabel = 'Vidio';

    protected static string|UnitEnum|null $navigationGroup = 'Konten';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Schema $schema): Schema
    {
        return VidioForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return VidiosTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListVidios::route('/'),
            'create' => CreateVidio::route('/create'),
            'edit'   => EditVidio::route('/{record}/edit'),
        ];
    }
}
