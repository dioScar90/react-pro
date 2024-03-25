import { httpClient } from '../axios'

const MODULE = '/roles'

export class RolesService {
  static async findAll() {
    return httpClient.get(MODULE)
  }
}