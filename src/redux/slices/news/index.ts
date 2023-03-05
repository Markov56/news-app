import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import { INews, StateType } from 'types/index';

import { fetchNews, deleteOneNews } from 'redux/slices/news/ActionCreators';

const initialState: StateType = {
  items: [{ id: 1, title: 'string', body: 'string', userId: 3 }],
  isLoading: false,
  error: '',
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNews.pending.type]: state => {
      state.isLoading = true;
    },
    [fetchNews.fulfilled.type]: (state, action: PayloadAction<INews[]>) => {
      state.isLoading = false;
      state.error = '';
      state.items = action.payload;
    },
    [fetchNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteOneNews.pending.type]: state => {
      state.isLoading = true;
    },
    [deleteOneNews.fulfilled.type]: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.isLoading = false;
      state.error = '';
    },
    [deleteOneNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const newsReducer = newsSlice.reducer;
