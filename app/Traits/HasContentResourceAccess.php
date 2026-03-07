<?php

namespace App\Traits;

use App\Enums\Role;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

/**
 * Access control for content resources (Berita, Buletin, Opini, Album, Vidio, Dokumen).
 *
 * root / admin  — full CRUD on all records
 * penulis       — create + edit/delete own records only
 * reviewer      — edit any record (status changes), no create/delete
 */
trait HasContentResourceAccess
{
    public static function canAccess(): bool
    {
        /** @var \App\Models\User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Root, Role::Admin, Role::Penulis, Role::Reviewer) ?? false;
    }

    public static function canCreate(): bool
    {
        /** @var \App\Models\User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Root, Role::Admin, Role::Penulis) ?? false;
    }

    public static function canEdit(Model $record): bool
    {
        /** @var \App\Models\User|null $user */
        $user = Auth::user();

        if (! $user) {
            return false;
        }

        if ($user->hasRole(Role::Root, Role::Admin, Role::Reviewer)) {
            return true;
        }

        // penulis can only edit their own records
        return $user->hasRole(Role::Penulis) && isset($record->user_id) && $record->user_id === $user->id;
    }

    public static function canDelete(Model $record): bool
    {
        /** @var \App\Models\User|null $user */
        $user = Auth::user();

        if (! $user) {
            return false;
        }

        if ($user->hasRole(Role::Root, Role::Admin)) {
            return true;
        }

        // penulis can only delete their own records
        return $user->hasRole(Role::Penulis) && isset($record->user_id) && $record->user_id === $user->id;
    }

    public static function canDeleteAny(): bool
    {
        /** @var \App\Models\User|null $user */
        $user = Auth::user();

        return $user?->hasRole(Role::Root, Role::Admin) ?? false;
    }

    public static function canView(Model $record): bool
    {
        return static::canEdit($record);
    }
}
