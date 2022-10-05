import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { axiosInstance } from 'network';

export const getConstructors = createAsyncThunk(
  `constructors/fetchAll`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/users`);
      const constructors = response.data;
      return constructors;
    } catch (error: any) {
      notification.error({ message: 'Ошибка загрузки данных!' });
      return rejectWithValue(error);
    }
  },
);
