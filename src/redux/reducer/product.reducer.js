import { createSlice } from '@reduxjs/toolkit';
import { COLLECIONS, OTHER_PRODUCTS } from '../../shared/constant';
import { productDetailsAsync, productsAsync, searchProductAsync } from '../actions/product.action';


const initialState = {
  products: [],
  collections: COLLECIONS,
  productDetailsById:[]
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
      })
      .addCase(productDetailsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productDetailsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.productDetailsById = action.payload;
        state.error = null;
      })
      .addCase(productDetailsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      }) 
      .addCase(searchProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchProductAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchList = action.payload;
        state.error = null;
      })
      .addCase(searchProductAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      }) 
  },
});
export default productReducer.reducer;
