import axios from 'axios';
import { toast } from 'react-toastify';
import queryString from 'query-string';

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

export const fetchWorkingCycles = async ({
  filter,
  sort,
  dateStart,
  dateStop,
}) => {
  const startDate = dateStart !== null && new Date(dateStart);
  const startDateMill = dateStart !== null && startDate.getTime();
  const stopDate = dateStop !== null && new Date(dateStop);
  const stopDateMill = dateStop !== null && stopDate.getTime();
  const queryParams = {
    ...(filter !== null && { filter }),
    ...(sort !== null && { sort }),
    ...(dateStart !== null && { dateStart: startDateMill }),
    ...(dateStop !== null && { dateStop: stopDateMill }),
  };
  const queryStringParams = queryString.stringify(queryParams);
  console.log(queryParams);

  try {
    const { data } = await axios.get(`api/cycles/?${queryStringParams}`);
    return data;
  } catch (error) {
    toast.error(error);
  }
};

export const fetchSingleWorkingCycle = async id => {
  try {
    const { data } = await axios.get(`api/cycles/${id}`);
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

export const patchWorkingCycleUnit = async ({ id, cycle }) => {
  // console.log(id, cycle);
  try {
    const { data } = await axios.patch(`api/cycles/${id}`, cycle);
    return data;
  } catch (error) {
    toast.error(error);
  }
};
