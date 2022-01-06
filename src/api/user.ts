import { http } from '@/plugins/axios/index'

interface User {
  name: string
  age: number
  axm: '男' | '女'
}
export function user() {
  return http.request<ResponseResult<User>>({
    url: '/user',
  })
}


