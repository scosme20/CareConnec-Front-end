import api from '../services/apiService';

export default class DonationRepository {
  static async getDonation() {
    return api.get('/donation');
  }

  static async createDonation(donation) {
    return api.post('/donation', donation);
  }

  static async updateDonation(id, donation) {
    return api.put(`/donation/${id}`, donation);
  }

  static async deleteDonation(id) {
    return api.delete(`/donation/${id}`);
  }
}


