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

            <div class="mb-5 mt-10 d-flex justify-center align-center ga-4">

                <v-btn variant="plain" density="compact" v-for="option in gridOptions" :key="option"
                    :class="{ active: itemsPerRow === option }" :ripple="false" class="grid-btn opacity-100 pa-0"
                    @click="setItemsPerRow(option)">
                    <div class="grid-list d-flex align-center">
                        <span v-for="_ in option" class="grid-item"></span>
                    </div>
                </v-btn>

            </div>

            <div class="whishlist-grid" :style="{ gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)` }"
                :key="itemsPerRow">
                <ProductCard :wishList="wishList" :products="item" v-for="item, index in product" :key="index" />
            </div>
        </v-container>
    </section>

</template>

<script setup lang="ts">
import ProductCard from '@/components/Products/ProductCard.vue';
import { useWishlistStore } from '@/stores/useWishlistStore';
import { ref } from 'vue';;

const itemsPerRow = ref(4);
const gridOptions = ref([2, 3, 4, 5, 6]);
const wishList = ref(true);
const product = useWishlistStore().getwishList;


const setItemsPerRow = (option: number) => {
    itemsPerRow.value = option
};

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

.whishlist-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 5px;
}

:deep(.product-card .product-img) {
    width: 100% !important;
}
</style>