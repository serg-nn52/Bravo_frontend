import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { axiosInstance } from 'network';
import { TBooks } from './types';

export const getBooks = createAsyncThunk(
  `books/fetchAll`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/books`);
      const books = response.data;
      return books;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const addBook = createAsyncThunk(
  `books/addBook`,
  async (book: TBooks, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.post('/api/books', book);
      dispatch(getBooks());
      notification.success({ message: 'Заявка успешно отправлена!' });
      return book;
    } catch (error: any) {
      notification.error({ message: 'Ошибка отправки!' });
      return rejectWithValue(error);
    }
  },
);
