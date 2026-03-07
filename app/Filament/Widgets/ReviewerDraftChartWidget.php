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

class ReviewerDraftChartWidget extends ChartWidget
{
    protected static ?int $sort = 2;

    protected string $color = 'warning';

    protected ?string $heading = 'Konten Perlu Ditinjau';

    protected ?string $description = 'Jumlah konten berstatus draft yang menunggu review';

    protected int|string|array $columnSpan = 'full';

    public static function canView(): bool
    {
        /** @var User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Reviewer) ?? false;
    }

    protected function getType(): string
    {
        return 'doughnut';
    }

    protected function getData(): array
    {
        $types = ['Berita', 'Buletin', 'Opini', 'Album', 'Video', 'Dokumen'];

        $draftCounts = [
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
                    'label'           => 'Draft',
                    'data'            => $draftCounts,
                    'backgroundColor' => [
                        'rgba(251,191,36,0.8)',
                        'rgba(59,130,246,0.8)',
                        'rgba(168,85,247,0.8)',
                        'rgba(34,197,94,0.8)',
                        'rgba(239,68,68,0.8)',
                        'rgba(14,165,233,0.8)',
                    ],
                    'borderColor' => [
                        'rgb(251,191,36)',
                        'rgb(59,130,246)',
                        'rgb(168,85,247)',
                        'rgb(34,197,94)',
                        'rgb(239,68,68)',
                        'rgb(14,165,233)',
                    ],
                    'borderWidth' => 1,
                ],
            ],
            'labels' => $types,
        ];
    }

    protected function getOptions(): array
    {
        return [
            'plugins' => [
                'legend' => ['position' => 'bottom'],
            ],
        ];
    }
}
