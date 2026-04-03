<?php

namespace App\Filament\Resources\SeoSettings;

use App\Filament\Resources\SeoSettings\Pages\EditSeoSetting;
use App\Filament\Resources\SeoSettings\Schemas\SeoSettingForm;
use App\Models\SeoSetting;
use App\Traits\HasAdminResourceAccess;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class SeoSettingResource extends Resource
{
    use HasAdminResourceAccess;

    protected static ?string $model = SeoSetting::class;

    protected static ?string $slug = 'seo-settings';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedGlobeAlt;

    protected static ?string $navigationLabel = 'SEO Settings';

    protected static ?string $pluralLabel = 'SEO Settings';

    protected static string|UnitEnum|null $navigationGroup = 'Pengaturan Situs';

    public static function form(Schema $schema): Schema
    {
        return SeoSettingForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return $table;
    }

    public static function getPages(): array
    {
        return [
            'index' => EditSeoSetting::route('/'),
            'edit' => EditSeoSetting::route('/{record}/edit'),
        ];
    }
}
