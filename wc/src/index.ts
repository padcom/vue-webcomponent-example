import { defineCustomElement } from 'vue'
import HelloWorld from './HelloWorld.ce.vue'

customElements.define('hello-world', defineCustomElement(HelloWorld))
