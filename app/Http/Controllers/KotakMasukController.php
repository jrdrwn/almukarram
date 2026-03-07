<?php

namespace App\Http\Controllers;

use App\Models\KotakMasuk;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class KotakMasukController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'nama' => ['required', 'string', 'max:255'],
            'telepon' => ['required', 'string', 'max:20'],
            'email' => ['nullable', 'email', 'max:255'],
            'subjek' => ['required', 'string', 'max:255'],
            'pesan' => ['required', 'string', 'max:5000'],
        ]);

        KotakMasuk::create($validated);

        return back()->with('success', 'Pesan berhasil dikirim. Terima kasih atas masukan Anda.');
    }
}
