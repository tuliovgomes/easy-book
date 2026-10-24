<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import CurrencyInput from '@/components/CurrencyInput.vue';
import InputError from '@/components/InputError.vue';
import TagSelect from '@/components/TagSelect.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { index, store, update } from '@/routes/livros';

type Autor = { codau: number; nome: string };
type Assunto = { codas: number; descricao: string };
type Livro = {
    codl: number;
    titulo: string;
    editora: string;
    edicao: number;
    ano_publicacao: string;
    valor: string | number;
};

const props = defineProps<{
    autores: Autor[];
    assuntos: Assunto[];
    livro?: Livro;
    autoresSelecionados?: number[];
    assuntosSelecionados?: number[];
}>();

const form = useForm({
    titulo: props.livro?.titulo ?? '',
    editora: props.livro?.editora ?? '',
    edicao: props.livro?.edicao ?? 1,
    ano_publicacao: props.livro?.ano_publicacao ?? '',
    valor: props.livro?.valor ?? '',
    autores: props.autoresSelecionados ?? ([] as number[]),
    assuntos: props.assuntosSelecionados ?? ([] as number[]),
});

const opcoesAutores = computed(() =>
    props.autores.map((a) => ({ id: a.codau, label: a.nome })),
);
const opcoesAssuntos = computed(() =>
    props.assuntos.map((s) => ({ id: s.codas, label: s.descricao })),
);

const tentouEnviar = ref(false);

const erros = computed(() => {
    const lista: Record<string, string> = { ...form.errors };

    if (tentouEnviar.value) {
        if (!form.autores.length) {
            lista.autores = 'Selecione ao menos um autor.';
        }

        if (!form.assuntos.length) {
            lista.assuntos = 'Selecione ao menos um assunto.';
        }
    }

    return lista;
});

const resumo = computed(() => Object.values(erros.value));

function submit() {
    tentouEnviar.value = true;

    if (!form.autores.length || !form.assuntos.length) {
        return;
    }

    form.submit(props.livro ? update(props.livro.codl) : store(), {
        onError: () => {
            tentouEnviar.value = true;
        },
    });
}
</script>

<template>
    <form class="max-w-2xl space-y-6" novalidate @submit.prevent="submit">
        <div
            v-if="resumo.length"
            role="alert"
            class="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400"
        >
            <p class="font-medium">Corrija os campos abaixo:</p>
            <ul class="list-disc pl-5">
                <li v-for="(mensagem, i) in resumo" :key="i">{{ mensagem }}</li>
            </ul>
        </div>

        <div class="grid gap-2">
            <Label for="titulo">Título</Label>
            <Input id="titulo" v-model="form.titulo" maxlength="40" required />
            <InputError :message="erros.titulo" />
        </div>

        <div class="grid gap-2">
            <Label for="editora">Editora</Label>
            <Input id="editora" v-model="form.editora" maxlength="40" required />
            <InputError :message="erros.editora" />
        </div>

        <div class="grid gap-4 sm:grid-cols-3">
            <div class="grid gap-2">
                <Label for="edicao">Edição</Label>
                <Input id="edicao" v-model="form.edicao" type="number" min="1" required />
                <InputError :message="erros.edicao" />
            </div>
            <div class="grid gap-2">
                <Label for="ano_publicacao">Ano de publicação</Label>
                <Input id="ano_publicacao" v-model="form.ano_publicacao" maxlength="4" placeholder="2024" required />
                <InputError :message="erros.ano_publicacao" />
            </div>
            <div class="grid gap-2">
                <Label for="valor">Valor</Label>
                <CurrencyInput id="valor" v-model="form.valor" />
                <InputError :message="erros.valor" />
            </div>
        </div>

        <div class="grid gap-2">
            <Label>Autores</Label>
            <TagSelect
                v-model="form.autores"
                :opcoes="opcoesAutores"
                :invalido="!!erros.autores"
                placeholder="Digite o nome de um autor..."
                @update:model-value="form.clearErrors('autores')"
            />
            <InputError :message="erros.autores" />
        </div>

        <div class="grid gap-2">
            <Label>Assuntos</Label>
            <TagSelect
                v-model="form.assuntos"
                :opcoes="opcoesAssuntos"
                :invalido="!!erros.assuntos"
                placeholder="Digite um assunto..."
                @update:model-value="form.clearErrors('assuntos')"
            />
            <InputError :message="erros.assuntos" />
        </div>

        <div class="flex items-center gap-3">
            <Button type="submit" :disabled="form.processing">Salvar</Button>
            <Button as-child variant="outline">
                <Link :href="index()">Cancelar</Link>
            </Button>
        </div>
    </form>
</template>
