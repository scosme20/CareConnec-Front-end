import api from '../services/apiService';

export default class HomelessRepository {
  static async getHomeless() {
    return api.get('/homeless');
  }

  static async createHomeless(homeless) {
    return api.post('/homeless', homeless);
  }

  static async updateHomeless(id, homeless) {
    return api.put(`/homeless/${id}`, homeless);
  }

  static async deleteHomeless(id) {
    return api.delete(`/homeless/${id}`);
  }
}
