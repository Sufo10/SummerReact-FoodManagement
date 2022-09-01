/* eslint-disable no-param-reassign */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 10000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent
    config.headers['Content-Type'] = 'application/json';
    if (config.url === '/posts' && config.method === 'post') {
      config.headers.authorization = localStorage.getItem('token');
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const { data, status } = response;
    return { data, status };
  },
  error => {
    const errorObj = {};
    if (error.response) {
      error.response.data.details.forEach(e => {
        const key = e.message.split(' ')[0].slice(1, -1);
        errorObj[key] = e.message;
      });
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(errorObj);
  }
);

export default axiosInstance;
