<?php

namespace App\Filament\Resources\Features;

use App\Filament\Resources\Features\Pages;
use App\Filament\Resources\Features\Schemas\FeatureForm;
use App\Models\Feature;
use BackedEnum;
use Filament\Actions\ActionGroup;
use Filament\Actions\DeleteAction as ActionsDeleteAction;
use Filament\Actions\EditAction as ActionsEditAction;
use Filament\Resources\Resource;
use Filament\Resources\Pages\ListRecords;
use Filament\Resources\Pages\CreateRecord;
use Filament\Resources\Pages\EditRecord;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\BooleanColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use UnitEnum;

class FeatureResource extends Resource
{
    protected static ?string $model = Feature::class;

    protected static BackedEnum|string|null $navigationIcon = 'heroicon-o-sparkles';

    protected static string|UnitEnum|null $navigationGroup = 'Pengaturan Situs';

    protected static ?string $navigationLabel = 'Features';

    public static function form(
        \Filament\Schemas\Schema $schema
    ): \Filament\Schemas\Schema {
        return FeatureForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->label('Judul')->sortable()->searchable(),
                TextColumn::make('icon')->label('Icon')->sortable(),
                TextColumn::make('urutan')->label('Urutan')->sortable(),
                BooleanColumn::make('is_active')->label('Aktif')->sortable(),
            ])
            ->actions([
                ActionGroup::make([
                    ActionsEditAction::make(),
                    ActionsDeleteAction::make(),
                ])
                    ,
            ])
            ->defaultSort('urutan');
    }

    public static function canCreate(): bool
    {
        return static::getModel()::query()->count() < 6;
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFeatures::route('/'),
            'create' => Pages\CreateFeature::route('/create'),
            'edit' => Pages\EditFeature::route('/{record}/edit'),
        ];
    }
}
