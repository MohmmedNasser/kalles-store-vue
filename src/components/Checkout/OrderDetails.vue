<template>
    <section class="bg-grey-lighten-4 py-8 px-5 rounded-lg">
        <CheckoutSectionHead title="Your order" />
        <div class="">
            <v-table class="bg-transparent border-b">

                <thead>
                    <tr>
                        <th class="text-left font-weight-medium px-0">
                            Product
                        </th>
                        <th class="text-end font-weight-medium px-0">
                            Subtotal
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td class="text-left font-weight-light px-0">
                            Black mountain hat x <span class="font-weight-medium">10</span>
                        </td>
                        <td class="text-end px-0">
                            $50.00
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-medium px-0">
                            Subtotal
                        </td>
                        <td class="text-end px-0">
                            $85.00
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-medium px-0">
                            Shipping
                        </td>
                        <td class="text-end px-0">
                            $50.00
                        </td>
                    </tr>
                    <tr>
                        <td class="text-start font-weight-medium px-0">
                            Total
                        </td>
                        <td class="text-end px-0">
                            $145.00
                        </td>
                    </tr>
                </tbody>
            </v-table>

            <div class="mt-2">
                <v-radio-group v-model="paymentType">
                    <div class="mb-3">
                        <div class="pb-1 border-b">
                            <v-radio value="directTransfer" base-color="#222222" color="#0dcaf0">
                                <template v-slot:label>
                                    <span class="font-weight-regular text-subtitle-2">
                                        Direct bank transfer
                                    </span>
                                </template>
                            </v-radio>
                        </div>
                        <div class="bg-grey-lighten-3 pa-4" v-show="paymentType == 'directTransfer'">
                            <p class="font-weight-light text-body-2">
                                Make your payment directly into our bank account. Please use your Order ID as the
                                payment
                                reference. Your order will not be shipped until the funds have cleared in our account.
                            </p>

                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="mb-1">
                            <v-radio value="creditCard" base-color="#222222" color="#0dcaf0">
                                <template v-slot:label>
                                    <span class="font-weight-regular text-subtitle-2">
                                        Credit Card (Stripe)
                                    </span>
                                </template>
                            </v-radio>
                        </div>
                        <div class="bg-grey-lighten-3 pa-4" v-show="paymentType == 'creditCard'">
                            <p class="font-weight-light text-body-2">
                                Pay with your credit card via Stripe. TEST MODE ENABLED. In test mode, you can use the
                                card
                                number 4242424242424242 with any CVC and a valid expiration date or check the Testing
                                Stripe
                                documentation for more card numbers.
                            </p>
                            <div class="mt-4">
                                <v-row>
                                    <v-col cols="12" class="pb-0">

                                        <label for="cardNumber" class="font-weight-regular text-body-2">
                                            Card Number*
                                        </label>
                                        <v-text-field id="cardNumber" class="mt-2 bg-white text-body-2 payinput"
                                            rounded="md" density="compact" placeholder="1234 1234 1234 1234"
                                            variant="outlined"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="6">

                                        <label for="expiryDate" class="font-weight-regular text-body-2">
                                            Expiry Date *
                                        </label>
                                        <v-text-field id="expiryDate" class="mt-2 bg-white text-body-2 payinput"
                                            rounded="md" density="compact" placeholder="MM/YY"
                                            variant="outlined"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">

                                        <label for="cardCode" class="font-weight-regular text-body-2">
                                            Card Code (CVC) *
                                        </label>
                                        <v-text-field id="cardCode" class="mt-2 bg-white text-body-2 payinput"
                                            rounded="md" density="compact" placeholder="CVC"
                                            variant="outlined"></v-text-field>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </div>
                </v-radio-group>

                <div class="paymeny-foot">
                    <p class="font-weight-light text-body-2 mb-3">
                        Your personal data will be used to process your order, support your experience throughout this
                        website, and for other purposes described in ourprivacy policy.
                    </p>
                    <v-checkbox v-model="agree" base-color="#222222" color="#0dcaf0" class="checkbox-agree align-start">
                        <template v-slot:label>
                            <div class="text-subtitle-2 font-weight-regular text-grey-darken-3 pe-5">
                                I have read and agree to the website terms and conditions *
                            </div>
                        </template>
                    </v-checkbox>
                    <v-btn variant="plain" :disabled="!agree"
                        class="opacity-100 d-flex justify-center mt-3 py-5 px-4 text-center rounded-pill text-uppercase text-white text-body-2 font-weight-medium letter-spacing-3 check-out-btn">
                        PLACE ORDER
                    </v-btn>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import CheckoutSectionHead from '@/components/Checkout/CheckoutSectionHead.vue';
import { ref } from 'vue';

const paymentType = ref('directTransfer');
const agree = ref(false);

</script>

<style scoped>
:deep(.v-label) {
    opacity: 1;
    color: #000000;
}

:deep(.v-input__details),
:deep(.v-messages) {
    display: none;
}

:deep(.v-text-field .v-field--no-label input) {
    font-size: 12px;
}

:deep(.checkbox-agree .v-input__details) {
    display: none !important;
}

.check-out-btn {
    background-color: #0dcaf0;
    width: 100%;
    height: auto !important;
}

.check-out-btn:disabled {
    background-color: #60dff8;
}

.check-out-btn:hover {
    background-color: #0baccc !important;
}
</style>