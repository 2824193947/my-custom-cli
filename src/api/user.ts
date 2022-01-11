import { http } from '@/plugins/axios/index'

interface User {
  name: string
  age: number
  axm: '男' | '女'
}
export function user() {
  return http.request<User>({
    url: '/user',
  })
}

interface loginInterface {
  token: string
}
export function login(data: any) {
  return http.request<loginInterface>({
    url: '/login',
    method: 'POST',
    data
  })
}


