<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use App\Models\Opini;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OpiniController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->query('search', '');
        $kategoriSlug = $request->query('kategori', '');
        $page = (int) $request->query('page', 1);
        $perPage = 9;

        $query = Opini::query()
            ->where('status', 'published')
            ->with('user:id,name', 'kategori:id,nama,slug')
            ->orderByDesc('published_at');

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('judul', 'like', "%{$search}%")
                    ->orWhere('ringkasan', 'like', "%{$search}%");
            });
        }

        if ($kategoriSlug) {
            $query->whereHas('kategori', fn ($q) => $q->where('slug', $kategoriSlug));
        }

        $paginated = $query->paginate($perPage, ['id', 'slug', 'judul', 'ringkasan', 'waktu_baca', 'published_at', 'user_id', 'kategori_id'], 'page', $page);

        return Inertia::render('opini', [
            'opini' => fn () => $paginated->getCollection()->map(fn ($o) => [
                'slug' => $o->slug,
                'category' => $o->kategori?->nama,
                'title' => $o->judul,
                'author' => $o->user?->name,
                'date' => $o->published_at?->translatedFormat('d M Y'),
                'readTime' => $o->waktu_baca,
                'excerpt' => $o->ringkasan,
            ]),
            'currentPage' => $paginated->currentPage(),
            'totalPages' => $paginated->lastPage(),
            'totalRows' => $paginated->total(),
            'searchQuery' => $search,
            'kategoriSlug' => $kategoriSlug,
            'kategoris' => fn () => Kategori::query()
                ->where('type', 'opini')
                ->withCount(['opinis' => fn ($q) => $q->where('status', 'published')])
                ->get()
                ->map(fn ($k) => [
                    'id' => $k->id,
                    'nama' => $k->nama,
                    'slug' => $k->slug,
                    'total' => $k->opinis_count,
                ]),
        ]);
    }

    public function show(string $slug): Response
    {
        $opini = Opini::query()
            ->where('slug', $slug)
            ->where('status', 'published')
            ->with('user:id,name,bio', 'kategori:id,nama,slug')
            ->firstOrFail();

        return Inertia::render('opini-detail', [
            'opini' => [
                'slug' => $opini->slug,
                'category' => $opini->kategori?->nama,
                'title' => $opini->judul,
                'author' => $opini->user?->name,
                'date' => $opini->published_at?->translatedFormat('d M Y'),
                'readTime' => $opini->waktu_baca,
                'authorBio' => $opini->user?->bio,
                'excerpt' => $opini->ringkasan,
                'isi' => $opini->isi,
            ],
            'related' => fn () => Opini::query()
                ->where('status', 'published')
                ->where('id', '!=', $opini->id)
                ->where('kategori_id', $opini->kategori_id)
                ->with('user:id,name', 'kategori:id,nama')
                ->orderByDesc('published_at')
                ->take(3)
                ->get(['id', 'slug', 'judul', 'ringkasan', 'waktu_baca', 'published_at', 'user_id', 'kategori_id'])
                ->map(fn ($o) => [
                    'slug' => $o->slug,
                    'category' => $o->kategori?->nama,
                    'title' => $o->judul,
                    'author' => $o->user?->name,
                    'date' => $o->published_at?->translatedFormat('d M Y'),
                    'readTime' => $o->waktu_baca,
                    'excerpt' => $o->ringkasan,
                ]),
            'latest' => fn () => Opini::query()
                ->where('status', 'published')
                ->where('id', '!=', $opini->id)
                ->with('user:id,name', 'kategori:id,nama')
                ->orderByDesc('published_at')
                ->take(4)
                ->get(['id', 'slug', 'judul', 'ringkasan', 'waktu_baca', 'published_at', 'user_id', 'kategori_id'])
                ->map(fn ($o) => [
                    'slug' => $o->slug,
                    'category' => $o->kategori?->nama,
                    'title' => $o->judul,
                    'author' => $o->user?->name,
                    'date' => $o->published_at?->translatedFormat('d M Y'),
                    'readTime' => $o->waktu_baca,
                    'excerpt' => $o->ringkasan,
                ]),
        ]);
    }
}
