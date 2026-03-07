<?php

namespace App\Filament\Widgets;

use App\Enums\Role;
use App\Models\Berita;
use App\Models\User;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class LatestBeritaTableWidget extends TableWidget
{
    protected static ?int $sort = 6;

    protected int|string|array $columnSpan = 'full';

    public static function canView(): bool
    {
        /** @var User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Root, Role::Admin) ?? false;
    }

    public function table(Table $table): Table
    {
        return $table
            ->heading('Berita Terbaru')
            ->query(
                Berita::query()
                    ->with(['user', 'kategori'])
                    ->latest()
            )
            ->columns([
                ImageColumn::make('gambar')
                    ->label('Gambar')
                    ->disk('public')
                    ->square()
                    ->defaultImageUrl(asset('/images/sampel-image.jpg')),
                TextColumn::make('judul')
                    ->label('Judul')
                    ->limit(50)
                    ->searchable(),
                TextColumn::make('kategori.nama')
                    ->label('Kategori')
                    ->badge()
                    ->placeholder('-'),
                TextColumn::make('user.name')
                    ->label('Penulis')
                    ->placeholder('-'),
                TextColumn::make('views')
                    ->label('Tayang')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'published' => 'success',
                        'draft'     => 'warning',
                        default     => 'gray',
                    })
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'published' => 'Dipublikasikan',
                        'draft'     => 'Draft',
                        default     => $state,
                    }),
                TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y')
                    ->sortable(),
            ])
            ->paginated([5, 10])
            ->defaultPaginationPageOption(5)
            ->defaultSort('created_at', 'desc');
    }
}
