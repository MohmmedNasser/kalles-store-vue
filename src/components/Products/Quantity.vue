<template>
    <div class="rounded-pill border border-opacity-50 d-inline-flex align-center mt-4">

        <v-btn class="minus opacity-100 pa-0 rounded-pill" size="x-small" variant="plain" base-color="#000000"
            height="30" width="20" :ripple="false" @click="decreaseQuantity">
            <Icon icon="mynaui:minus-solid" width="12" class="text-black"></Icon>
        </v-btn>

        <input type="number"
            class="product-quantity text-center border-none outline-none fw-bold text-body-2 font-weight-medium"
            value="1" min="0" max="100" v-model="quantity">

        <v-btn class="plus opacity-100 pa-0 rounded-pill" size="x-small" variant="plain" base-color="#000000"
            height="30" width="20" :ripple="false" @click="increaseQuantity">
            <Icon icon="tabler:plus" width="12" class="text-black"></Icon>
        </v-btn>

    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { onMounted, ref, watch } from 'vue';
import type { Product } from '@/types';

const quantity = ref<number>(1);
const cartStore = useCartStore();

const props = defineProps<{
    id?: any,
    product?: Product,
    cartQuantity?: string,
}>();

watch(() => props.id, async (newRoute) => {
    if (newRoute) {
        quantity.value = 1;
    }
});

if (props.cartQuantity == 'cart') {
    onMounted(() => {
        quantity.value = props.product?.quantity || 1;
    });

    watch(() => props.product?.quantity, (newQuantity) => {
        if (newQuantity) {
            quantity.value = props.product?.quantity || 1;
        }
    });
}

const emit = defineEmits(['updateQuantity']);

const increaseQuantity = () => {
    if (quantity.value < 100) {
        quantity.value++;
        if (props.cartQuantity == 'cart') {
            cartStore.incrementQ(props.product);
        }
    }
    emit('updateQuantity', quantity.value);
};

const decreaseQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
        if (props.cartQuantity == 'cart') {
            cartStore.decrementQ(props.product);
        }
    }
    emit('updateQuantity', quantity.value);
};

</script>

<style scoped>
.product-quantity {
    width: 25px;
    outline: none !important;
    user-select: none;
    pointer-events: none;
}

.product-quantity::-webkit-inner-spin-button,
.product-quantity::-webkit-outer-spin-button {
    appearance: none;
    -webkit-appearance: none;
}
</style>