import api from '@/api';

export default function useProduct() {

    const fetchProducts = async (name: string) => {
        try {
            const res = await api.get(`/products/category/${name}`);
            const date = await res.data.products.slice(0, 8);
            // product.value = res.data.products.filter((_: any, index: number) => index < 8);
            return date;
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }
    const getSingleProduct = async (id: any) => {
        try {
            const res = await api.get(`/products/${id}`)
            const product = await res.data;
            return product;
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }

    return { fetchProducts, getSingleProduct }

}