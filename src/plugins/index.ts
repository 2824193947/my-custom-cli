import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import setupElementPlus from './elementUI'

export function setupPlugins(app: App){
  setupTailwindcss()
  setupElementPlus(app)
  autoRegisterComponent(app)
}

function autoRegisterComponent(app: App) {
  const components = import.meta.globEager('../components/from/*.vue')
  Object.keys(components).forEach((key) => {
    const name = key.split('/').pop()?.split('.').shift()
    app.component(name as string, components[key].default)
  })
}