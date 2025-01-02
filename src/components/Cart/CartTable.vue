<template>
    <v-table class="cart-table border-b">
        <thead>
            <tr>
                <th class="text-start text-uppercase">
                    PRODUCT
                </th>
                <th class="text-center text-uppercase">
                    PRICE
                </th>
                <th class="text-center text-uppercase">
                    QUALITY
                </th>
                <th class="text-center text-uppercase">
                    TOTAL
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in cartStore.getCartItems" :key="index">
                <td class="py-3">
                    <div class="d-flex align-center ga-3">
                        <v-img :src="product?.thumbnail" loading="lazy" height="153" width="120"
                            class="flex-grow-0"></v-img>
                        <div>
                            <p class="mb-2 font-weight-bold text-body-2">{{ product?.title }}</p>
                            <v-btn size="x-small" variant="plain" base-color="#757575" :ripple="false"
                                class="opacity-100 pa-0" min-width="auto" @click="cartStore.removeFromCart(product)">
                                <Icon icon="iconamoon:trash" width="20"></Icon>
                            </v-btn>
                        </div>
                    </div>
                </td>
                <td class="text-center">

                    <span class="d-block mb-2">
                        <span class="text-grey-darken-2 font-weight-regular text-body-2"
                            v-if="product?.discountPercentage">
                            $ {{ ((product?.price - product?.price * (product?.discountPercentage /
                                100))).toFixed(2)
                            }}
                        </span>
                        <span class="text-grey-darken-2 font-weight-regular text-body-2" v-else>
                            $ {{ product?.price ? (product?.price).toFixed(2) : 0 }}
                        </span>
                    </span>


                </td>
                <td class="text-center">
                    <Quantity cartQuantity="cart" :product="product" />
                </td>

                <td class="text-center">
                    <span class="font-weight-medium text-grey-darken-4">
                        $ {{ productPrices[index] }}
                    </span>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup lang="ts">
import Quantity from '@/components/Products/Quantity.vue';
import { Icon } from '@iconify/vue';
import { useCartStore } from '@/stores/useCartStore';
import { useCartCalculations } from '@/composables/useCartCalculations';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const { productPrices } = useCartCalculations();
const router = useRouter();

watch(() => cartStore.cartItems, (newCart, oldCart) => {
    if (newCart.length === 0) {
        router.push({ name: 'home' });
    }
})

// const productPrices = computed(() =>
//     cartStore.getCartItems.map((product: CartItem) => {
//         const quantity = product.quantity || 0;
//         if (product.discountPercentage) {
//             return ((product.price - product.price * (product.discountPercentage / 100)) * quantity).toFixed(2);
//         } else {
//             return (product.price * quantity).toFixed(2);
//         }
//     })
// );
</script>

<style scoped></style>