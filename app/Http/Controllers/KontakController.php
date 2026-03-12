<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class KontakController
{
    public function __invoke(\App\Models\KontakSitus $siteContact): Response
    {
        return Inertia::render('kontak', [
            'siteContact' => $siteContact,
        ]);
    }
}
