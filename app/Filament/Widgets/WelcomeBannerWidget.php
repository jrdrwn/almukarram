<?php

namespace App\Filament\Widgets;

use App\Enums\Role;
use App\Models\Album;
use App\Models\Berita;
use App\Models\Buletin;
use App\Models\Dokumen;
use App\Models\KotakMasuk;
use App\Models\Opini;
use App\Models\User;
use App\Models\Vidio;
use Filament\Widgets\Widget;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class WelcomeBannerWidget extends Widget
{
    protected static ?int $sort = -1;

    protected int|string|array $columnSpan = 'full';

    protected string $view = 'filament.widgets.welcome-banner-widget';

    public function getGreeting(): string
    {
        $hour = now()->hour;

        if ($hour < 11) {
            return 'Selamat Pagi';
        }

        if ($hour < 15) {
            return 'Selamat Siang';
        }

        if ($hour < 19) {
            return 'Selamat Sore';
        }

        return 'Selamat Malam';
    }

    public function getGreetingIcon(): string
    {
        $hour = now()->hour;

        if ($hour < 11) {
            return '🌅';
        }

        if ($hour < 15) {
            return '☀️';
        }

        if ($hour < 19) {
            return '🌆';
        }

        return '🌙';
    }

    public function getUserName(): string
    {
        return Auth::user()?->name ?? 'Pengguna';
    }

    public function getRoleLabel(): string
    {
        return Auth::user()?->role?->label() ?? '';
    }

    public function getRole(): ?Role
    {
        return Auth::user()?->role;
    }

    public function getToday(): string
    {
        Carbon::setLocale('id');

        return Carbon::now()->translatedFormat('l, d F Y');
    }

    /** @return array<string, int|string> */
    public function getQuickStats(): array
    {
        /** @var User|null $user */
        $user = Auth::user();

        if (! $user) {
            return [];
        }

        if ($user->hasRole(Role::Root, Role::Admin)) {
            return [
                ['label' => 'Total Konten',  'value' => Berita::count() + Buletin::count() + Opini::count()],
                ['label' => 'Pengguna',      'value' => User::count()],
                ['label' => 'Pesan Baru',    'value' => KotakMasuk::where('status', 'belum_dibaca')->count()],
            ];
        }

        if ($user->hasRole(Role::Penulis)) {
            $id = $user->id;

            return [
                ['label' => 'Berita Saya',    'value' => Berita::where('user_id', $id)->count()],
                ['label' => 'Dipublikasikan', 'value' => Berita::where('user_id', $id)->where('status', 'published')->count()],
                ['label' => 'Draft',          'value' => Berita::where('user_id', $id)->where('status', 'draft')->count()],
            ];
        }

        if ($user->hasRole(Role::Reviewer)) {
            return [
                ['label' => 'Menunggu Review', 'value' => Berita::where('status', 'draft')->count() + Buletin::where('status', 'draft')->count() + Opini::where('status', 'draft')->count()],
                ['label' => 'Pesan Baru',      'value' => KotakMasuk::where('status', 'belum_dibaca')->count()],
                ['label' => 'Total Konten',    'value' => Berita::count() + Buletin::count() + Opini::count()],
            ];
        }

        return [];
    }
}
