<template>

    <v-dialog max-width="600" max-height="auto" transition="scale-transition" v-model="dialogState.isSearchDialogOpen">
        <div class="bg-white rounded-lg">
            <div
                class="d-flex justify-space-between align-center opacity-100 pa-0 text-grey-darken-4 text-subtitle-1 text-uppercase font-weight-semibold px-5 py-4 border-b">
                <span>
                    Search Out Site
                </span>
                <v-btn size="x-small" variant="plain" base-color="#78909C" rounded="circle" :ripple="false"
                    class="opacity-100 pa-0" height="30" width="30" @click="closeSearchDialog">
                    <Icon icon="material-symbols:close-rounded" width="25"></Icon>
                </v-btn>
            </div>

            <v-card elevation="0" class="rounded-0  pa-0">

                <div class="px-5 search-dialog-inner overflow-auto pt-6">

                    <v-form @submit.prevent="handleSearch">

                        <v-select placeholder="Select Category" :hide-details="true" class="text-body-2" rounded="pill"
                            :items="categoryList" item-title="name" item-value="slug" return-object variant="outlined"
                            density="compact" @update:menu="fetchProductsByCategory" v-model="selectedCategory">
                        </v-select>

                        <v-text-field placeholder="Search for products" class="mt-5" rounded="pill" density="compact"
                            hide-details="auto" :error-messages="error" variant="outlined" v-model="searchQuery"
                            @keydown.enter="handleSearch">
                            <template v-slot:append-inner>
                                <v-btn size="x-small" variant="plain" base-color="#222222" class="opacity-100"
                                    width="25" height="25" min-width="25" :ripple="false" @click="handleSearch">
                                    <Icon icon="prime:search" class="text-black" width="25" />
                                </v-btn>
                            </template>
                        </v-text-field>

                    </v-form>

                    <div class="my-8">
                        <v-row class="mt-2 px-0 mx-0" v-if="hasProducts">
                            <v-col cols="12" md="6" v-for="(product, index) in productsList" :key="index">
                                <SearchProductCard :products="product" />
                            </v-col>
                        </v-row>
                        <v-row class="mt-2 px-0 mx-0" v-else>
                            <v-col cols="12">
                                <span class="d-flex justify-center align-center">
                                    No results found
                                </span>
                            </v-col>
                        </v-row>
                    </div>

                </div>

            </v-card>
        </div>


    </v-dialog>

</template>

<script setup lang="ts">

import { Icon } from '@iconify/vue';
import { computed, onMounted, ref, watch } from 'vue';
import SearchProductCard from '../Products/SearchProductCard.vue';
import { dialogState, closeSearchDialog } from '@/composables/useDialog';
import { categoryList, fetchAllCategories, getProductByCategory } from "@/composables/useCategory";
import useProduct from "@/composables/useProduct";
import type { Product } from '@/types';

const selectedCategory = ref({ slug: 'all', name: 'All Categories' });

const { getSearchProduct } = useProduct()

const searchQuery = ref('');

const allProducts = ref<Product[]>([]);

const productsList = ref<Product[]>([]);

const isAllCategories = ref(true);

const error = ref('');

const hasProducts = computed(() => productsList.value.length > 0);

const fetchProductsByCategory = async () => {
    resetSearch();
    if (selectedCategory.value.slug === 'all') {
        isAllCategories.value = true;
        return;
    }
    isAllCategories.value = false;
    allProducts.value = await getProductByCategory(selectedCategory.value.slug);
};

const resetSearch = () => {
    productsList.value = [];
    searchQuery.value = '';
    error.value = '';
};

watch(() => searchQuery.value, (val) => {
    if (val == "") {
        resetSearch();
    }
});

const handleSearch = async () => {
    if (!searchQuery.value.trim()) {
        error.value = 'Product title is required';
        return;
    }
    error.value = '';
    if (isAllCategories.value) {
        const searchResults = await getSearchProduct(searchQuery.value);
        productsList.value = filterProducts(searchResults, searchQuery.value);
    } else {
        productsList.value = filterProducts(allProducts.value, searchQuery.value);
    }
};

const filterProducts = (products: Product[], query: string) =>
    products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

onMounted(async () => {
    await fetchAllCategories();
});


/**
 *
 * Old Code
 *
 */

// const handleCategorySearch = async () => {
//     productsList.value = {};
//     searchQuery.value = '';
//     error.value = "";
//     if (selectedCategory.value.slug !== 'all') {
//         isAll.value = false
//         allProducts.value = await getProductByCategory(selectedCategory.value.slug);
//     } else {
//         isAll.value = true
//         return
//     }
// }

// const handleSearch = async () => {
//     if (searchQuery.value) {
//         error.value = "";
//         if (!isAllCategories.value) {
//             productsList.value = allProducts.value.filter((product: Product) =>
//                 product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
//             );
//         } else {
//             const search = await getSearchProduct(searchQuery.value);
//             productsList.value = search.filter((product: Product) =>
//                 product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
//             );
//         }
//     } else {
//         productsList.value = {};
//         error.value = 'Products title is required'
//     }
//     return productsList.value;
// }


</script>

<style scoped>
.v-navigation-drawer {
    height: 100% !important;
    top: 0 !important;
    z-index: 999999 !important;
}

:deep(.v-label.v-field-label) {
    font-size: 13px;
}

:deep(.v-field__outline) {
    --v-field-border-opacity: 0.19;
}

.search-dialog-inner {
    max-height: 500px;
}

.search-dialog-inner::-webkit-scrollbar-track {
    background: #FFF;
}

.search-dialog-inner::-webkit-scrollbar-thumb {
    background: #ced2d4;
}

.search-dialog-inner::-webkit-scrollbar {
    width: 7px;
    height: 7px;
}
</style>