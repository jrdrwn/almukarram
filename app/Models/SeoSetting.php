<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SeoSetting extends Model
{
    protected $table = 'seo_settings';

    protected $fillable = [
        'site_name',
        'title_suffix',
        'default_description',
        'description_template',
        'default_image',
        'default_robots',
        'twitter_site',
        'twitter_creator',
        'facebook_app_id',
        'page_overrides',
    ];

    protected $casts = [
        'page_overrides' => 'array',
    ];
}
