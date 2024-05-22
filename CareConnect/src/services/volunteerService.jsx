import api from './apiService';

const getVolunteers = () => api.get('/volunteer');
const createVolunteer = (volunteer) => api.post('/volunteer', volunteer);
const updateVolunteer = (id, volunteer) => api.put(`/volunteer/${id}`, volunteer);
const deleteVolunteer = (id) => api.delete(`/volunteer/${id}`);

export default { getVolunteers, createVolunteer, updateVolunteer, deleteVolunteer };

