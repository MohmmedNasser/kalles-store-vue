import { defineStore } from 'pinia'

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
            } else {
                this.wishList.splice(index, 1);
            }
        },
    },
    persist: true,
})