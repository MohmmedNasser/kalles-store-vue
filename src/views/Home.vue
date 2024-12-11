<template>
    <Hero />
    <Feature />
    <Trending />
    <FeaturedCollection />
    <CategoryBanner />
    <BestSelling />
    <Blog />
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Hero = defineAsyncComponent(() => import('../components/Home/Hero.vue'));
const Feature = defineAsyncComponent(() => import('../components/Home/Features.vue'));
const CategoryBanner = defineAsyncComponent(() => import('../components/Home/CategoryBanner.vue'));
const BestSelling = defineAsyncComponent(() => import('../components/Home/BestSelling.vue'));
const FeaturedCollection = defineAsyncComponent(() => import('../components/Home/FeaturedCollection.vue'));
const Trending = defineAsyncComponent(() => import('../components/Home/Trending.vue'));
const Blog = defineAsyncComponent(() => import('../components/Home/Blog.vue'));

</script>