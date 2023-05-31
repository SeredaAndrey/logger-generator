import axios from 'axios';
import { toast } from 'react-toastify';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://logger-generator-rest-api.onrender.com';

export const updateUserData = createAsyncThunk(
  'user/updateData',
  async ({ firstName, secondName, email }, { rejectWithValue }) => {
    const body = { firstName, seccondName: secondName, email };
    try {
      const { data } = await axios.patch('api/owner/patchName', body);
      return data;
    } catch (error) {
      toast.error(error);
      return rejectWithValue(error.message);
    }
  }
);
