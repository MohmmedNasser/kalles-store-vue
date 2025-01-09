import type { Product } from '@/types';
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
const toast = useToast();

export const useWishlistStore = defineStore('wishlist', {
    state: () => {
        return {
            wishList: [] as Product[],
        }
    },
    getters: {
        countwishList(state) {
            return state.wishList.length
        },
        getwishList(state) {
            return state.wishList
        },
    },
    actions: {
        addToWishList(item: Product) {
            let index = this.wishList.findIndex((product: Product) => product.id === item.id);
            if (index === -1) {
                this.wishList.push(item);
                toast.success("Product added to the WishList");
            } else {
                this.wishList.splice(index, 1);
                toast.success("Product removed from the WishList");
            }
        },
        removeWishList(item: Product) {
            this.wishList = this.wishList.filter((product: Product) => product.id !== item.id);
            toast.success("Product removed from the WishList");
        }
    },
    persist: true,
})