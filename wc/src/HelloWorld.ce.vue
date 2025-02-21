<template>
  <HelloWorld :message />
</template>

<script lang="ts" setup>
import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { HelloWorld, messages, getAgentLocale } from '@test/library'

defineProps({
  message: { type: String, default: 'from HelloWorld.ce.vue' },
})

defineOptions({
  configureApp(app: App) {
    const i18n = createI18n<false>({
      legacy: false,
      locale: getAgentLocale(),
      fallbackLocale: 'en',
      messages,
    })
    app.use(i18n)
  },
})
</script>

<style lang="postcss">
@import "@padcom/nano-css-reset";
@import "@test/library";
</style>
