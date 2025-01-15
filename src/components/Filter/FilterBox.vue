<template>

    <div class="px-8 py-5 border rounded-lg mb-8">
        <h1 class="mb-3 text-body-1 font-weight-medium">Filter:</h1>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field v-model="filters.title" label="Search by Title" density="compact" variant="outlined"
                    :hide-details="true" rounded="rounded-xl" clearable />
            </v-col>

            <!-- <v-col cols="12" md="3">
                            <v-text-field v-model.number="filters.minPrice" label="Min Price" type="number"
                                density="compact" variant="outlined" :hide-details="true" rounded="rounded-xl"
                                clearable />
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field v-model.number="filters.maxPrice" label="Max Price" type="number"
                                density="compact" variant="outlined" :hide-details="true" rounded="rounded-xl"
                                clearable />
                        </v-col> -->

            <!-- <v-col cols="12" md="4">
                            <v-select v-model="filters.rating" :items="[5, 4, 3, 2, 1]" label="Min Rating"
                                density="compact" variant="outlined" :hide-details="true" rounded="rounded-xl"
                                clearable />
                        </v-col> -->

            <v-col cols="12" md="6">
                <v-select v-model="filters.sortBy" :items="sortOptions" item-title="text" item-value="value"
                    label="Sort By" density="compact" variant="outlined" :hide-details="true" rounded="rounded-xl"
                    clearable />
            </v-col>
            <v-col cols="12" md="5" class="mt-4">
                <div class="d-flex align-center ga-3">
                    <label class="font-weight-regular text-body-2">
                        Min/Max Price :
                    </label>
                    <v-range-slider v v-model="filters.range" :min="0" :max="3000" thumb-label="always"
                        thumb-color="#787676" track-size="2" thumb-size="15" :step="1" :hide-details="true"
                        class="align-center">
                    </v-range-slider>
                </div>
            </v-col>
            <v-col cols="12" md="5" class="mt-4">
                <div class="d-flex align-center ga-3">
                    <label class="font-weight-regular text-body-2">
                        Rating :
                    </label>
                    <v-rating v-model="filters.rating" :length="5" :size="35" color="#BDBDBD"
                        active-color="amber-lighten-1"></v-rating>
                </div>
            </v-col>
        </v-row>
    </div>

</template>

<script setup lang="ts">
import type { Product } from '@/types';
import { computed, ref, watch } from 'vue';

const props = defineProps<{
    product: Product[],
}>();

const emit = defineEmits(['update-filtered-products']);

// Filters and sorting state
const filters = ref({
    title: '',
    // minPrice: null,
    // maxPrice: null,
    range: [0, 3000],
    rating: 5,
    sortBy: null,
});


const sortOptions = [
    { text: 'Price: Low to High', value: 'price-asc' },
    { text: 'Price: High to Low', value: 'price-desc' },
    { text: 'Rating: High to Low', value: 'rating-desc' },
];

// Computed property to filter and sort products
const filteredProducts = computed(() => {
    let filtered = props.product;

    // Filter by title
    if (filters.value.title) {
        filtered = filtered.filter((item) =>
            item.title.toLowerCase().includes(filters.value.title.toLowerCase())
        );
    }

    // Filter by price
    if (filters.value.range[0] !== null) {
        filtered = filtered.filter((item) => item.price >= filters.value.range[0]);
    }
    if (filters.value.range[1] !== null) {
        filtered = filtered.filter((item) => item.price <= filters.value.range[1]);
    }

    // Filter by rating
    if (filters.value.rating !== null) {
        filtered = filtered.filter((item) => item.rating <= filters.value.rating);
    }

    // Sort products
    if (filters.value.sortBy) {
        filtered.sort((a, b) => {
            if (filters.value.sortBy === 'price-asc') {
                return a.price - b.price;
            } else if (filters.value.sortBy === 'price-desc') {
                return b.price - a.price;
            } else if (filters.value.sortBy === 'rating-desc') {
                return b.rating - a.rating;
            }
            return 0;
        });
    }

    return filtered;
});

watch(
    filteredProducts, (newFilteredProducts) => {
        emit('update-filtered-products', newFilteredProducts);
    },
    { immediate: true }
);


</script>

<style scoped></style>