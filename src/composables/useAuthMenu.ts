import { ref } from "vue"

const isActiveAuthMenu = ref(false);

export default function useAuthMenu() {

    const toggleAuthMenu = () => {
        isActiveAuthMenu.value = !isActiveAuthMenu.value;
    }

    return {
        isActiveAuthMenu,
        toggleAuthMenu
    }
}