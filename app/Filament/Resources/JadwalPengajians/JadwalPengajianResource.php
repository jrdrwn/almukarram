<?php

namespace App\Filament\Resources\JadwalPengajians;

use App\Filament\Resources\JadwalPengajians\Pages\CreateJadwalPengajian;
use App\Filament\Resources\JadwalPengajians\Pages\EditJadwalPengajian;
use App\Filament\Resources\JadwalPengajians\Pages\ListJadwalPengajians;
use App\Filament\Resources\JadwalPengajians\Schemas\JadwalPengajianForm;
use App\Filament\Resources\JadwalPengajians\Tables\JadwalPengajiansTable;
use App\Models\JadwalPengajian;
use App\Traits\HasAdminResourceAccess;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class JadwalPengajianResource extends Resource
{
    use HasAdminResourceAccess;

    protected static ?string $model = JadwalPengajian::class;

    protected static ?string $recordTitleAttribute = 'judul';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedAcademicCap;

    protected static ?string $navigationLabel = 'Jadwal Pengajian';

    protected static ?string $pluralLabel = 'Jadwal Pengajian';

    protected static string|UnitEnum|null $navigationGroup = 'Jadwal';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Schema $schema): Schema
    {
        return JadwalPengajianForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return JadwalPengajiansTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListJadwalPengajians::route('/'),
            'create' => CreateJadwalPengajian::route('/create'),
            'edit'   => EditJadwalPengajian::route('/{record}/edit'),
        ];
    }
}
