<template>
    <v-card class="product-card pa-0" elevation="0">
        <div class="card-top position-relative">
            <v-img class="product-img mx-auto"
                src="https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/thumbnail.png"
                loading="lazy" alt="" width="259" height="259"></v-img>
            <v-btn class="quick-view-btn  text-capitalize font-weight-regular px-0" min-width="148" min-height="39"
                elevation="1" color="white" rounded>
                Quick View
            </v-btn>

        </div>

        <v-card-title tag="p" class="pa-0 text-wrap mb-2 text-grey-darken-4" style="line-height: 1;">
            <v-hover v-slot="{ isHovering, props }">
                <RouterLink to="/" class="text-body-2 font-weight-semibold text-decoration-none"
                    :class="isHovering ? 'text-light-blue-darken-4' : ''" v-bind="props">
                    Video & Air Quality Monitor
                </RouterLink>
            </v-hover>
        </v-card-title>

        <v-card-subtitle tag="p" class="pa-0 font-weight-medium opacity-100">
            <del class="me-2 text-grey-darken-1">
                $312.00
            </del>
            <span class="text-red-accent-4 text-body-2">
                $239.00
            </span>
        </v-card-subtitle>

    </v-card>
</template>

<script setup lang="ts">

</script>

<style scoped>
.quick-view-btn {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
}

.product-card:hover .quick-view-btn {
    top: 50%;
    opacity: 1;
    visibility: visible;
}

.product-card .product-img {
    transition: 0.3s;
}

.product-card:hover .product-img {
    transform: scale(1.06)
}
</style>