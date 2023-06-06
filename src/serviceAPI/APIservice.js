import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://logger-generator-rest-api.onrender.com';

const UserToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchUserData = async token => {
  UserToken.set(token);
  try {
    const { data } = await axios.get('api/owner');
    return data;
  } catch (error) {
    toast.error(error);
  }
};

export const addWorkingCycle = async cycle => {
  console.log(cycle);
  try {
    const { data } = await axios.post('api/cycles', cycle);
    return data;
  } catch (error) {
    toast.error(error);
  }
};
