import api from '@/api';
import type { User } from '@/types';
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
import { useMenuStore } from './useMenu';

const toast = useToast();

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            user: null as User | null,
            errors: {},
        }
    },
    actions: {
        async getUser() {
            if (localStorage.getItem("token")) {
                try {
                    const res = await api.post("/api/user", {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    });
                    this.user = res.data
                } catch (error: any) {
                    console.error("Failed to fetch user:", error.response?.data || error.message);
                    toast.error("Failed to get user");
                }
            }
        },

        async authenticate(apiRoute: string, formData: any) {
            const useMenu = useMenuStore();
            try {
                const response = await api.post(`/auth/${apiRoute}`, formData);

                localStorage.setItem("token", response.data.accessToken);
                this.user = response.data;
                useMenu.isActiveAuthMenu = false;
                this.errors = {};
                toast.success("You have successfully logged in");

            } catch (error: any) {
                this.errors = error.response?.data?.message || 'Failed to login';
                console.error('Failed to login:', error.response?.data || error.message);
                toast.error(`Failed to login`);
            }
        },

        logout() {
            this.user = null;
            localStorage.removeItem("token");
            localStorage.removeItem("authStore");
            toast.success("You have successfully logged out");
        }
    },
    persist: true,
})