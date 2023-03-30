import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddToCart: (state,payload) => {
      state.cart = payload;
    },
    RemoveToCart: (state,payload) => {
      state.cart = payload;
    },
  },
});

export const { AddToCart,RemoveToCart } = cartReducer.actions;

export default cartReducer.reducer;
