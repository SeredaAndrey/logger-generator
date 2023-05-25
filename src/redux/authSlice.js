import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      //registration
      .addCase(register.fulfilled, (state, action) => {
        state.name = null;
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.name = null;
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      //login
      .addCase(logIn.fulfilled, (state, action) => {
        state.email = action.payload.owner.owner.email;
        state.name = action.payload.owner.owner.firstName || null;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.name = null;
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      //logout
      .addCase(logOut.fulfilled, state => {
        state.name = null;
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
      })
      //refresh
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.name = action.payload.userData.firstName;
        state.email = action.payload.userData.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })

      .addCase(refreshUser.rejected, (state, action) => {
        state.name = null;
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
