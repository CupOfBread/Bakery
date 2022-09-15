const BaseUrl = 'http://127.0.0.1:8181/'

import axios from 'axios'

const http = axios.create({
  baseURL: BaseUrl,
  timeout: 3000,
})

http.interceptors.request.use((config) => {
  return config
})

http.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {}
)
// 返出
export default http
