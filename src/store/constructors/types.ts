import { AxiosError } from 'axios';

export type TStateTypeConstructors = {
  loading: boolean;
  constructors: TConstructors[];
  error: AxiosError | null;
};

export type TConstructors = {
  id: string;
  name: string;
};
