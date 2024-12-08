<template>
    <section class="mt-5 mb-15">
        <v-container>
            <v-row>
                <v-col cols="12" md="6" v-for="category in categoryBanner" :key="category.id">
                    <v-card elevation="0" class="pa-6 " color="#f6f6f6">
                        <v-row align="start">
                            <v-col cols="7">
                                <v-card-title tag="h6" class="pa-0 text-body-2 text-md-h4 text-wrap font-weight-bold"
                                    style="line-height: 1.2;">
                                    {{ category.name }}
                                </v-card-title>
                                <v-card-subtitle tag="p"
                                    class="pa-0 mb-4 mt-2 font-weight-medium text-wrap text-black opacity-100">Save
                                    {{ category.description }}
                                </v-card-subtitle>
                                <v-btn color="#222222" class="text-capitalize font-weight-bold px-0 " rounded
                                    variant="outlined" elevation="0" min-width="150" min-height="42">
                                    Buy Now
                                </v-btn>
                            </v-col>
                            <v-col cols="5">
                                <v-img :src="`./images/${category.image}`" width="200" height="200" :alt="category.name"
                                    loading="lazy"></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <!-- <v-col cols="12" md="6">
                    <v-card elevation="0" class="pa-6" color="#f6f6f6">
                        <v-row align="center">
                            <v-col cols="7">
                                <v-card-title tag="h6" class="pa-0 text-h6 text-md-h4 font-weight-bold">Galaxy
                                    S10
                                    Lite</v-card-title>
                                <v-card-subtitle tag="p"
                                    class="pa-0 mb-4 font-weight-medium text-black opacity-100">Save
                                    up
                                    to
                                    25%</v-card-subtitle>
                                <v-btn color="#222222" class="text-capitalize font-weight-bold px-0 " rounded
                                    variant="outlined" elevation="0" min-width="150" min-height="42">
                                    Buy Now
                                </v-btn>
                            </v-col>
                            <v-col cols="5">
                                <v-img
                                    src="https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/thumbnail.png"
                                    alt="Galaxy S10 Lite" loading="lazy"></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card elevation="0" class="pa-6" color="#f6f6f6">
                        <v-row align="center">
                            <v-col cols="7">
                                <v-card-title tag="h6" class="pa-0 text-h6 text-md-h4 font-weight-bold">Galaxy
                                    S10
                                    Lite</v-card-title>
                                <v-card-subtitle tag="p"
                                    class="pa-0 mb-4 font-weight-medium text-black opacity-100">Save
                                    up
                                    to
                                    25%</v-card-subtitle>
                                <v-btn color="#222222" class="text-capitalize font-weight-bold px-0 " rounded
                                    variant="outlined" elevation="0" min-width="150" min-height="42">
                                    Buy Now
                                </v-btn>
                            </v-col>
                            <v-col cols="5">
                                <v-img
                                    src="https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/thumbnail.png"
                                    alt="Galaxy S10 Lite" loading="lazy"></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card elevation="0" class="pa-6" color="#f6f6f6">
                        <v-row align="center">
                            <v-col cols="7">
                                <v-card-title tag="h6" class="pa-0 text-h6 text-md-h4 font-weight-bold">Galaxy
                                    S10
                                    Lite</v-card-title>
                                <v-card-subtitle tag="p"
                                    class="pa-0 mb-4 font-weight-medium text-black opacity-100">Save
                                    up
                                    to
                                    25%</v-card-subtitle>
                                <v-btn color="#222222" class="text-capitalize font-weight-bold px-0 " rounded
                                    variant="outlined" elevation="0" min-width="150" min-height="42">
                                    Buy Now
                                </v-btn>
                            </v-col>
                            <v-col cols="5">
                                <v-img
                                    src="https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/thumbnail.png"
                                    alt="Galaxy S10 Lite" loading="lazy"></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col> -->
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const categoryBanner = ref([
    {
        id: 1,
        name: 'Galaxy S10 Lite',
        description: 'Save up to 25%',
        image: 'grid-banner-01.jpg'
    },
    {
        id: 2,
        name: 'New SmartWatch',
        description: 'Save up to 35%',
        image: 'grid-banner-02.jpg'
    },
    {
        id: 3,
        name: 'Dell XPS 2020',
        description: 'Engineered to run on ultra-fast networks.',
        image: 'grid-banner-03.jpg'
    },
    {
        id: 4,
        name: 'Save up to',
        description: 'Plus earn 2% back in Kalles rewards',
        image: 'grid-banner-04.jpg'
    },
])

</script>

<style scoped>
.v-card {
    min-height: 230px;
}
</style>