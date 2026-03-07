<?php

namespace App\Filament\Widgets;

use App\Enums\Role;
use App\Models\Berita;
use App\Models\Buletin;
use App\Models\KotakMasuk;
use App\Models\Opini;
use App\Models\User;
use App\Models\Vidio;
use App\Models\Album;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class ReviewerStatsWidget extends StatsOverviewWidget
{
    protected static ?int $sort = 1;

    public static function canView(): bool
    {
        /** @var User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Reviewer) ?? false;
    }

    /** @return array<int, int> */
    private function monthlyDraft(string $model): array
    {
        $data = [];
        for ($i = 11; $i >= 0; $i--) {
            $m      = Carbon::now()->subMonths($i);
            $data[] = $model::where('status', 'draft')
                ->whereYear('created_at', $m->year)
                ->whereMonth('created_at', $m->month)
                ->count();
        }

        return $data;
    }

    protected function getStats(): array
    {
        $beritaDraft  = Berita::where('status', 'draft')->count();
        $buletinDraft = Buletin::where('status', 'draft')->count();
        $opiniDraft   = Opini::where('status', 'draft')->count();
        $albumDraft   = Album::where('status', 'draft')->count();
        $vidioDraft   = Vidio::where('status', 'draft')->count();
        $totalDraft   = $beritaDraft + $buletinDraft + $opiniDraft + $albumDraft + $vidioDraft;

        $kotakMasukBaru = KotakMasuk::where('status', 'belum_dibaca')->count();

        $totalPublished = Berita::where('status', 'published')->count()
            + Buletin::where('status', 'published')->count()
            + Opini::where('status', 'published')->count();

        $kotakSparkline = [];
        for ($i = 11; $i >= 0; $i--) {
            $m                = Carbon::now()->subMonths($i);
            $kotakSparkline[] = KotakMasuk::whereYear('created_at', $m->year)
                ->whereMonth('created_at', $m->month)
                ->count();
        }

        return [
            Stat::make('Total Draft', $totalDraft)
                ->description('Semua konten menunggu review')
                ->descriptionIcon(Heroicon::OutlinedClock)
                ->chart($this->monthlyDraft(Berita::class))
                ->chartColor('warning')
                ->color('warning'),

            Stat::make('Berita Draft', $beritaDraft)
                ->description("dari " . Berita::count() . " total berita")
                ->descriptionIcon(Heroicon::OutlinedNewspaper)
                ->chart($this->monthlyDraft(Berita::class))
                ->chartColor($beritaDraft > 0 ? 'warning' : 'success')
                ->color($beritaDraft > 0 ? 'warning' : 'success'),

            Stat::make('Sudah Dipublikasikan', $totalPublished)
                ->description('Berita, Buletin & Opini')
                ->descriptionIcon(Heroicon::OutlinedCheckCircle)
                ->chart($this->monthlyDraft(Opini::class))
                ->chartColor('success')
                ->color('success'),

            Stat::make('Pesan Masuk Baru', $kotakMasukBaru)
                ->description('Belum dibaca')
                ->descriptionIcon(Heroicon::OutlinedInbox)
                ->chart($kotakSparkline)
                ->chartColor($kotakMasukBaru > 0 ? 'danger' : 'gray')
                ->color($kotakMasukBaru > 0 ? 'danger' : 'gray'),
        ];
    }
}
