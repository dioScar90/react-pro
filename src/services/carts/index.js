import { httpClient } from '../axios'

const MODULE = '/carts'

export class CartsService {
  static async findAll(pageNumber, perPage) {
    return await httpClient.get(MODULE, {
      params: {
        page,
        perPage,
      }
    })
  }

  static async find() {
    return await httpClient.get(MODULE)
  }

  static async findById(id) {
    return await httpClient.get(`${MODULE}/${id}`)
  }

  static async search(value) {
    return await httpClient.get(`${MODULE}/search/${value}`)
  }

  static async create(data) {
    return await httpClient.post(MODULE, data)
  }

  static async update(id, data) {
    return await httpClient.put(`${MODULE}/${id}`, data)
  }

  static async updateItem(id, data) {
    return await httpClient.put(`${MODULE}/${id}`, data)
  }

  static async addItem(id, data) {
    return await httpClient.put(`${MODULE}/${id}`, data)
  }

  static async upload(id, data) {
    return await httpClient.put(`${MODULE}/${id}/uploadImage`, data)
  }

  static async deleteItem(id) {
    return await httpClient.delete(`${MODULE}/${id}`)
  }
}