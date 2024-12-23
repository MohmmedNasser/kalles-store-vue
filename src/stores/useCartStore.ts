import type { CartItem } from '@/types'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cartItems: [] as CartItem[]
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
        addToCart(item: any, quantity: number) {
            let index = this.cartItems.findIndex((product: any) => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity = quantity
            } else {
                item.quantity = quantity;
                this.cartItems.push(item);
            }
        },
        incrementQ(item: any) {
            let index = this.cartItems.findIndex((product: any) => product.id === item.id)
            if (index !== -1) {
                this.cartItems[index].quantity += 1
            } else {
                // console.log('Item not found');
            }
        },
        decrementQ(item: any) {
            let index = this.cartItems.findIndex((product: any) => product.id === item.id)
            if (index !== -1) {
                this.cartItems[index].quantity -= 1
                if (this.cartItems[index].quantity === 0) {
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id)
                }
            } else {
                // console.log('Item not found');
            }
        },
        removeFromCart(item: any) {
            this.cartItems = this.cartItems.filter((product: any) => product.id !== item.id)
        }
    }
})