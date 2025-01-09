import type { CartItem, Product } from '@/types'
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
const toast = useToast();

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
        removeCartItems(state) {
            return state.cartItems = [];
        }
    },
    actions: {
        addToCart(item: any, quantity: number) {
            let index = this.cartItems.findIndex((product) => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity = quantity
            } else {
                item.quantity = quantity;
                this.cartItems.push(item);
            }
            toast.success("Product added to the cart");
        },
        incrementQ(item: any) {
            let index = this.cartItems.findIndex((product) => product.id === item.id)
            if (index !== -1) {
                this.cartItems[index].quantity += 1;
                toast.success("Product quantity increased");
            } else {
                toast.error("Product not found");
            }
        },
        decrementQ(item: any) {
            let index = this.cartItems.findIndex((product) => product.id === item.id)
            if (index !== -1) {
                this.cartItems[index].quantity -= 1
                if (this.cartItems[index].quantity === 0) {
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id)
                }
                toast.success("Product quantity decreased");
            } else {
                toast.error("Product not found");
            }
        },
        removeFromCart(item: any) {
            this.cartItems = this.cartItems.filter((product) => product.id !== item.id);
            toast.success("Product removed from the cart");
        }
    },
    persist: true,
})