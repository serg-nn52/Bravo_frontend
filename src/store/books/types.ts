import { AxiosError } from 'axios';

export type TStateTypeBooks = {
  loading: boolean;
  books: TBooks[];
  error: AxiosError | null;
};

export type TBooks = {
  id: string;
  name: string;
  title: string;
};
