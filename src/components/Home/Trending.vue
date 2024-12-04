<template>
    <section class="my-15">
        <v-container>
            <SectionHeading :sectionHead="sectionHead" />

            <v-row>
                <v-col cols="6" md="3" xl="4" v-for="item, index in 8" :key="index">
                    <ProductCard />
                </v-col>
            </v-row>

        </v-container>

    </section>
</template>

<script setup lang="ts">
import SectionHeading from '../SectionHeading.vue';
import ProductCard from '../Products/ProductCard.vue';

const sectionHead = "Trending";

</script>

<style scoped></style>