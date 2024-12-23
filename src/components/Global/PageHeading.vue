<template>
    <v-card elevation="0" image="./images/shopping-cart-head.jpg" cla height="128"
        class="d-flex justify-center align-center position-relative page-heading">
        <v-card-title tag="h1" class="text-center text-white text-h6 font-weight-medium text-uppercase ma-0">
            {{ title }}
        </v-card-title>
    </v-card>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<style scoped>
.page-heading:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(34, 34, 34, 0.5);
    z-index: -1;
}
</style>