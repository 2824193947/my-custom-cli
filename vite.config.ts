import { ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './vite/alias'
import { parseEnv } from './vite/util'

export default ({ command, mode}: ConfigEnv) => {
  console.log(command, mode)
  const isBuld = command === 'build'
  const root = process.cwd() 
  const env = loadEnv(mode, root)
  const newEnv = parseEnv(env)
  console.log("~ newEnv", newEnv)
  return {
    plugins: [vue()],
      resolve: {
      alias
    }
  }
}