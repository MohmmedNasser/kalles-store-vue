<template>
    <section class="hero-sec">
        <swiper :slides-per-view="1" :space-between="0" :modules="modules"
            :pagination="{ el: '.hero-pagination', clickable: true }"
            :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }" :loop="true">
            <swiper-slide v-for="info in sliderInfo" :key="info.id">
                <div class="hero-item">
                    <v-container>
                        <div class="hero-img d-none d-md-block">
                            <v-img :src="`/images/${info.slideImg}`" loading="lazy" alt="Meet Galaxy S20, S20"
                                title="Meet Galaxy S20, S20"></v-img>
                        </div>
                        <div class="content">
                            <div class="content-inner">
                                <p class="font-weight-medium text-body-1 mb-3">{{ info.slideSpan }}</p>
                                <p class="font-weight-medium text-h5 text-md-h4 mb-1"> {{ info.slideName }} </p>
                                <p class="font-weight-medium text-subtitle-1 text-sm-h6 mb-2">
                                    {{ info.slideBody }}
                                </p>
                                <RouterLink :to="{ name: 'home' }" color="#222222" rounded elevation="0"
                                    class="d-inline-flex text-capitalize text-white text-body-2 rounded-pill bg-grey-darken-4 mt-3 px-8 py-3">
                                    Explore Now
                                </RouterLink>
                            </div>
                        </div>
                    </v-container>
                </div>
            </swiper-slide>

            <div class="hero-pagination"></div>

        </swiper>

    </section>
</template>

<script lang="ts">

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css/pagination';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {

        const sliderInfo = ref([
            {
                id: 1,
                slideImg: 'main-slide.jpg',
                slideSpan: "SUMMER 2024",
                slideName: "Meet Galaxy S20, S20+",
                slideBody: "This is the phone that will change photography",
            },
            {
                id: 2,
                slideImg: 'main-slide.jpg',
                slideSpan: "SUMMER 2024",
                slideName: "Meet Galaxy S20, S20+",
                slideBody: "This is the phone that will change photography",
            }
        ]);

        return {
            modules: [Pagination, Autoplay],
            sliderInfo,
        }
    }
}

</script>

<style>
.hero-sec .hero-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px !important;
    position: relative;
}

@media (max-width: 960px) {
    .hero-sec .hero-item {
        height: 300px !important;
    }
}

.hero-sec .hero-img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.hero-sec .hero-item .content {
    position: relative;
    z-index: 2;
}

.hero-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-20px);
    position: relative;
    z-index: 2;
}

.hero-pagination .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: hsl(0 0% 20% / 25%);
    opacity: 1;
}

.hero-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #222222;
}

.hero-sec .content-inner {
    transform: translateX(-40px);
    opacity: 0;
}

.hero-sec .content-inner {
    transform: translateX(-40px);
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.44, 0.13, 0.48, 0.87) 0.3s;
}

.hero-sec .swiper-slide-active .content-inner {
    transform: translateX(0);
    opacity: 1;
}
</style>