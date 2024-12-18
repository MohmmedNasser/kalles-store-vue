<template>

    <template v-if="from == 'header'">
        <li v-for="category, index in categories" :key="index">
            <router-link
                :to="{ name: 'product_category', params: { category: category.slug }, query: { name: category.name } }"
                class="text-capitalize">
                {{ category.name }}
            </router-link>
        </li>
    </template>

    <template v-if="from == 'menu'">
        <v-list-item v-for="category, index in categories" :key="index">
            <router-link
                :to="{ name: 'product_category', params: { category: category.slug }, query: { name: category.name } }"
                class="text-capitalize">
                {{ category.name }}
            </router-link>
        </v-list-item>
    </template>

    <template v-if="from == 'footer'">
        <v-list-item class="pa-0" v-for="category, index in categories" :key="index">
            <RouterLink
                :to="{ name: 'product_category', params: { category: category.slug }, query: { name: category.name } }"
                class="text-grey-darken-1 text-body-2">
                {{ category.name }}
            </RouterLink>
        </v-list-item>
    </template>

</template>

<script setup lang="ts">
import useCategory from '@/composables/useCategory';
import { onMounted, ref } from 'vue';

defineProps<{
    from: String;
}>();

const { fetchCategories } = useCategory();
const categories = ref<Object>({});

onMounted(async () => {
    categories.value = await fetchCategories();
});

</script>

<style scoped>
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

.v-list-item.v-list-item--one-line {
    min-height: auto;
    margin-bottom: 8px;
}

.v-list-item a:hover {
    color: #56cfe1 !important;
}
</style>