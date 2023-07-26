import { createSlice } from '@reduxjs/toolkit';
import { COLLECIONS, OTHER_PRODUCTS } from '../shared/constant';

const initialState = {
  products: OTHER_PRODUCTS,
  collections: COLLECIONS,
};

export const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts: (state) => {
      state.products = initialState.products;
    },
  },
});

export const { getAllProducts } = productReducer.actions;

export default productReducer.reducer;
