<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Opini extends Model
{
    protected $table = 'opini';

    protected $fillable = [
        'slug',
        'judul',
        'kategori',
        'user_id',
        'foto',
        'ringkasan',
        'isi',
        'waktu_baca',
        'published_at',
    ];

    protected function casts(): array
    {
        return [
            'published_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
