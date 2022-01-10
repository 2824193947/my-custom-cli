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

interface login {
  token: string
}
export function login() {
  return http.request<login>({
    url: '/user',
  })
}


