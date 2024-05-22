import axios from 'axios';

const api = axios.create({
  baseURL: 'https://careconnect-oy9k.onrender.com/api',
});

export default api;



