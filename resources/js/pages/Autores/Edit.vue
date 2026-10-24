<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AutorForm from '@/components/AutorForm.vue';
import { index } from '@/routes/autores';

defineProps<{
    autor: { codau: number; nome: string };
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Autores', href: index() },
            { title: 'Editar', href: index() },
        ],
    },
});
</script>

<template>
    <Head title="Editar autor" />

    <div class="p-4">
        <h1 class="mb-6 text-xl font-semibold">Editar autor</h1>
        <AutorForm :autor="autor" />
    </div>
</template>
