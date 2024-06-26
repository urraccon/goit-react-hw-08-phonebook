import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userLogout, userSignup } from './operations';

const initialState = {
  isLoggedIn: false,
  user: {
    name: null,
    email: null,
    accessToken: null,
  },
  status: 'inactive',
  error: null,
  operation: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearLastStatus(state, action) {
      state.status = 'inactive';
      state.error = null;
      state.operation = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.status = 'loading';
        state.isLoggedIn = false;
        state.error = null;
        state.operation = 'login';
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoggedIn = true;
        state.user.email = action.payload.user.email;
        state.user.name = action.payload.user.name;
        state.user.accessToken = action.payload.token;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(userSignup.pending, (state, action) => {
        state.status = 'loading';
        state.isLoggedIn = false;
        state.error = null;
        state.operation = 'signup';
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoggedIn = true;
        state.user.email = action.payload.user.email;
        state.user.name = action.payload.user.name;
        state.user.accessToken = action.payload.token;
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(userLogout.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
        state.operation = 'logout';
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoggedIn = false;
        state.user.email = null;
        state.user.name = null;
        state.user.accessToken = null;
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoggedIn = false;
        state.user.email = null;
        state.user.name = null;
        state.user.accessToken = null;
        state.error = action.payload;
      });
  },
});

export const { clearLastStatus } = authSlice.actions;
export const authReducer = authSlice.reducer;
