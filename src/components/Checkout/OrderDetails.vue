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
                    <tr v-for="(product, index) in cartStore.getCartItems" :key="index">
                        <td class="text-left font-weight-light px-0">
                            {{ product?.title }} x <span class="font-weight-medium">{{ product?.quantity }}</span>
                        </td>
                        <td class="text-end px-0">
                            $ {{ productPrices[index] }}
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-medium px-0">
                            Subtotal
                        </td>
                        <td class="text-end px-0">
                            $ {{ totalCartPrice }}
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left font-weight-medium px-0">
                            Shipping
                        </td>
                        <td class="text-end px-0">
                            {{ calacShipping ? "Free Shipping" : `$ ${shippingPrice} ` }}
                        </td>
                    </tr>
                    <tr>
                        <td class="text-start font-weight-medium px-0">
                            Total
                        </td>
                        <td class="text-end px-0">
                            $ {{ calacShipping ? totalCartPrice : totalPrice }}
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
                                        <!-- <v-text-field id="cardNumber" class="mt-2 bg-white text-body-2 payinput"
                                            rounded="md" density="compact" placeholder="1234 1234 1234 1234"
                                            variant="outlined"></v-text-field> -->
                                        <div id="card-number" class="mt-2 bg-white text-body-2 px-2 py-3 "></div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="6">

                                        <label for="expiryDate" class="font-weight-regular text-body-2">
                                            Expiry Date *
                                        </label>
                                        <!-- <v-text-field id="expiryDate" class="mt-2 bg-white text-body-2 payinput"
                                            rounded="md" density="compact" placeholder="MM/YY"
                                            variant="outlined"></v-text-field> -->
                                        <div id="card-expiry" class="mt-2 bg-white text-body-2 px-2 py-3"></div>
                                    </v-col>
                                    <v-col cols="6">

                                        <label for="cardCode" class="font-weight-regular text-body-2">
                                            Card Code (CVC) *
                                        </label>
                                        <!-- <v-text-field id="cardCode" class="mt-2 bg-white text-body-2 payinput"
                                            rounded="md" density="compact" placeholder="CVC"
                                            variant="outlined"></v-text-field> -->
                                        <div id="card-cvc" class="mt-2 bg-white text-body-2 px-2 py-3"></div>
                                    </v-col>
                                    <v-col cols="12 py-0">
                                        <div id="card-error" class="text-red-lighten-1 text-subtitle-2"></div>
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
                    <v-btn variant="plain" id="custom-button" :disabled="!agree || isProcessing"
                        class="opacity-100 d-flex justify-center mt-3 py-5 px-4 text-center rounded-pill text-uppercase text-white text-body-2 font-weight-medium letter-spacing-3 check-out-btn"
                        type="submit" @click.prevent="createToken">
                        {{ isProcessing ? 'Processing...' : 'PLACE ORDER' }}
                    </v-btn>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import CheckoutSectionHead from '@/components/Checkout/CheckoutSectionHead.vue';
import { useCartCalculations } from '@/composables/useCartCalculations';
import { useCartStore } from '@/stores/useCartStore';
import { loadStripe } from '@stripe/stripe-js';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { openPaymenyDialog } from "@/composables/useDialog"

const router = useRouter();
const paymentType = ref('directTransfer');
const agree = ref(false);

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const cardNumberElement = ref<any>(null);
const cardExpiryElement = ref<any>(null);
const cardCvcElement = ref<any>(null);
const stripeInstance = ref<any>(null);
const elementsInstance = ref<any>(null);
const isProcessing = ref<any>(false);


onMounted(async () => {
    stripeInstance.value = await stripePromise;

    if (!stripeInstance.value) {
        console.error('Stripe failed to load');
        return;
    }

    elementsInstance.value = stripeInstance.value.elements();

    const style = {
        base: {
            color: '#222222',
            fontFamily: 'Poppins',
            fontSize: '14px',
            '::placeholder': { color: '#aab7c4', fontSize: "14px" },
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a',
        },
    };

    cardNumberElement.value = elementsInstance.value.create('cardNumber', { style });
    cardNumberElement.value.mount('#card-number');

    cardExpiryElement.value = elementsInstance.value.create('cardExpiry', { style });
    cardExpiryElement.value.mount('#card-expiry');

    cardCvcElement.value = elementsInstance.value.create('cardCvc', { style });
    cardCvcElement.value.mount('#card-cvc');
});

onBeforeUnmount(() => {
    if (cardNumberElement.value) cardNumberElement.value.destroy();
    if (cardExpiryElement.value) cardExpiryElement.value.destroy();
    if (cardCvcElement.value) cardCvcElement.value.destroy();
});

const props = defineProps(['submit']);

const createToken = async () => {

    const isValid = await props.submit();
    if (!isValid) {
        console.error('Validation failed');
        return;
    }

    if (paymentType.value == 'creditCard') {

        if (!stripeInstance.value || !cardNumberElement.value) {
            console.error('Stripe.js has not been initialized');
            return;
        }

        isProcessing.value = true;

        try {
            const { token, error } = await stripeInstance.value.createToken(cardNumberElement.value);
            if (error) {
                // Display error
                document.getElementById('card-error')!.textContent = error.message;
                console.error('Token generation error:', error.message);
            } else {
                // Handle successful token generation
                console.log('Generated Token:', token);
                // alert('Token successfully generated!');
                router.push({ name: 'home' });
                cartStore.removeCartItems;
                openPaymenyDialog();

            }
        } catch (err) {
            console.error('Error generating token:', err);
        } finally {
            isProcessing.value = false;
        }
    } else {
        // alert('Payment successfully');
        router.push({ name: 'home' });
        openPaymenyDialog();
        cartStore.removeCartItems;
    }
};

const calacShipping = computed(() => {
    return totalCartPrice.value >= freeShippingPrice.value ? true : false;
});

const totalPrice = computed(() => {
    return (Number(totalCartPrice.value) + Number(shippingPrice.value)).toFixed(2);
})

const cartStore = useCartStore();

const { productPrices, totalCartPrice, freeShippingPrice, shippingPrice } = useCartCalculations();

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