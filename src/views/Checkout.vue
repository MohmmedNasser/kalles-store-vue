<template>
    <section class="mb-10">
        <PageHeading title="Checkout" />
    </section>
    <section>
        <v-container>
            <form class="mb-10">
                <v-row>
                    <v-col cols="7">
                        <div>
                            <CheckoutSectionHead title="Billing details" />
                            <v-row>
                                <v-col cols="6">
                                    <label for="firstName" class="font-weight-regular text-body-2">
                                        First name
                                    </label>
                                    <v-text-field id="firstName" class="mt-3 text-body-2" rounded="pill"
                                        density="compact" label="First name" variant="outlined"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <label for="lastName" class="font-weight-regular text-body-2">
                                        Last name
                                    </label>
                                    <v-text-field id="lastName" class="mt-3 text-body-2" rounded="pill"
                                        density="compact" label="Last name" variant="outlined"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">

                                    <label for="companyName" class="font-weight-regular text-body-2">
                                        Company name (optional)
                                    </label>
                                    <v-text-field id="companyName" class="mt-3 text-body-2" rounded="pill"
                                        density="compact" label="Company name" variant="outlined"></v-text-field>

                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <label for="countryRegion" class="font-weight-regular text-body-2">
                                        Country / Region *
                                    </label>
                                    <v-select label="Country / Region" class="mt-3 text-body-2" rounded="pill"
                                        :items="country" variant="outlined" density="compact"></v-select>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <label class="font-weight-regular text-body-2">
                                        Street address *
                                    </label>
                                    <v-text-field class="mt-3 text-body-2" rounded="pill" density="compact"
                                        label="House number and street name" variant="outlined"></v-text-field>

                                    <v-text-field class="mt-3 text-body-2" rounded="pill" density="compact"
                                        label="Apartment, suites, unit, etc.(optional)"
                                        variant="outlined"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <label for="townCity" class="font-weight-regular text-body-2">
                                        Town / City
                                    </label>
                                    <v-text-field id="townCity" class="mt-3 text-body-2" rounded="pill"
                                        density="compact" label="Town / City" variant="outlined"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <label for="state" class="font-weight-regular text-body-2">
                                        State *
                                    </label>
                                    <v-select label="State" class="mt-3 text-body-2" rounded="pill" :items="state"
                                        variant="outlined" density="compact"></v-select>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <label for="zipCode" class="font-weight-regular text-body-2">
                                        Postal/Zip Code
                                    </label>
                                    <v-text-field id="PostalZipCode" class="mt-3 text-body-2" rounded="pill"
                                        density="compact" label="Postal/Zip Code" variant="outlined"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <label for="phone" class="font-weight-regular text-body-2">
                                        Phone
                                    </label>
                                    <v-text-field id="phone" class="mt-3 text-body-2" rounded="pill" density="compact"
                                        label="Phone" variant="outlined"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <label for="email" class="font-weight-regular text-body-2">
                                        Email
                                    </label>
                                    <v-text-field id="email" type="email" class="mt-3 text-body-2" rounded="pill"
                                        density="compact" label="Email" variant="outlined"></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="mt-10">
                            <CheckoutSectionHead title="Shipping Details" />
                            <v-row>
                                <v-col cols="12">
                                    <label for="orderNotes" class="font-weight-regular text-body-2">
                                        Order notes (optional)
                                    </label>
                                    <v-textarea label="Notes about your order e.g. special notes for delivery."
                                        class="mt-3 text-body-2" height="187" rounded="lg" variant="outlined"
                                        density="compact"></v-textarea>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="5">
                        <OrderDetails />
                    </v-col>
                </v-row>
            </form>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import CheckoutSectionHead from '@/components/Checkout/CheckoutSectionHead.vue';
import OrderDetails from '@/components/Checkout/OrderDetails.vue';
import PageHeading from '@/components/Global/PageHeading.vue';
import { ref } from 'vue';

const country = ref([
    'United States',
    'United Kingdom',
    'Italy',
    'Germany',
    'France',
    'Spain',
    'Australia',
    'Finland',
    'Austria',
    'Belgium',
    'Brazil',
    'Canada',
    'Chile',
    'Cuba',
    'India',
    'Indonesia',
    'Japan',
]);

const state = ref([
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "Armed Forces Americas",
    "Armed Forces Europe",
    "Armed Forces Pacific",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Washington DC",
    "Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
]);

</script>

<style scoped>
:deep(.v-label.v-field-label) {
    font-size: 13px;
}

:deep(.v-input__details),
:deep(.v-messages) {
    display: none;
}

:deep(.v-field__outline) {
    --v-field-border-opacity: 0.19;
}
</style>