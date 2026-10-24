<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { edit, index } from '@/routes/assuntos';
import { show as livroShow } from '@/routes/livros';

defineProps<{
    assunto: {
        codas: number;
        descricao: string;
        livros: { codl: number; titulo: string; editora: string }[];
    };
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Assuntos', href: index() },
            { title: 'Detalhes', href: index() },
        ],
    },
});
</script>

<template>
    <Head :title="assunto.descricao" />

    <div class="max-w-2xl space-y-6 p-4">
        <h1 class="text-xl font-semibold">{{ assunto.descricao }}</h1>

        <div>
            <h2 class="mb-2 text-sm font-medium text-muted-foreground">
                Livros
            </h2>
            <p
                v-if="!assunto.livros.length"
                class="text-sm text-muted-foreground"
            >
                Nenhum livro associado a este assunto.
            </p>
            <ul v-else class="divide-y rounded-md border text-sm">
                <li
                    v-for="livro in assunto.livros"
                    :key="livro.codl"
                    class="flex items-center justify-between p-3"
                >
                    <div>
                        <p class="font-medium">{{ livro.titulo }}</p>
                        <p class="text-muted-foreground">{{ livro.editora }}</p>
                    </div>
                    <Button as-child size="sm" variant="outline">
                        <Link :href="livroShow(livro.codl)">Ver</Link>
                    </Button>
                </li>
            </ul>
        </div>

        <div class="flex gap-3">
            <Button as-child>
                <Link :href="edit(assunto.codas)">Editar</Link>
            </Button>
            <Button as-child variant="outline">
                <Link :href="index()">Voltar</Link>
            </Button>
        </div>
    </div>
</template>
