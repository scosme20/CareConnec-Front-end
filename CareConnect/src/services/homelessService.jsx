import axios from './apiService';

const HomelessService = {
  getHomeless: () => axios.get('/homeless'),
  createHomeless: (homeless) => axios.post('/homeless', homeless),
  updateHomeless: (id, homeless) => axios.put(`/homeless/${id}`, homeless),
  deleteHomeless: (id) => axios.delete(`/homeless/${id}`),
};

export default HomelessService;
