<template>
    <v-app-bar scroll-behavior="hide" height="70">
        <v-container>
            <v-row align="center">
                <v-col cols="3" class="pa-0">
                    <router-link :to="{ name: 'home' }">
                        <img src="/images/kalles.svg" alt="kalles" title="kalles" loading="lazy" width="95">
                    </router-link>
                </v-col>
                <v-col cols="6" class="pa-0 text-center">
                    <ul class="menu-list">
                        <li>
                            <router-link to="/">
                                beauty
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/">
                                fragrances
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/">
                                furniture
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/">
                                groceries
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/">
                                home-decoration
                            </router-link>
                        </li>
                    </ul>
                </v-col>
                <v-col cols="3" class="pa-0 text-end">
                    <div class="d-flex align-center justify-end">
                        <v-btn size="x-small" variant="text" height="25" :ripple="false">
                            <Icon icon="prime:search" class="text-black" width="25" />
                        </v-btn>
                        <v-btn size="x-small" variant="text" height="30" :ripple="false">
                            <Icon icon="prime:user" width="30" />
                        </v-btn>
                        <v-btn size="x-small" variant="text" height="25" :ripple="false">
                            <Icon icon="solar:heart-angle-line-duotone" width="25" />
                            <v-badge color="#222222" content="3" class="text-body-2" floating location="top"></v-badge>
                        </v-btn>
                        <v-btn size="x-small" variant="text" height="25" :ripple="false">
                            <Icon icon="solar:bag-4-linear" width="25" />
                            <v-badge color="#222222" content="5" floating location="top"></v-badge>

                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.menu-list {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-list li a {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #222;
    padding: 0 17.5px;
    transition: all 0.5s ease;
}

.menu-list li a:hover {
    color: #0dcaf0;
}

.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
}

/* header {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
} */
</style>