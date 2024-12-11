import { defineStore } from 'pinia'
import api from '@/api';

export const useCategoriesStore = defineStore('categories', () => {

    const fetchCategories = async () => {
        const res = await api.get('/products/categories');
        const data = await res.data.slice(0, 6).map((cat: any) => {
            return {
                slug: cat.slug,
                name: cat.name
            }
        });
        return data;
    }

    const getProductByCategory = async (category: any) => {
        const res = await api.get(`/products/category/${category}`);
        const products = await res.data.products;
        return products;
    }

    return { fetchCategories, getProductByCategory }
})
