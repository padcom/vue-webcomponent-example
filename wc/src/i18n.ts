import { createI18n } from 'vue-i18n'
import { messages, getAgentLocale } from '@test/library'

export const i18n = createI18n<false>({
  legacy: false,
  locale: getAgentLocale(),
  fallbackLocale: 'en',
  messages,
})
