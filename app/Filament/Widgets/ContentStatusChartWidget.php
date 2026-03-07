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

class ContentStatusChartWidget extends ChartWidget
{
    protected static ?int $sort = 2;

    protected string $color = 'primary';

    protected ?string $heading = 'Statistik Konten';

    protected ?string $description = 'Perbandingan konten dipublikasikan vs draft';

    protected int|string|array $columnSpan = 1;

    public static function canView(): bool
    {
        /** @var User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Root, Role::Admin) ?? false;
    }

    protected function getType(): string
    {
        return 'bar';
    }

    protected function getData(): array
    {
        $types = ['Berita', 'Buletin', 'Opini', 'Album', 'Video', 'Dokumen'];

        $published = [
            Berita::where('status', 'published')->count(),
            Buletin::where('status', 'published')->count(),
            Opini::where('status', 'published')->count(),
            Album::where('status', 'published')->count(),
            Vidio::where('status', 'published')->count(),
            Dokumen::where('status', 'published')->count(),
        ];

        $draft = [
            Berita::where('status', 'draft')->count(),
            Buletin::where('status', 'draft')->count(),
            Opini::where('status', 'draft')->count(),
            Album::where('status', 'draft')->count(),
            Vidio::where('status', 'draft')->count(),
            Dokumen::where('status', 'draft')->count(),
        ];

        return [
            'datasets' => [
                [
                    'label'           => 'Dipublikasikan',
                    'data'            => $published,
                    'backgroundColor' => 'rgba(34,197,94,0.8)',
                    'borderColor'     => 'rgb(34,197,94)',
                    'borderWidth'     => 1,
                ],
                [
                    'label'           => 'Draft',
                    'data'            => $draft,
                    'backgroundColor' => 'rgba(234,179,8,0.8)',
                    'borderColor'     => 'rgb(234,179,8)',
                    'borderWidth'     => 1,
                ],
            ],
            'labels' => $types,
        ];
    }

    protected function getOptions(): array
    {
        return [
            'scales' => [
                'y' => [
                    'beginAtZero' => true,
                    'ticks'       => ['stepSize' => 1],
                ],
            ],
            'plugins' => [
                'legend' => ['position' => 'top'],
            ],
        ];
    }
}
