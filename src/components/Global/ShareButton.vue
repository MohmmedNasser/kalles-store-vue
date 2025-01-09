<template>
    <a :href="href" target="_blank">
        <Icon :icon="icon" width="25"></Icon>
    </a>
</template>

<script setup lang="ts">

import { Icon } from '@iconify/vue';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
});

</script>

<style scoped></style>