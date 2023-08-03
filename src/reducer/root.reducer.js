import themeReducer from './theme.reducer';
import cartReducer from './cart.reducer';
import productReducer from './product.reducer';
import { combineReducers } from '@reduxjs/toolkit';
import tabReducer from './tab.reducer';
<<<<<<< Updated upstream:src/reducer/root.reducer.js
=======
import userReducer from './user.reducer';
import brandReducer from './brand.reducer';
>>>>>>> Stashed changes:src/redux/reducer/root.reducer.js

export const rootReducer = combineReducers({
  theme: themeReducer,
  products: productReducer,
  cart: cartReducer,
  tab: tabReducer,
<<<<<<< Updated upstream:src/reducer/root.reducer.js
=======
  user:userReducer,
  brand:brandReducer
>>>>>>> Stashed changes:src/redux/reducer/root.reducer.js
});
