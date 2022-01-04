import vue from '@vitejs/plugin-vue'
import { setupMockPlugin } from './mock'

export function setupVitePlugins(isBuld: boolean, env: Record<string, any>) {
  return [
    vue(),
    setupMockPlugin(isBuld, env)
  ]
}