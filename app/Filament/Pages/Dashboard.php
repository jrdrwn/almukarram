<?php

namespace App\Filament\Pages;

use Filament\Pages\Dashboard as BaseDashboard;

class Dashboard extends BaseDashboard
{
    /** Suppress the default Filament page heading — the WelcomeBannerWidget handles this. */
    public function getHeading(): string
    {
        return '';
    }
}
