<template>
    <section class="also-link">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <SectionHeading class="mt-2" :sectionHead="sectionHead" />

                    <swiper :slides-per-view="4" :space-between="15" :modules="modules"
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

<script>

import ProductCard from '@/components/Products/ProductCard.vue';
import SectionHeading from '@/components/SectionHeading.vue';
import { useCategoriesStore } from '@/stores/categories';
import { onMounted, ref, toRef, watch } from 'vue';
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

        const sectionHead = "You may also like";
        const alsoLikeProduct = ref([]);
        const useProductCategory = useCategoriesStore();
        const route = useRoute();
        const allProductByCategory = ref([]);

        onMounted(async () => {
            allProductByCategory.value = await useProductCategory.getProductByCategory(route.query.category);
            alsoLikeProduct.value = allProductByCategory.value.filter(pro => pro.id != route.params.id);
        });

        watch(() => route.params.id, async (newRoute) => {
            if (newRoute) {
                allProductByCategory.value = await useProductCategory.getProductByCategory(route.query.category);
                alsoLikeProduct.value = allProductByCategory.value.filter(pro => pro.id != route.params.id);
            }
        });

        return {
            modules: [Autoplay],
            sectionHead,
            alsoLikeProduct,
        }
    }
}



</script>


<style scoped></style>