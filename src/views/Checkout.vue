<template>
    <section class="mb-10">
        <PageHeading title="Checkout" />
    </section>
    <section>
        <v-container>
            <form class="mb-10">
                <v-row>
                    <v-col cols="12" lg="7">
                        <div>
                            <CheckoutSectionHead title="Billing details" />
                            <v-row>
                                <v-col cols="6" class="pb-0">
                                    <label for="firstName" class="font-weight-regular text-body-2">
                                        First name *
                                    </label>
                                    <v-text-field id="firstName" class="mt-3 text-body-2" rounded="pill"
                                        density="compact" placeholder="First name" variant="outlined"
                                        v-model="firstName" :error-messages="getError('firstName')"
                                        hide-details="auto"></v-text-field>
                                    <!-- <div v-if="getError('firstName')"
                                        class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ getError('firstName') }}
                                    </div> -->
                                </v-col>
                                <v-col cols="6" class="pb-0">
                                    <label for="lastName" class="font-weight-regular text-body-2">
                                        Last name *
                                    </label>
                                    <v-text-field id="lastName" class="mt-3 text-body-2" rounded="pill"
                                        density="compact" placeholder="Last name" variant="outlined" v-model="lastName"
                                        :error-messages="getError('lastName')" hide-details="auto"></v-text-field>
                                    <!-- <div v-if="getError('lastName')"
                                        class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ getError('lastName') }}
                                    </div> -->
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" class="pb-0">
                                    <label for="companyName" class="font-weight-regular text-body-2">
                                        Company name (optional)
                                    </label>
                                    <v-text-field id="companyName" class="mt-3 text-body-2" rounded="pill"
                                        density="compact" placeholder="Company name" variant="outlined"
                                        :hide-details="true"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" class="pb-0">
                                    <label for="countryRegion" class="font-weight-regular text-body-2">
                                        Country / Region *
                                    </label>
                                    <v-select placeholder="Country / Region" class="mt-3 text-body-2" v-model="country"
                                        rounded="pill" :items="countries" variant="outlined" density="compact"
                                        :error-messages="getError('country')" hide-details="auto"></v-select>
                                    <!-- <div v-for="countryError in errorBag.country"
                                        class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ countryError }}
                                    </div> -->
                                    <!-- <div v-if="getError('country')" class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ getError('country') }}
                                    </div> -->
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" class="pb-0">
                                    <label class="font-weight-regular text-body-2">
                                        Street address *
                                    </label>
                                    <v-text-field class="mt-3 text-body-2" rounded="pill" density="compact"
                                        placeholder="House number and street name" v-model="address" variant="outlined"
                                        :error-messages="getError('address')" hide-details="auto"></v-text-field>

                                    <!-- <div v-if="getError('address')" class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ getError('address') }}
                                    </div> -->

                                    <!-- <div v-for="addressOneError in errorBag.addressOne"
                                        class="text-red-darken-3 text-subtitle-2 mt-1 ps-2">
                                        {{ addressOneError }}
                                    </div> -->

                                    <v-text-field class="mt-3 text-body-2" rounded="pill" density="compact"
                                        placeholder="Apartment, suites, unit, etc.(optional)" variant="outlined"
                                        :hide-details="true"></v-text-field>

                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" class="pb-0">
                                    <label for="townCity" class="font-weight-regular text-body-2">
                                        Town / City *
                                    </label>
                                    <v-text-field id="townCity" class="mt-3 text-body-2" rounded="pill"
                                        density="compact" placeholder="Town / City" variant="outlined"
                                        v-model="townCity" :error-messages="getError('townCity')"
                                        hide-details="auto"></v-text-field>
                                    <!-- <div v-if="getError('townCity')"
                                        class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ getError('townCity') }}
                                    </div> -->
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" class="pb-0">
                                    <label for="state" class="font-weight-regular text-body-2">
                                        State *
                                    </label>
                                    <v-select placeholder="State" id="state" class="mt-3 text-body-2" rounded="pill"
                                        :items="state" variant="outlined" density="compact" v-model="province"
                                        :error-messages="getError('province')" hide-details="auto"></v-select>

                                    <!-- <div v-if="getError('province')"
                                        class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ getError('province') }}
                                    </div> -->
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" class="pb-0">
                                    <label for="zipCode" class="font-weight-regular text-body-2">
                                        Postal/Zip Code *
                                    </label>
                                    <v-text-field id="PostalZipCode" class="mt-3 text-body-2" rounded="pill"
                                        density="compact" placeholder="Postal/Zip Code" variant="outlined"
                                        v-model="PostalZipCode" :error-messages="getError('PostalZipCode')"
                                        hide-details="auto"></v-text-field>
                                    <!-- <div v-if="getError('PostalZipCode')"
                                        class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ getError('PostalZipCode') }}
                                    </div> -->
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" class="pb-0">
                                    <label for="phone" class="font-weight-regular text-body-2">
                                        Phone *
                                    </label>
                                    <v-text-field id="phone" class="mt-3 text-body-2" rounded="pill" density="compact"
                                        placeholder="Phone" variant="outlined" v-model="phone"
                                        :error-messages="getError('phone')" hide-details="auto"></v-text-field>
                                    <!-- <div v-if="getError('phone')" class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ getError('phone') }}
                                    </div> -->
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" class="pb-0">
                                    <label for="email" class="font-weight-regular text-body-2">
                                        Email *
                                    </label>
                                    <v-text-field id="email" type="email" class="mt-3 text-body-2" rounded="pill"
                                        density="compact" placeholder="Email" variant="outlined" v-model="email"
                                        :error-messages="getError('email')" hide-details="auto"></v-text-field>
                                    <!-- <div v-if="getError('email')" class="text-red-darken-3 text-subtitle-2 mt-1 ps-1">
                                        {{ getError('email') }}
                                    </div> -->
                                </v-col>
                            </v-row>
                        </div>
                        <div class="mt-10">
                            <CheckoutSectionHead title="Shipping Details" />
                            <v-row>
                                <v-col cols="12" class="pb-0">
                                    <label for="orderNotes" class="font-weight-regular text-body-2">
                                        Order notes (optional)
                                    </label>
                                    <v-textarea placeholder="Notes about your order e.g. special notes for delivery."
                                        class="mt-3 text-body-2" height="187" rounded="lg" variant="outlined"
                                        density="compact" :hide-details="true"></v-textarea>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="5">
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
    country: string().required("Country is required"),
    address: string().required('Street Address is required'),
    province: string().required('State is required'),
    firstName: string().required('First Name is required'),
    lastName: string().required('Last Name is required'),
    townCity: string().required('Town/City is required'),
    PostalZipCode: string().required('Postal/Zip Code is required'),
    phone: string().required('Phone is required'),
    email: string().required('Email is required').email('The field must be Email'),
});

const { defineField, errorBag, handleSubmit, validate } = useForm({
    validationSchema
});

const getError = (name: string): string | null => {
    const err = errorBag.value[name];
    return err ? err[0] : null;
}

const [country] = defineField('country');
const [address] = defineField('address');
const [province] = defineField('province');
const [firstName] = defineField('firstName');
const [lastName] = defineField('lastName');
const [townCity] = defineField('townCity');
const [PostalZipCode] = defineField('PostalZipCode');
const [phone] = defineField('phone');
const [email] = defineField('email');

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

:deep(.v-text-field input::placeholder) {
    font-size: 12px !important;
}

:deep(.v-field__outline) {
    --v-field-border-opacity: 0.19;
}
</style>