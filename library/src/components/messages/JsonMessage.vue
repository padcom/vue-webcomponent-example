<template>
  <div class="json-message">
    {{ message.data }}
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Message } from '../MessageList.vue'

defineProps({
  message: { type: Object as PropType<Message>, required: true },
})
</script>

<style lang="postcss" scoped>
.json-message {
  font-family: monospace;
  font-size: larger;
  white-space: pre;
}
</style>
