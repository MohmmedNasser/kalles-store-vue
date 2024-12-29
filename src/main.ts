import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

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

const options = {
    timeout: 2000,
    position: "bottom-left",
    pauseOnHover: false,
};

const vuetify = createVuetify({
    components,
    directives,
});

const pinia = createPinia();
const app = createApp(App)

pinia.use(piniaPluginPersistedstate)
app.use(Toast, options);
app.use(pinia)
app.use(vuetify)
app.use(router)
app.mount('#app')
