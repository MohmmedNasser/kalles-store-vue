<template>
    <section class="mb-10">
        <PageHeading title="Shopping Cart" />
    </section>
    <section class="mt-5 mb-10">
        <v-container>
            <CartTable class="mb-5" />

            <CartSubtotal />

        </v-container>
    </section>
</template>

<script setup lang="ts">

import CartSubtotal from '@/components/Cart/CartSubtotal.vue';
import CartTable from '@/components/Cart/CartTable.vue';
import PageHeading from '@/components/Global/PageHeading.vue';
import { useHead } from '@unhead/vue';

useHead({
    title: 'Cart | Kalles Ecommerce',
});

</script>

<style scoped>
.cart-table thead tr th {
    height: auto !important;
    padding-bottom: 10px !important;
}
</style>