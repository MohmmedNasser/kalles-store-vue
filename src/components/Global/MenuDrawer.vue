<template>
    <v-navigation-drawer class="menu-navigation" v-model="isActiveNavMenu" temporary>
        <v-list>
            <Category from="menu" />
        </v-list>
        <v-btn size="x-small" variant="plain" class="close-menu opacity-100 pa-0" width="25" height="25"
            @click="toggleNavMenu">
            <Icon icon="material-symbols:close" class="text-black" width="20" height="20" />
        </v-btn>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useMenuStore } from '@/stores/useMenu';
import { storeToRefs } from 'pinia';
import Category from '../Category/Category.vue';

const useMenu = useMenuStore();

const { isActiveNavMenu } = storeToRefs(useMenu);
const { toggleNavMenu } = useMenu;

</script>

<style scoped>
.close-menu {
    padding: 0 !important;
    position: absolute;
    top: 15px;
    inset-inline-end: 15px;
    min-width: auto;
}
</style>