<template>
    <v-btn variant="plain" :disabled="agree"
        class="opacity-100 d-flex justify-center py-3 px-4 text-center rounded-pill text-uppercase text-white text-body-2 font-weight-medium letter-spacing-3 check-out-btn"
        @click="router.push({ name: 'checkout' })">
        Check out
    </v-btn>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps<{
    agree?: boolean,
}>();

</script>

<style scoped>
.check-out-btn {
    background-color: #0dcaf0;
    width: 100%;
    height: auto !important;
}

.check-out-btn:disabled {
    background-color: #60dff8;
}

.check-out-btn:hover {
    background-color: #0baccc !important;
}
</style>