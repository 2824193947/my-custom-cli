import Axios from './Axios'
import utils from '@/utils/index'

const http = new Axios({
  baseURL: utils.env.VITE_APP_URL,
	timeout: 5000,
  headers: {}
})

export { http }