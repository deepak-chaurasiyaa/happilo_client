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
      console.log("clicked")
      state.isCartDrawerOpen = !state.isCartDrawerOpen;
    },
    AddToCart: (state, actions) => {
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === actions.payload.id
        );
      if(productIndex >= 0) {
        state.cartItems[productIndex].cartQuantity += 1;
      } else {
        const tempProduct = {...actions.payload, cartQuantity: 1};
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
