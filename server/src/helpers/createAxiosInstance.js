import axios from 'axios';

const isServer = () => typeof window === 'undefined';

const createAxiosInstance = (config = {}) =>
  axios.create({
    baseURL: isServer() ? process.env.REACT_SSR_API_URL : '/api',
    ...config,
  });

export default createAxiosInstance;
