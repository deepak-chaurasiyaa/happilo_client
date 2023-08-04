import { createSlice } from '@reduxjs/toolkit';
import { brandLogoAsync, carouselImageAsync } from '../actions/brand.action';

const initialState = {
  brandDetails: [],
  carouselImages: [],
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
      .addCase(carouselImageAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.carouselImages = action.payload;
        state.error = null;
      })
      .addCase(brandLogoAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default brandReducer.reducer;
