<?php

namespace App\Filament\Resources\KotakMasuks\Widgets;

use App\Models\KotakMasuk;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class KotakMasukStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total       = KotakMasuk::count();
        $belumDibaca = KotakMasuk::where('status', 'belum_dibaca')->count();
        $sudahDibaca = KotakMasuk::where('status', 'sudah_dibaca')->count();

        return [
            Stat::make('Total Pesan', $total)
                ->description('Semua pesan masuk')
                ->descriptionIcon(Heroicon::OutlinedInbox)
                ->color('primary'),

            Stat::make('Belum Dibaca', $belumDibaca)
                ->description('Membutuhkan perhatian')
                ->descriptionIcon(Heroicon::OutlinedEnvelope)
                ->color($belumDibaca > 0 ? 'danger' : 'gray'),

            Stat::make('Sudah Dibaca', $sudahDibaca)
                ->description('Sudah ditangani')
                ->descriptionIcon(Heroicon::OutlinedEnvelopeOpen)
                ->color('success'),
        ];
    }
}
