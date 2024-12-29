import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
const toast = useToast();

export const useWishlistStore = defineStore('wishlist', {
    state: () => {
        return {
            wishList: [],
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
        addToWishList(item: any) {
            let index = this.wishList.findIndex((product: any) => product.id === item.id);
            if (index === -1) {
                this.wishList.push(item);
                toast.success("Product added to the WishList");
            } else {
                this.wishList.splice(index, 1);
                toast.success("Product removed from the WishList");
            }
        },
        removeWishList(item: any) {
            this.wishList = this.wishList.filter((product: any) => product.id !== item.id);
            toast.success("Product removed from the WishList");
        }
    },
    persist: true,
})