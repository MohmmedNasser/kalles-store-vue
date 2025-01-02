<template>
    <v-navigation-drawer elevation="0" v-model="isActiveAuthMenu" location="right" width="340" sticky temporary>
        <v-card elevation="0" class="py-5">
            <div class="d-flex align-center justify-space-between border-b pb-3 px-5 ">
                <v-card-title tag="h5" class="opacity-100 pa-0 text-grey-darken-4 text-subtitle-1 text-uppercase">
                    LOGIN
                </v-card-title>
                <v-btn size="x-small" variant="plain" base-color="#222222" width="30" height="30"
                    @click="toggleAuthMenu">
                    <Icon icon="material-symbols:close-rounded" width="25"></Icon>
                </v-btn>
            </div>

            <div class="auth-wrap px-5 d-flex flex-column mt-5">
                <form @submit.prevent="handleAuth">
                    <div>
                        <label for="username" class="font-weight-regular text-body-2">
                            User Name <span class="text-red-darken-3">*</span>
                        </label>
                        <v-text-field id="username" type="username" v-model="auth.username" class="mt-1 text-body-2 "
                            density="compact" :hide-details="true" placeholder="User Name" variant="outlined">
                        </v-text-field>
                    </div>
                    <div class="mt-3">
                        <label for="password" class="font-weight-regular text-body-2">
                            Password <span class="text-red-darken-3">*</span>
                        </label>
                        <v-text-field id="password" :type="show1 ? 'text' : 'password'" v-model="auth.password"
                            class="mt-1 text-body-2" :hide-details="true"
                            :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" @click:append-inner="show1 = !show1"
                            density="compact" placeholder="Password" variant="outlined">
                        </v-text-field>
                    </div>

                    <div v-if="useAuth.errors.length > 0" class="text-red text-body-2 mt-3">
                        {{ useAuth.errors }}
                    </div>

                    <v-btn variant="plain" type="submit"
                        class="opacity-100 w-100 d-flex justify-center mt-3 py-5 px-4 text-center rounded-pill text-uppercase text-white text-body-2 font-weight-medium bg-cyan-lighten-1 ">
                        Sign in
                    </v-btn>

                    <div class="pa-3 bg-cyan-lighten-5 mt-4 rounded-lg text-caption text-cyan-darken-4">

                        <p class="font-weight-semibold mb-1">
                            Demo user login data :
                        </p>

                        <p class="font-weight-black">
                            <span class="font-weight-medium pe-1">- User Name</span>: emilys
                        </p>
                        <p class="font-weight-black">
                            <span class="font-weight-medium pe-1">- Password</span> : emilyspass
                        </p>
                    </div>

                </form>
            </div>
        </v-card>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import useAuthMenu from '@/composables/useAuthMenu';
import { useAuthStore } from '@/stores/useAuth';
import { Icon } from '@iconify/vue';
import { reactive, ref } from 'vue';

const { isActiveAuthMenu, toggleAuthMenu } = useAuthMenu();
const useAuth = useAuthStore();

const auth = reactive({
    username: '',
    password: ''
});

const show1 = ref(false);
const show2 = ref(true);

// username: emilys
// email : emily.johnson@x.dummyjson.com 
// password: emilyspass

const handleAuth = async () => {
    await useAuth.authenticate('login', auth);

    // try {
    //     const response = await api.post(`/auth/login`, {
    //         username: auth.username,
    //         password: auth.password
    //     });
    //     console.log('login Success', response.data);
    //     // localStorage.setItem('authToken', response.data.token);
    //     isActiveAuthMenu.value = false;
    //     auth.username = "";
    //     auth.password = "";

    // } catch (error: any) {
    //     errorMessage.value = error.response?.data?.message || 'Failed to login';
    //     console.error('Failed to login:', error.response?.data || error.message);
    // }
}

</script>

<style scoped>
.v-navigation-drawer {
    height: 100% !important;
    top: 0 !important;
    z-index: 999999 !important;
}

:deep(.v-label.v-field-label) {
    font-size: 13px;
}

:deep(.v-field__outline) {
    --v-field-border-opacity: 0.19;
}
</style>