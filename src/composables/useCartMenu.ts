import { ref } from "vue"

const isActiveCartMenu = ref(false);

export default function useCartMenu() {

    const toggleCartMenu = () => {
        isActiveCartMenu.value = !isActiveCartMenu.value;
    }

    return {
        isActiveCartMenu,
        toggleCartMenu
    }
}