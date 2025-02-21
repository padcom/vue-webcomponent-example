<template>
  <div class="message-list">
    <component :is="getMessageComponent(message)" v-for="message in messages" :key="message.id"
      class="message"
      :class="{
        ['client-message']: message.source === 'client',
        ['server-message']: message.source === 'server',
      }"
      :message
    />
  </div>
</template>

<script lang="ts">
export type GUID = string

export type MessageSource = 'server' | 'client'

export type MessageType = 'text' | 'json' | 'image'

export interface Message {
  id: GUID
  source: MessageSource
  type: MessageType
  data: string
}
</script>

<script lang="ts" setup>
import type { PropType } from 'vue'
import TextMessage from './messages/TextMessage.vue'
import JsonMessage from './messages/JsonMessage.vue'
import ImageMessage from './messages/ImageMessage.vue'

defineProps({
  messages: { type: Array as PropType<Message[]>, default: () => [] },
})

function getMessageComponent(message: Message) {
  switch (message.type) {
    case 'json': return JsonMessage
    case 'image': return ImageMessage
    default: return TextMessage
  }
}
</script>

<style lang="postcss" scoped>
.message-list {
  --message-border-width: 8px;

  overflow-y: auto;
  overflow-x: hidden;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  .message {
    padding: 0.5rem 1rem;
    margin-block: 1px;
    border-radius: var(--message-border-width);
  }

  .server-message {
    align-self: flex-start;
    background-color: #E9E9EB;
    color: black;
  }

  .client-message {
    align-self: flex-end;
    background-color: #0080FF;
    color: white;
  }

  .server-message:has(+ .client-message),
  :last-child.server-message {
    border-radius: var(--message-border-width) var(--message-border-width) var(--message-border-width) 0;
  }

  .client-message:has(+ .server-message),
  :last-child.client-message {
    border-radius: var(--message-border-width) var(--message-border-width) 0 var(--message-border-width);
  }
}
</style>
