import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import { useCartStore } from '@/stores/useCartStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products/:category',
      name: 'product_category',
      component: () => import('../views/ProductCategory.vue'),
    },
    {
      path: '/product/:id',
      name: 'product_details',
      component: () => import('../views/ProductDetailsPage.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue'),
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('../views/Wshlist.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/Checkout.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not_found',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const cartStore = useCartStore();
  if ((to.name === 'cart' || to.name === 'checkout') && cartStore.cartItems.length === 0) {
    return next({ name: 'home' });
  }
  next();
});

export default router
