<template>
    <section class="mb-10">
        <v-container class="py-0">

            <!-- <div class="d-flex align-center ga-3">
                <label class="text-subtitle-2 font-weight-regular">
                    Grid show :
                </label>
                <v-select v-model="itemsPerRow" variant="outlined" class="d-flex" density="compact"
                    :items="gridOptions" @change="setItemsPerRow" />
            </div> -->

            <template v-if="product.length > 0">
                <div class="mb-5 mt-10 d-flex justify-center align-center ga-4 grid-wrap">
                    <v-btn variant="plain" density="compact" v-for="option in gridOptions" :key="option"
                        :class="{ active: itemsPerRow === option }" :ripple="false" class="grid-btn opacity-100 pa-0"
                        @click="setItemsPerRow(option)">
                        <div class="grid-list d-flex align-center">
                            <span v-for="_ in option" class="grid-item"></span>
                        </div>
                    </v-btn>
                </div>

                <div class="wishlist-grid" :style="{ gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)` }"
                    :key="itemsPerRow">
                    <ProductCard :wishList="wishList" :products="item" v-for="item, index in product" :key="index"
                        @deleteWishList="handleWishlistUpdate" />
                </div>
            </template>
            <template v-else>
                <div class="d-flex flex-column align-center justify-center no-items">
                    <Icon icon="hugeicons:package-out-of-stock" width="80" color="#878787"></Icon>
                    <h1 class="text-body-1 font-weight-regular text-grey-darken-2 mt-2">
                        No items in WishList
                    </h1>
                </div>
            </template>

        </v-container>
    </section>

</template>

<script setup lang="ts">
import ProductCard from '@/components/Products/ProductCard.vue';
import { useWishlistStore } from '@/stores/useWishlistStore';
import type { Product } from '@/types';
import { Icon } from '@iconify/vue';
import { useHead } from '@unhead/vue';
import { ref } from 'vue';;

const itemsPerRow = ref(4);
const gridOptions = ref([2, 3, 4, 5, 6]);
const wishList = ref(true);
const product = ref(useWishlistStore().getwishList);

useHead({
    title: 'Wshlist | Kalles Ecommerce',
});

const setItemsPerRow = (option: number) => {
    itemsPerRow.value = option
};

const handleWishlistUpdate = (removedProduct: Product) => {
    product.value = product.value.filter(item => item.id !== removedProduct.id);
}
</script>

<style scoped>
.grid-btn {
    height: 20px !important;
    width: max-content !important;
    min-width: auto !important;
}

.grid-list {
    gap: 3px;
    border: 1px solid #878787;
    padding: 3px;
    transition: 0.5s;
}

.grid-item {
    width: 8px;
    height: 20px;
    background: #878787;
    display: flex;
    transition: 0.5s;
}

.grid-btn.active .grid-list {
    border-color: #222222;
}

.grid-btn.active .grid-list .grid-item {
    background: #222222;
}

.wishlist-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 5px;
    margin-top: 50px;
}

@media (max-width: 1280px) {
    .grid-wrap {
        display: none !important;
    }
}

@media (max-width: 1280px) {
    .wishlist-grid {
        grid-template-columns: repeat(4, 1fr) !important;
    }
}

@media (max-width: 960px) {
    .wishlist-grid {
        grid-template-columns: repeat(3, 1fr) !important;
    }
}

@media (max-width: 600px) {
    .wishlist-grid {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

:deep(.product-card .product-img) {
    width: 100% !important;
}

.no-items {
    margin: 100px 0;
}
</style>