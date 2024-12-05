<template>
    <div>
        <v-navigation-drawer v-model="menuDrawer" temporary>
            <v-list>
                <v-list-item>
                    <router-link to="/" class="text-capitalize">
                        beauty
                    </router-link>
                </v-list-item>
                <v-list-item>
                    <router-link to="/" class="text-capitalize">
                        fragrances
                    </router-link>
                </v-list-item>
                <v-list-item>
                    <router-link to="/" class="text-capitalize">
                        furniture
                    </router-link>
                </v-list-item>
                <v-list-item>
                    <router-link to="/" class="text-capitalize">
                        groceries
                    </router-link>
                </v-list-item>
                <v-list-item>
                    <router-link to="/" class="text-capitalize">
                        home-decoration
                    </router-link>
                </v-list-item>
            </v-list>
            <v-btn size="x-small" variant="plain" class="close-menu opacity-100 pa-0" width="25" height="25"
                @click="toggleMenu">
                <Icon icon="material-symbols:close" class="text-black" width="20" height="20" />
            </v-btn>
        </v-navigation-drawer>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useMenuStore } from '@/stores/menu';
import { storeToRefs } from 'pinia';

const useMenu = useMenuStore();

const { menuDrawer } = storeToRefs(useMenu);
const { toggleMenu } = useMenu;

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