import { ref } from "vue";

export default function useMobile() {

    const windowWidth = ref(window.innerWidth);
    const isMobile = ref(false);

    const pageSize = () => {
        if (windowWidth.value <= 960) {
            isMobile.value = true
        } else {
            isMobile.value = false
        }
    }

    return {
        pageSize,
        isMobile
    }
}