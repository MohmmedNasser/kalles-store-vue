<template>
    <section class="my-15">
        <v-container>
            <SectionHeading :sectionHead="sectionHead" />

            <v-row>
                <v-col cols="6" md="3" xl="4" v-for="product in trending" :key="product.id">
                    <ProductCard :products="product" />
                </v-col>
            </v-row>

        </v-container>

    </section>
</template>

<script setup lang="ts">
import SectionHeading from '../SectionHeading.vue';
import ProductCard from '../Products/ProductCard.vue';
import api from '@/api';
import { onMounted, ref } from 'vue';

const sectionHead = "Trending";
const trending = ref<any>([]);
const getTrendingProduct = async () => {
    try {
        const res = await api.get('/products/category/smartphones');
        trending.value = res.data.products.slice(0, 8);
        // trending.value = res.data.products.filter((_: any, index: number) => index < 8);
        return res.data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }

    // const res = await api.get('/products/category/smartphones')
    //     .then(res => trending.value = res.data.products.slice(0, 8))
    //     .catch(err => console.log(err)
    //     );

}

onMounted(async () => {
    await getTrendingProduct();
});

</script>

<style scoped></style>