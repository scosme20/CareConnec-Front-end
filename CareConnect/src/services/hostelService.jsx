import api from './apiService';

const getHostels = () => api.get('/hostels');
const createHostel = (hostel) => api.post('/hostels', hostel);
const updateHostel = (id, hostel) => api.put(`/hostels/${id}`, hostel);
const deleteHostel = (id) => api.delete(`/hostels/${id}`);

export { getHostels, createHostel, updateHostel, deleteHostel };

