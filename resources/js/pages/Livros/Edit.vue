<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import LivroForm from '@/components/LivroForm.vue';
import { index } from '@/routes/livros';

defineProps<{
    livro: {
        codl: number;
        titulo: string;
        editora: string;
        edicao: number;
        ano_publicacao: string;
        valor: string | number;
    };
    autores: { codau: number; nome: string }[];
    assuntos: { codas: number; descricao: string }[];
    autoresSelecionados: number[];
    assuntosSelecionados: number[];
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Livros', href: index() },
            { title: 'Editar', href: index() },
        ],
    },
});
</script>

<template>
    <Head title="Editar livro" />

    <div class="p-4">
        <h1 class="mb-6 text-xl font-semibold">Editar livro</h1>
        <LivroForm
            :livro="livro"
            :autores="autores"
            :assuntos="assuntos"
            :autores-selecionados="autoresSelecionados"
            :assuntos-selecionados="assuntosSelecionados"
        />
    </div>
</template>
