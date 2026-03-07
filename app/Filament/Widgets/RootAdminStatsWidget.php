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
use App\Models\Dokumen;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class RootAdminStatsWidget extends StatsOverviewWidget
{
    protected static ?int $sort = 1;

    public static function canView(): bool
    {
        /** @var User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Root, Role::Admin) ?? false;
    }

    /** @return array<int, int> */
    private function monthlyData(string $model, ?string $column = null, ?string $value = null): array
    {
        $data = [];
        for ($i = 11; $i >= 0; $i--) {
            $m     = Carbon::now()->subMonths($i);
            $query = $model::whereYear('created_at', $m->year)
                ->whereMonth('created_at', $m->month);
            if ($column && $value) {
                $query->where($column, $value);
            }
            $data[] = $query->count();
        }

        return $data;
    }

    protected function getStats(): array
    {
        $totalKonten    = Berita::count() + Buletin::count() + Opini::count() + Album::count() + Vidio::count() + Dokumen::count();
        $published      = Berita::where('status', 'published')->count()
            + Buletin::where('status', 'published')->count()
            + Opini::where('status', 'published')->count();
        $draft          = Berita::where('status', 'draft')->count()
            + Buletin::where('status', 'draft')->count()
            + Opini::where('status', 'draft')->count();
        $kotakMasukBaru = KotakMasuk::where('status', 'belum_dibaca')->count();

        $beritaSparkline = $this->monthlyData(Berita::class, 'status', 'published');
        $userSparkline   = $this->monthlyData(User::class);
        $draftSparkline  = $this->monthlyData(Berita::class, 'status', 'draft');
        $kotakSparkline  = $this->monthlyData(KotakMasuk::class);

        return [
            Stat::make('Total Konten', $totalKonten)
                ->description("{$published} dipublikasikan")
                ->descriptionIcon(Heroicon::OutlinedDocumentText)
                ->chart($beritaSparkline)
                ->chartColor('success')
                ->color('success'),

            Stat::make('Draft Menunggu', $draft)
                ->description('Konten belum dipublikasikan')
                ->descriptionIcon(Heroicon::OutlinedPencil)
                ->chart($draftSparkline)
                ->chartColor('warning')
                ->color('warning'),

            Stat::make('Pengguna', User::count())
                ->description('Total pengguna terdaftar')
                ->descriptionIcon(Heroicon::OutlinedUsers)
                ->chart($userSparkline)
                ->chartColor('primary')
                ->color('primary'),

            Stat::make('Pesan Masuk Baru', $kotakMasukBaru)
                ->description('Belum dibaca')
                ->descriptionIcon(Heroicon::OutlinedInbox)
                ->chart($kotakSparkline)
                ->chartColor($kotakMasukBaru > 0 ? 'danger' : 'gray')
                ->color($kotakMasukBaru > 0 ? 'danger' : 'gray'),
        ];
    }
}
