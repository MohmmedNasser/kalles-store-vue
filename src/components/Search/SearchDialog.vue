<template>

    <v-dialog max-width="600" max-height="auto" scrollable v-model="isSearchDialogOpen">
        <v-card elevation="0" class="rounded-xl pa-0">

            <v-card-title tag="div"
                class="d-flex justify-space-between align-center opacity-100 pa-0 text-grey-darken-4 text-subtitle-1 text-uppercase px-5 py-4 mb-5 border-b">

                <span>
                    Search Out Site
                </span>

                <v-btn size="x-small" variant="plain" base-color="#78909C" rounded="circle" :ripple="false"
                    class="opacity-100 pa-0" height="30" width="30" @click="isSearchDialogOpen = false">
                    <Icon icon="material-symbols:close-rounded" width="25"></Icon>
                </v-btn>

            </v-card-title>

            <div class="px-5">

                <form>
                    <v-select placeholder="Select Category" :hide-details="true" class="text-body-2" rounded="pill"
                        :items="categoryList" variant="outlined" density="compact" v-model="selectedCategory">
                    </v-select>

                    {{ selectedCategory }}

                    <v-text-field placeholder="Search for products" class="mt-5" rounded="pill" density="compact"
                        :hide-details="true" variant="outlined" v-model="product">
                        <template v-slot:append-inner>
                            <v-btn size="x-small" variant="plain" base-color="#222222" class="opacity-100" width="25"
                                height="25" min-width="25" :ripple="false">
                                <Icon icon="prime:search" class="text-black" width="25" @click="handleSearch()" />
                            </v-btn>
                        </template>
                    </v-text-field>
                </form>

                <v-row class="mt-2">
                    <v-col cols="12" md="6" v-for="(product, index) in products" :key="index">
                        <SearchProductCard :products="product" />
                    </v-col>
                </v-row>

            </div>
        </v-card>

    </v-dialog>

</template>

<script setup lang="ts">

import { Icon } from '@iconify/vue';
import { onMounted, ref } from 'vue';
import useCategory from '@/composables/useCategory';
import useDialog from '@/composables/useDialog';
import SearchProductCard from '../Products/SearchProductCard.vue';

const { categoryList, fetchAllCategories } = useCategory();
const { isSearchDialogOpen } = useDialog();

const selectedCategory = ref('All Categories');
const product = ref('');


const products = ref([
    {
        "id": 121,
        "title": "iPhone 5s",
        "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
        "category": "smartphones",
        "price": 199.99,
        "discountPercentage": 11.85,
        "rating": 3.92,
        "stock": 65,
        "tags": [
            "smartphones",
            "apple"
        ],
        "brand": "Apple",
        "sku": "AZ1L68SM",
        "weight": 4,
        "dimensions": {
            "width": 8.49,
            "height": 25.34,
            "depth": 18.12
        },
        "warrantyInformation": "1 week warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 4,
                "comment": "Highly impressed!",
                "date": "2024-05-23T08:56:21.625Z",
                "reviewerName": "Wyatt Perry",
                "reviewerEmail": "wyatt.perry@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Awesome product!",
                "date": "2024-05-23T08:56:21.625Z",
                "reviewerName": "Olivia Anderson",
                "reviewerEmail": "olivia.anderson@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Highly recommended!",
                "date": "2024-05-23T08:56:21.625Z",
                "reviewerName": "Mateo Nguyen",
                "reviewerEmail": "mateo.nguyen@x.dummyjson.com"
            }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 2,
        "meta": {
            "createdAt": "2024-05-23T08:56:21.625Z",
            "updatedAt": "2024-05-23T08:56:21.625Z",
            "barcode": "2903942810911",
            "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png",
            "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png",
            "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/3.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png"
    },
    {
        "id": 121,
        "title": "iPhone 5s",
        "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
        "category": "smartphones",
        "price": 199.99,
        "discountPercentage": 11.85,
        "rating": 3.92,
        "stock": 65,
        "tags": [
            "smartphones",
            "apple"
        ],
        "brand": "Apple",
        "sku": "AZ1L68SM",
        "weight": 4,
        "dimensions": {
            "width": 8.49,
            "height": 25.34,
            "depth": 18.12
        },
        "warrantyInformation": "1 week warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 4,
                "comment": "Highly impressed!",
                "date": "2024-05-23T08:56:21.625Z",
                "reviewerName": "Wyatt Perry",
                "reviewerEmail": "wyatt.perry@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Awesome product!",
                "date": "2024-05-23T08:56:21.625Z",
                "reviewerName": "Olivia Anderson",
                "reviewerEmail": "olivia.anderson@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Highly recommended!",
                "date": "2024-05-23T08:56:21.625Z",
                "reviewerName": "Mateo Nguyen",
                "reviewerEmail": "mateo.nguyen@x.dummyjson.com"
            }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 2,
        "meta": {
            "createdAt": "2024-05-23T08:56:21.625Z",
            "updatedAt": "2024-05-23T08:56:21.625Z",
            "barcode": "2903942810911",
            "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png",
            "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png",
            "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/3.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png"
    },
]
);

const handleSearch = () => {
    console.log('test');
}

onMounted(async () => {
    await fetchAllCategories();
});

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

.close-btn {
    top: 15px;
    inset-inline-end: 15px;
}
</style>