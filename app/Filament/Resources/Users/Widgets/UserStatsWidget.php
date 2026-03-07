<?php

namespace App\Filament\Resources\Users\Widgets;

use App\Enums\Role;
use App\Models\User;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class UserStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total    = User::count();
        $admin    = User::where('role', Role::Admin)->count();
        $penulis  = User::where('role', Role::Penulis)->count();
        $reviewer = User::where('role', Role::Reviewer)->count();

        return [
            Stat::make('Total Pengguna', $total)
                ->description('Semua pengguna terdaftar')
                ->descriptionIcon(Heroicon::OutlinedUsers)
                ->color('primary'),

            Stat::make('Admin', $admin)
                ->description('Pengelola konten')
                ->descriptionIcon(Heroicon::OutlinedShieldCheck)
                ->color('warning'),

            Stat::make('Penulis', $penulis)
                ->description('Pembuat konten')
                ->descriptionIcon(Heroicon::OutlinedPencil)
                ->color('success'),

            Stat::make('Reviewer', $reviewer)
                ->description('Peninjau konten')
                ->descriptionIcon(Heroicon::OutlinedMagnifyingGlass)
                ->color('info'),
        ];
    }
}
