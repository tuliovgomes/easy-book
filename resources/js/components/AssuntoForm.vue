<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { index, store, update } from '@/routes/assuntos';

const props = defineProps<{
    assunto?: { codas: number; descricao: string };
}>();

const form = useForm({
    descricao: props.assunto?.descricao ?? '',
});

function submit() {
    form.submit(props.assunto ? update(props.assunto.codas) : store());
}
</script>

<template>
    <form class="max-w-2xl space-y-6" novalidate @submit.prevent="submit">
        <div class="grid gap-2">
            <Label for="descricao">Descrição</Label>
            <Input id="descricao" v-model="form.descricao" maxlength="20" autofocus />
            <InputError :message="form.errors.descricao" />
        </div>

        <div class="flex items-center gap-3">
            <Button type="submit" :disabled="form.processing">Salvar</Button>
            <Button as-child variant="outline">
                <Link :href="index()">Cancelar</Link>
            </Button>
        </div>
    </form>
</template>
