<?php

namespace App\Filament\Widgets;

use App\Enums\Role;
use App\Models\KotakMasuk;
use App\Models\User;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class KotakMasukPerBulanChartWidget extends ChartWidget
{
    protected static ?int $sort = 4;

    protected string $color = 'danger';

    protected ?string $heading = 'Pesan Masuk per Bulan';

    protected ?string $description = 'Jumlah pesan masuk dalam 6 bulan terakhir';

    protected int|string|array $columnSpan = 'full';

    public static function canView(): bool
    {
        /** @var User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Root, Role::Admin, Role::Reviewer) ?? false;
    }

    protected function getType(): string
    {
        return 'line';
    }

    protected function getData(): array
    {
        $labels = [];
        $total  = [];
        $baru   = [];

        for ($i = 5; $i >= 0; $i--) {
            $month    = Carbon::now()->subMonths($i);
            $labels[] = $month->translatedFormat('M Y');

            $total[] = KotakMasuk::whereYear('created_at', $month->year)
                ->whereMonth('created_at', $month->month)
                ->count();

            $baru[] = KotakMasuk::whereYear('created_at', $month->year)
                ->whereMonth('created_at', $month->month)
                ->where('status', 'belum_dibaca')
                ->count();
        }

        return [
            'datasets' => [
                [
                    'label'           => 'Total Pesan',
                    'data'            => $total,
                    'borderColor'     => 'rgb(239,68,68)',
                    'backgroundColor' => 'rgba(239,68,68,0.1)',
                    'fill'            => true,
                    'tension'         => 0.4,
                ],
                [
                    'label'           => 'Belum Dibaca',
                    'data'            => $baru,
                    'borderColor'     => 'rgb(251,146,60)',
                    'backgroundColor' => 'rgba(251,146,60,0.08)',
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
