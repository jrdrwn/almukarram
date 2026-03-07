<?php

namespace App\Filament\Resources\Users\Schemas;

use App\Enums\Role;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class UserForm
{
    public static function configure(Schema $schema): Schema
    {
        /** @var \App\Models\User $authUser */
        $authUser = Auth::user();

        // Admin cannot assign root or admin roles
        $roleOptions = $authUser->isRoot()
            ? Role::options()
            : [Role::Penulis->value => Role::Penulis->label(), Role::Reviewer->value => Role::Reviewer->label()];

        return $schema
            ->columns(3)
            ->components([
                Section::make('Informasi Akun')
                    ->columnSpan(2)
                    ->columns(2)
                    ->schema([
                        TextInput::make('name')
                            ->label('Nama Lengkap')
                            ->required()
                            ->maxLength(100),
                        TextInput::make('email')
                            ->label('Email')
                            ->email()
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true),
                        Select::make('role')
                            ->label('Role')
                            ->options($roleOptions)
                            ->required()
                            ->native(false),
                        TextInput::make('password')
                            ->label('Password')
                            ->password()
                            ->revealable()
                            ->rule(Password::default())
                            ->dehydrated(fn ($state): bool => filled($state))
                            ->dehydrateStateUsing(fn ($state): string => bcrypt($state))
                            ->required(fn (string $operation): bool => $operation === 'create')
                            ->maxLength(255),
                        Textarea::make('bio')
                            ->label('Bio')
                            ->rows(4)
                            ->maxLength(500)
                            ->columnSpanFull(),
                    ]),

                Section::make('Foto & Media Sosial')
                    ->columnSpan(1)
                    ->schema([
                        FileUpload::make('photo_profile')
                            ->label('Foto Profil')
                            ->image()
                            ->imageEditor()
                            ->disk('public')
                            ->directory('profiles')
                            ->maxSize(2048),
                        TextInput::make('social_media.instagram')
                            ->label('Instagram')
                            ->prefix('@')
                            ->maxLength(100),
                        TextInput::make('social_media.facebook')
                            ->label('Facebook')
                            ->prefix('facebook.com/')
                            ->maxLength(100),
                        TextInput::make('social_media.twitter')
                            ->label('X / Twitter')
                            ->prefix('@')
                            ->maxLength(100),
                        TextInput::make('social_media.youtube')
                            ->label('YouTube')
                            ->maxLength(200),
                        TextInput::make('social_media.tiktok')
                            ->label('TikTok')
                            ->prefix('@')
                            ->maxLength(100),
                    ]),
            ]);
    }
}
