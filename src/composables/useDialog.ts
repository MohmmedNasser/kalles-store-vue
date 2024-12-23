import { ref } from "vue";
import type { Product } from '@/types';

const isDialogOpen = ref(false);
const selectedProduct = ref<Product | null>(null);

export default function useDialog() {

    const openDialog = (product: Product) => {
        selectedProduct.value = product;
        isDialogOpen.value = true;
    };

    const closeDialog = () => {
        isDialogOpen.value = false;
        selectedProduct.value = null;
    };

    return {
        openDialog,
        closeDialog,
        isDialogOpen,
        selectedProduct
    }
}