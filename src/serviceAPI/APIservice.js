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

export const fetchGeneratorSetting = async () => {
  // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  try {
    const { data } = await axios.get('/api/generator');

    return data;
  } catch (error) {
    toast.error(error);
  }
};

export const createNewSettingGenerator = async body => {
  // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  try {
    const { data } = await axios.post('/api/generator', body);

    return data;
  } catch (error) {
    toast.error(error);
  }
};
