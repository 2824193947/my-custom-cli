import Axios from './Axios'
import { env } from '@/utils/helper'

const http = new Axios({
  baseURL: env.VITE_APP_URL,
	timeout: 5000,
  headers: {}
})

export { http }