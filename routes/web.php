<?php

use App\Http\Controllers\BeritaController;
use App\Http\Controllers\BuletinController;
use App\Http\Controllers\DokumenController;
use App\Http\Controllers\GaleriController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\JadwalJumatController;
use App\Http\Controllers\JadwalPengajianController;
use App\Http\Controllers\JadwalSholatController;
use App\Http\Controllers\KotakMasukController;
use App\Http\Controllers\OpiniController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::post('/kotak-masuk', [KotakMasukController::class, 'store'])->name('kotak-masuk.store');

// Dynamic pages
Route::get('/berita', [BeritaController::class, 'index'])->name('berita');
Route::get('/berita-detail/{slug}', [BeritaController::class, 'show'])->name('berita-detail');
Route::get('/opini', [OpiniController::class, 'index'])->name('opini');
Route::get('/opini-detail/{slug}', [OpiniController::class, 'show'])->name('opini-detail');
Route::get('/galeri', GaleriController::class)->name('galeri');
Route::get('/buletin', [BuletinController::class, 'index'])->name('buletin');
Route::get('/buletin/{buletin:slug}/view', [BuletinController::class, 'viewPdf'])->name('buletin.viewPdf');
Route::get('/buletin/{buletin:slug}/download', [BuletinController::class, 'downloadPdf'])->name('buletin.downloadPdf');
Route::get('/dokumen', DokumenController::class)->name('dokumen');
Route::get('/jadwal-jumat', JadwalJumatController::class)->name('jadwal-jumat');
Route::get('/jadwal-pengajian', JadwalPengajianController::class)->name('jadwal-pengajian');
Route::get('/jadwal-sholat', JadwalSholatController::class)->name('jadwal-sholat');
Route::inertia('/kontak', 'kontak')->name('kontak');

// Static pages
Route::inertia('/zis', 'zis')->name('zis');
Route::inertia('/sejarah-singkat', 'sejarah-singkat')->name('sejarah-singkat');
Route::inertia('/struktur-organisasi', 'struktur-organisasi')->name('struktur-organisasi');
Route::inertia('/program-masjid', 'program-masjid')->name('program-masjid');
Route::inertia('/program-idarah', 'program-idarah')->name('program-idarah');
Route::inertia('/program-imarah', 'program-imarah')->name('program-imarah');
Route::inertia('/program-riayah', 'program-riayah')->name('program-riayah');
Route::inertia('/spot-baca', 'spot-baca')->name('spot-baca');
Route::inertia('/hitung-zakat', 'hitung-zakat')->name('hitung-zakat');
Route::inertia('/layanan-waris', 'layanan-waris')->name('layanan-waris');
Route::inertia('/organisasi-masjid', 'organisasi-masjid')->name('organisasi-masjid');
Route::inertia('/layanan-konsultasi', 'layanan-konsultasi')->name('layanan-konsultasi');
