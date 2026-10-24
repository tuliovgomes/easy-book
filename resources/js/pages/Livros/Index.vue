<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { confirmar } from '@/lib/confirm';
import { create, destroy, edit, index, show } from '@/routes/livros';

type Livro = {
    codl: number;
    titulo: string;
    editora: string;
    edicao: number;
    ano_publicacao: string;
    valor: string | number;
    autores: { codau: number; nome: string }[];
    assuntos: { codas: number; descricao: string }[];
};

defineProps<{
    livros: {
        data: Livro[];
        links: { url: string | null; label: string; active: boolean }[];
    };
}>();

defineOptions({
    layout: { breadcrumbs: [{ title: 'Livros', href: index() }] },
});

const moeda = (valor: string | number) =>
    Number(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

async function excluir(livro: Livro) {
    const ok = await confirmar({
        titulo: 'Excluir livro?',
        texto: `"${livro.titulo}" será removido da listagem.`,
        confirmar: 'Sim, excluir',
        cancelar: 'Cancelar',
        perigo: true,
    });

    if (ok) {
        router.delete(destroy(livro.codl));
    }
}
</script>

<template>
    <Head title="Livros" />

    <div class="flex flex-col gap-4 p-4">
        <div class="flex items-center justify-between">
            <h1 class="text-xl font-semibold">Livros</h1>
            <Button as-child>
                <Link :href="create()">Novo livro</Link>
            </Button>
        </div>

        <div
            class="overflow-x-auto rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
        >
            <table class="w-full text-left text-sm">
                <thead class="bg-muted/50">
                    <tr>
                        <th class="p-3">Título</th>
                        <th class="p-3">Editora</th>
                        <th class="p-3">Edição</th>
                        <th class="p-3">Ano</th>
                        <th class="p-3">Autores</th>
                        <th class="p-3">Assuntos</th>
                        <th class="p-3">Valor</th>
                        <th class="p-3 text-right">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="!livros.data.length">
                        <td
                            colspan="8"
                            class="p-6 text-center text-muted-foreground"
                        >
                            Nenhum livro cadastrado.
                        </td>
                    </tr>
                    <tr
                        v-for="livro in livros.data"
                        :key="livro.codl"
                        class="border-t"
                    >
                        <td class="p-3 font-medium">{{ livro.titulo }}</td>
                        <td class="p-3">{{ livro.editora }}</td>
                        <td class="p-3">{{ livro.edicao }}</td>
                        <td class="p-3">{{ livro.ano_publicacao }}</td>
                        <td class="p-3">
                            {{ livro.autores.map((a) => a.nome).join(', ') }}
                        </td>
                        <td class="p-3">
                            {{
                                livro.assuntos
                                    .map((s) => s.descricao)
                                    .join(', ')
                            }}
                        </td>
                        <td class="p-3">{{ moeda(livro.valor) }}</td>
                        <td class="flex justify-end gap-2 p-3">
                            <Button as-child size="sm" variant="outline">
                                <Link :href="show(livro.codl)">Ver</Link>
                            </Button>
                            <Button as-child size="sm" variant="outline">
                                <Link :href="edit(livro.codl)">Editar</Link>
                            </Button>
                            <Button
                                size="sm"
                                variant="destructive"
                                @click="excluir(livro)"
                            >
                                Excluir
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <nav v-if="livros.links.length > 3" class="flex flex-wrap gap-1">
            <template v-for="(link, i) in livros.links" :key="i">
                <Link
                    v-if="link.url"
                    :href="link.url"
                    class="rounded-md border px-3 py-1 text-sm"
                    :class="{ 'bg-primary text-primary-foreground': link.active }"
                    v-html="link.label"
                />
                <span
                    v-else
                    class="px-3 py-1 text-sm text-muted-foreground"
                    v-html="link.label"
                />
            </template>
        </nav>
    </div>
</template>
