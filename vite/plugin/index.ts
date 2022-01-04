import vue from '@vitejs/plugin-vue'
import { setupMockPlugin } from './mock'

export function setupVitePlugins(isBuld: boolean, env: ViteEnv) {
  return [
    vue(),
    setupMockPlugin(isBuld, env)
  ]
}