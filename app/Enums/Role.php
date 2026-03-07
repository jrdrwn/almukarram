<?php

namespace App\Enums;

enum Role: string
{
    case Root     = 'root';
    case Admin    = 'admin';
    case Penulis  = 'penulis';
    case Reviewer = 'reviewer';

    public function label(): string
    {
        return match ($this) {
            Role::Root     => 'Root',
            Role::Admin    => 'Admin',
            Role::Penulis  => 'Penulis',
            Role::Reviewer => 'Reviewer',
        };
    }

    public function color(): string
    {
        return match ($this) {
            Role::Root     => 'danger',
            Role::Admin    => 'warning',
            Role::Penulis  => 'success',
            Role::Reviewer => 'info',
        };
    }

    public static function options(): array
    {
        return collect(self::cases())
            ->mapWithKeys(fn (self $role) => [$role->value => $role->label()])
            ->all();
    }

    public static function isAdminOrRoot(): bool
    {
        return (bool) \Illuminate\Support\Facades\Auth::user()?->hasRole(self::Root, self::Admin);
    }

    public static function canCreateContent(): bool
    {
        return (bool) \Illuminate\Support\Facades\Auth::user()?->hasRole(self::Root, self::Admin, self::Penulis);
    }

    public static function canEditRecord(mixed $record): bool
    {
        $user = \Illuminate\Support\Facades\Auth::user();

        if (! $user) {
            return false;
        }

        if ($user->hasRole(self::Root, self::Admin, self::Reviewer)) {
            return true;
        }

        return $user->hasRole(self::Penulis)
            && isset($record->user_id)
            && $record->user_id === $user->id;
    }

    public static function canDeleteRecord(mixed $record): bool
    {
        $user = \Illuminate\Support\Facades\Auth::user();

        if (! $user) {
            return false;
        }

        if ($user->hasRole(self::Root, self::Admin)) {
            return true;
        }

        return $user->hasRole(self::Penulis)
            && isset($record->user_id)
            && $record->user_id === $user->id;
    }
}
