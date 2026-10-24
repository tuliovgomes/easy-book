<script setup lang="ts">
import { X } from '@lucide/vue';
import { computed, ref } from 'vue';
import { Badge } from '@/components/ui/badge';

type Opcao = { id: number; label: string };

const props = defineProps<{
    opcoes: Opcao[];
    modelValue: number[];
    placeholder?: string;
    invalido?: boolean;
}>();

const emit = defineEmits<{
    'update:modelValue': [valor: number[]];
}>();

const busca = ref('');
const aberto = ref(false);
const ativo = ref(0);
const entrada = ref<HTMLInputElement | null>(null);

const normalizar = (texto: string) =>
    texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const selecionadas = computed(() =>
    props.modelValue
        .map((id) => props.opcoes.find((o) => o.id === id))
        .filter((o): o is Opcao => !!o),
);

const sugestoes = computed(() => {
    const termo = normalizar(busca.value.trim());

    return props.opcoes.filter(
        (o) =>
            !props.modelValue.includes(o.id) &&
            normalizar(o.label).includes(termo),
    );
});

function adicionar(opcao: Opcao) {
    emit('update:modelValue', [...props.modelValue, opcao.id]);
    busca.value = '';
    ativo.value = 0;
    entrada.value?.focus();
}

function remover(id: number) {
    emit(
        'update:modelValue',
        props.modelValue.filter((item) => item !== id),
    );
}

function mover(passo: number) {
    if (!sugestoes.value.length) {
        return;
    }

    aberto.value = true;
    ativo.value =
        (ativo.value + passo + sugestoes.value.length) %
        sugestoes.value.length;
}

function confirmar() {
    const opcao = sugestoes.value[ativo.value];

    if (opcao) {
        adicionar(opcao);
    }
}

function apagar() {
    if (!busca.value && props.modelValue.length) {
        remover(props.modelValue[props.modelValue.length - 1]);
    }
}

function fechar() {
    // atraso para o clique numa sugestão ser registrado antes de fechar
    setTimeout(() => (aberto.value = false), 120);
}
</script>

<template>
    <div class="relative">
        <div
            class="flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border border-input bg-transparent px-2 py-1.5 shadow-xs focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50"
            :class="{ 'border-red-500': invalido }"
            @click="entrada?.focus()"
        >
            <Badge
                v-for="item in selecionadas"
                :key="item.id"
                class="gap-1 py-0.5 pr-1 pl-2.5 text-sm"
            >
                {{ item.label }}
                <button
                    type="button"
                    class="rounded-full p-0.5 hover:bg-white/25"
                    :aria-label="`Remover ${item.label}`"
                    @click.stop="remover(item.id)"
                >
                    <X class="size-3" />
                </button>
            </Badge>

            <input
                ref="entrada"
                v-model="busca"
                type="text"
                role="combobox"
                autocomplete="off"
                aria-autocomplete="list"
                :aria-expanded="aberto"
                :placeholder="selecionadas.length ? '' : placeholder"
                class="min-w-32 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                @focus="aberto = true"
                @blur="fechar"
                @input="(aberto = true), (ativo = 0)"
                @keydown.down.prevent="mover(1)"
                @keydown.up.prevent="mover(-1)"
                @keydown.enter.prevent="confirmar"
                @keydown.esc="aberto = false"
                @keydown.backspace="apagar"
            />
        </div>

        <ul
            v-if="aberto"
            role="listbox"
            class="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
        >
            <li
                v-if="!sugestoes.length"
                class="px-2 py-1.5 text-sm text-muted-foreground"
            >
                {{
                    busca
                        ? 'Nenhum resultado encontrado.'
                        : 'Nenhuma opção disponível.'
                }}
            </li>
            <li
                v-for="(opcao, i) in sugestoes"
                :key="opcao.id"
                role="option"
                :aria-selected="i === ativo"
                class="cursor-pointer rounded-sm px-2 py-1.5 text-sm"
                :class="{ 'bg-accent text-accent-foreground': i === ativo }"
                @mousedown.prevent="adicionar(opcao)"
                @mousemove="ativo = i"
            >
                {{ opcao.label }}
            </li>
        </ul>
    </div>
</template>
