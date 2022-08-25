import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api-key'] = process.env.API_KEY;
  config.headers = {
    'Content-Type': 'application/json'
  }

  return config;
});

export default api;
