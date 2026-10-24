<?php

namespace Database\Seeders;

use App\Models\Assunto;
use App\Models\Autor;
use App\Models\Livro;
use Illuminate\Database\Seeder;

class LivroSeeder extends Seeder
{
    public function run(): void
    {
        $autores = collect([
            'Machado de Assis',
            'Clarice Lispector',
            'Jorge Amado',
            'Carlos Drummond de Andrade',
            'Graciliano Ramos',
            'Monteiro Lobato',
        ])->mapWithKeys(fn (string $nome) => [
            $nome => Autor::firstOrCreate(['nome' => $nome]),
        ]);

        $assuntos = collect([
            'Romance',
            'Poesia',
            'Conto',
            'Infantil',
            'Clássico',
            'Regionalismo',
        ])->mapWithKeys(fn (string $descricao) => [
            $descricao => Assunto::firstOrCreate(['descricao' => $descricao]),
        ]);

        $livros = [
            ['Dom Casmurro', 'Editora Garnier', 1, '1899', 39.90, ['Machado de Assis'], ['Romance', 'Clássico']],
            ['Memórias Póstumas de Brás Cubas', 'Tipografia Nacional', 1, '1881', 44.90, ['Machado de Assis'], ['Romance', 'Clássico']],
            ['A Hora da Estrela', 'Rocco', 3, '1977', 34.50, ['Clarice Lispector'], ['Romance']],
            ['Laços de Família', 'Rocco', 2, '1960', 42.00, ['Clarice Lispector'], ['Conto']],
            ['Gabriela, Cravo e Canela', 'Companhia das Letras', 5, '1958', 59.90, ['Jorge Amado'], ['Romance', 'Regionalismo']],
            ['Alguma Poesia', 'Record', 4, '1930', 29.90, ['Carlos Drummond de Andrade'], ['Poesia']],
            ['Vidas Secas', 'Record', 10, '1938', 32.90, ['Graciliano Ramos'], ['Romance', 'Regionalismo', 'Clássico']],
            ['O Sítio do Picapau Amarelo', 'Globo', 6, '1920', 27.90, ['Monteiro Lobato'], ['Infantil']],
            ['Reinações de Narizinho', 'Globo', 2, '1931', 25.90, ['Monteiro Lobato'], ['Infantil', 'Clássico']],
        ];

        foreach ($livros as [$titulo, $editora, $edicao, $ano, $valor, $nomesAutores, $descricoes]) {
            $livro = Livro::firstOrCreate(
                ['titulo' => $titulo],
                [
                    'editora' => $editora,
                    'edicao' => $edicao,
                    'ano_publicacao' => $ano,
                    'valor' => $valor,
                ]
            );

            $livro->autores()->syncWithoutDetaching(
                collect($nomesAutores)->map(fn ($n) => $autores[$n]->codau)
            );
            $livro->assuntos()->syncWithoutDetaching(
                collect($descricoes)->map(fn ($d) => $assuntos[$d]->codas)
            );
        }
    }
}
