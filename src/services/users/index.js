import { httpClient } from "../axios"

const MODULE = '/users'

export class UsersService {
  static async getMe() {
    return await httpClient.get(`${MODULE}/me`)
  }

  static async findById(id) {
    return await httpClient.get(`${MODULE}/${id}`)
  }
}