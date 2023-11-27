import axios from 'axios';
import { useUserStore } from '@/stores/userStore';

const rapidApiKey = '5e4245803emsh0c54f0717f2b5b2p1c3cf4jsna8a6ce5da589';

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
