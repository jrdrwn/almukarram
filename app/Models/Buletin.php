<?php

namespace App\Models;

use App\Models\Kategori;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Buletin extends Model
{
    protected $table = 'buletin';

    protected $fillable = [
        'judul',
        'slug',
        'thumbnail',
        'file_pdf',
        'views',
        'downloads',
        'kategori_id',
        'user_id',
        'status',
        'published_at',
    ];

    protected function casts(): array
    {
        return [
            'published_at' => 'date',
            'views' => 'integer',
            'downloads' => 'integer',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function kategori(): BelongsTo
    {
        return $this->belongsTo(Kategori::class, 'kategori_id');
    }
}
