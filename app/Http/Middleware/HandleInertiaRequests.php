<?php

namespace App\Http\Middleware;

use App\Models\Pengumuman;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'success' => $request->session()->get('success'),
            ],
            'pengumuman' => fn () => Pengumuman::query()
                ->where(function ($q) {
                    $today = Carbon::today();
                    $q->where(function ($q2) use ($today) {
                        $q2->whereNull('tanggal_mulai')
                            ->whereNull('tanggal_selesai');
                    })->orWhere(function ($q2) use ($today) {
                        $q2->where('tanggal_mulai', '<=', $today)
                            ->where('tanggal_selesai', '>=', $today);
                    })->orWhere(function ($q2) use ($today) {
                        $q2->where('tanggal_mulai', '<=', $today)
                            ->whereNull('tanggal_selesai');
                    });
                })
                ->orderByDesc('created_at')
                ->take(5)
                ->get(['id', 'judul'])
                ->map(fn ($p) => $p->judul),
            // keep siteContact shared for static inertia pages that don't have a controller
            'siteContact' => fn () => \App\Models\KontakSitus::first(),
        ];
    }
}
