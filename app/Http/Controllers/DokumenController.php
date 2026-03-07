<?php

namespace App\Http\Controllers;

use App\Models\Dokumen;
use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DokumenController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $search = $request->query('search', '');
        $kategoriSlug = $request->query('kategori', '');
        $page = (int) $request->query('page', 1);
        $perPage = 12;

        $query = Dokumen::query()
            ->where('status', 'published')
            ->with('kategori:id,nama,slug')
            ->orderByDesc('created_at');

        if ($search) {
            $query->where('judul', 'like', "%{$search}%");
        }

        if ($kategoriSlug) {
            $query->whereHas('kategori', fn ($q) => $q->where('slug', $kategoriSlug));
        }

        $paginated = $query->paginate($perPage, ['id', 'judul', 'jenis', 'kategori_id', 'tahun', 'file_url'], 'page', $page);

        return Inertia::render('dokumen', [
            'dokumen' => fn () => $paginated->getCollection()->map(fn ($d) => [
                'id' => $d->id,
                'title' => $d->judul,
                'type' => strtoupper($d->jenis),
                'year' => $d->tahun,
                'category' => $d->kategori?->slug,
                'url' => $d->file_url ? "/storage/{$d->file_url}" : '#',
            ]),
            'currentPage' => $paginated->currentPage(),
            'totalPages' => $paginated->lastPage(),
            'totalRows' => $paginated->total(),
            'searchQuery' => $search,
            'kategoriSlug' => $kategoriSlug,
            'kategoris' => fn () => Kategori::query()
                ->where('type', 'dokumen')
                ->withCount(['dokumens' => fn ($q) => $q->where('status', 'published')])
                ->get()
                ->map(fn ($k) => [
                    'id' => $k->id,
                    'nama' => $k->nama,
                    'slug' => $k->slug,
                    'total' => $k->dokumens_count,
                ]),
        ]);
    }
}
