<?php

namespace App\Filament\Resources\JadwalSholats;

use App\Filament\Resources\JadwalSholats\Pages\CreateJadwalSholat;
use App\Filament\Resources\JadwalSholats\Pages\EditJadwalSholat;
use App\Filament\Resources\JadwalSholats\Pages\ListJadwalSholats;
use App\Filament\Resources\JadwalSholats\Schemas\JadwalSholatForm;
use App\Filament\Resources\JadwalSholats\Tables\JadwalSholatsTable;
use App\Models\JadwalSholat;
use App\Traits\HasAdminResourceAccess;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class JadwalSholatResource extends Resource
{
    use HasAdminResourceAccess;

    protected static ?string $model = JadwalSholat::class;

    protected static ?string $recordTitleAttribute = 'tanggal';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedClock;

    protected static ?string $navigationLabel = 'Jadwal Sholat';

    protected static ?string $pluralLabel = 'Jadwal Sholat';

    protected static string|UnitEnum|null $navigationGroup = 'Jadwal';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Schema $schema): Schema
    {
        return JadwalSholatForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return JadwalSholatsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListJadwalSholats::route('/'),
            'create' => CreateJadwalSholat::route('/create'),
            'edit'   => EditJadwalSholat::route('/{record}/edit'),
        ];
    }
}
