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


  const fetchCategories = async () => {
    const res = await api.get('/products/categories');
    const data = res.data.slice(0, 6).map((cat: any) => {
      return {
        slug: cat.slug,
        name: cat.name
      }
    });
    return data;
  }

  return { fetchProducts, fetchCategories }
})
