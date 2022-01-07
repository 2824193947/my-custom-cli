import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import setupElementPlus from './elementUI'

export function setupPlugins(app: App){
  setupTailwindcss()
  setupElementPlus(app)
}