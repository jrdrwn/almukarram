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
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class BeritaPerBulanChartWidget extends ChartWidget
{
    protected static ?int $sort = 2;

    protected string $color = 'info';

    protected ?string $heading = 'Konten Dipublikasikan per Bulan';

    protected ?string $description = 'Jumlah konten dipublikasikan dalam 12 bulan terakhir';

    protected int|string|array $columnSpan = 2;

    public static function canView(): bool
    {
        /** @var User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Root, Role::Admin) ?? false;
    }

    protected function getType(): string
    {
        return 'line';
    }

    protected function getData(): array
    {
        $labels  = [];
        $berita  = [];
        $buletin = [];
        $opini   = [];
        $album   = [];
        $vidio   = [];

        for ($i = 11; $i >= 0; $i--) {
            $month    = Carbon::now()->subMonths($i);
            $labels[] = $month->translatedFormat('M Y');

            $berita[]  = Berita::where('status', 'published')
                ->whereYear('published_at', $month->year)
                ->whereMonth('published_at', $month->month)
                ->count();

            $buletin[] = Buletin::where('status', 'published')
                ->whereYear('published_at', $month->year)
                ->whereMonth('published_at', $month->month)
                ->count();

            $opini[] = Opini::where('status', 'published')
                ->whereYear('published_at', $month->year)
                ->whereMonth('published_at', $month->month)
                ->count();

            $album[] = Album::where('status', 'published')
                ->whereYear('published_at', $month->year)
                ->whereMonth('published_at', $month->month)
                ->count();

            $vidio[] = Vidio::where('status', 'published')
                ->whereYear('published_at', $month->year)
                ->whereMonth('published_at', $month->month)
                ->count();
        }

        return [
            'datasets' => [
                [
                    'label'           => 'Berita',
                    'data'            => $berita,
                    'borderColor'     => 'rgb(59,130,246)',
                    'backgroundColor' => 'rgba(59,130,246,0.08)',
                    'fill'            => false,
                    'tension'         => 0.4,
                ],
                [
                    'label'           => 'Buletin',
                    'data'            => $buletin,
                    'borderColor'     => 'rgb(34,197,94)',
                    'backgroundColor' => 'rgba(34,197,94,0.08)',
                    'fill'            => false,
                    'tension'         => 0.4,
                ],
                [
                    'label'           => 'Opini',
                    'data'            => $opini,
                    'borderColor'     => 'rgb(168,85,247)',
                    'backgroundColor' => 'rgba(168,85,247,0.08)',
                    'fill'            => false,
                    'tension'         => 0.4,
                ],
                [
                    'label'           => 'Album',
                    'data'            => $album,
                    'borderColor'     => 'rgb(249,115,22)',
                    'backgroundColor' => 'rgba(249,115,22,0.08)',
                    'fill'            => false,
                    'tension'         => 0.4,
                ],
                [
                    'label'           => 'Video',
                    'data'            => $vidio,
                    'borderColor'     => 'rgb(239,68,68)',
                    'backgroundColor' => 'rgba(239,68,68,0.08)',
                    'fill'            => false,
                    'tension'         => 0.4,
                ],
            ],
            'labels' => $labels,
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
