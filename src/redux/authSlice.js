import { createSlice } from '@reduxjs/toolkit';

import authOperations from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.verification.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.verification.rejected](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.owner;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.refreshUser.pending](state, action) {
      state.isRefreshing = true;
    },
    [authOperations.refreshUser.fulfilled](state, action) {
      state.user = {
        name: action.payload.userData.firstName,
        email: action.payload.userData.email,
      };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperations.refreshUser.rejected](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
