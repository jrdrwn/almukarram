<?php

namespace App\Filament\Resources\HeroSettings;

use App\Filament\Resources\HeroSettings\Pages\EditHeroSetting;
use App\Filament\Resources\HeroSettings\Schemas\HeroSettingForm;
use App\Models\HeroSetting;
use App\Traits\HasAdminResourceAccess;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class HeroSettingResource extends Resource
{
    use HasAdminResourceAccess;

    protected static ?string $model = HeroSetting::class;

    protected static ?string $slug = 'media-hero';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedFilm;

    protected static ?string $navigationLabel = 'Media Hero';

    protected static ?string $pluralLabel = 'Media Hero';

    protected static string|UnitEnum|null $navigationGroup = 'Pengaturan Situs';

    public static function form(Schema $schema): Schema
    {
        return HeroSettingForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return $table;
    }

    public static function getPages(): array
    {
        return [
            'index' => EditHeroSetting::route('/'),
            'edit' => EditHeroSetting::route('/{record}/edit'),
        ];
    }
}
