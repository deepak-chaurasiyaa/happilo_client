import themeReducer from './theme.reducer';
import cartReducer from './cart.reducer';
import productReducer from './product.reducer';
import { combineReducers } from '@reduxjs/toolkit';
import tabReducer from './tab.reducer';
import userReducer from './user.reducer';
import brandReducer from './brand.reducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  products: productReducer,
  cart: cartReducer,
  tab: tabReducer,
  user:userReducer,
  brand:brandReducer
});
