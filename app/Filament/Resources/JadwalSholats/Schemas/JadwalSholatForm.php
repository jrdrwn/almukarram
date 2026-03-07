<?php

namespace App\Filament\Resources\JadwalSholats\Schemas;

use App\Models\User;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;

class JadwalSholatForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(3)
            ->components([
                Section::make('Tanggal & Petugas')
                    ->columnSpan(1)
                    ->schema([
                        DatePicker::make('tanggal')
                            ->label('Tanggal')
                            ->required()
                            ->native(false)
                            ->displayFormat('d M Y')
                            ->unique(ignoreRecord: true)
                            ->helperText('Setiap tanggal hanya dapat diisi satu kali.'),
                        Select::make('user_id')
                            ->label('Diinput Oleh')
                            ->options(fn () => User::query()->pluck('name', 'id'))
                            ->searchable()
                            ->default(fn () => Auth::id())
                            ->helperText('Pengguna yang menginput data jadwal ini.'),
                    ]),
                Section::make('Waktu Sholat')
                    ->description('Isi waktu dalam format HH:MM, contoh: 04:30.')
                    ->columnSpan(2)
                    ->columns(2)
                    ->schema([
                        TextInput::make('subuh')
                            ->label('Subuh')
                            ->required()
                            ->placeholder('04:30'),
                        TextInput::make('terbit')
                            ->label('Terbit')
                            ->required()
                            ->placeholder('05:50'),
                        TextInput::make('dhuha')
                            ->label('Dhuha')
                            ->required()
                            ->placeholder('06:10'),
                        TextInput::make('dzuhur')
                            ->label('Dzuhur')
                            ->required()
                            ->placeholder('11:55'),
                        TextInput::make('ashar')
                            ->label('Ashar')
                            ->required()
                            ->placeholder('15:10'),
                        TextInput::make('maghrib')
                            ->label('Maghrib')
                            ->required()
                            ->placeholder('17:52'),
                        TextInput::make('isya')
                            ->label('Isya')
                            ->required()
                            ->placeholder('19:05'),
                    ]),
            ]);
    }
}
