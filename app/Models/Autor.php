<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Autor extends Model
{
    /** @use HasFactory<\Database\Factories\AutorFactory> */
    use HasFactory, SoftDeletes;

    protected $table = 'autores';
    protected $primaryKey = 'codau';

    protected $fillable = [
        'nome',
    ];

    public function livros()
{
    return $this->belongsToMany(
        Livro::class,
        'livro_autor',
        'autor_codau',
        'livro_codl'
    );
}
}
