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
                            :ripple="false" @click="openSearchDialog">
                            <Icon icon="prime:search" class="text-black" width="25" />
                        </v-btn>
                        <v-btn size="x-small" variant="plain" base-color="#222222" class="opacity-100" height="25"
                            :ripple="false" @click="router.push({ name: 'wishlist' })">
                            <Icon icon="solar:heart-angle-line-duotone" width="25" />
                            <v-badge color="#222222" :content="wishlistStore.countwishList" class="text-body-2" floating
                                location="top" v-if="wishlistStore.countwishList > 0"></v-badge>
                        </v-btn>
                        <v-btn size="x-small" variant="plain" base-color="#222222" class="opacity-100" height="25"
                            :ripple="false" @click="toggleCartMenu"
                            v-if="route.name !== 'cart' && route.name !== 'checkout'">
                            <Icon icon="solar:bag-4-linear" width="25" />
                            <v-badge color="#222222" :content="cartStore.countCartItems" floating location="top"
                                v-if="cartStore.countCartItems > 0"></v-badge>
                        </v-btn>
                        <v-btn size="x-small" variant="plain" base-color="#222222" class="opacity-100" height="25"
                            :ripple="false" @click="router.push({ name: 'cart' })" v-else>
                            <Icon icon="solar:bag-4-linear" width="25" />
                            <v-badge color="#222222" :content="cartStore.countCartItems" floating location="top"
                                v-if="cartStore.countCartItems > 0"></v-badge>
                        </v-btn>

                        <v-btn size="x-small" variant="plain" base-color="#222222" class="opacity-100" height="30"
                            :ripple="false" @click="toggleAuthMenu" v-if="!user">
                            <Icon icon="prime:user" width="30" />
                        </v-btn>

                        <v-menu transition="fade-transition" v-else>
                            <template v-slot:activator="{ props }">
                                <v-btn width="35" height="35" variant="plain" :ripple="false"
                                    class="opacity-100 overflow-hidden border ms-2" rounded="circle" min-width="auto"
                                    v-bind="props">
                                    <v-img :src="user?.image" cover width="35" height="35" rounded="circle" />
                                </v-btn>
                            </template>
                            <v-list elevation="1" min-width="auto" class="text-center ma-0 pa-0">
                                <v-list-item class="px-2 pt-2">
                                    <div class="d-flex ga-1 align-center">
                                        <div>
                                            <v-img :src="user?.image" class="flex-shrink-0 border" cover width="35"
                                                height="35" rounded="circle" />
                                        </div>
                                        <div class="d-flex flex-column">
                                            <span class="text-subtitle-2 font-weight-regular">
                                                {{ user?.firstName }} {{ user?.lastName }}
                                            </span>
                                        </div>

                                    </div>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-btn
                                        class="opacity-100 px-5 w-100 text-subtitle-2 text-capitalize font-weight-regular"
                                        @click="logout" variant="text" :ripple="false">
                                        logout
                                    </v-btn>
                                </v-list-item>
                            </v-list>
                        </v-menu>

                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Category from '../Category/Category.vue';
import { useCartStore } from '@/stores/useCartStore';
import { useRoute, useRouter } from 'vue-router';
import { useWishlistStore } from '@/stores/useWishlistStore';
import { useAuthStore } from '@/stores/useAuth';
import { storeToRefs } from 'pinia';
import { openSearchDialog } from '@/composables/useDialog';
import { useMenuStore } from '@/stores/useMenu';

const cartStore = useCartStore()
const wishlistStore = useWishlistStore();
const route = useRoute();
const router = useRouter();

const { user } = storeToRefs(useAuthStore());
const { logout } = useAuthStore();

const useMenu = useMenuStore();
const { toggleAuthMenu, toggleCartMenu } = useMenu;

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