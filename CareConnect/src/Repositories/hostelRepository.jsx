import api from '../services/apiService';

export default class HostelRepository {
  static async getAllHostels() {
    const response = await api.get('/hostel');
    return response.data;
  }

  static async createHostel(hostelData) {
    const response = await api.post('/hostel', hostelData);
    return response.data;
  }

  static async updateHostel(id, hostelData) {
    console.log(`Enviando solicitação PUT para /hostel/${id} com os dados:`, hostelData);
    return api.put(`/hostel/${id}`, hostelData);
  }

  static async deleteHostel(id) {
    const response = await api.delete(`/hostel/${id}`);
    return response.data;
  }
}









