<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home')->name('home');
Route::inertia('/sejarah-singkat', 'sejarah-singkat')->name('sejarah-singkat');
Route::inertia('/struktur-organisasi', 'struktur-organisasi')->name('struktur-organisasi');
Route::inertia('/program-masjid', 'program-masjid')->name('program-masjid');
