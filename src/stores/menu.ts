import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const menuDrawer = ref(false);
  const toggleMenu = () => {
    menuDrawer.value = !menuDrawer.value;
  }

  return { toggleMenu, menuDrawer }
})
