<template>
    <div class="bg-grey-lighten-3 px-3 py-7 my-10">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card elevation="0" class="mb-5 bg-transparent">

                        <v-tabs v-model="tabInfo" align-tabs="center" class="product-info-tab mb-8 px-5 px-sm-1"
                            color="black">
                            <v-tab v-for="(productHeadingTabItem, index) in productHeadingTab" :key="index"
                                :value="index" rounded="pill" active-color="#222222" base-color="#3d3c3d"
                                max-width="135" max-height="41" hide-slider :ripple="false" variant="plain"
                                class="px-3 mx-3 text-capitalize opacity-100">
                                {{ productHeadingTabItem }}
                            </v-tab>
                        </v-tabs>

                        <v-tabs-window v-model="tabInfo">

                            <v-tabs-window-item :value="0">
                                <v-row>
                                    <v-col cols="12">
                                        <v-card-text tag="p" class="opacity-100 pa-0 text-body-2 text-grey-darken-4">
                                            {{ product?.description }}
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                            </v-tabs-window-item>
                            <v-tabs-window-item :value="1">
                                <v-row>
                                    <v-col cols="12">
                                        <v-table class="bg-transparent border">
                                            <tbody class="text-capitalize">

                                                <tr>
                                                    <td class="border-e">
                                                        dimension
                                                    </td>
                                                    <td>
                                                        <div class="d-flex align-center ga-2">
                                                            <p>
                                                                <span>width :</span>
                                                                {{
                                                                    additionalInfo.dimensions.width
                                                                }}
                                                            </p>
                                                            |
                                                            <p>
                                                                <span>Height :</span> {{
                                                                    additionalInfo.dimensions.height }}
                                                            </p>
                                                            |
                                                            <p>
                                                                <span>Depth :</span> {{
                                                                    additionalInfo.dimensions.depth
                                                                }}
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="border-e">
                                                        warranty Information
                                                    </td>
                                                    <td>
                                                        {{ additionalInfo.warrantyInformation }}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="border-e">
                                                        shipping Information
                                                    </td>
                                                    <td>
                                                        {{ additionalInfo.shippingInformation }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </v-table>

                                    </v-col>
                                </v-row>
                            </v-tabs-window-item>
                            <v-tabs-window-item :value="2">
                                <v-row>
                                    <v-col cols="12" md="6" lg="4" v-for="(review, i) in product?.reviews" :key="i">
                                        <v-card elevation="0" class="pa-5 rounded-lg">
                                            <div class="d-flex align-center ga-2 mb-2">
                                                <v-avatar color="#607D8B" size="x-small">
                                                    {{ (review.reviewerName).split("")[0] }}
                                                </v-avatar>
                                                <div class="d-flex align-center ga-2 flex-grow-1">
                                                    <v-card-text tag="p"
                                                        class="opacity-100 font-weight-medium text-body-2 pa-0 text-grey-darken-4">
                                                        {{ review.reviewerName }}
                                                    </v-card-text>

                                                    <v-card-text tag="span"
                                                        class="pa-0 text-end text-grey-darken-1 text-subtitle-2">
                                                        {{ formatDate(review.date) }}
                                                    </v-card-text>

                                                </div>
                                            </div>

                                            <v-rating readonly half-increments :length="5" size="20"
                                                v-model="review.rating" color="#BDBDBD"
                                                active-color="yellow-accent-4" />

                                            <v-card-title tag="h5"
                                                class="opacity-100 text-grey-darken-3 font-weight-medium text-body-2 pa-0 mt-2">
                                                {{ review.comment }}
                                            </v-card-title>



                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-tabs-window-item>
                        </v-tabs-window>

                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    product: {
        type: Object,
    }
})

const tabInfo = ref<String | null>(null);
const productHeadingTab = ref(['Description', 'Additional Information', 'Reviews']);
const route = useRoute();

onMounted(async () => {
    additionalInfo;
});

const additionalInfo = computed(() => {
    if (!props.product) return {};
    return {
        dimensions: props.product.dimensions,
        warrantyInformation: props.product.warrantyInformation,
        shippingInformation: props.product.shippingInformation,
    };
});

watch(() => route.params.id, async (newRoute) => {
    if (newRoute) {
        additionalInfo;
    }
});


const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
};

</script>

<style scoped>
.product-info-tab .v-tab-item--selected {
    border: 1px dashed #222222;
    background: transparent !important;
}
</style>
