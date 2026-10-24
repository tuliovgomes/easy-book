<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Livro extends Model
{
    /** @use HasFactory<\Database\Factories\LivroFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'titulo',
        'editora',
        'edicao',
        'ano_publicacao',
        'valor',
    ];
}
