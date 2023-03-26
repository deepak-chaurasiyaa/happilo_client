import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducer/theme.reducer';
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
