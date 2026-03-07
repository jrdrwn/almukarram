<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JadwalJumat extends Model
{
    protected $table = 'jadwal_jumat';

    protected $fillable = [
        'tanggal',
        'waktu',
        'khatib',
        'imam',
        'muadzin',
        'bilal',
        'user_id',
    ];

    protected function casts(): array
    {
        return [
            'tanggal' => 'date',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
