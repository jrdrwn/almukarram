<?php

namespace App\Filament\Resources\KontakSitus;

use App\Filament\Resources\KontakSitus\Pages\EditKontakSitus;
use App\Filament\Resources\KontakSitus\Schemas\KontakSitusForm;
use App\Models\KontakSitus;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class KontakSitusResource extends Resource
{
    protected static ?string $model = KontakSitus::class;

    protected static ?string $slug = 'kontak-situs';

    protected static ?string $recordTitleAttribute = 'address';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedPhone;

    protected static ?string $navigationLabel = 'Kontak Masjid';

    protected static ?string $pluralLabel = 'Kontak Masjid';

    protected static string|UnitEnum|null $navigationGroup = 'Pengaturan Situs';

    public static function form(Schema $schema): Schema
    {
        return KontakSitusForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return $table;
    }

    public static function getPages(): array
    {
        return [
            'index' => EditKontakSitus::route('/'),
            'edit' => EditKontakSitus::route('/{record}/edit'),
        ];
    }
}
