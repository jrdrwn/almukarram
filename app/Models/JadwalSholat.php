<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JadwalSholat extends Model
{
    protected $table = 'jadwal_sholat';

    protected $fillable = [
        'tanggal',
        'subuh',
        'terbit',
        'dhuha',
        'dzuhur',
        'ashar',
        'maghrib',
        'isya',
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
