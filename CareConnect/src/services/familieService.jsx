import api from './apiService';

const getFamilies = () => api.get('/families');
const createFamily = (family) => api.post('/families', family);
const updateFamily = (id, family) => api.put(`/families/${id}`, family);
const deleteFamily = (id) => api.delete(`/families/${id}`);

export { getFamilies, createFamily, updateFamily, deleteFamily };
