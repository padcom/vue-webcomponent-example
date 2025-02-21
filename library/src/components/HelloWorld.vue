<template>
  <h1>{{ t('hello-world') }} {{ message }}</h1>
  <Toolbar />
  <MessageList :messages />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import Toolbar from './Toolbar.vue'
import { provideExample } from '../composables/example'
import MessageList, { type Message } from './MessageList.vue'

defineProps({
  message: { type: String, default: 'from HelloWorld.vue' },
})

const { t } = useI18n()
provideExample()

const messages = ref<Message[]>([
  { id: '1', source: 'server', type: 'text', data: 'Hello, world!' },
  { id: '2', source: 'client', type: 'json', data: JSON.stringify({ x: 1, y: 2 }) },
  { id: '3', source: 'server', type: 'text', data: 'How are you doing?' },
  { id: '4', source: 'client', type: 'text', data: 'Pretty good! And yourself?' },
  { id: '5', source: 'server', type: 'text', data: 'Can\'t complain :)' },
  { id: '6', source: 'server', type: 'text', data: 'What are you up to Tomorrow?' },
  { id: '7', source: 'client', type: 'text', data: 'I was thinking to first go for a walk' },
  // eslint-disable-next-line @stylistic/max-len
  { id: '8', source: 'client', type: 'image', data: 'https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=' },
  { id: '9', source: 'server', type: 'text', data: 'Cool!' },
  { id: '10', source: 'server', type: 'text', data: 'And after the forest?' },
  { id: '11', source: 'client', type: 'text', data: 'I will stay home and watch Netflix' },
])
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

.message-list {
  max-height: 400px;
  max-width: 640px;
  margin-inline: auto;
}
</style>
