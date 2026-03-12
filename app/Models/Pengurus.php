<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Pengurus extends Model
{
    protected $table = 'pengurus';

    protected $fillable = [
        'nama',
        'jabatan',
        'foto',
        'kelompok',
        'peran',
        'urutan',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'urutan'    => 'integer',
        ];
    }

    /**
     * Kelompok options (section grouping).
     */
    public static function kelompokOptions(): array
    {
        return [
            'pimpinan_inti'  => 'Pimpinan Inti',
            'bidang_riayah'  => 'Bidang Riayah',
            'bidang_idarah'  => 'Bidang Idarah',
            'bidang_imarah'  => 'Bidang Imarah',
            'sekretariat'    => 'Sekretariat',
        ];
    }

    /**
     * Peran options (role within the section).
     */
    public static function peranOptions(): array
    {
        return [
            'ketua_umum'          => 'Ketua Umum',
            'ketua'               => 'Ketua',
            'sekretaris_umum'     => 'Sekretaris Umum',
            'sekretaris'          => 'Sekretaris',
            'bendahara'           => 'Bendahara',
            'ketua_bidang'        => 'Ketua Bidang',
            'sekretaris_bidang'   => 'Sekretaris Bidang',
            'kepala_sekretariat'  => 'Kepala Sekretariat',
            'anggota'             => 'Anggota',
        ];
    }

    /**
     * Get the full public URL for the foto attribute.
     */
    public function getFotoUrlAttribute(): ?string
    {
        return $this->foto
            ? Storage::disk('public')->url($this->foto)
            : null;
    }

    /**
     * Scope: only active members.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope: filter by kelompok.
     */
    public function scopeKelompok($query, string $kelompok)
    {
        return $query->where('kelompok', $kelompok);
    }
}
