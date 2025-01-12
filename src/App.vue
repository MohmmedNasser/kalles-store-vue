<template>
    <v-layout class="position-relative">
        <AppHeader v-if="!mobileView" />
        <AppResponsiveHeader v-else />
        <MenuDrawer />
        <v-main>
            <router-view />
        </v-main>
        <AppFooter />
        <QuickView v-if="dialogState.isQuickViewOpen" />
        <CartDrawer />
        <PaymenySuccessDialog v-if="dialogState.isPaymentDialogOpen" />
        <AuthDrawer />
        <SearchDialog v-if="dialogState.isSearchDialogOpen" />
    </v-layout>
</template>

<script setup lang="ts">

import AppHeader from '@/components/Global/AppHeader.vue'
import AppFooter from '@/components/Global/AppFooter.vue'
import AppResponsiveHeader from '@/components/Global/AppResponsiveHeader.vue';
import MenuDrawer from '@/components/Global/MenuDrawer.vue';
import CartDrawer from '@/components/Cart/CartDrawer.vue';
import AuthDrawer from '@/components/Auth/AuthDrawer.vue';
import SearchDialog from '@/components/Search/SearchDialog.vue';

import { onMounted, ref, defineAsyncComponent } from 'vue';
import { fetchCategories } from "@/composables/useCategory";

import { dialogState } from '@/composables/useDialog';

const mobileView = ref(false);
const windowWidth = ref(window.innerWidth);

const QuickView = defineAsyncComponent(() => import('@/components/Products/QuickView.vue'));
const PaymenySuccessDialog = defineAsyncComponent(() => import('@/components/Checkout/PaymenySuccessDialog.vue'));

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
    fetchCategories();
    window.onresize = () => {
        getWindowWidth();
    };

})

</script>

<style scoped></style>