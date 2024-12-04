<template>
    <v-layout class="position-relative">
        <AppHeader />
        <v-main>
            <router-view />
        </v-main>
        <AppFooter />
    </v-layout>
</template>

<script setup lang="ts">
import AppHeader from './components/Global/AppHeader.vue'
import AppFooter from './components/Global/AppFooter.vue'
</script>

<style scoped></style>