<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AlbumFoto extends Model
{
    protected $table = 'album_foto';

    protected $fillable = [
        'album_id',
        'foto',
        'urutan',
    ];

    public function album(): BelongsTo
    {
        return $this->belongsTo(Album::class);
    }
}
