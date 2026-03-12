<?php

namespace App\Providers\Filament;

use App\Filament\Pages\Dashboard;
use App\Filament\Pages\ProfilePage;
use App\Models\HeroSetting;
use Caresome\FilamentAuthDesigner\AuthDesignerPlugin;
use Caresome\FilamentAuthDesigner\Data\AuthDesignerConfig;
use Caresome\FilamentAuthDesigner\Data\AuthPageConfig;
use Caresome\FilamentAuthDesigner\Enums\MediaPosition;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Support\Facades\Schema;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Throwable;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            ->profile(ProfilePage::class)
            ->colors([
                'primary' => Color::Emerald,
            ])
            ->brandName('Admin Panel')
            ->brandLogo(asset('images/logomasjid.png'))
            ->favicon(asset('favicon.png'))
            ->databaseNotifications()
            ->databaseNotificationsPolling('30s')
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\Filament\Widgets')
            ->widgets([])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->plugin(
                AuthDesignerPlugin::make()
                    ->login(fn(AuthPageConfig $config) => $config
                        ->media($this->resolveAuthMediaUrl())
                        ->mediaPosition(MediaPosition::Cover)
                        ->blur(4))
            );
    }

    protected function resolveAuthMediaUrl(): string
    {
        $fallbackVideo = url('/storage/hero/vidio.mp4');
        $fallbackImage = asset('images/masjidnewww-scaled.png');

        try {
            if (! Schema::hasTable('hero_settings')) {
                return $fallbackVideo;
            }

            $heroSetting = HeroSetting::query()->first([
                'hero_media_type',
                'hero_image',
                'hero_video',
            ]);

            if (! $heroSetting) {
                return $fallbackVideo;
            }

            $mediaUrl = match ($heroSetting->hero_media_type) {
                'image' => $this->resolveStorageMediaUrl($heroSetting->hero_image),
                default => $this->resolveStorageMediaUrl($heroSetting->hero_video)
                    ?? $this->resolveStorageMediaUrl($heroSetting->hero_image),
            };

            return $mediaUrl
                ?? ($heroSetting->hero_media_type === 'image' ? $fallbackImage : $fallbackVideo);
        } catch (Throwable) {
            return $fallbackVideo;
        }
    }

    protected function resolveStorageMediaUrl(?string $path): ?string
    {
        if (! $path) {
            return null;
        }

        if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://')) {
            return $path;
        }

        return url('/storage/' . ltrim($path, '/'));
    }
}
