import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { createInjectionState } from '@vueuse/core'

export const States = ['empty', 'example'] as const

export type State = typeof States[number]

function createExample() {
  const { t } = useI18n({ useScope: 'global' })
  const state = ref<State>('example')
  const stateLabel = computed(() => t(`state.${state.value}`))

  return {
    state,
    stateLabel,
  }
}

const [provideExample, useExampleOrUndefined] = createInjectionState(createExample)

function useExample() {
  const result = useExampleOrUndefined()
  if (!result) throw new Error('Example has not been provided. Call "provideExample()" first')

  return result
}

export { provideExample, useExample }
