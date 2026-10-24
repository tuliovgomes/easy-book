<?php

namespace Tests\Feature;

use App\Models\Assunto;
use App\Models\Autor;
use App\Models\Livro;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class DashboardTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_are_redirected_to_the_login_page()
    {
        $response = $this->get(route('dashboard'));
        $response->assertRedirect(route('login'));
    }

    public function test_authenticated_users_can_visit_the_dashboard()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $response = $this->get(route('dashboard'));
        $response->assertOk();
    }

    public function test_dashboard_exibe_relatorio_de_livros_por_autor()
    {
        $this->actingAs(User::factory()->create());

        $autor = Autor::factory()->create(['nome' => 'Autor Ativo']);
        $assunto = Assunto::factory()->create(['descricao' => 'Romance']);
        $livro = Livro::factory()->create(['titulo' => 'Livro Ativo']);
        $livro->autores()->attach($autor->codau);
        $livro->assuntos()->attach($assunto->codas);

        $excluido = Livro::factory()->create(['titulo' => 'Livro Excluido']);
        $excluido->autores()->attach($autor->codau);
        $excluido->delete();

        $this->get(route('dashboard'))
            ->assertOk()
            ->assertInertia(
                fn (Assert $page) => $page
                    ->component('Dashboard')
                    ->where('totais.autores', 1)
                    ->where('totais.assuntos', 1)
                    ->where('relatorio.totalAutores', 1)
                    ->where('relatorio.totalLivros', 1)
                    ->where('relatorio.totalAssociacoes', 1)
                    ->where('relatorio.autores.0.nome', 'Autor Ativo')
                    ->has('relatorio.autores.0.livros', 1)
                    ->where('relatorio.autores.0.livros.0.titulo', 'Livro Ativo')
                    ->where('relatorio.autores.0.livros.0.assuntos', 'Romance')
            );
    }
}
