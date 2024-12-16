<template>
    <section class="also-link" v-if="$route.query.category">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <SectionHeading class="mt-2" :sectionHead="sectionHead" />
                    <v-row v-if="isLoading">
                        <v-col cols="12" md="6" lg="3" v-for="n in 4" :key="'skeleton-' + n">
                            <v-skeleton-loader type="card, text, chip, chip"></v-skeleton-loader>
                        </v-col>
                    </v-row>

                    <swiper v-else :slides-per-view="4" :space-between="15" :modules="modules"
                        :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }" :loop="false">
                        <swiper-slide v-for="productLike, index in alsoLikeProduct" :key="index">
                            <ProductCard :products="productLike" />
                        </swiper-slide>
                    </swiper>


                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script lang="ts">

import ProductCard from '@/components/Products/ProductCard.vue';
import SectionHeading from '@/components/SectionHeading.vue';
import { useCategoriesStore } from '@/stores/categories';
import { onMounted, ref, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from "swiper/modules";
import { useRoute } from 'vue-router';
export default {
    components: {
        Swiper,
        SwiperSlide,
        SectionHeading,
        ProductCard,
    },

    setup() {
        const isLoading = ref(false);
        const sectionHead = "You may also like";
        const alsoLikeProduct = ref([]);
        const useProductCategory = useCategoriesStore();
        const route = useRoute();
        const allProductByCategory = ref([]);

        onMounted(async () => {
            isLoading.value = true;
            allProductByCategory.value = await useProductCategory.getProductByCategory(route.query.category);
            alsoLikeProduct.value = allProductByCategory.value.filter((pro: any) => pro.id != route.params.id);
            isLoading.value = false;
        });

        watch(() => route.params.id, async (newRoute) => {
            if (newRoute) {
                isLoading.value = true;
                allProductByCategory.value = await useProductCategory.getProductByCategory(route.query.category);
                alsoLikeProduct.value = allProductByCategory.value.filter((pro: any) => pro.id != route.params.id);
                isLoading.value = false;
            }
        });

        return {
            modules: [Autoplay],
            sectionHead,
            alsoLikeProduct,
            isLoading
        }
    }
}



</script>


<style scoped></style>