<template>
    <section class="mb-10">
        <v-card elevation="0" image="./images/shopping-cart-head.jpg" cla height="128"
            class="d-flex justify-center align-center position-relative page-heading">
            <!-- <v-img src="./images/shopping-cart-head.jpg" height="128" cover alt="shopping cart" loading="lazy"></v-img> -->
            <v-card-title tag="h1" class="text-center text-white text-h6 font-weight-medium text-uppercase ma-0">
                Shopping Cart
            </v-card-title>
        </v-card>
    </section>
    <section class="mt-5 mb-10">
        <v-container>
            <v-table class="cart-table">
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
                                        class="opacity-100 pa-0" min-width="auto"
                                        @click="cartStore.removeFromCart(product)">
                                        <Icon icon="iconamoon:trash" width="20"></Icon>
                                    </v-btn>
                                </div>
                            </div>
                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </v-table>
            {{ cartStore.getCartItems }}
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useCartStore } from '@/stores/useCartStore';
const cartStore = useCartStore();

</script>

<style scoped>
.cart-table thead tr th {
    height: auto !important;
    padding-bottom: 10px !important;
}

.page-heading:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(34, 34, 34, 0.5);
    z-index: -1;
}
</style>