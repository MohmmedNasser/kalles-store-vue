import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const isActiveNavMenu = ref(false);
  const isActiveAuthMenu = ref(false);
  const isActiveCartMenu = ref(false);

  const toggleNavMenu = () => {
    isActiveNavMenu.value = !isActiveNavMenu.value;
  }

  const toggleAuthMenu = () => {
    isActiveAuthMenu.value = !isActiveAuthMenu.value;
  }

  const toggleCartMenu = () => {
    isActiveCartMenu.value = !isActiveCartMenu.value;
  }

  return { isActiveNavMenu, toggleNavMenu, isActiveAuthMenu, toggleAuthMenu, isActiveCartMenu, toggleCartMenu }

});
