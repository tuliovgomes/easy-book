<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::statement('DROP VIEW IF EXISTS vw_relatorio_livros');

        // MySQL aceita DISTINCT/ORDER BY/SEPARATOR no GROUP_CONCAT; o SQLite
        // (usado nos testes) só aceita group_concat(valor, separador).
        $assuntos = DB::getDriverName() === 'sqlite'
            ? "GROUP_CONCAT(ass.descricao, ', ')"
            : "GROUP_CONCAT(DISTINCT ass.descricao ORDER BY ass.descricao SEPARATOR ', ')";

        DB::statement(<<<SQL
            CREATE VIEW vw_relatorio_livros AS
            SELECT
                a.codau AS autor_codau,
                a.nome AS autor_nome,
                l.codl AS livro_codl,
                l.titulo AS livro_titulo,
                l.editora AS livro_editora,
                l.edicao AS livro_edicao,
                l.ano_publicacao AS livro_ano_publicacao,
                l.valor AS livro_valor,
                COALESCE(s.assuntos, '') AS assuntos
            FROM livros l
            INNER JOIN livro_autor la
                ON la.livro_codl = l.codl
            INNER JOIN autores a
                ON a.codau = la.autor_codau
            LEFT JOIN (
                SELECT
                    ls.livro_codl,
                    {$assuntos} AS assuntos
                FROM livro_assunto ls
                INNER JOIN assuntos ass
                    ON ass.codas = ls.assunto_codas
                    AND ass.deleted_at IS NULL
                GROUP BY ls.livro_codl
            ) s ON s.livro_codl = l.codl
            WHERE l.deleted_at IS NULL
                AND a.deleted_at IS NULL
        SQL);
    }

    public function down(): void
    {
        DB::statement('DROP VIEW IF EXISTS vw_relatorio_livros');
    }
};
