<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AssuntoForm from '@/components/AssuntoForm.vue';
import { index } from '@/routes/assuntos';

defineProps<{
    assunto: { codas: number; descricao: string };
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Assuntos', href: index() },
            { title: 'Editar', href: index() },
        ],
    },
});
</script>

<template>
    <Head title="Editar assunto" />

    <div class="p-4">
        <h1 class="mb-6 text-xl font-semibold">Editar assunto</h1>
        <AssuntoForm :assunto="assunto" />
    </div>
</template>
