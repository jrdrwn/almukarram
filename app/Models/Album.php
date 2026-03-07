<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Album extends Model
{
    protected $table = 'album';

    protected $fillable = [
        'judul',
        'slug',
        'deskripsi',
        'thumbnail',
        'user_id',
        'published_at',
    ];

    protected function casts(): array
    {
        return [
            'published_at' => 'date',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function fotos(): HasMany
    {
        return $this->hasMany(AlbumFoto::class)->orderBy('urutan');
    }
}
