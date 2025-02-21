<template>
  <div class="toolbar">
    <button @click="state = 'empty'">Empty</button>
    <button @click="state = 'example'">Example</button>
    <span>State: {{ stateLabel }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useExample } from '../composables/example'

const { state, stateLabel } = useExample()
</script>

<style lang="postcss" scoped>
.toolbar {
  margin-top: 12px;
  display: flex;
  gap: 1rem;
}
</style>
