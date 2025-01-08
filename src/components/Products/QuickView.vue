<template>
    <v-dialog max-width="980" max-height="auto" :class="{ 'my-5': isMobile }" scrollable v-model="isDialogOpen">
        <v-card elevation="0" class="rounded-lg position-relative">
            <v-container class="px-0">
                <v-row class="ma-0">
                    <v-col cols="12" lg="6" class="pa-0">
                        <v-carousel show-arrows="hover" height="100%" progress="blue-grey-lighten-3" hide-delimiters>
                            <v-carousel-item v-for="(image, index) in selectedProduct?.images" :key="index">
                                <v-img :src="image" :alt="selectedProduct?.title" :height="isMobile ? 250 : 550" contain
                                    loading="lazy"></v-img>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                    <ProductDetails :product="selectedProduct" :loading="loading" class="px-5 pa-5" />
                </v-row>
            </v-container>
            <v-btn size="x-small" variant="plain" base-color="#78909C" rounded="circle" :ripple="false"
                class="opacity-100 position-absolute pa-0 close-btn" height="30" width="30" @click="closeDialog">
                <Icon icon="material-symbols:close-rounded" width="25"></Icon>
            </v-btn>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import useDialog from '@/composables/useDialog';
import ProductDetails from './ProductDetails.vue';
import { onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue';
import useMobile from '@/composables/useMobile';

const { isDialogOpen, selectedProduct, closeDialog } = useDialog();
const loading = ref(false);
const { pageSize, isMobile } = useMobile();

onMounted(() => {
    pageSize();
});

</script>

<style scoped>
.product-info {
    max-height: 550px;
    height: 100%;
    overflow-y: scroll
}

.product-info::-webkit-scrollbar-track {
    background: #FFF;
}

.product-info::-webkit-scrollbar-thumb {
    background: #B0BEC5;
}

.product-info::-webkit-scrollbar {
    width: 3px;
    height: 3px;
}

.close-btn {
    top: 15px;
    inset-inline-end: 15px;
}
</style>