<template>
    <v-app-bar scroll-behavior="hide" height="70">
        <v-container>
            <v-row align="center">
                <v-col cols="4" class="pa-0">
                    <Icon icon="hugeicons:menu-02" class="text-black" width="25" @click="toggleMenuFun"></Icon>
                </v-col>
                <v-col cols="4" class="pa-0 text-center">
                    <router-link :to="{ name: 'home' }">
                        <img src="/images/kalles.svg" alt="kalles" title="kalles" loading="lazy" width="95">
                    </router-link>
                </v-col>
                <v-col cols="4" class="pa-0 text-end">
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
                            :ripple="false">
                            <Icon icon="solar:bag-4-linear" width="25" />
                            <v-badge color="#222222" content="5" floating location="top start"></v-badge>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';
import { Icon } from '@iconify/vue';
const useMenu = useMenuStore();

const { toggleMenu } = useMenu;

const toggleMenuFun = () => {
    toggleMenu();
}

</script>

<style scoped>
.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
}
</style>