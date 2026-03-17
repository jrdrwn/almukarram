<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    protected $table = 'features';

    protected $fillable = [
        'title',
        'description',
        'icon',
        'color',
        'bg',
        'href',
        'urutan',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'bool',
    ];
}
