import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducer/cart.reducer';
import themeReducer from '../reducer/theme.reducer';
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
  },
});
