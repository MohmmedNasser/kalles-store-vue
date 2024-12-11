<template>
    <section class="my-15">
        <v-container>
            <SectionHeading :sectionHead="sectionHead" />

            <v-row>

                <v-col v-if="!smartPhones || !smartPhones.length" cols="6" md="3" xl="4" v-for="n in 8"
                    :key="'skeleton-' + n">
                    <v-skeleton-loader type="card, text, chip, chip"></v-skeleton-loader>
                </v-col>

                <v-col v-else cols="6" md="3" xl="4" v-for="product, index in smartPhones" :key="index">
                    <ProductCard :products="product" />
                </v-col>
            </v-row>

        </v-container>

    </section>
</template>

<script setup lang="ts">
import SectionHeading from '../SectionHeading.vue';
import { useProductStore } from '@/stores/product';
import { defineAsyncComponent, onMounted, ref } from 'vue';

const ProductCard = defineAsyncComponent(() => import('../Products/ProductCard.vue'));
const sectionHead = "smart phones";
const productStore = useProductStore();
const { fetchProducts } = productStore;
const smartPhones = ref<Array<any>>([]);

onMounted(async () => {
    smartPhones.value = await fetchProducts("smartphones");
})

// const smartphones = ref<any>([]);
// const getSmartPhonesProduct = async () => {
//     try {
//         const res = await api.get('/products/category/smartphones');
//         smartphones.value = res.data.products.slice(0, 8);
//         // trending.value = res.data.products.filter((_: any, index: number) => index < 8);
//         return res.data;
//     } catch (error) {
//         console.error('Failed to fetch data:', error);
//     }

// }

// onMounted(async () => {
//     await getSmartPhonesProduct();
// });

</script>

<style scoped></style>