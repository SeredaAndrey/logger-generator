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
  try {
    const { data } = await axios.post('api/cycles', cycle);
    return data;
  } catch (error) {
    toast.error(error);
  }
};

export const fetchWorkingCycles = async () => {
  try {
    const { data } = await axios.get('api/cycles');
    return data;
  } catch (error) {
    toast.error(error);
  }
};

export const deleteWorkingCycleUnit = async id => {
  try {
    const { data } = await axios.delete(`api/cycles/${id}`);
    return data;
  } catch (error) {
    toast.error(error);
  }
};
