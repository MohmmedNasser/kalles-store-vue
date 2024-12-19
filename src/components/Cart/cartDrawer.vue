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

            <div class="cart-wrap d-flex flex-column">
                <div class="py-3 px-5 cart-subtitle">
                    <v-card-subtitle tag="p" class="opacity-100 pa-0 text-subtitle-2 font-weight-medium text-wrap">
                        Almost there, add <span class="text-red-darken-2">$9.00</span> more to get <span
                            class="text-red-darken-2 text-uppercase">FREE
                            SHIPPING</span>!
                    </v-card-subtitle>
                </div>

                <div class="px-5 cart-list">
                    <CartProduct />
                    <CartProduct />
                </div>

                <div class="cart-foot px-5 mt-1 pt-3">
                    <v-row>
                        <v-col cols="6">
                            <span class="font-weight-bold text-body-1">
                                Subtotal:
                            </span>
                        </v-col>
                        <v-col cols="6" class="text-end">
                            <span class="font-weight-medium text-subtitle-1">
                                $91.00
                            </span>
                        </v-col>
                    </v-row>

                    <v-card-text tag="p" class="pa-0 mt-2 text-subtitle-2 text-grey-darken-2">
                        Taxes, shipping and discounts codes calculated at checkout
                    </v-card-text>


                    <v-checkbox v-model="agree" base-color="#222222" color="#0dcaf0">
                        <template v-slot:label>
                            <div class="text-subtitle-2 font-weight-regular text-grey-darken-3">
                                I agree with the terms and conditions.
                            </div>
                        </template>
                    </v-checkbox>

                    <router-link to="/"
                        class="d-flex justify-center w-full py-3 px-4 text-center rounded-pill text-uppercase text-grey-darken-4 bg-grey-lighten-3 text-body-2 font-weight-medium mb-2 letter-spacing-3 view-cart-btn">
                        View cart
                    </router-link>
                    <router-link to="/"
                        class="d-flex justify-center w-full py-3 px-4 text-center rounded-pill text-uppercase text-white text-body-2 font-weight-medium letter-spacing-3  check-out-btn">
                        Check out
                    </router-link>

                </div>

            </div>

        </v-card>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import useCartMenu from '@/composables/useCartMenu';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import CartProduct from './CartProduct.vue';

const { isActiveCartMenu, toggleCartMenu } = useCartMenu();
const agree = ref(false);

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

.check-out-btn {
    background-color: #0dcaf0;
}

.check-out-btn:hover {
    background-color: #0baccc !important;
}
</style>