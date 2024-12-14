<template>
    <section class="product-details mb-10">
        <v-container>

            <v-row align="center" class="mt-2">
                <v-col cols="12" class="pa-0">
                    <v-breadcrumbs :items="['Home', `${product.title}`]"
                        class="px-0 text-subtitle-2 font-weight-regular">
                        <template v-slot:divider class="pa-0">
                            <Icon icon="weui:arrow-outlined" class="text-center" size="small"></Icon>
                        </template>
                    </v-breadcrumbs>
                </v-col>
            </v-row>


            <v-row class="mt-2">
                <v-col cols="6" class="pa-0">
                    <div class="thumb-gallery">
                        <v-tabs v-model="selectedTab" direction="vertical">
                            <v-tab v-for="(img, index) in product.images" :key="index" :value="img"
                                class="my-2 opacity-100" height="90" :ripple="false" variant="plain">
                                <v-img :src="img" :alt="product.title" :value="img" loading="lazy" width="90"
                                    height="90"></v-img>
                            </v-tab>
                        </v-tabs>
                        <div class="flex-grow-1">
                            <v-img :src="selectedTab ? selectedTab : product.thumbnail" v-model="selectedTab"
                                :alt="product.title" height="500" loading="lazy"></v-img>
                        </div>
                    </div>
                </v-col>
                <v-col cols="6" class="pa-0 ps-5">
                    <v-card elevation="0">
                        <v-card-title tag="h5" class="pa-0 text-wrap mb-3 text-h5 text-black">
                            {{ product.title }}
                        </v-card-title>

                        <div class="d-flex justify-space-between w-full">
                            <v-card-subtitle tag="p" class="pa-0  opacity-100 mt-2">
                                <del class="me-2 text-grey-darken-1 font-weight-medium text-body-2">
                                    ${{ product.price }}
                                </del>
                                <span class="text-red-accent-4 font-weight-bold text-body-1">
                                    ${{ (product.price - product.price * (product.discountPercentage /
                                        100)).toFixed(2) }}
                                </span>
                            </v-card-subtitle>
                            <div>
                                <div class="d-flex justify-start align-center ga-2">
                                    <v-rating readonly half-increments :length="5" :size="20" v-model="product.rating"
                                        color="#BDBDBD" active-color="amber-lighten-1" />
                                    <span class="mt-2 text-subtitle-2 text-grey-darken-3">
                                        ({{ product.rating }})
                                    </span>
                                </div>
                            </div>
                        </div>

                        <v-card-subtitle tag="p" class="pa-0 font-weight-medium opacity-100 mt-4" v-if="product.brand">
                            <span class="text-grey-darken-1">Brand: </span> {{ product.brand }}
                        </v-card-subtitle>

                        <v-card-subtitle tag="p" class="pa-0 font-weight-medium opacity-100 mt-4"
                            v-if="product.availabilityStatus">
                            <span class="text-grey-darken-1">Availability: </span>
                            <span
                                :class="[product.availabilityStatus == 'In Stock' ? 'text-green-accent-4' : 'text-red-accent-2']">
                                {{ product.availabilityStatus }}
                            </span>
                        </v-card-subtitle>


                        <!-- quantity -->
                        <div class="rounded-pill border border-opacity-50 d-inline-flex align-center mt-4">

                            <v-btn class="minus opacity-100 pa-0 rounded-pill" size="x-small" variant="plain"
                                base-color="#000000" height="30" width="20" :ripple="false"
                                @click="quantity == 1 ? 1 : quantity--">
                                <Icon icon="mynaui:minus-solid" width="12" class="text-black"></Icon>
                            </v-btn>

                            <input type="number"
                                class="product-quantity text-center border-none outline-none fw-bold text-body-2 font-weight-medium"
                                value="1" min="0" max="100" v-model="quantity">

                            <v-btn class="plus opacity-100 pa-0 rounded-pill" size="x-small" variant="plain"
                                base-color="#000000" height="30" width="20" :ripple="false" @click="quantity++">
                                <Icon icon="tabler:plus" width="12" class="text-black"></Icon>
                            </v-btn>

                        </div>

                        <div class="d-flex align-center ga-4 mt-4">
                            <v-btn rounded="pill" elevation="4" base-color="#222222"
                                class="d-inline-flex text-capitalize text-body-2 px-8">
                                Add to cart
                            </v-btn>
                            <v-btn size="x-small" rounded="pill" variant="text" base-color="#222222"
                                class="opacity-100 pa-1" height="36" :ripple="false">
                                <Icon icon="solar:heart-angle-line-duotone" width="25" />
                            </v-btn>
                        </div>

                        <div class="mt-4">
                            <img src="/images/trust_img2.png" loading="lazy" alt="trust_image">
                        </div>


                        <div class="d-flex flex-column ga-2 font-weight-medium text-subtitle-2 border-t pt-4">

                            <div class="d-flex align-center ga-2 ga-1" v-if="product.category">
                                <span class="text-grey-darken-1">Categories :</span>
                                <span class="text-capitalize">{{ product.category }}</span>
                            </div>

                            <div class="d-flex align-center ga-2" v-if="product.sku">
                                <span class="text-grey-darken-1">SKU :</span>
                                <span class="text-uppercase">{{ product.sku }}</span>
                            </div>

                            <div class="d-flex align-center ga-2" v-if="product.tags">
                                <span class="text-grey-darken-1">Tags :</span>
                                <span v-for="(tag, index) in product.tags" :key="index" class="text-capitalize">
                                    {{ tag }},
                                </span>
                            </div>

                            <div class="d-flex align-center ga-2 ga-1" v-if="product.meta?.qrCode">
                                <span class="text-grey-darken-1">QR Code :</span>
                                <div>
                                    <v-img :src="product.meta?.qrCode" width="30" height="30" loading="lazy" cover />
                                </div>
                            </div>
                        </div>

                    </v-card>
                </v-col>
            </v-row>

        </v-container>

        <div class="bg-grey-lighten-3 px-3 py-7 mt-10">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-card elevation="0" class="mb-5 bg-transparent">

                            <v-tabs v-model="tabInfo" align-tabs="center" class="mb-4 px-5 px-sm-1" color="black">
                                <v-tab v-for="(productTabItem, index) in productTab" :key="index" :value="index"
                                    rounded="pill" active-color="#222222" base-color="#3d3c3d" max-width="135"
                                    max-height="41" hide-slider :ripple="false" variant="plain"
                                    class="px-3 mx-3 text-capitalize opacity-100">
                                    {{ productTabItem }}
                                </v-tab>
                            </v-tabs>


                            <v-tabs-window v-model="tabInfo">
                                <!-- <v-tabs-window-item v-for="(_, index) in productTab" :key="index" :value="index">
                                    <v-row>
                                        <v-col v-for="(item, index) in productTab" :key="index" cols="6" md="3" xl="4">

                                        </v-col>
                                    </v-row>
                                </v-tabs-window-item> -->

                                <v-tabs-window-item :value="0">
                                    <v-row>
                                        <v-col cols="12">
                                            {{ product.description }}
                                        </v-col>
                                    </v-row>
                                </v-tabs-window-item>
                                <v-tabs-window-item :value="1">
                                    <v-row>
                                        <v-col cols="12">
                                            {{ additionalInfo }}
                                        </v-col>
                                    </v-row>
                                </v-tabs-window-item>
                                <v-tabs-window-item :value="2">
                                    <v-row>
                                        <v-col cols="12">
                                            {{ product.reviews }}
                                        </v-col>
                                    </v-row>
                                </v-tabs-window-item>

                            </v-tabs-window>

                        </v-card>

                    </v-col>
                </v-row>
            </v-container>

        </div>

    </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/product';

const route = useRoute();
const productStore = useProductStore();
const product = ref<any>({});
const selectedTab = ref<String | null>(null);
const quantity = ref<any>(1);
const tabInfo = ref<String | null>(null);
const productTab = ref(['Description', 'Additional Information', 'Reviews']);
onMounted(async () => {
    product.value = await productStore.getSingleProduct(route.params.id);
    additionalInfo
});

const additionalInfo = computed(() => {
    if (!product.value) return {};
    return {
        dimensions: product.value.dimensions || 'Not available',
        warrantyInformation: product.value.warrantyInformation || 'Not available',
        shippingInformation: product.value.shippingInformation || 'Not available',
    };
});

</script>

<style scoped>
.thumb-gallery {
    display: flex;
    align-items: flex-start;
}


.product-quantity {
    width: 25px;
    outline: none !important;
    user-select: none;
    pointer-events: none;
}

.product-quantity::-webkit-inner-spin-button,
.product-quantity::-webkit-outer-spin-button {
    appearance: none;
    -webkit-appearance: none;
}

.v-tab-item--selected {
    border: 1px dashed #222222;
    background: transparent !important;
}
</style>