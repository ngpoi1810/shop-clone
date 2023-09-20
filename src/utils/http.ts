import axios, { type AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.response.use(
      function (response) {
        return response
      },
      function (error) {
        return Promise.reject(error)
      }
    )
  }
}
const http = new Http().instance
export default http
