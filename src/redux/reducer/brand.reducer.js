import { createSlice } from '@reduxjs/toolkit';
import { brandLogoAsync } from '../actions/brand.action';

const initialState = {
  brandDetails: [],
};

export const brandReducer = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(brandLogoAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(brandLogoAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.brandDetails = action.payload;
        state.error = null;
      })
      .addCase(brandLogoAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default brandReducer.reducer;
