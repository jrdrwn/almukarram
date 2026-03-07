<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name'     => 'Admin',
            'email'    => 'admin@almukarram.id',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name'     => 'Redaksi',
            'email'    => 'redaksi@almukarram.id',
            'password' => Hash::make('password'),
        ]);
    }
}
