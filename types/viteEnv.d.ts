interface ImportMetaEnv extends ViteEnv{
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
} 
interface ImportMeta {
  readonly env: ImportMetaEnv
}
interface ViteEnv {
  VITE_SOME_KEY: number
	VITE_ceshi_KEY: number
	VITE_KEY: boolean
	VITE_ANY_KEY: string
}