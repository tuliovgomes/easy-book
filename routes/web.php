<?php

use App\Http\Controllers\AssuntoController;
use App\Http\Controllers\AutorController;
use App\Http\Controllers\LivroController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('home');

Route::middleware(['auth'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');
});

Route::resource('livros', LivroController::class);
Route::resource('autores', AutorController::class);
Route::resource('assuntos', AssuntoController::class);

require __DIR__.'/settings.php';
