import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mobile.temp.com/',
});

api.interceptors.request.use(
  config => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);

export default api;
