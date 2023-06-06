import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchGeneratorSetting = createAsyncThunk(
  'setting/gen/fetch',
  async (credential, { rejectWithValue }) => {
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
  async ({ settings, idGenerator }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `/api/generator/${idGenerator}`,
        settings
      );

      return data;
    } catch (error) {
      toast.error('Generator settings not found');
      return rejectWithValue(error.message);
    }
  }
);

export const fetchGeneralSetting = createAsyncThunk(
  'setting/general/fetch',
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/setting');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createNewGeneralSetting = createAsyncThunk(
  'setting/general/new',
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/setting', credential);
      return data;
    } catch (error) {
      toast.error('General setting already exist');
      return rejectWithValue(error.message);
    }
  }
);

export const patchGeneralSetting = createAsyncThunk(
  'setting/general/patch',
  async ({ generalSettings, idGeneral }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `/api/setting/${idGeneral}`,
        generalSettings
      );
      return data;
    } catch (error) {
      toast.error('General settings not found');
      return rejectWithValue(error.message);
    }
  }
);
