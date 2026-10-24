<?php

namespace App\Http\Controllers;

use App\Models\Assunto;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AssuntoController extends Controller
{
    public function index(): Response
    {
        $assuntos = Assunto::query()
            ->withCount('livros')
            ->orderBy('descricao')
            ->paginate(10);

        return Inertia::render('Assuntos/Index', [
            'assuntos' => $assuntos,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Assuntos/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $dados = $request->validate([
            'descricao' => ['required', 'string', 'max:20'],
        ]);

        Assunto::create($dados);

        Inertia::flash('toast', [
            'type' => 'success',
            'message' => 'Assunto cadastrado com sucesso.',
        ]);

        return to_route('assuntos.index');
    }

    public function show(Assunto $assunto): Response
    {
        $assunto->load([
            'livros' => fn ($query) => $query->orderBy('titulo'),
        ]);

        return Inertia::render('Assuntos/Show', [
            'assunto' => $assunto,
        ]);
    }

    public function edit(Assunto $assunto): Response
    {
        return Inertia::render('Assuntos/Edit', [
            'assunto' => $assunto,
        ]);
    }

    public function update(Request $request, Assunto $assunto): RedirectResponse
    {
        $dados = $request->validate([
            'descricao' => ['required', 'string', 'max:20'],
        ]);

        $assunto->update($dados);

        Inertia::flash('toast', [
            'type' => 'success',
            'message' => 'Assunto atualizado com sucesso.',
        ]);

        return to_route('assuntos.index');
    }

    public function destroy(Assunto $assunto): RedirectResponse
    {
        if ($assunto->livros()->exists()) {
            throw ValidationException::withMessages([
                'assunto' => 'Não é possível excluir um assunto associado a livros.',
            ]);
        }

        $assunto->delete();

        Inertia::flash('toast', [
            'type' => 'success',
            'message' => 'Assunto excluído com sucesso.',
        ]);

        return to_route('assuntos.index');
    }
}
