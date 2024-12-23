<template>
    <section class="my-15">
        <v-container>
            <SectionHeading :sectionHead="sectionHead" />
            <v-row class="mt-2">
                <v-col cols="12" md="6" lg="4" v-for="blog in blogInfo.slice(0, 3)" :key="blog.id">
                    <BlogCard :blogInfo="blog" />
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import BlogCard from '../Blog/BlogCard.vue';
import SectionHeading from '../Global/SectionHeading.vue';
const sectionHead = "Lates from Blog";

const blogInfo = [
    {
        id: 1,
        title: 'Style for couple in Weeding season',
        userName: 'John Doe',
        date: 'May 22, 2024',
        description: 'Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.',
        image: 'blog-01.jpg'
    },
    {
        id: 2,
        title: 'The Easiest Way to Break Out on Top',
        userName: 'Fadi Ibrahem',
        date: 'Feb 10, 2024',
        description: 'Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.',
        image: 'blog-02.jpg'
    },
    {
        id: 3,
        title: 'SPRING – SUMMER TRENDING 2020',
        userName: 'Emilys',
        date: 'Mar 15, 2024',
        description: 'Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.',
        image: 'blog-03.jpg'
    },
    {
        id: 4,
        title: 'test',
        userName: 'test',
        date: 'Mar 15, 2024',
        description: 'test test test test.',
        image: 'blog-03.jpg'
    },
]

</script>

<style scoped></style>