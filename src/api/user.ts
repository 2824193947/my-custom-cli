import { http } from '@/plugins/axios/index'

export function user() {
  return http.request({
    url: '/user',
  })
}


