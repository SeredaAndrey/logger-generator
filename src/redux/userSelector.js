import { createSlice } from '@reduxjs/toolkit';

import { updateUserData } from './userOperations';

const initialState = {
  firstName: null,
  secondName: null,
  email: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      //updateUserData
      .addCase(updateUserData.fulfilled, (state, action) => {
        console.log(action);
        state.firstName = null;
        state.secondName = null;
        state.email = null;
        state.isLoading = false;
      })
      .addCase(updateUserData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.firstName = null;
        state.secondName = null;
        state.email = null;
        state.isLoading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
