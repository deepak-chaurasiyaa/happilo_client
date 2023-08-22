// actions/userActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, loginUser } from '../api/user.api';

export const registerUserAsync = createAsyncThunk('user/registerUser', async (userData) => {
  const response = await registerUser(userData);
  return response.data;
});

export const loginUserAsync = createAsyncThunk('user/loginUser', async (userData) => {
  const response = await loginUser(userData);
  console.log({response})
  return response.data;
});