<template>
    <section class="also-link">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <SectionHeading class="mt-2" :sectionHead="sectionHead" />
                    <v-row v-if="alsoLikeProduct.length == 0 || isLoading">
                        <v-col cols="12" md="6" lg="3" v-for="n in 4" :key="'skeleton-' + n">
                            <v-skeleton-loader type="card, text, chip, chip"></v-skeleton-loader>
                        </v-col>
                    </v-row>

                    <swiper class="my-swiper" :spaceBetween="10" :slidesPerView="2" :modules="[Autoplay]"
                        :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }" :loop="false"
                        :breakpoints="{
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            1199: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            }
                        }">
                        <swiper-slide v-for="productLike, index in alsoLikeProduct" :key="index">
                            <ProductCard :products="productLike" />
                        </swiper-slide>
                    </swiper>

                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">

import ProductCard from '@/components/Products/ProductCard.vue';
import SectionHeading from '@/components/Global/SectionHeading.vue';
import { onMounted, ref, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from "swiper/modules";
import { useRoute } from 'vue-router';
import useCategory from '@/composables/useCategory';

const isLoading = ref(false);
const sectionHead = "You may also like";
const alsoLikeProduct = ref([]);
const { getProductByCategory } = useCategory();
const route = useRoute();
const allProductByCategory = ref([]);

const props = defineProps<{
    productCategory: String
}>();

onMounted(async () => {
    isLoading.value = true;
    allProductByCategory.value = await getProductByCategory(props.productCategory);
    alsoLikeProduct.value = allProductByCategory.value.filter((pro: any) => pro.id != route.params.id);
    isLoading.value = false;
});

watch(() => route.params.id, async (newRoute) => {
    if (newRoute) {
        isLoading.value = true;
        allProductByCategory.value = await getProductByCategory(props.productCategory);
        alsoLikeProduct.value = allProductByCategory.value.filter((pro: any) => pro.id != route.params.id);
        isLoading.value = false;
    }
});
watch(() => props.productCategory, async (newRoute) => {
    if (newRoute) {
        isLoading.value = true;
        allProductByCategory.value = await getProductByCategory(props.productCategory);
        alsoLikeProduct.value = allProductByCategory.value.filter((pro: any) => pro.id != route.params.id);
        isLoading.value = false;
    }
});

</script>


<style scoped></style>