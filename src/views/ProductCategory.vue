<template>
    <section class="mb-10">
        <v-container class="py-0">

            <SectionHeading class="mt-10" :sectionHead="sectionHead" />

            <div class="py-5">
                <div class="px-8 py-5 border rounded-lg mb-8">
                    <h1 class="mb-3 text-body-1 font-weight-medium">Filter:</h1>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="filters.title" label="Search by Title" density="compact"
                                variant="outlined" :hide-details="true" rounded="rounded-xl" clearable />
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

                        <v-col cols="12" md="4">
                            <v-select v-model="filters.rating" :items="[5, 4, 3, 2, 1]" label="Min Rating"
                                density="compact" variant="outlined" :hide-details="true" rounded="rounded-xl"
                                clearable />
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-select v-model="filters.sortBy" :items="sortOptions" item-title="text" item-value="value"
                                label="Sort By" density="compact" variant="outlined" :hide-details="true"
                                rounded="rounded-xl" clearable />
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
                    </v-row>
                </div>

                <v-row>

                    <!-- <v-col v-if="!product || !product.length || loading" cols="6" md="3" xl="4" v-for="n in 8"
                        :key="'skeleton-' + n">
                        <v-skeleton-loader type="card, text, chip, chip"></v-skeleton-loader>
                    </v-col>

                    <v-col v-else cols="6" md="3" xl="4" v-for="item, index in product" :key="index">
                        <ProductCard :products="item" />
                    </v-col>
                    -->

                    <v-col v-if="!product || !product.length || loading" cols="6" md="3" xl="4" v-for="n in 8"
                        :key="'skeleton-' + n">
                        <v-skeleton-loader type="card, text, chip, chip"></v-skeleton-loader>
                    </v-col>

                    <template v-else>
                        <v-col v-if="filteredProducts.length" cols="6" md="3" xl="4"
                            v-for="item, index in filteredProducts" :key="index">
                            <ProductCard :products="item" />
                        </v-col>
                        <v-col cols="12" v-else>
                            <span class="d-flex justify-center align-center text-body-1 text-grey-darken-3">
                                No results found
                            </span>
                        </v-col>
                    </template>

                </v-row>
            </div>
        </v-container>
    </section>

</template>

<script setup lang="ts">
import ProductCard from '@/components/Products/ProductCard.vue';
import SectionHeading from '@/components/Global/SectionHeading.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue'
import { getProductByCategory } from "@/composables/useCategory";

const route = useRoute();
const sectionHead = ref(route.query.name);
const product = ref<Array<any>>([]);
const loading = ref(false);


// Filters and sorting state
const filters = ref({
    title: '',
    // minPrice: null,
    // maxPrice: null,
    range: [0, 3000],
    rating: null,
    sortBy: null,
});


const sortOptions = [
    { text: 'Price: Low to High', value: 'price-asc' },
    { text: 'Price: High to Low', value: 'price-desc' },
    { text: 'Rating: High to Low', value: 'rating-desc' },
];

// Computed property to filter and sort products
const filteredProducts = computed(() => {
    let filtered = [...product.value];

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
        filtered = filtered.filter((item) => item.rating >= filters.value.rating);
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


const title = computed(() => {
    return route.query.name + ' Category | Kalles Ecommerce'
});

useHead({
    title,
});

onMounted(async () => {

    product.value = await getProductByCategory(route.params.category);
    if (!route.query.name) {
        sectionHead.value = route.params.category;
    }
});

watch(route, async (newRoute: any) => {
    loading.value = true;
    if (newRoute) {
        product.value = await getProductByCategory(route.params.category);
        sectionHead.value = route.query.name;
    }
    loading.value = false;
});


</script>

<style scoped></style>