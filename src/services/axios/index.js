import axios from 'axios'
import { getStorage } from '../../helperFunctions/storage/getStorage'

const httpClient = axios.create({
  baseURL: 'http://localhost:3000'
})

httpClient.interceptors.request.use((config) => {
  const token = getStorage('token')

  if (!token) {
    return config
  }
  
  config.headers = { Authorization: `Bearer ${token}` }
  return config
})

export { httpClient }
