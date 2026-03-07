<?php

namespace App\Models;

use App\Enums\Role;
use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements FilamentUser
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'bio',
        'photo_profile',
        'social_media',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function canAccessPanel(Panel $panel): bool
    {
        return $this->role instanceof Role;
    }

    public function isRoot(): bool
    {
        return $this->role === Role::Root;
    }

    public function isAdmin(): bool
    {
        return $this->role === Role::Admin;
    }

    public function hasRole(Role ...$roles): bool
    {
        return in_array($this->role, $roles, true);
    }

    public function canManageContent(): bool
    {
        return $this->hasRole(Role::Root, Role::Admin, Role::Penulis, Role::Reviewer);
    }

    public function beritas(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Berita::class);
    }

    public function opinis(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Opini::class);
    }

    public function buletins(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Buletin::class);
    }

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password'          => 'hashed',
            'role'              => Role::class,
            'social_media'      => 'array',
        ];
    }
}
