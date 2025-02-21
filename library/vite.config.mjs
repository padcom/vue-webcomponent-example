import { defineVueLibConfig } from '@padcom/vite-config-vue-lib'
import i18n from '@intlify/unplugin-vue-i18n/vite'

import pkg from './package.json'

export default defineVueLibConfig(pkg, {
  plugins: [
    i18n(),
  ],
})
