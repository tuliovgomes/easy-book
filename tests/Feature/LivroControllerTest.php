<?php

namespace Tests\Feature;

use App\Models\Assunto;
use App\Models\Autor;
use App\Models\Livro;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class LivroControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_exibe_lista_de_livros(): void
    {
        $this->actingAs(User::factory()->create());
        Livro::factory()->count(3)->create();

        $response = $this->get(route('livros.index'));

        $response->assertOk();

        $response->assertInertia(
            fn (Assert $page) => $page
                ->component('Livros/Index')
                ->has('livros.data', 3)
        );
    }

    public function test_create_exibe_formulario_com_autores_e_assuntos(): void
    {
        $this->actingAs(User::factory()->create());
        Autor::factory()->create();
        Assunto::factory()->create();

        $response = $this->get(route('livros.create'));

        $response->assertOk();

        $response->assertInertia(
            fn (Assert $page) => $page
                ->component('Livros/Create')
                ->has('autores', 1)
                ->has('assuntos', 1)
        );
    }

    public function test_store_cadastra_livro_com_autor_e_assunto(): void
    {
        $this->actingAs(User::factory()->create());
        $autor = Autor::factory()->create();
        $assunto = Assunto::factory()->create();

        $dados = [
            'titulo' => 'Laravel para Iniciantes',
            'editora' => 'Editora Técnica',
            'edicao' => '1',
            'ano_publicacao' => '2025',
            'valor' => 89.90,
            'autores' => [$autor->codau],
            'assuntos' => [$assunto->codas],
        ];

        $response = $this->post(route('livros.store'), $dados);

        $response->assertRedirect(route('livros.index'));

        $this->assertDatabaseHas('livros', [
            'titulo' => 'Laravel para Iniciantes',
            'editora' => 'Editora Técnica',
            'edicao' => '1',
            'ano_publicacao' => '2025',
            'valor' => 89.90,
        ]);

        $livro = Livro::where(
            'titulo',
            'Laravel para Iniciantes'
        )->firstOrFail();

        $this->assertDatabaseHas('livro_autor', [
            'livro_codl' => $livro->codl,
            'autor_codau' => $autor->codau,
        ]);

        $this->assertDatabaseHas('livro_assunto', [
            'livro_codl' => $livro->codl,
            'assunto_codas' => $assunto->codas,
        ]);
    }

    public function test_store_retorna_erros_quando_dados_obrigatorios_nao_sao_informados(): void
    {
        $this->actingAs(User::factory()->create());
        $response = $this->post(route('livros.store'), []);

        $response->assertSessionHasErrors([
            'titulo',
            'editora',
            'edicao',
            'ano_publicacao',
            'valor',
        ]);

        $this->assertDatabaseCount('livros', 0);
    }

    public function test_show_exibe_detalhes_do_livro(): void
    {
        $this->actingAs(User::factory()->create());
        $livro = Livro::factory()->create();

        $response = $this->get(route('livros.show', $livro->codl));

        $response->assertOk();

        $response->assertInertia(
            fn (Assert $page) => $page
                ->component('Livros/Show')
                ->where('livro.codl', $livro->codl)
        );
    }

    public function test_edit_exibe_formulario_de_edicao(): void
    {
        $this->actingAs(User::factory()->create());
        $livro = Livro::factory()->create();

        $response = $this->get(route('livros.edit', $livro->codl));

        $response->assertOk();

        $response->assertInertia(
            fn (Assert $page) => $page
                ->component('Livros/Edit')
                ->where('livro.codl', $livro->codl)
        );
    }

    public function test_update_atualiza_livro_e_seus_relacionamentos(): void
    {
        $this->actingAs(User::factory()->create());
        $livro = Livro::factory()->create();

        $autor = Autor::factory()->create();
        $assunto = Assunto::factory()->create();

        $dados = [
            'titulo' => 'Laravel Avançado',
            'editora' => 'Nova Editora',
            'edicao' => '2',
            'ano_publicacao' => '2026',
            'valor' => 120.50,
            'autores' => [$autor->codau],
            'assuntos' => [$assunto->codas],
        ];

        $response = $this->put(
            route('livros.update', $livro->codl),
            $dados
        );

        $response->assertRedirect(route('livros.index'));

        $this->assertDatabaseHas('livros', [
            'codl' => $livro->codl,
            'titulo' => 'Laravel Avançado',
            'editora' => 'Nova Editora',
            'valor' => 120.50,
        ]);

        $this->assertDatabaseHas('livro_autor', [
            'livro_codl' => $livro->codl,
            'autor_codau' => $autor->codau,
        ]);

        $this->assertDatabaseHas('livro_assunto', [
            'livro_codl' => $livro->codl,
            'assunto_codas' => $assunto->codas,
        ]);
    }

    public function test_destroy_remove_livro(): void
    {
        $this->actingAs(User::factory()->create());
        $livro = Livro::factory()->create();

        $response = $this->delete(
            route('livros.destroy', $livro->codl)
        );

        $response->assertRedirect(route('livros.index'));

        $this->assertSoftDeleted('livros', [
            'codl' => $livro->codl,
        ]);
    }
}
