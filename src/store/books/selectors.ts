import { RootState } from 'store';

export const getAllBooks = (store: RootState) => store.books.books;
