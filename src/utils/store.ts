interface StoreDataType {
  expire?: number
  // 其他参数为下面的类型
  [key: string]: any
}

function setLocalstore(key: string, data: StoreDataType): void {
  // 判断过期时间限制
  if (data.expire) {
    data.expire = new Date().getTime() + data.expire * 1000
  }
  localStorage.setItem(key, JSON.stringify(data))
}

function getLocalstore(key: string): StoreDataType | null {
  const item = localStorage.getItem(key)
  if (item) {
    const data = JSON.parse(item)
    const expire = data?.expire
    if (expire && expire < new Date().getTime()) {
      localStorage.removeItem(key)
      return null
    }
    return data
  }
  return null
}

export default {
  setLocalstore,
  getLocalstore
}