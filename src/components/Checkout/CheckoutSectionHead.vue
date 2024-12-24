<template>
    <div class="form-heading">
        <h5 class="text-h5 font-weight-medium ma-0 position-relative d-inline-flex">
            {{ title }}
        </h5>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    title: string;
}>()

</script>

<style scoped>
.form-heading {
    position: relative;
    margin-bottom: 30px;
}

.form-heading:after {
    content: "";
    position: absolute;
    bottom: -15px;
    inset-inline-start: 0;
    width: 100%;
    height: 1px;
    background: #dee2e6;
}

.form-heading h5:after {
    content: "";
    position: absolute;
    bottom: -15px;
    inset-inline-start: 0;
    width: 134px;
    height: 2px;
    background: #56cfe1;
    z-index: 2;
}
</style>