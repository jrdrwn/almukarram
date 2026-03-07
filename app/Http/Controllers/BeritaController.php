<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BeritaController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->query('search', '');
        $kategoriSlug = $request->query('kategori', '');
        $page = (int) $request->query('page', 1);
        $perPage = 9;

        $query = Berita::query()
            ->where('status', 'published')
            ->with('kategori:id,nama,slug')
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

        $paginated = $query->paginate($perPage, ['id', 'slug', 'judul', 'ringkasan', 'gambar', 'views', 'published_at', 'kategori_id'], 'page', $page);

        return Inertia::render('berita', [
            'berita' => fn () => $paginated->getCollection()->map(fn ($b) => [
                'id' => $b->id,
                'slug' => $b->slug,
                'judul' => $b->judul,
                'ringkasan' => $b->ringkasan,
                'gambar' => $b->gambar,
                'kategori' => $b->kategori?->nama,
                'views' => $b->views,
                'created_at' => $b->published_at?->format('Y-m-d'),
            ]),
            'currentPage' => $paginated->currentPage(),
            'totalPages' => $paginated->lastPage(),
            'totalRows' => $paginated->total(),
            'searchQuery' => $search,
            'kategoriSlug' => $kategoriSlug,
            'kategoris' => fn () => Kategori::query()
                ->where('type', 'berita')
                ->withCount(['beritas' => fn ($q) => $q->where('status', 'published')])
                ->get()
                ->map(fn ($k) => [
                    'id' => $k->id,
                    'nama' => $k->nama,
                    'slug' => $k->slug,
                    'total' => $k->beritas_count,
                ]),
            'popularFiles' => fn () => Berita::query()
                ->where('status', 'published')
                ->orderByDesc('views')
                ->take(5)
                ->get(['id', 'slug', 'judul', 'published_at'])
                ->map(fn ($b) => [
                    'id' => $b->id,
                    'slug' => $b->slug,
                    'judul' => $b->judul,
                    'created_at' => $b->published_at?->format('Y-m-d'),
                ]),
        ]);
    }

    public function show(string $slug): Response
    {
        $berita = Berita::query()
            ->where('slug', $slug)
            ->where('status', 'published')
            ->with('user:id,name', 'kategori:id,nama,slug')
            ->firstOrFail();

        $berita->increment('views');

        return Inertia::render('berita-detail', [
            'berita' => [
                'id' => $berita->id,
                'slug' => $berita->slug,
                'judul' => $berita->judul,
                'penulis' => $berita->user?->name ?? 'Admin',
                'gambar' => $berita->gambar,
                'created_at' => $berita->published_at?->format('Y-m-d'),
                'views' => $berita->views,
                'isi' => $berita->isi,
                'kategori' => $berita->kategori?->nama,
                'kat_slug' => $berita->kategori?->slug,
            ],
            'related' => fn () => Berita::query()
                ->where('status', 'published')
                ->where('id', '!=', $berita->id)
                ->where('kategori_id', $berita->kategori_id)
                ->orderByDesc('published_at')
                ->take(3)
                ->get(['id', 'judul', 'slug', 'published_at'])
                ->map(fn ($b) => [
                    'id' => $b->id,
                    'judul' => $b->judul,
                    'slug' => $b->slug,
                    'created_at' => $b->published_at?->format('Y-m-d'),
                ]),
            'latest' => fn () => Berita::query()
                ->where('status', 'published')
                ->where('id', '!=', $berita->id)
                ->orderByDesc('published_at')
                ->take(6)
                ->get(['id', 'judul', 'slug', 'gambar', 'published_at'])
                ->map(fn ($b) => [
                    'id' => $b->id,
                    'judul' => $b->judul,
                    'slug' => $b->slug,
                    'gambar' => $b->gambar,
                    'created_at' => $b->published_at?->format('Y-m-d'),
                ]),
        ]);
    }
}
