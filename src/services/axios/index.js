import axios from 'axios'

const httpClient = axios.create({
  baseUrl: 'http://localhost:3000'
})

export { httpClient }