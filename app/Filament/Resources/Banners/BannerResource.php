<?php

namespace App\Filament\Resources\Banners;

use App\Filament\Resources\Banners\Pages\CreateBanner;
use App\Filament\Resources\Banners\Pages\EditBanner;
use App\Filament\Resources\Banners\Pages\ListBanners;
use App\Filament\Resources\Banners\Schemas\BannerForm;
use App\Filament\Resources\Banners\Tables\BannersTable;
use App\Models\Banner;
use App\Traits\HasAdminResourceAccess;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class BannerResource extends Resource
{
    use HasAdminResourceAccess;

    protected static ?string $model = Banner::class;

    protected static ?string $recordTitleAttribute = 'judul';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedPhoto;

    protected static ?string $navigationLabel = 'Banner';

    protected static ?string $pluralLabel = 'Banner';

    protected static string|UnitEnum|null $navigationGroup = 'Konten';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Schema $schema): Schema
    {
        return BannerForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return BannersTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public function getTabs(): array
    {
        return [
            Tab::make('Semua')
                ->query(fn ($query) => $query),

            Tab::make('4:1')
                ->query(fn ($query) => $query->where('ratio', '4:1')),

            Tab::make('4:5')
                ->query(fn ($query) => $query->where('ratio', '4:5')),

            Tab::make('16:9')
                ->query(fn ($query) => $query->where('ratio', '16:9')),

            Tab::make('5:3')
                ->query(fn ($query) => $query->where('ratio', '5:3')),
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListBanners::route('/'),
            'create' => CreateBanner::route('/create'),
            'edit' => EditBanner::route('/{record}/edit'),
        ];
    }
}
