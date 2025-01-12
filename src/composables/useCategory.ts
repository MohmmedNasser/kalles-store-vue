import api from '@/api';
import { ref } from 'vue';
import type { Category } from '@/types';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const categories = ref<Category[]>([]);
export const categoryList = ref<any>([]);

export const fetchCategories = async () => {
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
        toast.error("Failed to get Categories");
    }
}

// 'https://dummyjson.com/products/category/smartphones'
export const fetchAllCategories = async () => {
    try {
        const response = await api.get('/products/categories');
        const categories = response.data.map((item: Category) => {
            // return item.name;
            return {
                'slug': item.slug,
                'name': item.name
            };
        })
        // categoryList.value = ['All Categories', ...date];
        categoryList.value = [
            { slug: 'all', name: 'All Categories' },
            ...categories
        ]

    } catch (error) {
        console.error('Failed to fetch data:', error);
        toast.error("Failed to get Categories");
    }
}

export const getProductByCategory = async (category: any) => {
    try {
        const res = await api.get(`/products/category/${category}`);
        const products = await res.data.products;
        return products;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        toast.error("Failed to get Products");
    }
}
