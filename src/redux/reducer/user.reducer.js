// userReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { loginUserAsync, registerUserAsync } from '../actions/user.actions';

const initialState = {
  isLoading: false,
  error: null,
  status: null,
  message: null
};

// Helper function to handle fulfilled action for specific API calls
const handleFulfilledAction = (state, action) => {
  state.isLoading = false;
  state.error = null;
  if (action.type === registerUserAsync.fulfilled.type) {
    state.userDetails = action.payload;
  }
  if (action.type === loginUserAsync.fulfilled.type) {
    state.userDetails = action.payload;
  }
  // Add more conditions for other API calls if needed
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) =>
          action.type.endsWith('/pending') ||
          action.type.endsWith('/fulfilled') ||
          action.type.endsWith('/rejected'),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        handleFulfilledAction
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
          state.status = action;
        }
      );
  },
});

export default userSlice.reducer;
