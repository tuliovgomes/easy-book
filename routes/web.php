<?php

use App\Http\Controllers\AssuntoController;
use App\Http\Controllers\AutorController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LivroController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
    Route::resource('livros', LivroController::class);
    Route::resource('autores', AutorController::class)->parameters(['autores' => 'autor']);
    Route::resource('assuntos', AssuntoController::class);
});

require __DIR__.'/settings.php';
