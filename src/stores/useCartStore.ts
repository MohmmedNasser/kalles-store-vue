import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cartItems: []
        }
    },
    getters: {
        countCartItems(state) {
            return state.cartItems.length
        },
        getCartItems(state) {
            return state.cartItems
        },
    },
    actions: {
        addToCart(item: any) {
            let index = this.cartItems.findIndex((product: any) => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity += 1
            } else {
                item.quantity = 1
                this.cartItems.push(item);
                localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
            }
        },
    }
})