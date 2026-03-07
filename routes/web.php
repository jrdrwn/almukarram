<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home')->name('home');
Route::inertia('/jadwal-sholat', 'jadwal-sholat')->name('jadwal-sholat');
Route::inertia('/zis', 'zis')->name('zis');
Route::inertia('/sejarah-singkat', 'sejarah-singkat')->name('sejarah-singkat');
Route::inertia('/struktur-organisasi', 'struktur-organisasi')->name('struktur-organisasi');
Route::inertia('/program-masjid', 'program-masjid')->name('program-masjid');
Route::inertia('/program-idarah', 'program-idarah')->name('program-idarah');
Route::inertia('/program-imarah', 'program-imarah')->name('program-imarah');
Route::inertia('/program-riayah', 'program-riayah')->name('program-riayah');
Route::inertia('/spot-baca', 'spot-baca')->name('spot-baca');
Route::inertia('/berita', 'berita')->name('berita');
Route::inertia('/berita-detail/{slug}', 'berita-detail')->name('berita-detail');
Route::inertia('/buletin', 'buletin')->name('buletin');
Route::inertia('/dokumen', 'dokumen')->name('dokumen');
Route::inertia('/opini', 'opini')->name('opini');
Route::inertia('/opini-detail/{slug}', 'opini-detail')->name('opini-detail');
Route::inertia('/hitung-zakat', 'hitung-zakat')->name('hitung-zakat');
Route::inertia('/kontak', 'kontak')->name('kontak');
Route::inertia('/galeri', 'galeri')->name('galeri');
Route::inertia('/layanan-waris', 'layanan-waris')->name('layanan-waris');
Route::inertia('/jadwal-jumat', 'jadwal-jumat')->name('jadwal-jumat');
Route::inertia('/jadwal-pengajian', 'jadwal-pengajian')->name('jadwal-pengajian');
Route::inertia('/organisasi-masjid', 'organisasi-masjid')->name('organisasi-masjid');
Route::inertia('/layanan-konsultasi', 'layanan-konsultasi')->name('layanan-konsultasi');
