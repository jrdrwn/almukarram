<?php

namespace App\Filament\Resources\JadwalJumats\Schemas;

use App\Models\User;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TimePicker;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;

class JadwalJumatForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(2)
            ->components([
                DatePicker::make('tanggal')
                    ->label('Tanggal')
                    ->required()
                    ->native(false)
                    ->displayFormat('d M Y'),
                TimePicker::make('waktu')
                    ->label('Waktu')
                    ->required()
                    ->native(false)
                    ->seconds(false),
                TextInput::make('khatib')
                    ->label('Khatib')
                    ->required()
                    ->maxLength(100),
                TextInput::make('imam')
                    ->label('Imam')
                    ->required()
                    ->maxLength(100),
                TextInput::make('muadzin')
                    ->label('Muadzin')
                    ->required()
                    ->maxLength(100),
                TextInput::make('bilal')
                    ->label('Bilal')
                    ->required()
                    ->maxLength(100),
                Select::make('user_id')
                    ->label('Diinput Oleh')
                    ->options(fn () => User::query()->pluck('name', 'id'))
                    ->searchable()
                    ->default(fn () => Auth::id()),
            ]);
    }
}
