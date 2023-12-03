import axios from 'axios';
import { useUserStore } from '@/stores/userStore';

const rapidApiKey = '121759b898mshbfd8c9050e10b74p11885fjsn5d1dc5a88516';

const instance = axios.create({
  baseURL: 'https://booking-com15.p.rapidapi.com/api/v1/',
  headers: {
    'X-RapidAPI-Key': rapidApiKey,
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
  },
});

instance.interceptors.request.use((config) => {
  const token = useUserStore.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
