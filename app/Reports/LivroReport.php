<?php

namespace App\Reports;

use Illuminate\Support\Facades\DB;

class LivroReport
{
    public function livrosPorAutor()
    {
        $registros = DB::table('vw_relatorio_livros')
            ->orderBy('autor_nome')
            ->orderBy('livro_titulo')
            ->get();

        $autores = $registros
            ->groupBy('autor_codau')
            ->map(function ($livrosDoAutor) {
                $primeiroRegistro = $livrosDoAutor->first();

                return [
                    'codau' => $primeiroRegistro->autor_codau,
                    'nome' => $primeiroRegistro->autor_nome,
                    'livros' => $livrosDoAutor
                        ->map(fn ($livro) => [
                            'codl' => $livro->livro_codl,
                            'titulo' => $livro->livro_titulo,
                            'editora' => $livro->livro_editora,
                            'edicao' => $livro->livro_edicao,
                            'ano_publicacao' => $livro->livro_ano_publicacao,
                            'valor' => $livro->livro_valor,
                            'assuntos' => $livro->assuntos,
                        ])
                        ->values(),
                ];
            })
            ->values();

        return [
            'autores' => $autores,
            'totalAutores' => $autores->count(),
            'totalAssociacoes' => $registros->count(),
        ];
    }
}
