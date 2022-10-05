import { configureStore } from '@reduxjs/toolkit';
import userReduser from 'store/users/slice';
import constructorsReduser from 'store/constructors/slice';
import booksReduser from 'store/books/slice';

const store = configureStore({
  reducer: {
    user: userReduser,
    constructors: constructorsReduser,
    books: booksReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
