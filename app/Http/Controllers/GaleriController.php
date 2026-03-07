<?php

namespace App\Http\Controllers;

use App\Models\Album;
use App\Models\Vidio;
use Inertia\Inertia;
use Inertia\Response;

class GaleriController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('galeri', [
            'albums' => fn () => Album::query()
                ->where('status', 'published')
                ->with(['fotos' => fn ($q) => $q->where('status', 'published')->orderBy('urutan')->select('id', 'album_id', 'foto')])
                ->orderByDesc('published_at')
                ->get(['id', 'judul', 'slug', 'deskripsi', 'thumbnail', 'published_at'])
                ->map(fn ($album) => [
                    'id' => $album->id,
                    'title' => $album->judul,
                    'date' => $album->published_at?->translatedFormat('d M Y'),
                    'month' => $album->published_at?->translatedFormat('F Y'),
                    'description' => $album->deskripsi,
                    'images' => $album->fotos->pluck('foto')->map(fn ($foto) => "/storage/{$foto}")->toArray(),
                ]),
            'videos' => fn () => Vidio::query()
                ->where('status', 'published')
                ->with('kategori:id,nama')
                ->orderByDesc('published_at')
                ->get(['id', 'judul', 'youtube_id', 'kategori_id', 'published_at'])
                ->map(fn ($v) => [
                    'id' => $v->id,
                    'title' => $v->judul,
                    'category' => $v->kategori?->nama ?? 'Umum',
                    'date' => $v->published_at?->translatedFormat('d M Y'),
                    'youtubeId' => $v->youtube_id,
                ]),
        ]);
    }
}
