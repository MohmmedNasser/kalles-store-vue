<template>
    <v-col v-if="!product?.images || loading" cols="12" lg="6" class="pa-0 tabs-img-loader">
        <v-skeleton-loader type="image"></v-skeleton-loader>
    </v-col>

    <v-col v-else cols="12" lg="6" class="pa-0">
        <div class="thumb-gallery">
            <v-tabs v-model="selectedTab" direction="vertical">
                <v-tab v-for="(img, index) in product.images" :key="index" :value="img" class="my-2 opacity-100"
                    :height="isMobile ? 46 : 90" :ripple="false" variant="plain">
                    <v-img :src="img" :alt="product.title" :value="img" loading="lazy" :width="isMobile ? 46 : 90"
                        :height="isMobile ? 46 : 90"></v-img>
                </v-tab>
            </v-tabs>
            <div class="flex-grow-1">
                <v-img :src="selectedTab ? selectedTab : product?.thumbnail" v-model="selectedTab" :alt="product.title"
                    :height="isMobile ? 250 : 500" loading="lazy"></v-img>
            </div>
        </div>
    </v-col>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Product } from '@/types';
import useMobile from '@/composables/useMobile';

const selectedTab = ref<String | null>(null);

// defineProps({
//     product: {
//         type: Object,
//     },
//     loading: {
//         type: Boolean,
//     }
// });

const { pageSize, isMobile } = useMobile();

onMounted(() => {
    pageSize();
});

defineProps<{
    product: Product,
    loading: Boolean
}>();


</script>

<style scoped>
.thumb-gallery {
    display: flex;
    align-items: flex-start;
}

.tabs-img-loader :deep(.v-skeleton-loader .v-skeleton-loader__image) {
    height: 500px;
}

@media (max-width: 690px) {
    .tabs-img-loader :deep(.v-skeleton-loader .v-skeleton-loader__image) {
        height: 250;
    }
}
</style>