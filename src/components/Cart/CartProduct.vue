<template>
    <v-row class="my-2">
        <v-col cols="5" class="pa-2 pe-3">
            <v-img src="https://kalles-live.vercel.app/html/assets/images/mini-cart/mini-cart-01.jpg" loading="lazy"
                height="127" class="w-full" cover></v-img>
        </v-col>
        <v-col cols="7" class="pa-0">

            <v-card-text tag="p" class="pa-0 opacity-100 pt-2">
                La Bohème Rose Gold
            </v-card-text>

            <v-card-subtitle tag="div" class="pa-0 opacity-100 mt-2 font-weight-medium">
                <del class="me-1 text-grey-darken-1 text-body-2">
                    $60.00
                </del>
                <span class="text-red-accent-3 text-body-2">
                    $40.00
                </span>
            </v-card-subtitle>

            <div class="d-flex ga-4 align-center justify-space-between">

                <Quantity />

                <v-btn size="x-small" variant="plain" base-color="#424242" rounded="circle" :ripple="false"
                    class="opacity-100 pa-0 mt-3" height="20" width="20">
                    <Icon icon="material-symbols:close-rounded" width="20"></Icon>
                </v-btn>
            </div>

        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Quantity from '../Products/Quantity.vue';

</script>

<style scoped></style>