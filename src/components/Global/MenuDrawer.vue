<template>
    <div>
        <v-navigation-drawer v-model="menuDrawer" temporary>
            <v-list>
                <v-list-item v-for="category, index in categories" :key="index">
                    <router-link
                        :to="{ name: 'product_category', params: { category: category.slug }, query: { name: category.name } }"
                        class="text-capitalize">
                        {{ category.name }}
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
import { onMounted, ref } from 'vue';
import { useCategoriesStore } from '@/stores/categories';

const useMenu = useMenuStore();
const categoriesStore = useCategoriesStore();


const { menuDrawer } = storeToRefs(useMenu);
const { toggleMenu } = useMenu;
const { fetchCategories } = categoriesStore;

const categories = ref<Object>({});

onMounted(async () => {
    categories.value = await fetchCategories();
})

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