<template>
    <v-navigation-drawer elevation="0" v-model="isActiveCartMenu" class="cart-drawer" location="right" width="340"
        sticky temporary>
        <v-card elevation="0" class="py-5">

            <div class="d-flex align-center justify-space-between border-b pb-3 px-5 ">
                <v-card-title tag="h5" class="opacity-100 pa-0 text-grey-darken-4 text-subtitle-1 text-uppercase">
                    Shopping Cart
                </v-card-title>
                <v-btn size="x-small" variant="plain" base-color="#222222" width="30" height="30"
                    @click="toggleCartMenu">
                    <Icon icon="material-symbols:close-rounded" width="25"></Icon>
                </v-btn>
            </div>

            <div class="cart-wrap d-flex flex-column" v-if="cart.length">
                <div class="py-3 px-5 cart-subtitle">
                    <v-card-subtitle tag="p" class="opacity-100 pa-0 text-subtitle-2 font-weight-medium text-wrap"
                        v-if="freeShippingCalc > 0">
                        Almost there, add <span class="text-red-darken-2">$ {{ freeShippingCalc }} </span>
                        more to get <span class="text-red-darken-2 text-uppercase">FREE
                            SHIPPING</span>!
                    </v-card-subtitle>
                    <v-card-subtitle tag="p" class="opacity-100 pa-0 text-subtitle-2 font-weight-medium text-wrap"
                        v-else>
                        Congratulations, you got <span class="text-red-darken-2 text-uppercase">FREE
                            SHIPPING</span>.
                    </v-card-subtitle>
                </div>


                <div class="px-5 cart-list">
                    <CartProduct v-for="(product, index) in cart" :key="index" :product="product" />
                </div>

                <div class="cart-foot px-5 mt-1 pt-3">
                    <v-row>
                        <v-col cols="6">
                            <span class="font-weight-bold text-body-1">
                                Total:
                            </span>
                        </v-col>
                        <v-col cols="6" class="text-end">
                            <span class="font-weight-medium text-subtitle-1">
                                $ {{ totalCartPrice }}
                            </span>
                        </v-col>
                    </v-row>

                    <v-card-text tag="p" class="pa-0 mt-2 text-subtitle-2 text-grey-darken-2">
                        Taxes, shipping and discounts codes calculated at checkout
                    </v-card-text>


                    <v-checkbox v-model="agree" base-color="#222222" color="#0dcaf0" class="checkbox-agree">
                        <template v-slot:label>
                            <div class="text-subtitle-2 font-weight-regular text-grey-darken-3">
                                I agree with the terms and conditions.
                            </div>
                        </template>
                    </v-checkbox>


                    <router-link :to="{ name: 'cart' }"
                        class="d-flex justify-center w-full py-3 px-4 text-center rounded-pill text-uppercase text-grey-darken-4 bg-grey-lighten-3 text-body-2 font-weight-medium mb-2 letter-spacing-3 view-cart-btn">
                        View cart
                    </router-link>

                    <Checkout :agree="!agree" />

                </div>

            </div>

            <div class="cart-empty" v-else>
                <div class="d-flex justify-center align-center">
                    <Icon icon="noto:shopping-cart" width="100"></Icon>
                </div>
                <v-card-title tag="h5"
                    class="opacity-100 d-flex justify-center align-center pa-0 mt-4 h-full text-grey-darken-4 text-subtitle-1 text-uppercase">
                    No items in cart
                </v-card-title>
            </div>


        </v-card>


    </v-navigation-drawer>
</template>

<script setup lang="ts">
import useCartMenu from '@/composables/useCartMenu';
import { Icon } from '@iconify/vue';
import { computed, onMounted, ref, watch } from 'vue';
import CartProduct from './CartProduct.vue';
import { useCartStore } from '@/stores/useCartStore';
import type { CartItem } from '@/types';
import Checkout from '../Buttons/Checkout.vue';

const { isActiveCartMenu, toggleCartMenu } = useCartMenu();
const cartStore = useCartStore();
const agree = ref<boolean>(false);
const freeShipping = ref<number>(5000);

const cart = ref(cartStore.getCartItems);

onMounted(() => {
    cart.value = cartStore.getCartItems;
});

watch(() => cartStore.getCartItems, () => {
    cart.value = cartStore.getCartItems;
});

const freeShippingCalc = computed(() => {
    return parseFloat((freeShipping.value - totalCartPrice.value).toFixed(2));
});

const totalCartPrice = computed(() => {
    let total = 0;
    cart.value.forEach((item: CartItem) => {
        let price = 0;
        if (item?.discountPercentage) {
            price = (item.price - (item.price * item.discountPercentage) / 100) * item.quantity;
        } else {
            price = item.price * item.quantity;
        }
        total += Math.round(price * 100) / 100;
    });
    return Math.round(total * 100) / 100;
});

</script>

<style scoped>
.v-navigation-drawer {
    height: 100% !important;
    top: 0 !important;
    z-index: 999999 !important;
}

.letter-spacing-3 {
    letter-spacing: 3px !important;
    line-height: normal;
}


/* cart-wrap */
.cart-wrap {
    height: calc(100vh - 83px);
}

.cart-wrap .cart-subtitle {
    box-shadow: 0 3px 10px 0 rgba(129, 129, 129, 0.2);
}

/* cart-list */
.cart-list {
    flex-grow: 1;
    overflow-y: auto;
}

.cart-list::-webkit-scrollbar-track {
    background: #FFF;
}

.cart-list::-webkit-scrollbar-thumb {
    background: #B0BEC5;
}

.cart-list::-webkit-scrollbar {
    width: 3px;
    height: 3px;
}

/* cart Buttons */

.view-cart-btn:hover {
    background-color: #BDBDBD !important;
}

:deep(.checkbox-agree .v-input__details) {
    display: none !important;
}

.cart-empty {
    height: calc(100vh - 83px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>