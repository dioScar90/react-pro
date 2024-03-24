import axios from 'axios'
import { getStorage } from '../../helperFunctions/storage/getStorage'
import { removeStorage } from '../../helperFunctions/storage/revemoStorage'

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

httpClient.interceptors.response.use(
  response => response,
  (error) => {
    if (error.config.url !== '/auth/login' && error.response.status === 401) {
      const user = getStorage('user')
      removeStorage('token', 'user')
      
      const isAdmin = user?.role?.name === 'ADMIN'
      location.href = isAdmin ? '/dashboard/login' : '/login'
    }

    return Promise.reject(error)
  }
)

export { httpClient }
