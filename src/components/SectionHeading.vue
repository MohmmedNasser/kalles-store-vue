<template>
    <div class="d-flex justify-center align-center">
        <h3 class="section-head position-relative text-center text-h5 text-uppercase font-weight-semibold mb-3">
            <span>{{ sectionHead }}</span>
        </h3>
    </div>
</template>

<script setup lang="ts">

defineProps({
    sectionHead: {
        type: String,
    }
})

</script>

<style scoped>
.section-head:after,
.section-head:before {
    content: "";
    position: absolute;
    background: #222;
    display: inline-block;
    width: 60px;
    height: 2px;
}

.section-head:after {
    left: -100px;
    top: 50%;
}

.section-head:before {
    right: -100px;
    top: 50%;
}

@media (max-width: 991px) {

    .section-head:after,
    .section-head:before {
        width: 30px;
    }

    .section-head:after {
        left: -50px;
    }

    .section-head:before {
        right: -50px;
    }
}
</style>