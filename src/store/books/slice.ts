import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addBook, getBooks } from './thunk';
import { TBooks, TStateTypeBooks } from './types';

const initialState: TStateTypeBooks = {
  loading: false,
  books: [],
  error: null,
};
const nodesSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending.type]: (state: TStateTypeBooks) => {
      state.loading = true;
      state.error = null;
    },
    [getBooks.fulfilled.type]: (
      state: TStateTypeBooks,
      action: PayloadAction<TBooks[]>,
    ) => {
      state.loading = false;
      state.books = action.payload;
    },
    [getBooks.rejected.type]: (state: TStateTypeBooks) => {
      state.loading = false;
      state.error = null;
    },
    [addBook.pending.type]: (state: TStateTypeBooks) => {
      state.error = null;
      state.loading = true;
    },
    [addBook.fulfilled.type]: (state: TStateTypeBooks) => {
      state.loading = false;
    },
    [addBook.rejected.type]: (state: TStateTypeBooks) => {
      state.error = null;
    },
  },
});

export default nodesSlice.reducer;
