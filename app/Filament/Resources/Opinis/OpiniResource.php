<?php

namespace App\Filament\Resources\Opinis;

use App\Filament\Resources\Opinis\Pages\CreateOpini;
use App\Filament\Resources\Opinis\Pages\EditOpini;
use App\Filament\Resources\Opinis\Pages\ListOpinis;
use App\Filament\Resources\Opinis\Schemas\OpiniForm;
use App\Filament\Resources\Opinis\Tables\OpinisTable;
use App\Models\Opini;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class OpiniResource extends Resource
{
    protected static ?string $model = Opini::class;

    protected static ?string $recordTitleAttribute = 'judul';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedPencilSquare;

    protected static ?string $navigationLabel = 'Opini';

    protected static ?string $pluralLabel = 'Opini';

    protected static string|UnitEnum|null $navigationGroup = 'Konten';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Schema $schema): Schema
    {
        return OpiniForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return OpinisTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListOpinis::route('/'),
            'create' => CreateOpini::route('/create'),
            'edit'   => EditOpini::route('/{record}/edit'),
        ];
    }
}
