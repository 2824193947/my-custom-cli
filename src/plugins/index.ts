import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import setupElementPlus from './elementUI'
import _ from 'lodash'

export function setupPlugins(app: App){
  setupTailwindcss()
  setupElementPlus(app)
  autoRegisterComponent(app)
}

// 添加自动注册
function autoRegisterComponent(app: App) {
  const components = import.meta.globEager('../components/from/*.vue')
  Object.keys(components).forEach((key) => {
    const name = key.split('/').pop()?.split('.').shift()
    app.component(_.camelCase(name), components[key].default)
  })
}