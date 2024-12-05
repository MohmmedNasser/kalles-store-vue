<template>
    <v-layout class="position-relative">
        <AppHeader v-if="!mobileView" />
        <AppResponsiveHeader v-else />
        <MenuDrawer />
        <v-main>
            <router-view />
        </v-main>
        <AppFooter />
    </v-layout>
</template>

<script setup lang="ts">
import AppHeader from './components/Global/AppHeader.vue'
import AppFooter from './components/Global/AppFooter.vue'
import { onMounted, ref } from 'vue';
import AppResponsiveHeader from './components/Global/AppResponsiveHeader.vue';
import MenuDrawer from './components/Global/MenuDrawer.vue';

const mobileView = ref(false);
const windowWidth = ref(window.innerWidth);

const getWindowWidth = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= 960) {
        mobileView.value = true;
    } else {
        mobileView.value = false;
    }
};

onMounted(() => {
    getWindowWidth();
    window.onresize = () => {
        getWindowWidth();
    };
})

</script>

<style scoped></style>