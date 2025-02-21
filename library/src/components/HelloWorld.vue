<template>
  <h1>{{ t('hello-world') }} {{ message }}</h1>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

defineProps({
  message: { type: String, default: 'from HelloWorld.vue' },
})

const { t } = useI18n()
</script>

<i18n>
{
  "en": {
    "hello-world": "Hello, world!"
  },
  "de": {
    "hello-world": "Hallo Welt!"
  },
  "pl": {
    "hello-world": "Witaj świecie!"
  }
}
</i18n>

<style lang="postcss" scoped>
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
</style>
