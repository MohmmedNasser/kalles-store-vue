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


        </v-container>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref, toRef } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/product';

const route = useRoute();
const productStore = useProductStore();
const product = ref<any>({});

onMounted(async () => {
    product.value = await productStore.getSingleProduct(route.params.id);
});

</script>

<style scoped></style>