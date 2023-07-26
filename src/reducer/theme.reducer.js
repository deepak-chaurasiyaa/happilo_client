import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
};

export const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    handleDarkModeChange: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { handleDarkModeChange } = themeReducer.actions;

export default themeReducer.reducer;
