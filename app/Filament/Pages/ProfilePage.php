<?php

namespace App\Filament\Pages;

use App\Enums\Role;
use Filament\Auth\Pages\EditProfile;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Illuminate\Validation\Rules\Password;

class ProfilePage extends EditProfile
{
    protected static string|\BackedEnum|null $navigationIcon = Heroicon::OutlinedUserCircle;

    public static function isSimple(): bool
    {
        return false;
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->columns(3)
            ->components([
                Section::make('Foto Profil')
                    ->columnSpan(1)
                    ->schema([
                        FileUpload::make('photo_profile')
                            ->label(false)
                            ->image()
                            ->imageEditor()
                            ->disk('public')
                            ->directory('profiles')
                            ->maxSize(2048)
                            ->alignCenter(),
                    ]),

                Section::make('Informasi Akun')
                    ->columnSpan(2)
                    ->columns(2)
                    ->schema([
                        $this->getNameFormComponent(),
                        $this->getEmailFormComponent(),
                        TextInput::make('_role_display')
                            ->label('Role')
                            ->disabled()
                            ->dehydrated(false),
                        TextInput::make('bio')
                            ->label('Bio')
                            ->maxLength(500),
                    ]),

                Section::make('Media Sosial')
                    ->columnSpanFull()
                    ->columns(3)
                    ->schema([
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

                Section::make('Ubah Password')
                    ->columnSpanFull()
                    ->collapsed()
                    ->schema([
                        $this->getPasswordFormComponent(),
                        $this->getPasswordConfirmationFormComponent(),
                        $this->getCurrentPasswordFormComponent(),
                    ]),
            ]);
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        /** @var \App\Models\User $user */
        $user = $this->getUser();

        // Populate the read-only role display field
        $data['_role_display'] = $user->role instanceof Role ? $user->role->label() : '';

        // Ensure social_media is an array for dot-notation sub-keys
        if (isset($data['social_media']) && is_string($data['social_media'])) {
            $data['social_media'] = json_decode($data['social_media'], true) ?? [];
        }

        return $data;
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        // Remove the dummy role display field if it crept in
        unset($data['_role_display']);

        return $data;
    }
}
