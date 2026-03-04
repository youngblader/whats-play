import Config from 'react-native-config';

import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    config.params = {
      ...config.params,
      key: Config.API_KEY,
    };

    return config;
  },
  (error) => Promise.reject(error),
);
