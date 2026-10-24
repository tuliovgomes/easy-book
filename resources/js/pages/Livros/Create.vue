<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import LivroForm from '@/components/LivroForm.vue';
import { create, index } from '@/routes/livros';

defineProps<{
    autores: { codau: number; nome: string }[];
    assuntos: { codas: number; descricao: string }[];
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Livros', href: index() },
            { title: 'Novo', href: create() },
        ],
    },
});
</script>

<template>
    <Head title="Novo livro" />

    <div class="p-4">
        <h1 class="mb-6 text-xl font-semibold">Novo livro</h1>
        <LivroForm :autores="autores" :assuntos="assuntos" />
    </div>
</template>
