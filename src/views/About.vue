<template>
    <v-row>
        <v-col cols="12" md="4">
            <v-card subtitle="This is a card subtitle"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
                title="This is a title"></v-card>

            <div class="text-center text-caption">Using Props Only</div>
        </v-col>

        <v-col cols="12" md="4">
            <v-card>
                <template v-slot:title>
                    This is a title
                </template>

                <template v-slot:subtitle>
                    This is a card subtitle
                </template>

                <template v-slot:text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est
                    labore voluptatibus!
                </template>
            </v-card>

            <div class="text-center text-caption">Using Slots Only</div>
        </v-col>

        <v-col cols="12" md="4">
            <v-card>
                <v-card-item>
                    <v-card-title>This is a title</v-card-title>

                    <v-card-subtitle>This is a card subtitle</v-card-subtitle>
                </v-card-item>

                <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est
                    labore
                    voluptatibus!
                </v-card-text>
            </v-card>

            <div class="text-center text-caption">Using Markup Only</div>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">

            <swiper class="my-swiper" :modules="[Navigation, Pagination]" :navigation="true"
                :pagination="{ clickable: true }" :spaceBetween="20" :slidesPerView="3">
                <swiper-slide v-for="(slide, index) in slides" :key="index">
                    <div class="slide-content">
                        {{ slide }}
                    </div>
                </swiper-slide>
            </swiper>

        </v-col>
    </v-row>

    <v-container>
        <v-row>
            <v-col cols="12">
                <label>Card Number</label>
                <div id="card-number"></div>

                <label>Card Expiry</label>
                <div id="card-expiry"></div>

                <label>Card CVC</label>
                <div id="card-cvc"></div>

                <div id="card-error" style="color: red;"></div>

                <button id="custom-button" @click="createToken" :disabled="isProcessing">
                    {{ isProcessing ? 'Processing...' : 'Generate Token' }}
                </button>
            </v-col>
        </v-row>
    </v-container>

</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import { loadStripe } from '@stripe/stripe-js';
import { onBeforeUnmount, onMounted, ref } from 'vue';
const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];


// Load Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const cardNumberElement = ref<any>(null);
const cardExpiryElement = ref<any>(null);
const cardCvcElement = ref<any>(null);
const stripeInstance = ref<any>(null);
const elementsInstance = ref<any>(null);
const isProcessing = ref<any>(false);

onMounted(async () => {
    // Load Stripe instance
    stripeInstance.value = await stripePromise;

    if (!stripeInstance.value) {
        console.error('Stripe failed to load');
        return;
    }

    // Initialize Elements
    elementsInstance.value = stripeInstance.value.elements();

    const style = {
        base: {
            color: '#32325d',
            fontFamily: 'Poppins',
            fontSize: '16px',
            '::placeholder': { color: '#aab7c4' },
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a',
        },
    };

    // Create and mount Card Number Element
    cardNumberElement.value = elementsInstance.value.create('cardNumber', { style });
    cardNumberElement.value.mount('#card-number');

    // Create and mount Card Expiry Element
    cardExpiryElement.value = elementsInstance.value.create('cardExpiry', { style });
    cardExpiryElement.value.mount('#card-expiry');

    // Create and mount Card CVC Element
    cardCvcElement.value = elementsInstance.value.create('cardCvc', { style });
    cardCvcElement.value.mount('#card-cvc');
});

onBeforeUnmount(() => {
    // Destroy Stripe Elements
    if (cardNumberElement.value) cardNumberElement.value.destroy();
    if (cardExpiryElement.value) cardExpiryElement.value.destroy();
    if (cardCvcElement.value) cardCvcElement.value.destroy();
});

// Generate Stripe token
const createToken = async () => {
    if (!stripeInstance.value || !cardNumberElement.value) {
        console.error('Stripe.js has not been initialized');
        return;
    }

    isProcessing.value = true;

    try {
        const { token, error } = await stripeInstance.value.createToken(cardNumberElement.value);
        if (error) {
            // Display error
            document.getElementById('card-error').textContent = error.message;
            console.error('Token generation error:', error.message);
        } else {
            // Handle successful token generation
            console.log('Generated Token:', token);
            alert('Token successfully generated!');
        }
    } catch (err) {
        console.error('Error generating token:', err);
    } finally {
        isProcessing.value = false;
    }
};

</script>

<style scoped>
.my-swiper {
    width: 100%;
    height: 300px;
}

.slide-content {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    height: 100%;
}
</style>
