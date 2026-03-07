<?php

namespace App\Filament\Widgets;

use App\Enums\Role;
use App\Models\Berita;
use App\Models\Buletin;
use App\Models\Opini;
use App\Models\User;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class PenulisStatsWidget extends StatsOverviewWidget
{
    protected static ?int $sort = 1;

    public static function canView(): bool
    {
        /** @var User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Penulis) ?? false;
    }

    /** @return array<int, int> */
    private function monthlyOwn(string $model, int $userId, ?string $status = null): array
    {
        $data = [];
        for ($i = 11; $i >= 0; $i--) {
            $m     = Carbon::now()->subMonths($i);
            $query = $model::where('user_id', $userId)
                ->whereYear('created_at', $m->year)
                ->whereMonth('created_at', $m->month);
            if ($status) {
                $query->where('status', $status);
            }
            $data[] = $query->count();
        }

        return $data;
    }

    protected function getStats(): array
    {
        /** @var User $user */
        $user   = Auth::user();
        $id     = $user->id;

        $beritaTotal     = Berita::where('user_id', $id)->count();
        $beritaPublished = Berita::where('user_id', $id)->where('status', 'published')->count();
        $beritaDraft     = Berita::where('user_id', $id)->where('status', 'draft')->count();
        $totalKonten     = $beritaTotal
            + Buletin::where('user_id', $id)->count()
            + Opini::where('user_id', $id)->count();

        return [
            Stat::make('Total Konten Saya', $totalKonten)
                ->description('Berita, Buletin & Opini')
                ->descriptionIcon(Heroicon::OutlinedDocumentText)
                ->chart($this->monthlyOwn(Berita::class, $id))
                ->chartColor('success')
                ->color('success'),

            Stat::make('Berita Dipublikasikan', $beritaPublished)
                ->description("{$beritaTotal} total berita")
                ->descriptionIcon(Heroicon::OutlinedNewspaper)
                ->chart($this->monthlyOwn(Berita::class, $id, 'published'))
                ->chartColor('info')
                ->color('info'),

            Stat::make('Draft Menunggu', $beritaDraft)
                ->description('Belum dipublikasikan')
                ->descriptionIcon(Heroicon::OutlinedPencil)
                ->chart($this->monthlyOwn(Berita::class, $id, 'draft'))
                ->chartColor('warning')
                ->color('warning'),

            Stat::make('Opini Saya', Opini::where('user_id', $id)->count())
                ->description(Opini::where('user_id', $id)->where('status', 'published')->count() . ' dipublikasikan')
                ->descriptionIcon(Heroicon::OutlinedPencilSquare)
                ->chart($this->monthlyOwn(Opini::class, $id))
                ->chartColor('primary')
                ->color('primary'),
        ];
    }
}
