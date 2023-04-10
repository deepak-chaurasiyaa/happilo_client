import themeReducer from './theme.reducer';
import cartReducer from './cart.reducer';
import productReducer from './product.reducer';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  theme: themeReducer,
  products: productReducer,
  cart: cartReducer,
});
