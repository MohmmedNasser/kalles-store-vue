<template>
    <v-layout>
        <AppHeader />
        <v-main>
            <router-view />
        </v-main>
    </v-layout>
    <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style scoped></style>