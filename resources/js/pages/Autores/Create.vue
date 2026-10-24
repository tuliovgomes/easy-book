<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AutorForm from '@/components/AutorForm.vue';
import { create, index } from '@/routes/autores';

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Autores', href: index() },
            { title: 'Novo', href: create() },
        ],
    },
});
</script>

<template>
    <Head title="Novo autor" />

    <div class="p-4">
        <h1 class="mb-6 text-xl font-semibold">Novo autor</h1>
        <AutorForm />
    </div>
</template>
