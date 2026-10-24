<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { index, store, update } from '@/routes/autores';

const props = defineProps<{
    autor?: { codau: number; nome: string };
}>();

const form = useForm({
    nome: props.autor?.nome ?? '',
});

function submit() {
    form.submit(props.autor ? update(props.autor.codau) : store());
}
</script>

<template>
    <form class="max-w-2xl space-y-6" novalidate @submit.prevent="submit">
        <div class="grid gap-2">
            <Label for="nome">Nome</Label>
            <Input id="nome" v-model="form.nome" maxlength="40" autofocus />
            <InputError :message="form.errors.nome" />
        </div>

        <div class="flex items-center gap-3">
            <Button type="submit" :disabled="form.processing">Salvar</Button>
            <Button as-child variant="outline">
                <Link :href="index()">Cancelar</Link>
            </Button>
        </div>
    </form>
</template>
