<template>
    <section>
        <v-container class="py-0" max-width="1140">
            <div class="py-5 border-t border-b">
                <v-row>
                    <v-col cols="12" sm="4" v-for="feature in features" :key="feature.id">
                        <v-card elevation="0" class="d-flex flex-column justify-center align-center">
                            <v-img :src="`./images/${feature.img}`" alt="30 DAYS RETURN" width="48" height="48"
                                loading="lazy"></v-img>
                            <v-card-title tag="p" class="text-sm-subtitle-2 text-uppercase font-weight-bold pa-0 pt-2">
                                {{ feature.text }}
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import type { Features } from '@/types';
import { reactive } from 'vue';

const features: Features[] = reactive([
    {
        id: 1,
        img: 'shp-inf-01.png',
        text: 'Free shipping'
    },
    {
        id: 2,
        img: 'shp-inf-02.png',
        text: 'SUPPORT 24/7'
    },
    {
        id: 3,
        img: 'shp-inf-03.png',
        text: '30 DAYS RETURN'
    }
])
</script>

<style scoped></style>