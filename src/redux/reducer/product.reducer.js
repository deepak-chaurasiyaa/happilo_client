import { createSlice } from '@reduxjs/toolkit';
import { COLLECIONS, OTHER_PRODUCTS } from '../../shared/constant';
import { productsAsync } from '../actions/product.action';


const initialState = {
  products: [],
  collections: COLLECIONS,
};

export const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
        state.error = null;
      })
      .addCase(productsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export default productReducer.reducer;
