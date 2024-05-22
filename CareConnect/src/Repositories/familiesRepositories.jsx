import api from '../services/apiService';

export default class FamilyRepository {
  static async getFamilies() {
    return api.get('/families');
  }

  static async createFamilies(family) {
    return api.post('/families', family);
  }

  static async updateFamilies(id, family) {
    return api.put(`/families/${id}`, family);
  }

  static async deleteFamilies(id) {
    return api.delete(`/families/${id}`);
  }
}


