import { viteMockServe } from 'vite-plugin-mock'

export function setupMockPlugin(isBuld: boolean, env: Record<string, any>) {
  return viteMockServe({
    mockPath: 'mock',
    localEnabled: !isBuld,
  })
}