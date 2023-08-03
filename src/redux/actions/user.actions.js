// actions/userActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser } from '../api/user.api';

export const registerUserAsync = createAsyncThunk('user/registerUser', async (userData) => {
  const response = await registerUser(userData);
  console.log({response})
  return response.data;
});