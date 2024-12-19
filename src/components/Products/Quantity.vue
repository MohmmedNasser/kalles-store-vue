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
import { Icon } from '@iconify/vue/dist/iconify.js';
import { ref, watch } from 'vue';

const quantity = ref<number>(1);

const props = defineProps<{
    id?: any;
}>();

watch(() => props.id, async (newRoute) => {
    if (newRoute) {
        quantity.value = 1;
    }
});

const increaseQuantity = () => {
    if (quantity.value < 100) {
        quantity.value++;
    }
};

const decreaseQuantity = () => {
    if (quantity.value > 0) {
        quantity.value--;
    }
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