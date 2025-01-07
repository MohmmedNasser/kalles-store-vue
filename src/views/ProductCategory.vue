<template>
    <section class="mb-10">
        <v-container class="py-0">

            <SectionHeading class="mt-10" :sectionHead="sectionHead" />

            <div class="py-5">
                <v-row>

                    <v-col v-if="!product || !product.length || loading" cols="6" md="3" xl="4" v-for="n in 8"
                        :key="'skeleton-' + n">
                        <v-skeleton-loader type="card, text, chip, chip"></v-skeleton-loader>
                    </v-col>

                    <v-col v-else cols="6" md="3" xl="4" v-for="item, index in product" :key="index">
                        <ProductCard :products="item" />
                    </v-col>

                </v-row>
            </div>
        </v-container>
    </section>

</template>

<script setup lang="ts">
import ProductCard from '@/components/Products/ProductCard.vue';
import SectionHeading from '@/components/Global/SectionHeading.vue';
import useCategory from '@/composables/useCategory';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue'

const { getProductByCategory } = useCategory();
const route = useRoute();
const sectionHead = ref(route.query.name);
const product = ref<Array<any>>([]);
const loading = ref(false);

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