import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  defaultTab: 1,
  initial_value: {
    first_name: '',
    last: '',
    email: '',
  },
};

export const tabReducer = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    handleTabInputChange: (state, { payload }) => {
      state.initial_value = {
        ...state.initial_value,
        [payload.name]: payload.value,
      };
    },
  },
});

export const { handleTabInputChange } = tabReducer.actions;

export default tabReducer.reducer;
