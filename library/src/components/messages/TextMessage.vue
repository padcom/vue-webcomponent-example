<template>
  <div class="text-message">
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
.text-message {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
