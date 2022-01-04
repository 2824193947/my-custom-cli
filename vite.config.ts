import { ConfigEnv, loadEnv } from 'vite'
import alias from './vite/alias'
import { setupVitePlugins } from './vite/plugin'
import { parseEnv } from './vite/util'

export default ({ command, mode}: ConfigEnv) => {
  const isBuld = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  env
  console.log("---当前在:",command, mode,'\n ---env', env)
  return {
    plugins: setupVitePlugins(isBuld, env),
    resolve: {
      alias
    }
  }
}