<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Vidio extends Model
{
    protected $table = 'vidio';

    protected $fillable = [
        'judul',
        'kategori',
        'youtube_id',
        'user_id',
        'views',
        'published_at',
    ];

    protected function casts(): array
    {
        return [
            'published_at' => 'date',
            'views' => 'integer',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
