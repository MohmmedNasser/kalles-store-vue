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
                            <li v-for="category, index in categories" :key="index">
                                <router-link :to="{ name: 'product_category', params: { category: category.slug } }"
                                    class="text-capitalize">
                                    {{ category.name }}
                                </router-link>
                            </li>
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
                        <!-- <v-btn size="x-small" variant="plain" base-color="#222222" class="opacity-100" height="25"
                            :ripple="false">
                            <Icon icon="solar:heart-angle-line-duotone" width="25" />
                            <v-badge color="#222222" content="3" class="text-body-2" floating location="top"></v-badge>
                        </v-btn> -->
                        <v-btn size="x-small" variant="plain" base-color="#222222" class="opacity-100" height="25"
                            :ripple="false">
                            <Icon icon="solar:bag-4-linear" width="25" />
                            <v-badge color="#222222" content="5" floating location="top"></v-badge>

                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import { Icon } from '@iconify/vue';
import { onMounted, ref } from 'vue';

const productStore = useProductStore();
const { fetchCategories } = productStore;
const categories = ref<Object>({});

onMounted(async () => {
    categories.value = await fetchCategories();
})

</script>

<style scoped>
.menu-list {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-list li {
    padding: 0 10px;
}

.menu-list li a {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #222;
    transition: all 0.5s ease;
}

.menu-list li a:hover {
    color: #0dcaf0;
}

.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
}
</style>