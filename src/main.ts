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

const vuetify = createVuetify({
    components,
    directives,
});

const pinia = createPinia();
const app = createApp(App)

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(vuetify)
app.use(router)
app.mount('#app')
