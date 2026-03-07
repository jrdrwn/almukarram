<?php

namespace App\Filament\Resources\Dokumens;

use App\Filament\Resources\Dokumens\Pages\CreateDokumen;
use App\Filament\Resources\Dokumens\Pages\EditDokumen;
use App\Filament\Resources\Dokumens\Pages\ListDokumens;
use App\Filament\Resources\Dokumens\Schemas\DokumenForm;
use App\Filament\Resources\Dokumens\Tables\DokumensTable;
use App\Models\Dokumen;
use App\Traits\HasContentResourceAccess;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class DokumenResource extends Resource
{
    use HasContentResourceAccess;

    protected static ?string $model = Dokumen::class;

    protected static ?string $recordTitleAttribute = 'judul';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedDocumentText;

    protected static ?string $navigationLabel = 'Dokumen';

    protected static ?string $pluralLabel = 'Dokumen';

    protected static string|UnitEnum|null $navigationGroup = 'Konten';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Schema $schema): Schema
    {
        return DokumenForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return DokumensTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListDokumens::route('/'),
            'create' => CreateDokumen::route('/create'),
            'edit'   => EditDokumen::route('/{record}/edit'),
        ];
    }
}
