import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchGeneratorSetting = createAsyncThunk(
  'setting/gen/fetch',
  async (credential, { rejectWithValue }) => {
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const { data } = await axios.get('/api/generator');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createNewSettingGenerator = createAsyncThunk(
  'setting/gen/new',
  async (credential, { rejectWithValue }) => {
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const { data } = await axios.post('/api/generator', credential);

      return data;
    } catch (error) {
      toast.error('Generator already exist');
      return rejectWithValue(error.message);
    }
  }
);

export const patchingSettingsGenerator = createAsyncThunk(
  'setting/gen/patch',
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/api/generator', credential);

      return data;
    } catch (error) {
      toast.error('Generator settings not found');
      return rejectWithValue(error.message);
    }
  }
);
