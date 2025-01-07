import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const toastOptions = {
    timeout: 2000,
    position: "bottom-left",
    pauseOnHover: false,
};

const vuetify = createVuetify({
    components,
    directives,
});



const pinia = createPinia();
const app = createApp(App);

const head = createHead();

pinia.use(piniaPluginPersistedstate)
app.use(head)
app.use(Toast, toastOptions)
app.use(pinia)
app.use(vuetify)
app.use(router)
app.mount('#app')
