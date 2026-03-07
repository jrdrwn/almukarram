<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Kategori extends Model
{
    protected $table = 'kategori';

    protected $fillable = [
        'nama',
        'slug',
        'type',
    ];

    public function beritas(): HasMany
    {
        return $this->hasMany(Berita::class, 'kategori_id');
    }

    public function vidios(): HasMany
    {
        return $this->hasMany(Vidio::class, 'kategori_id');
    }

    public function albums(): HasMany
    {
        return $this->hasMany(Album::class, 'kategori_id');
    }

    public function buletins(): HasMany
    {
        return $this->hasMany(Buletin::class, 'kategori_id');
    }

    public function opinis(): HasMany
    {
        return $this->hasMany(Opini::class, 'kategori_id');
    }

    public function dokumens(): HasMany
    {
        return $this->hasMany(Dokumen::class, 'kategori_id');
    }
}
