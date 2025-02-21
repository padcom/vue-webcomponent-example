import '@padcom/nano-css-reset'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import { messages } from './i18n'
import { getAgentLocale } from './lib'

export const i18n = createI18n({
  legacy: false,
  locale: getAgentLocale(),
  fallbackLocale: 'en',
  messages,
})

createApp(App)
  .use(i18n)
  .mount('#app')
