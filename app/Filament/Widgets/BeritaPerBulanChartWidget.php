<?php

namespace App\Filament\Widgets;

use App\Enums\Role;
use App\Models\Berita;
use App\Models\User;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class BeritaPerBulanChartWidget extends ChartWidget
{
    protected static ?int $sort = 2;

    protected string $color = 'info';

    protected ?string $heading = 'Berita per Bulan';

    protected ?string $description = 'Jumlah berita dipublikasikan dalam 12 bulan terakhir';

    protected int|string|array $columnSpan = 1;

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
        $labels = [];
        $data   = [];

        for ($i = 11; $i >= 0; $i--) {
            $month    = Carbon::now()->subMonths($i);
            $labels[] = $month->translatedFormat('M Y');
            $data[]   = Berita::where('status', 'published')
                ->whereYear('published_at', $month->year)
                ->whereMonth('published_at', $month->month)
                ->count();
        }

        return [
            'datasets' => [
                [
                    'label'           => 'Berita Dipublikasikan',
                    'data'            => $data,
                    'borderColor'     => 'rgb(59,130,246)',
                    'backgroundColor' => 'rgba(59,130,246,0.1)',
                    'fill'            => true,
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
