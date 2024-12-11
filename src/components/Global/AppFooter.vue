<template>
    <v-footer color="#f6f6f8" class="footer" absolute app>
        <v-container>
            <v-row class="pb-10">
                <v-col cols="12" md="4" lg="3">
                    <v-card elevation="0" color="transparent" class="pa-0">
                        <v-card-title tag="h5" class="pa-0 font-weight-medium text-body-1 mb-4">
                            <Icon icon="ph:headset-light" class="text-black" width="20" />
                            <span>
                                GOT QUESTIONS ?
                            </span>
                        </v-card-title>

                        <v-card-text tag="p" class="pa-0 mb-2">
                            <a href="tel:(001)23456789" class="text-decoration-none text-black font-weight-semibold">
                                <bdo dir="ltr">(001) 2345-6789</bdo>
                            </a>
                        </v-card-text>

                        <v-card-text tag="p" class="pa-0">
                            <a href="tel:(001)23456789" class="text-decoration-none text-black font-weight-semibold">
                                <bdo dir="ltr">(001) 2345-6789</bdo>
                            </a>
                        </v-card-text>

                        <address class="d-flex align-start mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024">
                                <path fill="#878787"
                                    d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544" />
                                <path fill="#878787"
                                    d="M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320" />
                            </svg>
                            <span class="ps-2 text-grey-darken-1 text-body-2">
                                184 Main Rd E, St Albans
                                VIC 3021, Australia
                            </span>
                        </address>

                        <div>
                            <a href="mailto:contact@company.com" class="d-flex items-center text-decoration-none mt-4">
                                <Icon icon="si:mail-line" color="#878787" width="20"></Icon>
                                <span class="ps-2  text-grey-darken-1 text-body-2">
                                    contact@company.com
                                </span>
                            </a>
                        </div>

                    </v-card>
                </v-col>
                <v-col cols="12" md="2" lg="2">
                    <v-card elevation="0" color="transparent" class="pa-0">
                        <v-card-title tag="h5" class="pa-0 font-weight-medium text-body-1 mb-4">
                            <span>
                                Categories
                            </span>
                        </v-card-title>
                        <v-list class="bg-transparent">
                            <v-list-item class="pa-0">
                                <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                    Men
                                </RouterLink>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                    Women
                                </RouterLink>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                    Accessories
                                </RouterLink>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                    Shoes
                                </RouterLink>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                    Denim
                                </RouterLink>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                    Dress
                                </RouterLink>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col cols="12" md="3" lg="2">
                    <v-card elevation="0" color="transparent" class="pa-0">
                        <v-card-title tag="h5" class="pa-0 font-weight-medium text-body-1 mb-4">
                            <span>
                                Categories
                            </span>
                        </v-card-title>

                        <v-list class="bg-transparent">
                            <v-list-item class="pa-0" v-for="category, index in categories" :key="index">
                                <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                    {{ category.name }}
                                </RouterLink>
                            </v-list-item>
                        </v-list>

                    </v-card>
                </v-col>
                <v-col cols="12" md="3" lg="2">
                    <v-card elevation="0" color="transparent" class="pa-0">
                        <v-card-title tag="h5" class="pa-0 font-weight-medium text-body-1 mb-4">
                            <span>
                                Useful links
                            </span>
                        </v-card-title>

                        <v-list class="bg-transparent">
                            <v-list-item class="pa-0">
                                <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                    Store Location
                                </RouterLink>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                    Latest News
                                </RouterLink>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                    My Account
                                </RouterLink>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                    Size Guide
                                </RouterLink>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                    FAQs 2
                                </RouterLink>
                            </v-list-item>
                            <v-list-item class="pa-0">
                                <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                    FAQs
                                </RouterLink>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col cols="12" md="10" lg="3">
                    <v-card elevation="0" color="transparent" class="pa-0">
                        <v-card-title tag="h5"
                            class="pa-0 font-weight-medium text-body-1 mb-4 d-flex items-center ga-1">
                            <Icon icon="fluent:money-16-regular" class="text-grey-darken-2 flex-shrink-0" width="20" />
                            <span>
                                GOT QUESTIONS ? WE ARE USING SAFE PAYMENTS
                            </span>
                        </v-card-title>
                        <v-img src="./images/footer-award.png" alt="certification" width="255" height="52"
                            loading="lazy"></v-img>

                        <div class="mt-8 d-block">
                            <v-card-subtitle class="pa-0 mb-3">
                                Secured by:
                            </v-card-subtitle>
                            <v-img src="./images/footer-payment.png" alt="payment" width="207" height="46"
                                loading="lazy"></v-img>
                        </div>
                    </v-card>
                </v-col>
            </v-row>

            <v-row class="pb-5">
                <v-col class="pa-0" cols="12" md="6">
                    <p class="text-body-2 text-center text-md-start text-grey-darken-1">
                        Copyright &copy; 2024 Kalles all rights reserved. Powered by The4
                    </p>
                </v-col>
                <v-col class="pa-0" cols="12" md="6">
                    <ul class="d-flex items-center ga-10 justify-center justify-md-end ">
                        <li class="mb-0">
                            <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                Shop
                            </RouterLink>
                        </li>
                        <li class="mb-0">
                            <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                About Us
                            </RouterLink>
                        </li>
                        <li class="mb-0">
                            <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                Contact
                            </RouterLink>
                        </li>
                        <li class="mb-0">
                            <RouterLink to="" class="text-grey-darken-1 text-body-2">
                                Blog
                            </RouterLink>
                        </li>
                    </ul>
                </v-col>
            </v-row>

        </v-container>
    </v-footer>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import { Icon } from '@iconify/vue';
import { onMounted, ref } from 'vue';

const productStore = useProductStore();
const { fetchCategories } = productStore;
const categories = ref<Object>({});

onMounted(async () => {
    categories.value = await fetchCategories();
})


</script>

<style scoped>
footer {
    padding-top: 50px;
}

.v-list-item.v-list-item--one-line {
    min-height: auto;
    margin-bottom: 8px;
}

.v-list-item a:hover {
    color: #56cfe1 !important;
}

address {
    font-style: normal;
}
</style>