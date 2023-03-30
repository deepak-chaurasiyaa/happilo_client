import themeReducer from './theme.reducer';
import cartReducer from './cart.reducer';
import productReducer from './product.reducer';

export const rootReducer = {
  theme: themeReducer,
  products: productReducer,
  cart: cartReducer,
};
