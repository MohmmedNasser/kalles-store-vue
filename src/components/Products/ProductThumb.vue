<template>
    <v-col v-if="!product?.images || loading" cols="6" class="pa-0 tabs-img-loader">
        <v-skeleton-loader type="image"></v-skeleton-loader>
    </v-col>

    <v-col v-else cols="6" class="pa-0">
        <div class="thumb-gallery">
            <v-tabs v-model="selectedTab" direction="vertical">
                <v-tab v-for="(img, index) in product.images" :key="index" :value="img" class="my-2 opacity-100"
                    height="90" :ripple="false" variant="plain">
                    <v-img :src="img" :alt="product.title" :value="img" loading="lazy" width="90" height="90"></v-img>
                </v-tab>
            </v-tabs>
            <div class="flex-grow-1">
                <v-img :src="selectedTab ? selectedTab : product?.thumbnail" v-model="selectedTab" :alt="product.title"
                    height="500" loading="lazy"></v-img>
            </div>
        </div>
    </v-col>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Product } from '@/types';

const selectedTab = ref<String | null>(null);

// defineProps({
//     product: {
//         type: Object,
//     },
//     loading: {
//         type: Boolean,
//     }
// });

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

.tabs-img-loader ::v-deep .v-skeleton-loader .v-skeleton-loader__image {
    height: 500px;
}
</style>