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
    const response = await api.put(`/hostel/${id}`, hostelData);
    return response.data;
  }
  

  static async deleteHostel(id) {
    const response = await api.delete(`/hostel/${id}`);
    return response.data;
  }
}








