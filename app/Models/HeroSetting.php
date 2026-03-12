<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroSetting extends Model
{
    protected $table = 'hero_settings';

    protected $fillable = [
        'hero_media_type',
        'hero_image',
        'hero_video',
        'quick_access_items',
    ];

    protected $casts = [
        'quick_access_items' => 'array',
    ];
}
