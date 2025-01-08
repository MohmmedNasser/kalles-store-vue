import api from '@/api';
import { ref } from 'vue';
import type { Category } from '@/types';

const categories = ref<Category[]>([]);

export default function useCategory() {

    const fetchCategories = async () => {
        try {
            const res = await api.get('/products/categories');
            const data = await res.data.slice(0, 6).map((cat: any) => {
                return {
                    slug: cat.slug,
                    name: cat.name
                }
            });
            categories.value = data;
            // return data;
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }

    const getProductByCategory = async (category: any) => {
        try {
            const res = await api.get(`/products/category/${category}`);
            const products = await res.data.products;
            return products;
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }


    return { categories, fetchCategories, getProductByCategory }
}