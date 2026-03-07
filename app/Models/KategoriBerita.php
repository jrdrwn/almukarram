<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class KategoriBerita extends Model
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
}
