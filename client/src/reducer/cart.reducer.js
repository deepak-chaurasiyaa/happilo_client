import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  isCartDrawerOpen: false,
  cartTotalAmount: 0,
  cartTotalItems: 0,
};

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ToggleCartDrawer: (state) => {
      state.isCartDrawerOpen = !state.isCartDrawerOpen;
    },
    AddToCart: (state, { payload: product }) => {
      console.log({ product })
      const productIndex = state.cartItems.findIndex((item) => item.product_id === product.product_id);
      if (productIndex >= 0) {
        state.cartItems[productIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...product, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    RemoveToCart: (state, payload) => {
      state.cartItems = payload;
    },
  },
});

export const { ToggleCartDrawer, AddToCart, RemoveToCart } = cartReducer.actions;

export default cartReducer.reducer;
