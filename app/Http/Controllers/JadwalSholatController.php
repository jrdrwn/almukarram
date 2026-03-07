<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Inertia\Inertia;
use Inertia\Response;

class JadwalSholatController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('jadwal-sholat', [
            'beritaList' => fn () => Berita::query()
                ->where('status', 'published')
                ->orderByDesc('published_at')
                ->take(5)
                ->get(['id', 'slug', 'judul', 'gambar', 'published_at'])
                ->map(fn ($b) => [
                    'id' => $b->id,
                    'slug' => $b->slug,
                    'judul' => $b->judul,
                    'gambar' => $b->gambar,
                    'created_at' => $b->published_at?->format('Y-m-d'),
                ]),
        ]);
    }
}
