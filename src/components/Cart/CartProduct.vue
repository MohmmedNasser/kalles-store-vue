<template>
    <v-row class="my-2 border-b pb-2">
        <v-col cols="5" class="pa-2 pe-3">
            <v-img :src="product?.thumbnail" loading="lazy" height="127" class="w-full" cover></v-img>
        </v-col>
        <v-col cols="7" class="pa-0">
            <v-card-text tag="p" class="pa-0 opacity-100 pt-2">
                {{ product?.title }}
            </v-card-text>

            <v-card-subtitle tag="div" class="pa-0 opacity-100 mt-2 font-weight-medium">
                <span class="text-red-accent-3 text-body-2" v-if="product?.discountPercentage">
                    $ {{ ((product?.price - product?.price * (product?.discountPercentage /
                        100)) * product?.quantity).toFixed(2)
                    }}
                </span>
                <span class="text-red-accent-3 text-body-2" v-else>
                    $ {{ product?.price }}
                </span>
            </v-card-subtitle>

            <div class="d-flex ga-4 align-center justify-space-between">

                <Quantity cartQuantity="cart" :product="product" />

                <v-btn size="x-small" variant="plain" base-color="#424242" rounded="circle" :ripple="false"
                    class="opacity-100 pa-0 mt-3" height="20" width="20" @click="cart.removeFromCart(product)">
                    <Icon icon="iconamoon:trash" width="20"></Icon>
                </v-btn>
            </div>

        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Quantity from '../Products/Quantity.vue';
import type { Product } from '@/types';
import { useCartStore } from '@/stores/useCartStore';
import { computed } from 'vue';

const cart = useCartStore();

defineProps<{
    product?: Product
}>();

</script>

<style scoped></style>