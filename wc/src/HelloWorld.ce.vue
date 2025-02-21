<template>
  <HelloWorld :message />
</template>

<script lang="ts" setup>
import { watchEffect, type App, type PropType } from 'vue'
import { HelloWorld, getAgentLocale } from '@test/library'

import { i18n } from './i18n'

const props = defineProps({
  message: { type: String, default: 'from HelloWorld.ce.vue' },
  lang: { type: String as PropType<'en' | 'de' | 'pl'>, default: getAgentLocale },
})

watchEffect(() => { i18n.global.locale.value = props.lang || i18n.global.locale.value })

defineOptions({
  configureApp(app: App) {
    app.use(i18n)
  },
})
</script>

<style lang="postcss">
@import "@padcom/nano-css-reset";
@import "@test/library";
</style>
