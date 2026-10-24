<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { edit, index } from '@/routes/livros';

defineProps<{
    livro: {
        codl: number;
        titulo: string;
        editora: string;
        edicao: number;
        ano_publicacao: string;
        valor: string | number;
        autores: { codau: number; nome: string }[];
        assuntos: { codas: number; descricao: string }[];
    };
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Livros', href: index() },
            { title: 'Detalhes', href: index() },
        ],
    },
});

const moeda = (valor: string | number) =>
    Number(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
</script>

<template>
    <Head :title="livro.titulo" />

    <div class="max-w-2xl space-y-6 p-4">
        <h1 class="text-xl font-semibold">{{ livro.titulo }}</h1>

        <dl class="grid grid-cols-[10rem_1fr] items-start gap-y-3 text-sm">
            <dt class="text-muted-foreground">Editora</dt>
            <dd>{{ livro.editora }}</dd>

            <dt class="text-muted-foreground">Edição</dt>
            <dd>{{ livro.edicao }}</dd>

            <dt class="text-muted-foreground">Ano de publicação</dt>
            <dd>{{ livro.ano_publicacao }}</dd>

            <dt class="text-muted-foreground">Valor</dt>
            <dd>{{ moeda(livro.valor) }}</dd>

            <dt class="text-muted-foreground">Autores</dt>
            <dd class="flex flex-wrap gap-1.5">
                <Badge v-for="a in livro.autores" :key="a.codau">
                    {{ a.nome }}
                </Badge>
            </dd>

            <dt class="text-muted-foreground">Assuntos</dt>
            <dd class="flex flex-wrap gap-1.5">
                <Badge
                    v-for="s in livro.assuntos"
                    :key="s.codas"
                    variant="secondary"
                >
                    {{ s.descricao }}
                </Badge>
            </dd>
        </dl>

        <div class="flex gap-3">
            <Button as-child>
                <Link :href="edit(livro.codl)">Editar</Link>
            </Button>
            <Button as-child variant="outline">
                <Link :href="index()">Voltar</Link>
            </Button>
        </div>
    </div>
</template>
