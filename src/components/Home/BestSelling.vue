<template>
    <section class="my-15">
        <v-container>
            <SectionHeading :sectionHead="sectionHead" />

            <v-row>

                <v-col v-if="!laptops || !laptops.length" cols="6" md="3" xl="4" v-for="n in 8" :key="'skeleton-' + n">
                    <v-skeleton-loader type="card, text, chip, chip"></v-skeleton-loader>
                </v-col>

                <v-col v-else cols="6" md="3" xl="4" v-for="product, index in laptops" :key="index">
                    <ProductCard :products="product" />
                </v-col>
            </v-row>

        </v-container>

    </section>
</template>

<script setup lang="ts">
import SectionHeading from '../Global/SectionHeading.vue';
import { defineAsyncComponent, onMounted, ref } from 'vue';
import useProduct from '@/composables/useProduct';

const ProductCard = defineAsyncComponent(() => import('../Products/ProductCard.vue'));
const sectionHead = "laptops";
const { fetchProducts } = useProduct();
const laptops = ref<Array<any>>([]);

onMounted(async () => {
    laptops.value = await fetchProducts('laptops');
})

// const laptops = ref<any>([]);
// const getLaptopsProduct = async () => {
//     try {
//         const res = await api.get('/products/category/laptops');
//         laptops.value = res.data.products.slice(0, 8);
//         // trending.value = res.data.products.filter((_: any, index: number) => index < 8);
//         return res.data;
//     } catch (error) {
//         console.error('Failed to fetch data:', error);
//     }
// }

// onMounted(async () => {
//     await getLaptopsProduct();
// });

</script>

<style scoped></style>