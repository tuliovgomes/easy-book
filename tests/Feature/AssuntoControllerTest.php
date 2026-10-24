<?php

namespace Tests\Feature;

use App\Models\Assunto;
use App\Models\Livro;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class AssuntoControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_exibe_lista_de_assuntos(): void
    {
        Assunto::factory()->count(3)->create();

        $response = $this->get(route('assuntos.index'));

        $response->assertOk();

        $response->assertInertia(
            fn (Assert $page) => $page
                ->component('Assuntos/Index')
                ->has('assuntos', 3)
        );
    }

    public function test_create_exibe_formulario_de_cadastro(): void
    {
        $response = $this->get(route('assuntos.create'));

        $response->assertOk();

        $response->assertInertia(
            fn (Assert $page) => $page
                ->component('Assuntos/Create')
        );
    }

    public function test_store_cadastra_assunto(): void
    {
        $response = $this->post(route('assuntos.store'), [
            'descricao' => 'Programação Web',
        ]);

        $response->assertRedirect(route('assuntos.index'));

        $this->assertDatabaseHas('assuntos', [
            'descricao' => 'Programação Web',
        ]);
    }

    public function test_store_rejeita_assunto_sem_descricao(): void
    {
        $response = $this->post(route('assuntos.store'), [
            'descricao' => '',
        ]);

        $response->assertSessionHasErrors(['descricao']);

        $this->assertDatabaseCount('assuntos', 0);
    }

    public function test_edit_exibe_assunto(): void
    {
        $assunto = Assunto::factory()->create();

        $response = $this->get(
            route('assuntos.edit', $assunto->codas)
        );

        $response->assertOk();

        $response->assertInertia(
            fn (Assert $page) => $page
                ->component('Assuntos/Edit')
                ->where('assunto.codas', $assunto->codas)
        );
    }

    public function test_update_atualiza_assunto(): void
    {
        $assunto = Assunto::factory()->create([
            'descricao' => 'Descrição Antiga',
        ]);

        $response = $this->put(
            route('assuntos.update', $assunto->codas),
            [
                'descricao' => 'Descrição Atualizada',
            ]
        );

        $response->assertRedirect(route('assuntos.index'));

        $this->assertDatabaseHas('assuntos', [
            'codas' => $assunto->codas,
            'descricao' => 'Descrição Atualizada',
        ]);
    }

    public function test_destroy_remove_assunto_sem_livros_associados(): void
    {
        $assunto = Assunto::factory()->create();

        $response = $this->delete(
            route('assuntos.destroy', $assunto->codas)
        );

        $response->assertRedirect(route('assuntos.index'));

        $this->assertSoftDeleted('assuntos', [
            'codas' => $assunto->codas,
        ]);
    }

    public function test_destroy_impede_remocao_de_assunto_associado_a_livro(): void
    {
        $assunto = Assunto::factory()->create();
        $livro = Livro::factory()->create();

        $livro->assuntos()->attach($assunto->codas);

        $response = $this->from(route('assuntos.index'))
            ->delete(route('assuntos.destroy', $assunto->codas));

        $response->assertSessionHasErrors();

        $this->assertDatabaseHas('assuntos', [
            'codas' => $assunto->codas,
        ]);
    }
}
