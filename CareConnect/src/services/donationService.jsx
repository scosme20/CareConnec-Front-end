import api from './apiService';

const getDonations = () => api.get('/donation');
const createDonation = (donation) => api.post('/donation', donation);
const updateDonation = (id, donation) => api.put(`/donation/${id}`, donation);
const deleteDonation = (id) => api.delete(`/donation/${id}`);

export { getDonations, createDonation, updateDonation, deleteDonation };

