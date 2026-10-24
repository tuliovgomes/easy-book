<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { dashboard } from '@/routes';
import { show } from '@/routes/livros';

type LivroRelatorio = {
    codl: number;
    titulo: string;
    editora: string;
    edicao: number;
    ano_publicacao: string;
    valor: string | number;
    assuntos: string;
};

type AutorRelatorio = {
    codau: number;
    nome: string;
    livros: LivroRelatorio[];
};

defineProps<{
    relatorio: {
        autores: AutorRelatorio[];
        totalAutores: number;
        totalLivros: number;
        totalAssociacoes: number;
    };
    totais: {
        autores: number;
        assuntos: number;
    };
}>();

defineOptions({
    layout: {
        breadcrumbs: [{ title: 'Dashboard', href: dashboard() }],
    },
});

function imprimir() {
    window.print();
}

const moeda = (valor: string | number) =>
    Number(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
</script>

<template>
    <Head title="Dashboard" />

    <div class="flex flex-col gap-6 p-4">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-xl font-semibold">Relatório de livros por autor</h1>
                <p class="text-sm text-muted-foreground">
                    Livros cadastrados agrupados por autor, com seus assuntos.
                </p>
            </div>
            <Button variant="outline" class="print:hidden" @click="imprimir">
                Imprimir
            </Button>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
                v-for="card in [
                    { titulo: 'Total de autores', valor: totais.autores },
                    { titulo: 'Total de assuntos', valor: totais.assuntos },
                    { titulo: 'Autores com livros', valor: relatorio.totalAutores },
                    { titulo: 'Total de livros', valor: relatorio.totalLivros },
                ]"
                :key="card.titulo"
                class="rounded-xl border border-sidebar-border/70 p-4 dark:border-sidebar-border"
            >
                <p class="text-sm text-muted-foreground">{{ card.titulo }}</p>
                <p class="text-3xl font-semibold">{{ card.valor }}</p>
            </div>
        </div>

        <p
            v-if="!relatorio.autores.length"
            class="rounded-xl border p-6 text-center text-sm text-muted-foreground"
        >
            Nenhum livro com autor cadastrado.
        </p>

        <section
            v-for="autor in relatorio.autores"
            :key="autor.codau"
            class="break-inside-avoid overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
        >
            <header class="flex items-center justify-between bg-muted/50 px-4 py-3">
                <h2 class="font-medium">{{ autor.nome }}</h2>
                <span class="text-sm text-muted-foreground">
                    {{ autor.livros.length }}
                    {{ autor.livros.length === 1 ? 'livro' : 'livros' }}
                </span>
            </header>

            <div class="overflow-x-auto">
                <table class="w-full text-left text-sm">
                    <thead>
                        <tr class="text-muted-foreground">
                            <th class="p-3 font-normal">Título</th>
                            <th class="p-3 font-normal">Editora</th>
                            <th class="p-3 font-normal">Edição</th>
                            <th class="p-3 font-normal">Ano</th>
                            <th class="p-3 font-normal">Assuntos</th>
                            <th class="p-3 text-right font-normal">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="livro in autor.livros" :key="livro.codl" class="border-t">
                            <td class="p-3 font-medium">
                                <Link :href="show(livro.codl)" class="hover:underline">
                                    {{ livro.titulo }}
                                </Link>
                            </td>
                            <td class="p-3">{{ livro.editora }}</td>
                            <td class="p-3">{{ livro.edicao }}</td>
                            <td class="p-3">{{ livro.ano_publicacao }}</td>
                            <td class="p-3">{{ livro.assuntos || '—' }}</td>
                            <td class="p-3 text-right">{{ moeda(livro.valor) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>
