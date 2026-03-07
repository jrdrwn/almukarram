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

class PenulisContentChartWidget extends ChartWidget
{
    protected static ?int $sort = 2;

    protected string $color = 'success';

    protected ?string $heading = 'Konten Saya per Bulan';

    protected ?string $description = 'Berita yang Anda buat dalam 6 bulan terakhir';

    protected int|string|array $columnSpan = 'full';

    public static function canView(): bool
    {
        /** @var User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Penulis) ?? false;
    }

    protected function getType(): string
    {
        return 'bar';
    }

    protected function getData(): array
    {
        /** @var User $user */
        $user   = Auth::user();
        $userId = $user->id;

        $labels       = [];
        $beritaData   = [];
        $buletinData  = [];
        $opiniData    = [];

        for ($i = 5; $i >= 0; $i--) {
            $month    = Carbon::now()->subMonths($i);
            $labels[] = $month->translatedFormat('M Y');

            $beritaData[] = Berita::where('user_id', $userId)
                ->whereYear('created_at', $month->year)
                ->whereMonth('created_at', $month->month)
                ->count();

            $buletinData[] = Buletin::where('user_id', $userId)
                ->whereYear('created_at', $month->year)
                ->whereMonth('created_at', $month->month)
                ->count();

            $opiniData[] = Opini::where('user_id', $userId)
                ->whereYear('created_at', $month->year)
                ->whereMonth('created_at', $month->month)
                ->count();
        }

        return [
            'datasets' => [
                [
                    'label'           => 'Berita',
                    'data'            => $beritaData,
                    'backgroundColor' => 'rgba(34,197,94,0.8)',
                    'borderColor'     => 'rgb(34,197,94)',
                    'borderWidth'     => 1,
                ],
                [
                    'label'           => 'Buletin',
                    'data'            => $buletinData,
                    'backgroundColor' => 'rgba(59,130,246,0.8)',
                    'borderColor'     => 'rgb(59,130,246)',
                    'borderWidth'     => 1,
                ],
                [
                    'label'           => 'Opini',
                    'data'            => $opiniData,
                    'backgroundColor' => 'rgba(234,179,8,0.8)',
                    'borderColor'     => 'rgb(234,179,8)',
                    'borderWidth'     => 1,
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
                    'stacked'     => true,
                    'ticks'       => ['stepSize' => 1],
                ],
                'x' => [
                    'stacked' => true,
                ],
            ],
            'plugins' => [
                'legend' => ['position' => 'top'],
            ],
        ];
    }
}
