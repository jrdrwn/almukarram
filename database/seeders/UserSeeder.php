<?php

namespace Database\Seeders;

use App\Enums\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name'     => 'Root',
            'email'    => 'root@almukarram.id',
            'password' => Hash::make('password'),
            'role'     => Role::Root,
        ]);

        User::create([
            'name'     => 'Admin',
            'email'    => 'admin@almukarram.id',
            'password' => Hash::make('password'),
            'role'     => Role::Admin,
        ]);

        User::create([
            'name'     => 'Reviewer',
            'email'    => 'reviewer@almukarram.id',
            'password' => Hash::make('password'),
            'role'     => Role::Reviewer,
        ]);

        User::create([
            'name'     => 'Penulis',
            'email'    => 'penulis@almukarram.id',
            'password' => Hash::make('password'),
            'role'     => Role::Penulis,
        ]);

        User::create([
            'name'     => 'Redaksi',
            'email'    => 'redaksi@almukarram.id',
            'password' => Hash::make('password'),
            'role'     => Role::Penulis,
        ]);
    }
}
