import { RootState } from 'store';

export const getIsLoading = (store: RootState) => store.constructors.loading;
export const getAllConstructors = (store: RootState) =>
  store.constructors.constructors;
