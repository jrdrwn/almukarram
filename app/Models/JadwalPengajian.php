<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JadwalPengajian extends Model
{
    protected $table = 'jadwal_pengajian';

    protected $fillable = [
        'hari',
        'tanggal',
        'waktu',
        'judul',
        'pemateri',
        'tipe',
        'status',
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
