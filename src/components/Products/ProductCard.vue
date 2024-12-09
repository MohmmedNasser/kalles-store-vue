<template>
    <div>
        <v-card class="product-card pa-0" elevation="0">
            <div class="card-top position-relative overflow-hidden w-full">
                <v-img class="product-img mx-auto"
                    :src="showItem[products?.title] ? showItem[products?.title] : products?.thumbnail" loading="lazy"
                    alt="products?.title" width="259" height="259"></v-img>
                <v-btn class="quick-view-btn  text-capitalize font-weight-regular px-0" width="148" height="39"
                    elevation="1" color="white" rounded>
                    Quick View
                </v-btn>

            </div>

            <v-card-title tag="p" class="pa-0 text-wrap mb-1 mt-2 text-grey-darken-4" style="line-height: 1;">
                <v-hover v-slot="{ isHovering, props }">
                    <RouterLink :to="{ name: 'home' }" class="text-body-2 font-weight-semibold text-decoration-none"
                        :class="isHovering ? 'text-light-blue-darken-4' : ''" v-bind="props">
                        {{ products?.title }}
                    </RouterLink>
                </v-hover>
            </v-card-title>

            <v-card-subtitle tag="p" class="pa-0 font-weight-medium opacity-100 mt-2">
                <del class="me-2 text-grey-darken-1">
                    ${{ products?.price }}
                </del>
                <span class="text-red-accent-4 text-body-2">
                    ${{ (products?.price - products?.price * (products?.discountPercentage / 100)).toFixed(2) }}
                </span>
            </v-card-subtitle>

            <!-- <div class="d-flex justify-start">
                <v-rating readonly half-increments :length="5" :size="20" v-model="rating" color="#DDDDDD"
                    active-color="amber-lighten-2" />
            </div> -->

            <div v-if="products?.images">
                <v-btn-toggle v-model="showItem[products?.title]" class="d-flex items-center mt-3 ga-2">
                    <v-btn size="x-small" variant="text" class="opacity-100 pa-0 d-flex justify-center rounded-circle"
                        height="35" width="35" :ripple="false" v-for="pic, index in products?.images" :key="index"
                        :value="pic">
                        <v-img class="product-img mx-auto" :src="pic" loading="lazy" alt="" width="22"
                            height="22"></v-img>
                    </v-btn>
                </v-btn-toggle>

            </div>

        </v-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps(['products']);
// const rating = ref(2.1);
const showItem = ref<any>({});
</script>

<style scoped>
.quick-view-btn {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
}

.product-card:hover .quick-view-btn {
    top: 50%;
    opacity: 1;
    visibility: visible;
}

.product-card .product-img {
    transition: 0.3s;
}

.product-card:hover .product-img {
    transform: scale(1.06)
}

button {
    min-width: auto !important;
    max-width: auto !important;
}
</style>