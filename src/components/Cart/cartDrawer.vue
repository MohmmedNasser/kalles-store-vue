<template>
    <v-navigation-drawer elevation="0" v-model="isActiveCartMenu" class="cart-drawer" location="right" width="340"
        sticky temporary>
        <v-card elevation="0" class="pa-5">

            <div class="d-flex align-center justify-space-between mb-4 border-b pb-3">
                <v-card-title tag="h5" class="opacity-100 pa-0 text-grey-darken-4 text-subtitle-1">
                    Shopping Cart
                </v-card-title>
                <v-btn size="x-small" variant="plain" base-color="#222222" width="30" height="30"
                    @click="toggleCartMenu">
                    <Icon icon="material-symbols:close-rounded" width="25"></Icon>
                </v-btn>
            </div>

            <div class="d-flex flex-col">

            </div>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quam.
        </v-card>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import useCartMenu from '@/composables/useCartMenu';
import { Icon } from '@iconify/vue/dist/iconify.js';

const { isActiveCartMenu, toggleCartMenu } = useCartMenu();

</script>

<style scoped>
.v-navigation-drawer {
    height: 100% !important;
    top: 0 !important;
    z-index: 999999 !important;
}
</style>