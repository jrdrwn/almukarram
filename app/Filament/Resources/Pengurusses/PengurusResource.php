<?php

namespace App\Filament\Resources\Pengurusses;

use App\Filament\Resources\Pengurusses\Pages\CreatePengurus;
use App\Filament\Resources\Pengurusses\Pages\EditPengurus;
use App\Filament\Resources\Pengurusses\Pages\ListPengurus;
use App\Filament\Resources\Pengurusses\Schemas\PengurusForm;
use App\Filament\Resources\Pengurusses\Tables\PengurusTable;
use App\Models\Pengurus;
use App\Traits\HasAdminResourceAccess;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class PengurusResource extends Resource
{
    use HasAdminResourceAccess;

    protected static ?string $model = Pengurus::class;

    protected static ?string $recordTitleAttribute = 'nama';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedUserGroup;

    protected static ?string $navigationLabel = 'Pengurus';

    protected static ?string $pluralLabel = 'Pengurus';

    protected static string|UnitEnum|null $navigationGroup = 'Profil';

    protected static ?int $navigationSort = 1;

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('is_active', true)->count();
    }

    public static function form(Schema $schema): Schema
    {
        return PengurusForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PengurusTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListPengurus::route('/'),
            'create' => CreatePengurus::route('/create'),
            'edit'   => EditPengurus::route('/{record}/edit'),
        ];
    }
}
