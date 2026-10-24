<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Assunto extends Model
{
    /** @use HasFactory<\Database\Factories\AssuntoFactory> */
    use HasFactory, SoftDeletes;

    protected $table = 'assuntos';
    protected $primaryKey = 'codas';

    protected $fillable = [
        'descricao',
    ];
}
