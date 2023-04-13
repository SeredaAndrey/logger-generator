import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://loggingen.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('/auth/signup', async credential => {
  try {
    const { data } = await axios.post('api/auth/reg', credential);
    token.unset();
    return data;
  } catch (error) {
    return error.message;
  }
});

const logIn = createAsyncThunk('auth/login', async credential => {
  try {
    const { data } = await axios.post('api/auth/login', credential);
    token.set(data.token);
    return data;
  } catch (error) {
    return error.message;
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.get('/user/logout');
    token.unset();
  } catch (error) {
    return error.message;
  }
});

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const persistedToken = thunkAPI.getState().auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get('users/current');
    return data;
  } catch (error) {
    return error.message;
  }
});

const authOperations = { register, logIn, logOut, refreshUser };
export default authOperations;
