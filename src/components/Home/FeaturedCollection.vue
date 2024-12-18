<template>
    <section class="my-15">
        <v-container>
            <SectionHeading :sectionHead="sectionHead" />
            <v-card elevation="0" class="mb-5">
                <v-tabs v-model="tab" align-tabs="center" class="featured-tabs mb-4 px-5 px-sm-1" color="black">
                    <v-tab v-for="category in featuredCollection" :key="category.slug" :value="category.slug"
                        rounded="pill" active-color="#222222" base-color="#3d3c3d" max-width="135" max-height="41"
                        hide-slider :ripple="false" variant="plain" class="px-3 mx-3">
                        {{ category.name }}
                    </v-tab>
                </v-tabs>

                <v-tabs-window v-model="tab">
                    <v-tabs-window-item v-for="category in featuredCollection" :key="category.slug"
                        :value="category.slug">
                        <v-row>

                            <v-col v-if="!products || !products.length || loading" cols="6" md="3" xl="4" v-for="n in 8"
                                :key="'skeleton-' + n">
                                <v-skeleton-loader type="card, text, chip, chip"></v-skeleton-loader>
                            </v-col>

                            <v-col v-else v-for="(product, index) in products" :key="index" cols="6" md="3" xl="4">
                                <ProductCard :products="product" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card>

        </v-container>
    </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, defineAsyncComponent } from 'vue';
import SectionHeading from '../SectionHeading.vue';
import api from '@/api';
import useProduct from '@/composables/useProduct';

interface Category {
    slug: string,
    name: string,
    url: string,
}

const ProductCard = defineAsyncComponent(() => import('../Products/ProductCard.vue'));

const sectionHead = "Featured Collection";
const { fetchProducts } = useProduct();
const tab = ref<String | null>(null);
const products = ref<Array<any>>([]);
const featuredCollection = ref<Category[]>([]);
const loading = ref(false);

const getCategories = async () => {
    try {
        const { data } = await api.get('/products/categories');
        featuredCollection.value = data.slice(0, 4);
        if (featuredCollection.value.length > 0) {
            tab.value = featuredCollection.value[0].slug;
            await fetchProducts(JSON.stringify(tab.value));
        }
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

// const fetchProducts = async (slug: any) => {
//     try {
//         const { data } = await api.get(`/products/category/${slug}`);
//         products.value = data.products.slice(0, 8);
//     } catch (error) {
//         console.error('Error fetching products:', error);
//     }
// };

onMounted(async () => {
    await getCategories();
})

watch(tab, async (newCategory: any) => {
    loading.value = true;
    if (newCategory) {
        products.value = await fetchProducts(newCategory);
    }
    loading.value = false;
});

</script>

<style scoped>
.v-tab-item--selected {
    border: 1px dashed #222222;
    background: transparent !important;
}
</style>