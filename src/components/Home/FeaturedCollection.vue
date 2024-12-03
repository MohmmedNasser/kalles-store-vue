<template>
    <section class="my-15">
        <v-container>
            <SectionHeading :sectionHead="sectionHead" />

            <v-card elevation="0" class="my-5">
                <v-tabs v-model="tab" align-tabs="center" class="featured-tabs" color="black">
                    <v-tab :value="1" rounded="pill" active-color="#222222" base-color="#3d3c3d" max-width="135"
                        max-height="41" hide-slider :ripple="false" variant="plain"
                        class="px-3 me-4">Accessories</v-tab>
                    <v-tab :value="2" rounded="pill" active-color="#222222" base-color="#3d3c3d" max-width="135"
                        max-height="41" hide-slider :ripple="false" variant="plain" class="px-3 me-4">Smart TV</v-tab>
                    <v-tab :value="3" rounded="pill" active-color="#222222" base-color="#3d3c3d" max-width="135"
                        max-height="41" hide-slider :ripple="false" variant="plain" class="px-3 me-4">Camera</v-tab>
                    <v-tab :value="4" rounded="pill" active-color="#222222" base-color="#3d3c3d" max-width="135"
                        max-height="41" hide-slider :ripple="false" variant="plain" class="px-3">Digital</v-tab>
                </v-tabs>

                <v-tabs-window v-model="tab">
                    <v-tabs-window-item v-for="n in 4" :key="n" :value="n">
                        <v-row>
                            <v-col v-for="i in 8" :key="i" cols="12" md="3">
                                <ProductCard />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card>

        </v-container>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionHeading from '../SectionHeading.vue';
import ProductCard from '../ProductCard.vue';

const sectionHead = "Featured Collection";
const tab = ref(null);
</script>

<style scoped>
.v-tab-item--selected {
    border: 1px dashed #222222;
    background: transparent !important;
}

/* 
.v-tab--selected .v-tab__slider {
    display: none;
} */
</style>