<?php

namespace App\Filament\Resources\Pengumumans;

use App\Filament\Resources\Pengumumans\Pages\CreatePengumuman;
use App\Filament\Resources\Pengumumans\Pages\EditPengumuman;
use App\Filament\Resources\Pengumumans\Pages\ListPengumumans;
use App\Filament\Resources\Pengumumans\Schemas\PengumumanForm;
use App\Filament\Resources\Pengumumans\Tables\PengumumansTable;
use App\Models\Pengumuman;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class PengumumanResource extends Resource
{
    protected static ?string $model = Pengumuman::class;

    protected static ?string $recordTitleAttribute = 'judul';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedSpeakerWave;

    protected static ?string $navigationLabel = 'Pengumuman';

    protected static ?string $pluralLabel = 'Pengumuman';

    protected static string|UnitEnum|null $navigationGroup = 'Konten';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Schema $schema): Schema
    {
        return PengumumanForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PengumumansTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListPengumumans::route('/'),
            'create' => CreatePengumuman::route('/create'),
            'edit'   => EditPengumuman::route('/{record}/edit'),
        ];
    }
}
