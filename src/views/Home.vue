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
import Hero from '../components/Home/Hero.vue';
import Feature from '../components/Home/Features.vue';
import CategoryBanner from '../components/Home/CategoryBanner.vue';
import BestSelling from '../components/Home/BestSelling.vue';
import FeaturedCollection from '../components/Home/FeaturedCollection.vue'
import Trending from '@/components/Home/Trending.vue';
import Blog from '@/components/Home/Blog.vue';
</script>