import { defineStore } from 'pinia'
import api from '@/api';

export const useProductStore = defineStore('product', () => {

  const fetchProducts = async (name: string) => {
    try {
      const res = await api.get(`/products/category/${name}`);
      const date = res.data.products.slice(0, 8);
      // product.value = res.data.products.filter((_: any, index: number) => index < 8);
      return date;
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  return { fetchProducts }
})
