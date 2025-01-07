<template>
    <section class="product-details mb-10">
        <v-container>

            <v-row align="center" class="mt-2">
                <v-col v-if="!product.title || loading" cols="12" class="pa-0">
                    <v-skeleton-loader type="chip"></v-skeleton-loader>
                </v-col>
                <v-col v-else cols="12" class="pa-0">
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

        <AlsoLikeProduct :productCategory="product.category" />

    </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';
import ProductInfo from '@/components/Products/ProductInfo.vue';
import AlsoLikeProduct from '@/components/Products/AlsoLikeProduct.vue';
import ProductDetails from '@/components/Products/ProductDetails.vue';
import ProductThumb from '@/components/Products/ProductThumb.vue';
import useProduct from '@/composables/useProduct';
import { useHead } from '@unhead/vue';

const route = useRoute();
const { getSingleProduct } = useProduct();
const product = ref<any>({});
const loading = ref(false);

const title = computed(() => {
    return (product.value?.title ? product.value?.title : 'Kalles Ecommerce') + ' | Kalles Ecommerce'
});

useHead({
    title,
});

onMounted(async () => {
    product.value = await getSingleProduct(route.params.id);
});

watch(() => route.params.id, async (newRoute) => {
    if (newRoute) {
        loading.value = true;
        product.value = await getSingleProduct(route.params.id);
        loading.value = false;
    }
});

</script>

<style scoped></style>