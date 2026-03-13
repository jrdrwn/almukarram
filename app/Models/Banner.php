<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    protected $table = 'banner';

    protected $fillable = [
        'judul',
        'subjudul',
        'gambar',
        'tautan',
        'ratio', // Rasio banner (4:1, 4:5, 16:9, 5:3)
        'urutan',
        'is_active',
        'buka_tab_baru',
        'mulai_tayang',
        'selesai_tayang',
    ];

    protected function casts(): array
    {
        return [
            'urutan' => 'integer',
            'is_active' => 'boolean',
            'buka_tab_baru' => 'boolean',
            'mulai_tayang' => 'date',
            'selesai_tayang' => 'date',
        ];
    }

    public function scopePublished($query, $date = null)
    {
        $date ??= now()->toDateString();

        return $query
            ->where('is_active', true)
            ->where(function ($bannerQuery) use ($date) {
                $bannerQuery
                    ->whereNull('mulai_tayang')
                    ->orWhereDate('mulai_tayang', '<=', $date);
            })
            ->where(function ($bannerQuery) use ($date) {
                $bannerQuery
                    ->whereNull('selesai_tayang')
                    ->orWhereDate('selesai_tayang', '>=', $date);
            });
    }
}
