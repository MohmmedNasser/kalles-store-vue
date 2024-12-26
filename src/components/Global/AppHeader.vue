<template>
    <v-app-bar scroll-behavior="hide" height="70">
        <v-container>
            <v-row align="center">
                <v-col cols="2" class="pa-0">
                    <router-link :to="{ name: 'home' }">
                        <img src="/images/kalles.svg" alt="kalles" title="kalles" loading="lazy" width="95">
                    </router-link>
                </v-col>
                <v-col cols="8" class="pa-0 text-center">
                    <nav>
                        <ul class="menu-list">
                            <Category from="header" />
                        </ul>
                    </nav>
                </v-col>
                <v-col cols="2" class="pa-0 text-end">
                    <div class="d-flex align-center justify-end">
                        <v-btn size="x-small" variant="plain" base-color="#222222" class="opacity-100" height="25"
                            :ripple="false">
                            <Icon icon="prime:search" class="text-black" width="25" />
                        </v-btn>
                        <v-btn size="x-small" variant="plain" base-color="#222222" class="opacity-100" height="30"
                            :ripple="false">
                            <Icon icon="prime:user" width="30" />
                        </v-btn>
                        <v-btn size="x-small" variant="plain" base-color="#222222" class="opacity-100" height="25"
                            :ripple="false" @click="router.push({ name: 'wishlist' })">
                            <Icon icon="solar:heart-angle-line-duotone" width="25" />
                            <v-badge color="#222222" content="3" class="text-body-2" floating location="top"></v-badge>
                        </v-btn>
                        <v-btn size="x-small" variant="plain" base-color="#222222" class="opacity-100" height="25"
                            :ripple="false" @click="toggleCartMenu"
                            v-if="route.name !== 'cart' && route.name !== 'checkout'">
                            <Icon icon="solar:bag-4-linear" width="25" />
                            <v-badge color="#222222" :content="cartStore.countCartItems" floating location="top"
                                v-if="cartStore.countCartItems > 0"></v-badge>

                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Category from '../Category/Category.vue';
import useCartMenu from '@/composables/useCartMenu';
import { useCartStore } from '@/stores/useCartStore';
import { useRoute, useRouter } from 'vue-router';

const { toggleCartMenu } = useCartMenu();
const cartStore = useCartStore()
const route = useRoute();
const router = useRouter();

</script>

<style scoped>
.menu-list {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
}
</style>