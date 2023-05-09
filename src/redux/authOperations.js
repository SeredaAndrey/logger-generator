import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://logger-generator-rest-api.onrender.com';

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
    console.log(credential);
    token.unset();
    return data;
  } catch (error) {
    return error.message;
  }
});

const verification = createAsyncThunk(
  '/auth/verifycation',
  async credential => {
    console.log(credential);
    try {
      const { data } = await axios.post('api/auth/verify', credential);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

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
    await axios.get('api/auth/logout');
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
    const { data } = await axios.get('api/owner');
    return data;
  } catch (error) {
    return error.message;
  }
});

const authOperations = { register, verification, logIn, logOut, refreshUser };
export default authOperations;
