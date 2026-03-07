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
}
