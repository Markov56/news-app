import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: 'isAuthorized',
  initialState,
  reducers: {
    setAuth(state) {
      state.isAuthorized = true;
    },
  },
});

export const authReducer = authSlice.reducer;
