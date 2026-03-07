<?php

namespace App\Filament\Resources\JadwalJumats;

use App\Filament\Resources\JadwalJumats\Pages\CreateJadwalJumat;
use App\Filament\Resources\JadwalJumats\Pages\EditJadwalJumat;
use App\Filament\Resources\JadwalJumats\Pages\ListJadwalJumats;
use App\Filament\Resources\JadwalJumats\Schemas\JadwalJumatForm;
use App\Filament\Resources\JadwalJumats\Tables\JadwalJumatsTable;
use App\Models\JadwalJumat;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class JadwalJumatResource extends Resource
{
    protected static ?string $model = JadwalJumat::class;

    protected static ?string $recordTitleAttribute = 'khatib';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCalendarDays;

    protected static ?string $navigationLabel = 'Jadwal Jumat';

    protected static ?string $pluralLabel = 'Jadwal Jumat';

    protected static string|UnitEnum|null $navigationGroup = 'Jadwal';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Schema $schema): Schema
    {
        return JadwalJumatForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return JadwalJumatsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListJadwalJumats::route('/'),
            'create' => CreateJadwalJumat::route('/create'),
            'edit'   => EditJadwalJumat::route('/{record}/edit'),
        ];
    }
}
