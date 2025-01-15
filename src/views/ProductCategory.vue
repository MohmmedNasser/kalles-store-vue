<template>
    <section class="mb-10">
        <v-container class="py-0">

            <SectionHeading class="mt-10" :sectionHead="sectionHead" />

            <div class="py-5">

                <FilterBox :product="product" @update-filtered-products="handleFilteredProductsUpdate" />

                <v-row>

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
import FilterBox from '@/components/Filter/FilterBox.vue';

const route = useRoute();
const sectionHead = ref(route.query.name);
const product = ref<Array<any>>([]);
const loading = ref(false);

const filteredProducts = ref<Array<any>>([]);

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

const handleFilteredProductsUpdate = (newFilteredProducts: Array<any>) => {
    filteredProducts.value = newFilteredProducts;
};

</script>

<style scoped></style>