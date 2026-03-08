<?php

namespace App\Http\Controllers;

use App\Models\Buletin;
use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BuletinController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->query('q', '');
        $kategoriSlug = $request->query('kategori', '');
        $perPage = 9;

        $query = Buletin::query()
            ->where('status', 'published')
            ->with('kategori:id,nama,slug')
            ->orderByDesc('published_at');

        if ($search) {
            $query->where('judul', 'like', "%{$search}%");
        }

        if ($kategoriSlug) {
            $query->whereHas('kategori', fn ($q) => $q->where('slug', $kategoriSlug));
        }

        $paginated = $query->paginate($perPage);

        return Inertia::render('buletin', [
            'buletin' => [
                'data' => $paginated->getCollection()->map(fn ($b) => [
                    'id' => $b->id,
                    'title' => $b->judul,
                    'slug' => $b->slug,
                    'thumbnail' => $b->thumbnail ? "/storage/{$b->thumbnail}" : null,
                    'pdf_url' => $b->file_pdf ? "/storage/{$b->file_pdf}" : null,
                    'published_at' => $b->published_at?->toIso8601String(),
                    'views' => $b->views,
                    'downloads' => $b->downloads,
                    'kategori' => $b->kategori ? [
                        'nama' => $b->kategori->nama,
                        'slug' => $b->kategori->slug,
                    ] : null,
                ]),
                'meta' => [
                    'current_page' => $paginated->currentPage(),
                    'last_page' => $paginated->lastPage(),
                    'per_page' => $paginated->perPage(),
                    'total' => $paginated->total(),
                    'from' => $paginated->firstItem(),
                    'to' => $paginated->lastItem(),
                    'links' => $paginated->linkCollection()->toArray(),
                ],
            ],
            'kategoris' => fn () => Kategori::query()
                ->where('type', 'buletin')
                ->withCount(['buletins' => fn ($q) => $q->where('status', 'published')])
                ->get()
                ->map(fn ($k) => [
                    'id' => $k->id,
                    'nama' => $k->nama,
                    'slug' => $k->slug,
                    'total' => $k->buletins_count,
                ]),
            'searchQuery' => $search,
            'kategoriSlug' => $kategoriSlug,
        ]);
    }

    public function viewPdf(Buletin $buletin)
    {
        // Increment the viewed counter if the status is published
        if ($buletin->status === 'published') {
            $buletin->increment('views');
        }

        return redirect($buletin->file_pdf ? "/storage/{$buletin->file_pdf}" : back()->getTargetUrl());
    }

    public function downloadPdf(Buletin $buletin)
    {
        // Increment the download counter if the status is published
        if ($buletin->status === 'published') {
            $buletin->increment('downloads');
        }

        if ($buletin->file_pdf) {
            $filePath = storage_path("app/public/{$buletin->file_pdf}");
            if (file_exists($filePath)) {
                return response()->download($filePath);
            }
        }

        return back();
    }
}
