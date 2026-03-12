<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KontakSitus extends Model
{
    protected $table = 'site_contacts';

    protected $fillable = [
        'address',
        'phone',
        'whatsapp',
        'email',
        'operational_hours',
        'instagram',
        'facebook',
        'youtube',
        'location',
    ];

    protected $casts = [
        'operational_hours' => 'array',
    ];
}
