<template>
    <v-dialog max-width="450" persistent v-model="dialogState.isPaymentDialogOpen">
        <v-card elevation="0" class="rounded-lg overflow-hidden position-relative py-6 px-4">
            <v-container class="px-0">
                <div class="d-flex flex-column align-center justify-center">
                    <Icon icon="icon-park-outline:success" width="90" color="#388E3C"></Icon>
                    <h5 class="text-h5 text-body-1 text-uppercase font-weight-bold my-3">
                        Payment successfully
                    </h5>
                    <p class="text-center font-weight-regular text-subtitle-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda amet nisi ipsa itaque,
                        molestiae culpa dolorum possimus nesciunt libero.
                    </p>
                    <v-btn variant="outlined" class="text-capitalize mt-5 font-weight-medium"
                        @click="closePaymenyDialog">
                        Continue shipping
                    </v-btn>
                </div>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { dialogState, closePaymenyDialog } from '@/composables/useDialog';

</script>

<style scoped></style>