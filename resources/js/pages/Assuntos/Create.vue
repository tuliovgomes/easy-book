<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AssuntoForm from '@/components/AssuntoForm.vue';
import { create, index } from '@/routes/assuntos';

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Assuntos', href: index() },
            { title: 'Novo', href: create() },
        ],
    },
});
</script>

<template>
    <Head title="Novo assunto" />

    <div class="p-4">
        <h1 class="mb-6 text-xl font-semibold">Novo assunto</h1>
        <AssuntoForm />
    </div>
</template>
