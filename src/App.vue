<template>
    <v-layout class="position-relative">
        <AppHeader v-if="!mobileView" />
        <AppResponsiveHeader v-else />
        <MenuDrawer />
        <v-main>
            <router-view />
        </v-main>
        <AppFooter />
        <QuickView v-if="isDialogOpen" />
        <CartDrawer />
        <PaymenySuccessDialog v-if="isPaymenyDialogOpen" />
    </v-layout>
</template>

<script setup lang="ts">
import AppHeader from './components/Global/AppHeader.vue'
import AppFooter from './components/Global/AppFooter.vue'
import { onMounted, ref, defineAsyncComponent } from 'vue';
import AppResponsiveHeader from './components/Global/AppResponsiveHeader.vue';
import MenuDrawer from './components/Global/MenuDrawer.vue';
import useDialog from './composables/useDialog';
import CartDrawer from './components/Cart/CartDrawer.vue';

const mobileView = ref(false);
const windowWidth = ref(window.innerWidth);
const { isDialogOpen, isPaymenyDialogOpen } = useDialog();

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
    window.onresize = () => {
        getWindowWidth();
    };
})

</script>

<style scoped></style>