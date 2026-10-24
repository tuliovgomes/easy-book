<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { toast } from 'vue-sonner';
import { Button } from '@/components/ui/button';
import { confirmar } from '@/lib/confirm';
import { create, destroy, edit, index, show } from '@/routes/assuntos';

type Assunto = { codas: number; descricao: string; livros_count: number };

defineProps<{
    assuntos: {
        data: Assunto[];
        links: { url: string | null; label: string; active: boolean }[];
    };
}>();

defineOptions({
    layout: { breadcrumbs: [{ title: 'Assuntos', href: index() }] },
});

async function excluir(assunto: Assunto) {
    const ok = await confirmar({
        titulo: 'Excluir assunto?',
        texto: `"${assunto.descricao}" será removido da listagem.`,
        confirmar: 'Sim, excluir',
        perigo: true,
    });

    if (!ok) {
        return;
    }

    router.delete(destroy(assunto.codas), {
        onError: (erros) => {
            toast.error(
                Object.values(erros)[0] ?? 'Não foi possível excluir o assunto.',
            );
        },
    });
}
</script>

<template>
    <Head title="Assuntos" />

    <div class="flex flex-col gap-4 p-4">
        <div class="flex items-center justify-between">
            <h1 class="text-xl font-semibold">Assuntos</h1>
            <Button as-child>
                <Link :href="create()">Novo assunto</Link>
            </Button>
        </div>

        <div
            class="overflow-x-auto rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
        >
            <table class="w-full text-left text-sm">
                <thead class="bg-muted/50">
                    <tr>
                        <th class="p-3">Descrição</th>
                        <th class="p-3">Livros</th>
                        <th class="p-3 text-right">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="!assuntos.data.length">
                        <td
                            colspan="3"
                            class="p-6 text-center text-muted-foreground"
                        >
                            Nenhum assunto cadastrado.
                        </td>
                    </tr>
                    <tr
                        v-for="assunto in assuntos.data"
                        :key="assunto.codas"
                        class="border-t"
                    >
                        <td class="p-3 font-medium">{{ assunto.descricao }}</td>
                        <td class="p-3">{{ assunto.livros_count }}</td>
                        <td class="flex justify-end gap-2 p-3">
                            <Button as-child size="sm" variant="outline">
                                <Link :href="show(assunto.codas)">Ver</Link>
                            </Button>
                            <Button as-child size="sm" variant="outline">
                                <Link :href="edit(assunto.codas)">Editar</Link>
                            </Button>
                            <Button
                                size="sm"
                                variant="destructive"
                                @click="excluir(assunto)"
                            >
                                Excluir
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <nav v-if="assuntos.links.length > 3" class="flex flex-wrap gap-1">
            <template v-for="(link, i) in assuntos.links" :key="i">
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
