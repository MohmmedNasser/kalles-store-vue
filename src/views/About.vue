<template>
    <v-row>
        <v-col cols="12" md="4">
            <v-card subtitle="This is a card subtitle"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
                title="This is a title"></v-card>

            <div class="text-center text-caption">Using Props Only</div>
        </v-col>

        <v-col cols="12" md="4">
            <v-card>
                <template v-slot:title>
                    This is a title
                </template>

                <template v-slot:subtitle>
                    This is a card subtitle
                </template>

                <template v-slot:text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est
                    labore voluptatibus!
                </template>
            </v-card>

            <div class="text-center text-caption">Using Slots Only</div>
        </v-col>

        <v-col cols="12" md="4">
            <v-card>
                <v-card-item>
                    <v-card-title>This is a title</v-card-title>

                    <v-card-subtitle>This is a card subtitle</v-card-subtitle>
                </v-card-item>

                <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est
                    labore
                    voluptatibus!
                </v-card-text>
            </v-card>

            <div class="text-center text-caption">Using Markup Only</div>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">

            <swiper class="my-swiper" :modules="[Navigation, Pagination]" :navigation="true"
                :pagination="{ clickable: true }" :spaceBetween="20" :slidesPerView="3">
                <swiper-slide v-for="(slide, index) in slides" :key="index">
                    <div class="slide-content">
                        {{ slide }}
                    </div>
                </swiper-slide>
            </swiper>

        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';

const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];


</script>

<style scoped>
.my-swiper {
    width: 100%;
    height: 300px;
}

.slide-content {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    height: 100%;
}
</style>
