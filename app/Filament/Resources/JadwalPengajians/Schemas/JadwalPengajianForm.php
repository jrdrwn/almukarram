<?php

namespace App\Filament\Resources\JadwalPengajians\Schemas;

use App\Models\User;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TimePicker;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;

class JadwalPengajianForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(2)
            ->components([
                Select::make('hari')
                    ->label('Hari')
                    ->options([
                        'Senin'  => 'Senin',
                        'Selasa' => 'Selasa',
                        'Rabu'   => 'Rabu',
                        'Kamis'  => 'Kamis',
                        'Jumat'  => 'Jumat',
                        'Sabtu'  => 'Sabtu',
                        'Ahad'   => 'Ahad',
                    ])
                    ->required()
                    ->helperText('Hari rutin pelaksanaan pengajian dalam seminggu.'),
                DatePicker::make('tanggal')
                    ->label('Tanggal')
                    ->required()
                    ->native(false)
                    ->displayFormat('d M Y')
                    ->helperText('Tanggal pelaksanaan pengajian.'),
                TimePicker::make('waktu')
                    ->label('Waktu')
                    ->required()
                    ->native(false)
                    ->seconds(false)
                    ->helperText('Waktu mulai pengajian.'),
                TextInput::make('judul')
                    ->label('Judul Pengajian')
                    ->required()
                    ->maxLength(200)
                    ->helperText('Tema atau topik pembahasan dalam pengajian ini.')
                    ->columnSpanFull(),
                TextInput::make('pemateri')
                    ->label('Pemateri')
                    ->required()
                    ->maxLength(100)
                    ->helperText('Nama ustadz atau pemateri yang mengisi pengajian.'),
                Select::make('tipe')
                    ->label('Tipe')
                    ->options([
                        'Umum'      => 'Umum',
                        'Ibu-Ibu'   => 'Ibu-Ibu',
                        'Remaja'    => 'Remaja',
                        'Anak-Anak' => 'Anak-Anak',
                    ])
                    ->default('Umum')
                    ->required()
                    ->helperText('Sasaran atau kelompok peserta pengajian.'),
                Select::make('status')
                    ->label('Status')
                    ->options([
                        'Akan Datang' => 'Akan Datang',
                        'Berlangsung' => 'Berlangsung',
                        'Selesai'     => 'Selesai',
                        'Dibatalkan'  => 'Dibatalkan',
                    ])
                    ->default('Akan Datang')
                    ->required()
                    ->helperText('Status pelaksanaan pengajian saat ini.'),
                Select::make('user_id')
                    ->label('Diinput Oleh')
                    ->options(fn () => User::query()->pluck('name', 'id'))
                    ->searchable()
                    ->default(fn () => Auth::id())
                    ->helperText('Pengguna yang menginput data jadwal ini.'),
            ]);
    }
}
