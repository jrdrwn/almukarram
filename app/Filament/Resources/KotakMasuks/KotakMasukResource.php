<?php

namespace App\Filament\Resources\KotakMasuks;

use App\Filament\Resources\KotakMasuks\Pages\ListKotakMasuks;
use App\Filament\Resources\KotakMasuks\Pages\ViewKotakMasuk;
use App\Filament\Resources\KotakMasuks\Schemas\KotakMasukInfolist;
use App\Filament\Resources\KotakMasuks\Tables\KotakMasuksTable;
use App\Models\KotakMasuk;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class KotakMasukResource extends Resource
{
    protected static ?string $model = KotakMasuk::class;

    protected static ?string $recordTitleAttribute = 'subjek';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedInbox;

    protected static ?string $navigationLabel = 'Kotak Masuk';

    protected static ?string $pluralLabel = 'Kotak Masuk';

    protected static string|UnitEnum|null $navigationGroup = 'Manajemen';

    public static function getNavigationBadge(): ?string
    {
        $count = static::getModel()::where('status', 'belum_dibaca')->count();

        return $count > 0 ? (string) $count : null;
    }

    public static function getNavigationBadgeColor(): string|array|null
    {
        return 'danger';
    }

    public static function infolist(Schema $schema): Schema
    {
        return KotakMasukInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return KotakMasuksTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListKotakMasuks::route('/'),
            'view'  => ViewKotakMasuk::route('/{record}'),
        ];
    }
}
