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
                                    <v-select label="Country / Region" class="mt-3 text-body-2" v-model="country"
                                        rounded="pill" :items="countries" variant="outlined"
                                        density="compact"></v-select>
                                    <!-- <div v-for="countryError in errorBag.country"
                                        class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ countryError }}
                                    </div> -->
                                    <div v-if="getError('country')" class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ getError('country') }}
                                    </div>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <label class="font-weight-regular text-body-2">
                                        Street address *
                                    </label>
                                    <v-text-field class="mt-3 text-body-2" rounded="pill" density="compact"
                                        label="House number and street name" v-model="address"
                                        variant="outlined"></v-text-field>

                                    <div v-if="getError('address')" class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ getError('address') }}
                                    </div>

                                    <!-- <div v-for="addressOneError in errorBag.addressOne"
                                        class="text-red-darken-3 text-subtitle-2 mt-1 ps-2">
                                        {{ addressOneError }}
                                    </div> -->

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
                                    <v-select label="State" id="state" class="mt-3 text-body-2" rounded="pill"
                                        :items="state" variant="outlined" density="compact"
                                        v-model="province"></v-select>

                                    <div v-if="getError('province')"
                                        class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ getError('province') }}
                                    </div>
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
                        <OrderDetails :submit="submit" />
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

import { useForm } from 'vee-validate';
import { string, object } from 'yup';
import { useHead } from '@unhead/vue'

import { ref } from 'vue';

useHead({
    title: 'Checkout | Kalles Ecommerce',
});

const countries = ref([
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

const validationSchema = object({
    country: string().required("Please enter a country"),
    address: string().required('Street address is required'),
    province: string().required('State is required'),
});

const { defineField, errorBag, handleSubmit, validate } = useForm({
    validationSchema
});

const getError = (name: string) => {
    const err = errorBag.value[name];
    return err ? err[0] : false;
}

const [country] = defineField('country');
const [address] = defineField('address');
const [province] = defineField('province');

const submit = handleSubmit(() => {
    const isValid = validate();
    if (!isValid) {
        console.error('Validation failed:', errorBag.value);
        return false;
    }
    return true;
});
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