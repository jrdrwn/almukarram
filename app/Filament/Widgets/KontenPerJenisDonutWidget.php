<?php

namespace App\Filament\Widgets;

use App\Enums\Role;
use App\Models\Album;
use App\Models\Berita;
use App\Models\Buletin;
use App\Models\Dokumen;
use App\Models\Opini;
use App\Models\User;
use App\Models\Vidio;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\Auth;

class KontenPerJenisDonutWidget extends ChartWidget
{
    protected static ?int $sort = 2;

    protected string $color = 'success';

    protected ?string $heading = 'Proporsi Jenis Konten';

    protected ?string $description = 'Distribusi seluruh konten berdasarkan jenis';

    protected int|string|array $columnSpan = 1;

    public static function canView(): bool
    {
        /** @var User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Root, Role::Admin) ?? false;
    }

    protected function getType(): string
    {
        return 'doughnut';
    }

    protected function getData(): array
    {
        $counts = [
            Berita::count(),
            Buletin::count(),
            Opini::count(),
            Album::count(),
            Vidio::count(),
            Dokumen::count(),
        ];

        return [
            'datasets' => [
                [
                    'data'            => $counts,
                    'backgroundColor' => [
                        'rgba(59,130,246,0.85)',
                        'rgba(34,197,94,0.85)',
                        'rgba(168,85,247,0.85)',
                        'rgba(249,115,22,0.85)',
                        'rgba(239,68,68,0.85)',
                        'rgba(234,179,8,0.85)',
                    ],
                    'borderColor'     => 'transparent',
                    'hoverOffset'     => 6,
                ],
            ],
            'labels' => ['Berita', 'Buletin', 'Opini', 'Album', 'Video', 'Dokumen'],
        ];
    }

    protected function getOptions(): array
    {
        return [
            'plugins' => [
                'legend' => [
                    'position' => 'bottom',
                    'labels'   => ['padding' => 16, 'boxWidth' => 12],
                ],
            ],
            'cutout' => '65%',
        ];
    }
}
