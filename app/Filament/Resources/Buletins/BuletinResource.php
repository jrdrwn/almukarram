<?php

namespace App\Filament\Resources\Buletins;

use App\Filament\Resources\Buletins\Pages\CreateBuletin;
use App\Filament\Resources\Buletins\Pages\EditBuletin;
use App\Filament\Resources\Buletins\Pages\ListBuletins;
use App\Filament\Resources\Buletins\Schemas\BuletinForm;
use App\Filament\Resources\Buletins\Tables\BuletinsTable;
use App\Models\Buletin;
use App\Traits\HasContentResourceAccess;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class BuletinResource extends Resource
{
    use HasContentResourceAccess;

    protected static ?string $model = Buletin::class;

    protected static ?string $recordTitleAttribute = 'judul';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedBookOpen;

    protected static ?string $navigationLabel = 'Buletin';

    protected static ?string $pluralLabel = 'Buletin';

    protected static string|UnitEnum|null $navigationGroup = 'Konten';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Schema $schema): Schema
    {
        return BuletinForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return BuletinsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListBuletins::route('/'),
            'create' => CreateBuletin::route('/create'),
            'edit'   => EditBuletin::route('/{record}/edit'),
        ];
    }
}
