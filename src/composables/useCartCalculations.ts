import { computed, ref } from 'vue';
import type { CartItem } from '@/types';
import { useCartStore } from '@/stores/useCartStore';

export function useCartCalculations() {
    const cartStore = useCartStore();
    const freeShippingPrice = ref<number>(5000);
    const shippingPrice = ref<Number>(50); // Fixed Price (no change)

    const productPrices = computed(() =>
        cartStore.getCartItems.map((product: CartItem) => {
            const quantity = product.quantity || 0;
            if (product.discountPercentage) {
                return ((product.price - product.price * (product.discountPercentage / 100)) * quantity).toFixed(2);
            } else {
                return (product.price * quantity).toFixed(2);
            }
        })
    );

    const totalCartPrice = computed(() => {
        let total = 0;
        cartStore.getCartItems.forEach((item: CartItem) => {
            let price = 0;
            if (item?.discountPercentage) {
                price = (item.price - (item.price * item.discountPercentage) / 100) * item.quantity;
            } else {
                price = item.price * item.quantity;
            }
            total += Math.round(price * 100) / 100;
        });
        return Math.round(total * 100) / 100;
    });


    return {
        productPrices,
        totalCartPrice,
        shippingPrice,
        freeShippingPrice,
    };
}