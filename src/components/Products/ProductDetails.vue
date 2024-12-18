<template>
    <v-col v-if="Object.keys(product).length == 0 || loading" cols="6" class="pa-0 ps-5">
        <v-skeleton-loader type="heading"></v-skeleton-loader>
        <v-skeleton-loader type="subtitle"></v-skeleton-loader>
        <v-skeleton-loader type="text"></v-skeleton-loader>
        <v-skeleton-loader type="text"></v-skeleton-loader>
        <v-skeleton-loader type="chip"></v-skeleton-loader>
        <v-skeleton-loader type="button, button"></v-skeleton-loader>
        <v-skeleton-loader type="chip, chip, chip, chip"></v-skeleton-loader>
        <v-skeleton-loader type="text, text, text, text"></v-skeleton-loader>
    </v-col>

    <v-col v-else cols="6" class="pa-0 ps-5">
        <v-card elevation="0">
            <v-card-title tag="h5" class="pa-0 text-wrap mb-3 text-h5 text-black">
                {{ product?.title }}
            </v-card-title>

            <div class="d-flex justify-space-between w-full">
                <v-card-subtitle tag="p" class="pa-0 opacity-100 mt-2">
                    <del class="me-2 text-grey-darken-1 font-weight-medium text-body-2">
                        ${{ product?.price }}
                    </del>
                    <span class="text-red-accent-4 font-weight-bold text-body-1">
                        ${{ (product?.price - product?.price * (product?.discountPercentage /
                            100)).toFixed(2) }}
                    </span>
                </v-card-subtitle>
                <div>
                    <div class="d-flex justify-start align-center ga-2">
                        <v-rating readonly half-increments :length="5" :size="20" v-model="product.rating"
                            color="#BDBDBD" active-color="amber-lighten-1" />
                        <span class="mt-2 text-subtitle-2 text-grey-darken-3">
                            ({{ product?.rating }})
                        </span>
                    </div>
                </div>
            </div>

            <v-card-subtitle tag="p" class="pa-0 font-weight-medium opacity-100 mt-4" v-if="product?.brand">
                <span class="text-grey-darken-1">Brand: </span> {{ product?.brand }}
            </v-card-subtitle>

            <v-card-subtitle tag="p" class="pa-0 font-weight-medium opacity-100 mt-4"
                v-if="product?.availabilityStatus">
                <span class="text-grey-darken-1">Availability: </span>
                <span
                    :class="[product?.availabilityStatus == 'In Stock' ? 'text-green-accent-4' : 'text-red-accent-2']">
                    {{ product?.availabilityStatus }}
                </span>
            </v-card-subtitle>


            <!-- quantity -->
            <div class="rounded-pill border border-opacity-50 d-inline-flex align-center mt-4">

                <v-btn class="minus opacity-100 pa-0 rounded-pill" size="x-small" variant="plain" base-color="#000000"
                    height="30" width="20" :ripple="false" @click="quantity == 1 ? 1 : quantity--">
                    <Icon icon="mynaui:minus-solid" width="12" class="text-black"></Icon>
                </v-btn>

                <input type="number"
                    class="product-quantity text-center border-none outline-none fw-bold text-body-2 font-weight-medium"
                    value="1" min="0" max="100" v-model="quantity">

                <v-btn class="plus opacity-100 pa-0 rounded-pill" size="x-small" variant="plain" base-color="#000000"
                    height="30" width="20" :ripple="false" @click="quantity++">
                    <Icon icon="tabler:plus" width="12" class="text-black"></Icon>
                </v-btn>

            </div>

            <div class="d-flex align-center ga-4 mt-4">
                <v-btn rounded="pill" elevation="4" base-color="#222222"
                    class="d-inline-flex text-capitalize text-body-2 px-8">
                    Add to cart
                </v-btn>
                <v-btn size="x-small" rounded="pill" variant="text" base-color="#222222" class="opacity-100 pa-1"
                    height="36" :ripple="false">
                    <Icon icon="solar:heart-angle-line-duotone" width="25" />
                </v-btn>
            </div>

            <div class="mt-4">
                <img src="/images/trust_img2.png" loading="lazy" alt="trust_image">
            </div>


            <div class="d-flex flex-column ga-2 font-weight-medium text-subtitle-2 border-t pt-4">

                <div class="d-flex align-center ga-2 ga-1" v-if="product?.category">
                    <span class="text-grey-darken-1">Categories :</span>
                    <span class="text-capitalize">{{ product?.category }}</span>
                </div>

                <div class="d-flex align-center ga-2" v-if="product?.sku">
                    <span class="text-grey-darken-1">SKU :</span>
                    <span class="text-uppercase">{{ product?.sku }}</span>
                </div>

                <div class="d-flex align-center ga-2" v-if="product?.tags">
                    <span class="text-grey-darken-1">Tags :</span>
                    <span v-for="(tag, index) in product?.tags" :key="index" class="text-capitalize">
                        {{ tag }},
                    </span>
                </div>

                <div class="d-flex align-center ga-2 ga-1" v-if="product?.meta?.qrCode">
                    <span class="text-grey-darken-1">QR Code :</span>
                    <div>
                        <v-img :src="product?.meta.qrCode" width="30" height="30" loading="lazy" cover />
                    </div>
                </div>
            </div>

        </v-card>
    </v-col>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';
import type { Product } from '@/types';

const quantity = ref<any>(1);
const route = useRoute();

// defineProps({
//     product: {
//         type: Object,
//     },
//     loading: {
//         type: Boolean,
//     }
// });

defineProps<{
    product: Product,
    loading: Boolean,
}>();

watch(() => route.params.id, async (newRoute) => {
    if (newRoute) {
        quantity.value = 1;
    }
});


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

::v-deep .v-skeleton-loader__text+.v-skeleton-loader__text {
    margin-top: 0;
}
</style>
