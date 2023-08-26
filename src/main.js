import './assets/style.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

import en from './locales/en.js'
import fr from './locales/fr.js'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        fr
    }
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
