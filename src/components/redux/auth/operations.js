import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'components/common/Config';

Config.setRequestURL();

export const userLogin = createAsyncThunk(
  'auth/login',
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', loginData);
      const accessToken = response.data.token;
      Config.setRequestURL(accessToken);
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.status);
    }
  }
);

export const userSignup = createAsyncThunk(
  'auth/signup',
  async (signupData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', signupData);
      const accessToken = response.data.token;
      Config.setRequestURL(accessToken);
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.status);
    }
  }
);

export const userLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout');
      console.dir(response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.status);
    }
  }
);
