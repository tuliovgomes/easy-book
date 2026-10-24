<?php

namespace App\Http\Controllers;

use App\Models\Autor;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AutorController extends Controller
{
    public function index(): Response
    {
        $autores = Autor::query()
            ->withCount('livros')
            ->orderBy('nome')
            ->paginate(10);

        return Inertia::render('Autores/Index', [
            'autores' => $autores,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Autores/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $dados = $request->validate([
            'nome' => ['required', 'string', 'max:40'],
        ]);

        Autor::create($dados);

        return to_route('autores.index')
            ->with('success', 'Autor cadastrado com sucesso.');
    }

    public function show(Autor $autor): Response
    {
        $autor->load([
            'livros' => fn ($query) => $query->orderBy('titulo'),
        ]);

        return Inertia::render('Autores/Show', [
            'autor' => $autor,
        ]);
    }

    public function edit(Autor $autor): Response
    {
        return Inertia::render('Autores/Edit', [
            'autor' => $autor,
        ]);
    }

    public function update(Request $request, Autor $autor): RedirectResponse
    {
        $dados = $request->validate([
            'nome' => ['required', 'string', 'max:40'],
        ]);

        $autor->update($dados);

        return to_route('autores.index')
            ->with('success', 'Autor atualizado com sucesso.');
    }

    public function destroy(Autor $autor): RedirectResponse
    {
        if ($autor->livros()->exists()) {
            throw ValidationException::withMessages([
                'autor' => 'Não é possível excluir um autor associado a livros.',
            ]);
        }

        $autor->delete();

        return to_route('autores.index')
            ->with('success', 'Autor excluído com sucesso.');
    }
}
