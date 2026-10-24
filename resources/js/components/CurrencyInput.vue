<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '@/lib/utils';

// v-model em string numérica com ponto decimal ("1234.56"); exibe "R$ 1.234,56".
const model = defineModel<string | number>({ default: '' });

const centavos = computed(() => {
    if (model.value === '' || model.value === null) {
        return null;
    }

    return Math.round(Number(model.value) * 100);
});

const formatado = computed(() =>
    centavos.value === null
        ? ''
        : (centavos.value / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
          }),
);

function aoDigitar(evento: Event) {
    const campo = evento.target as HTMLInputElement;
    const digitos = campo.value.replace(/\D/g, '').slice(0, 10);

    model.value = digitos ? (Number(digitos) / 100).toFixed(2) : '';

    // força o campo a refletir o valor formatado mesmo se o modelo não mudou
    campo.value = formatado.value;
}
</script>

<template>
    <input
        type="text"
        inputmode="numeric"
        autocomplete="off"
        placeholder="R$ 0,00"
        data-slot="input"
        :value="formatado"
        :class="
            cn(
                'h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
                'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
            )
        "
        @input="aoDigitar"
    >
</template>
