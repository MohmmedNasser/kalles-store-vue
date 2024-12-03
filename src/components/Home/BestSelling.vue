<template>
    <section class="my-15">
        <v-container>
            <SectionHeading :sectionHead="sectionHead" />

            <v-row>
                <v-col cols="3" v-for="item, index in 8" :key="index">
                    <ProductCard />
                </v-col>
            </v-row>

        </v-container>

    </section>
</template>

<script setup lang="ts">
import SectionHeading from '../SectionHeading.vue';
import ProductCard from '../ProductCard.vue';

const sectionHead = "Best Seller";

</script>

<style scoped></style>