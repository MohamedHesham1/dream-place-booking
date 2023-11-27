import instance from '@/api/axios';

export async function fetchData(url, params) {
  try {
    const response = await instance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
