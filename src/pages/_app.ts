import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// let router: any = null
// import router from '../vue-router'
import { createI18n } from 'vue-i18n'
import PrimeVue from 'primevue/config';
import Lara from '../presets/lara/index';

import type { App } from 'vue';

const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'fr',
  messages: {
    en: {
      message: {
        hello: 'hello there 🔫🦅'
      }
    },
    fr: {
      message: {
        hello: 'bonjour cher 🍷🥖'
      }
    }
  }
})

export default (app: App) => {
  // router = import('../vue-router')
  app.use(pinia)
  app.use(PrimeVue, {
    unstyled: true,
    pt: Lara,
  });
  app.use(i18n)
  // app.use(router)
}
