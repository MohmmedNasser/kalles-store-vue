<template>
    <section class="my-15">
        <v-container>
            <SectionHeading :sectionHead="sectionHead" />
            <v-row class="mt-2">
                <v-col cols="12" md="6" lg="4" v-for="item, index in 3" :key="index">
                    <BlogCard />
                </v-col>
            </v-row>
        </v-container>

    </section>
</template>

<script setup lang="ts">
import BlogCard from '../Blog/BlogCard.vue';
import SectionHeading from '../SectionHeading.vue';
const sectionHead = "Lates from Blog";

</script>

<style scoped></style>