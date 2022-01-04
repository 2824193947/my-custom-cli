import path from 'path'
import { AliasOptions } from 'vite'

const alias = {
  '@': path.join(__dirname, '../src')
} as AliasOptions

export default alias