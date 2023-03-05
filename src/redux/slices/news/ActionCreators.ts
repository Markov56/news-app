import { createAsyncThunk } from '@reduxjs/toolkit';

import { INews } from 'types';

import { AxiosError } from 'axios';
import axios from 'api/axios';

export const deleteOneNews = createAsyncThunk(
  'news/deleteOneNews',
  async (id: number, thunkAPI) => {
    try {
      await axios.delete(`/posts/${id}`);
      return id;
    } catch (error) {
      if (error instanceof AxiosError)
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async (isLimitPosts: boolean, thunkAPI) => {
    try {
      const { data } = await axios.get<INews[]>(
        `/posts${isLimitPosts ? '?_limit=10' : ''}`
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError)
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);
