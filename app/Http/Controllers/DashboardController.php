<?php

namespace App\Http\Controllers;

use App\Models\Assunto;
use App\Models\Autor;
use App\Reports\LivroReport;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(LivroReport $report): Response
    {
        return Inertia::render('Dashboard', [
            'relatorio' => $report->livrosPorAutor(),
            'totais' => [
                'autores' => Autor::count(),
                'assuntos' => Assunto::count(),
            ],
        ]);
    }
}
