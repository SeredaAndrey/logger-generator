import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://logger-generator-rest-api.onrender.com';

export const fetchUserData = async token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  try {
    const { data } = await axios.get('api/owner');
    return data;
  } catch (error) {
    toast.error(error);
  }
};
