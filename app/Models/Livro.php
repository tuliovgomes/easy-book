<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Livro extends Model
{
    /** @use HasFactory<\Database\Factories\LivroFactory> */
    use HasFactory, SoftDeletes;

    protected $table = 'livros';
    protected $primaryKey = 'codl';

    protected $fillable = [
        'titulo',
        'editora',
        'edicao',
        'ano_publicacao',
        'valor',
    ];

    public function autores()
    {
        return $this->belongsToMany(
            Autor::class,
            'livro_autor',
            'livro_codl',
            'autor_codau'
        );
    }

    public function assuntos()
    {
        return $this->belongsToMany(
            Assunto::class,
            'livro_assunto',
            'livro_codl',
            'assunto_codas',
            'valor'
        );
    }
}
