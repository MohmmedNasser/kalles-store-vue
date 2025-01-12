<template>

    <v-row class="my-2 border-b pb-2">
        <v-col cols="5" class="pa-2 pe-3">
            <v-img :src="products?.thumbnail" loading="lazy" height="100" class="w-full"></v-img>
        </v-col>
        <v-col cols="7" class="pa-0">
            <v-card-text tag="p" class="pa-0 text-wrap mb-1 mt-2 text-grey-darken-4">
                <v-hover v-slot="{ isHovering, props }">
                    <RouterLink @click="closeSearchDialog"
                        :to="{ name: 'product_details', params: { id: products?.id } }"
                        class="text-body-2 font-weight-semibold text-decoration-none"
                        :class="isHovering ? 'text-light-blue-darken-4' : ''" v-bind="props">
                        {{ products?.title }}
                    </RouterLink>
                </v-hover>
            </v-card-text>

            <v-card-subtitle tag="div" class="pa-0 opacity-100 mt-2">
                <span class="text-grey-darken-2 font-weight-regular text-caption" v-if="products?.discountPercentage">
                    $ {{ ((products?.price - products?.price * (products?.discountPercentage /
                        100))).toFixed(2)
                    }}
                </span>
                <span class="text-grey-darken-2 font-weight-regular text-caption" v-else>
                    $ {{ products?.price ? (products?.price).toFixed(2) : 0 }}
                </span>
            </v-card-subtitle>

        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import type { Product } from '@/types';
import { closeSearchDialog } from "@/composables/useDialog";

const props = defineProps<{
    products: Product,
}>();

</script>

<style scoped></style>