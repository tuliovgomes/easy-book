<?php

namespace Tests\Feature;

use App\Models\Autor;
use App\Models\Livro;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class AutorControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_exibe_lista_de_autores(): void
    {
        Autor::factory()->count(3)->create();

        $response = $this->get(route('autores.index'));

        $response->assertOk();

        $response->assertInertia(
            fn (Assert $page) => $page
                ->component('Autores/Index')
                ->has('autores', 3)
        );
    }

    public function test_create_exibe_formulario_de_cadastro(): void
    {
        $response = $this->get(route('autores.create'));

        $response->assertOk();

        $response->assertInertia(
            fn (Assert $page) => $page
                ->component('Autores/Create')
        );
    }

    public function test_store_cadastra_autor(): void
    {
        $response = $this->post(route('autores.store'), [
            'nome' => 'Machado de Assis',
        ]);

        $response->assertRedirect(route('autores.index'));

        $this->assertDatabaseHas('autores', [
            'nome' => 'Machado de Assis',
        ]);
    }

    public function test_store_rejeita_autor_sem_nome(): void
    {
        $response = $this->post(route('autores.store'), [
            'nome' => '',
        ]);

        $response->assertSessionHasErrors(['nome']);

        $this->assertDatabaseCount('autores', 0);
    }

    public function test_edit_exibe_autor(): void
    {
        $autor = Autor::factory()->create();

        $response = $this->get(
            route('autores.edit', $autor->codau)
        );

        $response->assertOk();

        $response->assertInertia(
            fn (Assert $page) => $page
                ->component('Autores/Edit')
                ->where('autor.codau', $autor->codau)
        );
    }

    public function test_update_atualiza_autor(): void
    {
        $autor = Autor::factory()->create([
            'nome' => 'Nome Antigo',
        ]);

        $response = $this->put(
            route('autores.update', $autor->codau),
            [
                'nome' => 'Nome Atualizado',
            ]
        );

        $response->assertRedirect(route('autores.index'));

        $this->assertDatabaseHas('autores', [
            'codau' => $autor->codau,
            'nome' => 'Nome Atualizado',
        ]);
    }

    public function test_destroy_remove_autor_sem_livros_associados(): void
    {
        $autor = Autor::factory()->create();

        $response = $this->delete(
            route('autores.destroy', $autor->codau)
        );

        $response->assertRedirect(route('autores.index'));

        $this->assertSoftDeleted('autores', [
            'codau' => $autor->codau,
        ]);
    }

    public function test_destroy_impede_remocao_de_autor_associado_a_livro(): void
    {
        $autor = Autor::factory()->create();
        $livro = Livro::factory()->create();

        $livro->autores()->attach($autor->codau);

        $response = $this->from(route('autores.index'))
            ->delete(route('autores.destroy', $autor->codau));

        $response->assertSessionHasErrors();

        $this->assertDatabaseHas('autores', [
            'codau' => $autor->codau,
        ]);
    }
}
