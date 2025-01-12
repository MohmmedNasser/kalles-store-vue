import type { Product } from '@/types';
import { reactive, ref } from 'vue';

export const dialogState = reactive({
    isQuickViewOpen: false,
    isPaymentDialogOpen: false,
    isSearchDialogOpen: false,
    quickViewProduct: null,
});

export const quickViewProduct = ref<Product | null>(null);

export const openQuickViewDialog = (product: Product) => {
    quickViewProduct.value = product;
    dialogState.isQuickViewOpen = true;
};

export const closeQuickViewDialog = () => {
    quickViewProduct.value = null;
    dialogState.isQuickViewOpen = false;
};

export const openPaymenyDialog = () => {
    dialogState.isPaymentDialogOpen = true;
};

export const closePaymenyDialog = () => {
    dialogState.isPaymentDialogOpen = false;
};

export const openSearchDialog = () => {
    dialogState.isSearchDialogOpen = true;
}

export const closeSearchDialog = () => {
    dialogState.isSearchDialogOpen = false;
};