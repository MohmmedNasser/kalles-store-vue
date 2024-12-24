<template>
    <div>
        <v-row>
            <v-col cols="6">
                <div>
                    <label for="help" class="text-grey-darken-4 text-body-2 font-weight-medium">
                        Add Order Note
                    </label>
                    <v-textarea variant="outlined" density="compact" no-resize id="help" max-width="540"
                        class="mt-3 text-body-2" label="How can we help you ?"></v-textarea>
                </div>

                <div>
                    <label for="coupon" class="text-grey-darken-4 text-body-2 font-weight-medium">
                        Coupon:
                    </label>
                    <p class="text-grey-darken-2 text-body-2 mt-2">
                        Coupon code will work on checkout page
                    </p>
                    <v-text-field id="coupon" class="mt-3 text-body-2" density="compact" label="Coupon Code"
                        variant="outlined"></v-text-field>
                </div>

            </v-col>
            <v-col cols="6">
                <v-card elevation="0" class="text-end">
                    <v-card-title tag="h5" class="font-weight-medium text-h6 mb-2 pa-0">
                        SUBTOTAL : $ {{ totalCartPrice }}
                    </v-card-title>
                    <v-card-subtitle tag="p" class="opacity-100 pa-0 text-subtitle-2 text-grey-darken-1">
                        Taxes, shipping and discounts codes calculated at checkout
                    </v-card-subtitle>

                    <div class="d-flex justify-end">
                        <v-checkbox v-model="agree" base-color="#222222" color="#0dcaf0" class="checkbox-agree">
                            <template v-slot:label>
                                <div class="text-subtitle-2 font-weight-regular text-grey-darken-4">
                                    I agree with the terms and conditions.
                                </div>
                            </template>
                        </v-checkbox>
                    </div>

                    <Checkout :agree="!agree" class="mb-4 custom-width" />

                    <v-img src="./images/cart_image.png" class="ms-auto" contain width="300"></v-img>

                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Checkout from '../Buttons/Checkout.vue';
import type { CartItem } from '@/types';
import { useCartStore } from '@/stores/useCartStore';
const agree = ref<boolean>(false);
const cartStore = useCartStore();


const totalCartPrice = computed(() => {
    let total = 0;
    cartStore.getCartItems.forEach((item: CartItem) => {
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
.custom-width {
    width: auto !important;
    margin-inline-start: auto;
    min-width: 180px;
}

:deep(.checkbox-agree .v-input__details) {
    display: none !important;
}
</style>