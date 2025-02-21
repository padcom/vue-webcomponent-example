<template>
  <img class="image-message" :src="message.data">
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Message } from '../MessageList.vue'

defineProps({
  message: { type: Object as PropType<Message>, required: true },
})
</script>

<style lang="postcss" scoped>
.image-message {
  width: 50%;
  padding: 0 !important;
}
</style>
