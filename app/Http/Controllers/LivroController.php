<?php

namespace App\Http\Controllers;

use App\Models\Assunto;
use App\Models\Autor;
use App\Models\Livro;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class LivroController extends Controller
{
    public function index(): Response
    {
        $livros = Livro::query()
            ->with(['autores', 'assuntos'])
            ->orderBy('titulo')
            ->paginate(10);

        return Inertia::render('Livros/Index', [
            'livros' => $livros,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Livros/Create', [
            'autores' => Autor::query()->orderBy('nome')->get(),
            'assuntos' => Assunto::query()->orderBy('descricao')->get(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $dados = $request->validate($this->rules());

        DB::transaction(function () use ($dados): void {
            $livro = Livro::create([
                'titulo' => $dados['titulo'],
                'editora' => $dados['editora'],
                'edicao' => $dados['edicao'],
                'ano_publicacao' => $dados['ano_publicacao'],
                'valor' => $dados['valor'],
            ]);

            $livro->autores()->sync($dados['autores']);
            $livro->assuntos()->sync($dados['assuntos']);
        });

        Inertia::flash('toast', [
            'type' => 'success',
            'message' => 'Livro cadastrado com sucesso.',
        ]);

        return to_route('livros.index');
    }

    public function show(Livro $livro): Response
    {
        $livro->load(['autores', 'assuntos']);

        return Inertia::render('Livros/Show', [
            'livro' => $livro,
        ]);
    }

    public function edit(Livro $livro): Response
    {
        $livro->load(['autores', 'assuntos']);

        return Inertia::render('Livros/Edit', [
            'livro' => $livro,
            'autores' => Autor::query()->orderBy('nome')->get(),
            'assuntos' => Assunto::query()->orderBy('descricao')->get(),
            'autoresSelecionados' => $livro->autores->modelKeys(),
            'assuntosSelecionados' => $livro->assuntos->modelKeys(),
        ]);
    }

    public function update(Request $request, Livro $livro): RedirectResponse
    {
        $dados = $request->validate($this->rules());

        DB::transaction(function () use ($dados, $livro): void {
            $livro->update([
                'titulo' => $dados['titulo'],
                'editora' => $dados['editora'],
                'edicao' => $dados['edicao'],
                'ano_publicacao' => $dados['ano_publicacao'],
                'valor' => $dados['valor'],
            ]);

            $livro->autores()->sync($dados['autores']);
            $livro->assuntos()->sync($dados['assuntos']);
        });

        Inertia::flash('toast', [
            'type' => 'success',
            'message' => 'Livro atualizado com sucesso.',
        ]);

        return to_route('livros.index');
    }

    public function destroy(Livro $livro): RedirectResponse
    {
        $livro->delete();

        Inertia::flash('toast', [
            'type' => 'success',
            'message' => 'Livro excluído com sucesso.',
        ]);

        return to_route('livros.index');
    }

    private function rules(): array
    {
        return [
            'titulo' => ['required', 'string', 'max:40'],
            'editora' => ['required', 'string', 'max:40'],
            'edicao' => ['required', 'integer', 'min:1'],
            'ano_publicacao' => [
                'required',
                'digits:4',
                'integer',
                'min:1000',
                'max:' . date('Y'),
            ],
            'valor' => ['required', 'numeric', 'min:0', 'max:99999999.99'],
            'autores' => ['required', 'array', 'min:1'],
            'autores.*' => [
                'required',
                'integer',
                'distinct',
                Rule::exists('autores', 'codau'),
            ],
            'assuntos' => ['required', 'array', 'min:1'],
            'assuntos.*' => [
                'required',
                'integer',
                'distinct',
                Rule::exists('assuntos', 'codas'),
            ],
        ];
    }
}
