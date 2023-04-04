import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  isCartDrawerOpen: false,
};

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ToggleCartDrawer: (state) => {
      state.isCartDrawerOpen = !state.isCartDrawerOpen;
    },
    AddToCart: (state,payload) => {
      state.cart = payload;
    },
    RemoveToCart: (state,payload) => {
      state.cart = payload;
    },
  },
});

export const { ToggleCartDrawer, AddToCart, RemoveToCart } = cartReducer.actions;

export default cartReducer.reducer;
