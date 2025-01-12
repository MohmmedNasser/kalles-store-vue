<template>
    <div>
        <v-card class="product-card pa-0" elevation="0">
            <div class="card-top position-relative overflow-hidden w-full">
                <v-img class="product-img mx-auto"
                    :src="showItem[products?.title] ? showItem[products?.title] : products?.thumbnail" loading="lazy"
                    alt="products?.title" width="259" height="259"></v-img>
                <v-btn class="quick-view-btn  text-capitalize font-weight-regular px-0" width="148" height="39"
                    elevation="1" color="white" rounded @click="handleQuickView">
                    Quick View
                </v-btn>

                <v-btn class="delete-btn text-capitalize font-weight-regular px-0" rounded="circle" width="33"
                    height="33" elevation="0" color="white" :ripple="false" v-if="wishList"
                    @click="removeProductFromWishList(products)">
                    <Icon icon="icon-park-outline:delete" width="15" color="#222222"></Icon>
                </v-btn>

            </div>

            <v-card-title tag="p" class="pa-0 text-wrap mb-1 mt-2 text-grey-darken-4" style="line-height: 1;">
                <v-hover v-slot="{ isHovering, props }">
                    <RouterLink :to="{ name: 'product_details', params: { id: products?.id } }"
                        class="text-body-2 font-weight-semibold text-decoration-none"
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

            <div v-if="products?.images">
                <v-btn-toggle v-model="showItem[products?.title]" class="d-flex align-center mt-3 ga-2">
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
import { Icon } from '@iconify/vue';
import type { Product } from '@/types';
import { useWishlistStore } from '@/stores/useWishlistStore';
import { openQuickViewDialog } from "@/composables/useDialog";

const props = defineProps<{
    products: Product,
    wishList?: boolean

}>();

const showItem = ref<any>({});

const wishListStore = useWishlistStore();

const emit = defineEmits(['deleteWishList']);

const handleQuickView = () => {
    openQuickViewDialog(props.products);
}

const removeProductFromWishList = (product: Product) => {
    emit('deleteWishList', product);
    wishListStore.removeWishList(product);
}

// const emit = defineEmits(['openQuickView']);

// const openQuickViewFun = (product: Product) => {
//     emit('openQuickView', product);
//     openDialog();
// }

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

.delete-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    transition: 0.5s;
    z-index: 2;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
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