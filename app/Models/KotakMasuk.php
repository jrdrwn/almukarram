<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KotakMasuk extends Model
{
    protected $table = 'kotak_masuk';

    protected $fillable = [
        'nama',
        'email',
        'telepon',
        'subjek',
        'pesan',
        'status',
    ];
}
