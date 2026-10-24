<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { toast } from 'vue-sonner';
import { Button } from '@/components/ui/button';
import { confirmar } from '@/lib/confirm';
import { create, destroy, edit, index, show } from '@/routes/autores';

type Autor = { codau: number; nome: string; livros_count: number };

defineProps<{
    autores: {
        data: Autor[];
        links: { url: string | null; label: string; active: boolean }[];
    };
}>();

defineOptions({
    layout: { breadcrumbs: [{ title: 'Autores', href: index() }] },
});

async function excluir(autor: Autor) {
    const ok = await confirmar({
        titulo: 'Excluir autor?',
        texto: `"${autor.nome}" será removido da listagem.`,
        confirmar: 'Sim, excluir',
        perigo: true,
    });

    if (!ok) {
        return;
    }

    router.delete(destroy(autor.codau), {
        onError: (erros) => {
            toast.error(
                Object.values(erros)[0] ?? 'Não foi possível excluir o autor.',
            );
        },
    });
}
</script>

<template>
    <Head title="Autores" />

    <div class="flex flex-col gap-4 p-4">
        <div class="flex items-center justify-between">
            <h1 class="text-xl font-semibold">Autores</h1>
            <Button as-child>
                <Link :href="create()">Novo autor</Link>
            </Button>
        </div>

        <div
            class="overflow-x-auto rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
        >
            <table class="w-full text-left text-sm">
                <thead class="bg-muted/50">
                    <tr>
                        <th class="p-3">Nome</th>
                        <th class="p-3">Livros</th>
                        <th class="p-3 text-right">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="!autores.data.length">
                        <td
                            colspan="3"
                            class="p-6 text-center text-muted-foreground"
                        >
                            Nenhum autor cadastrado.
                        </td>
                    </tr>
                    <tr
                        v-for="autor in autores.data"
                        :key="autor.codau"
                        class="border-t"
                    >
                        <td class="p-3 font-medium">{{ autor.nome }}</td>
                        <td class="p-3">{{ autor.livros_count }}</td>
                        <td class="flex justify-end gap-2 p-3">
                            <Button as-child size="sm" variant="outline">
                                <Link :href="show(autor.codau)">Ver</Link>
                            </Button>
                            <Button as-child size="sm" variant="outline">
                                <Link :href="edit(autor.codau)">Editar</Link>
                            </Button>
                            <Button
                                size="sm"
                                variant="destructive"
                                @click="excluir(autor)"
                            >
                                Excluir
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <nav v-if="autores.links.length > 3" class="flex flex-wrap gap-1">
            <template v-for="(link, i) in autores.links" :key="i">
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
