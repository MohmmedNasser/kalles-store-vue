<template>
    <section class="product-details mb-10">
        <v-container>

            <v-row align="center" class="mt-2">
                <v-col cols="12" class="pa-0">
                    <v-breadcrumbs :items="['Home', `${product.title}`]"
                        class="px-0 text-subtitle-2 font-weight-regular">
                        <template v-slot:divider class="pa-0">
                            <Icon icon="weui:arrow-outlined" class="text-center" size="small"></Icon>
                        </template>
                    </v-breadcrumbs>
                </v-col>
            </v-row>


            <v-row class="mt-2">

                <ProductThumb :product="product" :loading="loading" />

                <ProductDetails :product="product" :loading="loading" />

            </v-row>

        </v-container>

        <ProductInfo :product="product" />

        <AlsoLikeProduct />

    </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/product';
import ProductInfo from '@/components/Products/ProductInfo.vue';
import AlsoLikeProduct from '@/components/Products/AlsoLikeProduct.vue';
import ProductDetails from '@/components/Products/ProductDetails.vue';
import ProductThumb from '@/components/Products/ProductThumb.vue';

const route = useRoute();
const productStore = useProductStore();
const product = ref<any>({});
const loading = ref(false);

onMounted(async () => {
    product.value = await productStore.getSingleProduct(route.params.id);
});

watch(() => route.params.id, async (newRoute) => {
    if (newRoute) {
        loading.value = true;
        product.value = await productStore.getSingleProduct(route.params.id);
        loading.value = false;
    }
});

</script>

<style scoped></style>